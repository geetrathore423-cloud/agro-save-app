{/* App Creator & Dedicated Information Section */}
<div className="my-3 p-4 bg-emerald-900 text-white rounded-2xl shadow-md border border-emerald-700 text-center">
  <div className="inline-block bg-emerald-700/80 text-emerald-100 text-xs font-bold px-3 py-1 rounded-full mb-2">
    👑 Official Creator & System Developer
  </div>
  <h2 className="text-xl font-extrabold tracking-wide text-white">
    App Made By Anant Rathore
  </h2>
  <p className="text-xs text-emerald-200 mt-1 font-medium">
    Lead Innovator & System Architect
  </p>

  <div className="mt-3 pt-3 border-t border-emerald-800 text-left text-xs text-emerald-100 space-y-1">
    <p>🚀 <b>Project:</b> AGRO SAVE (Automated Pesticide Sprayer System)</p>
    <p>🤖 <b>Tech Integration:</b> ESP32-CAM Hardware, AI Agro-Doctor & Native Voice Assistant</p>
    <p>🎓 <b>Developed By:</b> Anant Rathore</p>
  </div>
</div>

import React, { useState, useEffect } from 'react';
import { AndroidSimulator } from './components/AndroidSimulator';
import { NetworkLog } from './types';

export default function App() {
  const [espIp, setEspIp] = useState<string>('192.168.4.1');
  const [batteryLevel, setBatteryLevel] = useState<number | null>(68);
  const [hardwareMode, setHardwareMode] = useState<string>('CROP');
  const [relayState, setRelayState] = useState<boolean>(false);
  const [irTriggered, setIrTriggered] = useState<boolean>(false);
  const [isEspConnected, setIsEspConnected] = useState<boolean>(true);

  const handleAddLog = (newLog: Omit<NetworkLog, 'id' | 'timestamp'>) => {
    // Lightweight logger for hardware events
    console.log(`[AGRO SAVE] ${newLog.method} ${newLog.url} - ${newLog.status} (${newLog.message})`);
  };

  // Hardware Status Polling (GET http://192.168.4.1/status)
  // Polls the ESP32-CAM every 3 seconds to update battery level and hardware telemetry
  useEffect(() => {
    let isSubscribed = true;

    const pollStatus = async () => {
      const targetUrl = `http://${espIp || '192.168.4.1'}/status`;
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2800);

      try {
        const res = await fetch(targetUrl, { mode: 'cors', signal: controller.signal });
        clearTimeout(timeoutId);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();

        if (isSubscribed) {
          const resolvedBattery = typeof data.battery_level === 'number'
            ? data.battery_level
            : (typeof data.battery === 'number' ? data.battery : null);
          const resolvedMode = data.mode ? String(data.mode) : 'CROP';
          const resolvedRelay = typeof data.relay === 'boolean' ? data.relay : false;
          const resolvedIr = typeof data.ir_triggered === 'boolean' ? data.ir_triggered : false;

          if (resolvedBattery !== null) {
            setBatteryLevel(resolvedBattery);
          }
          setHardwareMode(resolvedMode);
          setRelayState(resolvedRelay);
          setIrTriggered(resolvedIr);
          setIsEspConnected(true);
        }
      } catch {
        clearTimeout(timeoutId);
        if (isSubscribed) {
          setIsEspConnected(false);
        }
      }
    };

    pollStatus();
    const intervalId = setInterval(pollStatus, 3000);

    return () => {
      isSubscribed = false;
      clearInterval(intervalId);
    };
  }, [espIp]);

  // Mode switching (GET http://192.168.4.1/setMode?mode=CROP | WEED)
  const handleSetMode = async (mode: 'CROP' | 'WEED' | 'crop' | 'weed') => {
    const formattedMode = String(mode).toUpperCase() === 'WEED' ? 'WEED' : 'CROP';
    const targetUrl = `http://${espIp || '192.168.4.1'}/setMode?mode=${formattedMode}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
      await fetch(targetUrl, { mode: 'cors', signal: controller.signal });
      clearTimeout(timeoutId);
      setHardwareMode(formattedMode);
    } catch {
      clearTimeout(timeoutId);
      setHardwareMode(formattedMode);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-200/70 text-slate-800 font-sans antialiased select-none flex justify-center">
      {/* 
        Strict Centered Mobile Portrait Container:
        `max-w-md mx-auto w-full min-h-screen` ensures perfect portrait mobile width on all screens/desktops,
        and fills 100% naturally on physical mobile APK devices without stretching.
      */}
      <div 
        id="agro-save-mobile-viewport" 
        className="max-w-md mx-auto w-full min-h-screen bg-[#F1F5F1] shadow-xl border-x border-slate-300/70 flex flex-col relative"
      >
        <AndroidSimulator 
          onAddLog={handleAddLog} 
          espIp={espIp} 
          setEspIp={setEspIp} 
          batteryLevel={batteryLevel}
          hardwareMode={hardwareMode}
          relay={relayState}
          irTriggered={irTriggered}
          isEspConnected={isEspConnected}
          onSetHardwareMode={handleSetMode}
        />
      </div>
    </div>
  );
}
