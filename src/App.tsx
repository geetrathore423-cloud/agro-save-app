/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Code2, 
  Smartphone, 
  BookOpen, 
  Wifi, 
  Terminal, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Award,
  Sparkles
} from 'lucide-react';
import { AndroidSimulator } from './components/AndroidSimulator';
import { CodeViewer } from './components/CodeViewer';
import { NetworkConsole } from './components/NetworkConsole';
import { NetworkController } from './components/NetworkController';
import { ProjectGuide } from './components/ProjectGuide';
import { Esp32HardwareStatus, NetworkLog } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'code' | 'guide'>('simulator');
  const [espIp, setEspIp] = useState<string>('192.168.4.1');
  const [batteryLevel, setBatteryLevel] = useState<number | null>(63);
  const [hardwareMode, setHardwareMode] = useState<string>('CROP');
  const [relayState, setRelayState] = useState<boolean>(false);
  const [irTriggered, setIrTriggered] = useState<boolean>(false);
  const [isEspConnected, setIsEspConnected] = useState<boolean>(true);
  const [isPolling, setIsPolling] = useState<boolean>(false);
  const [lastPolledTime, setLastPolledTime] = useState<string>('');

  // Hardware Status State for NetworkController
  const [hardwareStatus, setHardwareStatus] = useState<Esp32HardwareStatus>({
    battery: 63,
    battery_level: 63,
    mode: 'CROP',
    relay: false,
    ir_triggered: false,
    isOnline: true,
    lastUpdated: ''
  });

  const [networkLogs, setNetworkLogs] = useState<NetworkLog[]>([
    {
      id: 'init-1',
      timestamp: '12:45:01',
      method: 'GET',
      url: 'http://192.168.4.1/status',
      status: 'SUCCESS',
      statusCode: 200,
      durationMs: 12,
      message: 'ESP32 Status polled: battery_level 63%, mode: CROP, relay: false, ir_triggered: false'
    },
    {
      id: 'init-2',
      timestamp: '12:45:02',
      method: 'GET',
      url: 'http://192.168.4.1:81/stream',
      status: 'SUCCESS',
      statusCode: 200,
      durationMs: 24,
      message: 'MJPEG live video stream connected (24 FPS)'
    }
  ]);

  const handleAddLog = (newLog: Omit<NetworkLog, 'id' | 'timestamp'>) => {
    const time = new Date().toTimeString().split(' ')[0];
    const logItem: NetworkLog = {
      ...newLog,
      id: `log-${Date.now()}-${Math.random()}`,
      timestamp: time
    };
    setNetworkLogs(prev => [logItem, ...prev.slice(0, 49)]);
  };

  const handleClearLogs = () => {
    setNetworkLogs([]);
  };

  // 1. Battery & Status Sync:
  // - Target Server: http://192.168.4.1
  // - JSON Endpoint: http://192.168.4.1/status
  // - Call every 3 seconds using setInterval()
  // - Update Battery UI using data.battery_level
  // - Update Mode UI using data.mode
  // - Wrapped in try/catch with { mode: 'cors' } and timeout to prevent freezing
  useEffect(() => {
    let isSubscribed = true;

    const pollStatus = async () => {
      setIsPolling(true);
      const targetUrl = `http://${espIp || '192.168.4.1'}/status`;
      const startTime = performance.now();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2800);

      try {
        const res = await fetch(targetUrl, { mode: 'cors', signal: controller.signal });
        clearTimeout(timeoutId);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        const duration = Math.round(performance.now() - startTime);

        if (isSubscribed) {
          // Exact keys returned by http://192.168.4.1/status:
          // battery_level (integer percentage, e.g. 63)
          // mode (string, e.g. "CROP" or "WEED")
          // relay (boolean)
          // ir_triggered (boolean)
          const resolvedBattery = typeof data.battery_level === 'number'
            ? data.battery_level
            : (typeof data.battery === 'number' ? data.battery : null);
          const resolvedMode = data.mode ? String(data.mode) : 'CROP';
          const resolvedRelay = typeof data.relay === 'boolean' ? data.relay : false;
          const resolvedIr = typeof data.ir_triggered === 'boolean' ? data.ir_triggered : false;
          const timeString = new Date().toLocaleTimeString();

          const newStatus: Esp32HardwareStatus = {
            battery: resolvedBattery,
            battery_level: resolvedBattery,
            mode: resolvedMode,
            relay: resolvedRelay,
            ir_triggered: resolvedIr,
            isOnline: true,
            lastUpdated: timeString
          };

          setHardwareStatus(newStatus);

          if (resolvedBattery !== null) {
            setBatteryLevel(resolvedBattery);
          }

          setHardwareMode(resolvedMode);
          setRelayState(resolvedRelay);
          setIrTriggered(resolvedIr);
          setIsEspConnected(true);
          setLastPolledTime(timeString);
          handleAddLog({
            method: 'GET',
            url: targetUrl,
            status: 'SUCCESS',
            statusCode: res.status,
            durationMs: duration,
            message: `ESP32 /status: battery_level=${resolvedBattery ?? '--'}%, mode='${resolvedMode}', relay=${resolvedRelay}, ir_triggered=${resolvedIr}`
          });
        }
      } catch (err: any) {
        clearTimeout(timeoutId);
        if (isSubscribed) {
          const timeString = new Date().toLocaleTimeString();
          setIsEspConnected(false);
          setLastPolledTime(timeString);
          setHardwareStatus(prev => ({
            ...prev,
            isOnline: false,
            lastUpdated: timeString,
            error: err.name === 'AbortError' ? 'Timeout (2.8s)' : (err.message || 'Offline/Network error')
          }));
          // Graceful error logging without freezing or crashing UI
          handleAddLog({
            method: 'GET',
            url: targetUrl,
            status: 'ERROR',
            statusCode: 0,
            durationMs: Math.round(performance.now() - startTime),
            message: `ESP32 Status polling failed: ${err.name === 'AbortError' ? 'Timeout (2.8s)' : (err.message || 'Offline/Network error')}`
          });
        }
      } finally {
        if (isSubscribed) {
          setIsPolling(false);
        }
      }
    };

    // Immediate initial poll
    pollStatus();

    // 3000ms polling interval (every 3 seconds)
    const intervalId = setInterval(pollStatus, 3000);

    return () => {
      isSubscribed = false;
      clearInterval(intervalId);
    };
  }, [espIp]);

  // 2. Action Endpoints (Mode Switching):
  // - Crop Mode Button: http://192.168.4.1/setMode?mode=CROP
  // - Weed Mode Button: http://192.168.4.1/setMode?mode=WEED
  // - Wrapped in try/catch with { mode: 'cors' } so network glitches do not crash or freeze the app UI
  const handleSetMode = async (mode: 'CROP' | 'WEED' | 'crop' | 'weed') => {
    const formattedMode = String(mode).toUpperCase() === 'WEED' ? 'WEED' : 'CROP';
    const targetUrl = `http://${espIp || '192.168.4.1'}/setMode?mode=${formattedMode}`;
    const startTime = performance.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
      const res = await fetch(targetUrl, { mode: 'cors', signal: controller.signal });
      clearTimeout(timeoutId);
      const duration = Math.round(performance.now() - startTime);
      setHardwareMode(formattedMode);
      setHardwareStatus(prev => ({
        ...prev,
        mode: formattedMode
      }));
      handleAddLog({
        method: 'GET',
        url: targetUrl,
        status: 'SUCCESS',
        statusCode: res.status || 200,
        durationMs: duration,
        message: `Operating mode set to '${formattedMode}' (GET /setMode?mode=${formattedMode})`
      });
    } catch (err: any) {
      clearTimeout(timeoutId);
      // Graceful error catch with try/catch and mode: 'cors'
      setHardwareMode(formattedMode);
      setHardwareStatus(prev => ({
        ...prev,
        mode: formattedMode
      }));
      handleAddLog({
        method: 'GET',
        url: targetUrl,
        status: 'ERROR',
        statusCode: 0,
        durationMs: Math.round(performance.now() - startTime),
        message: `Failed to setMode: ${err.name === 'AbortError' ? 'Request Timeout (3s)' : (err.message || 'Hardware offline')}`
      });
    }
  };

  const handleManualPoll = async () => {
    const targetUrl = `http://${espIp || '192.168.4.1'}/status`;
    const startTime = performance.now();
    setIsPolling(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2800);

    try {
      const res = await fetch(targetUrl, { mode: 'cors', signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const resolvedBattery = typeof data.battery_level === 'number'
        ? data.battery_level
        : (typeof data.battery === 'number' ? data.battery : null);
      const resolvedMode = data.mode ? String(data.mode) : 'CROP';
      const resolvedRelay = typeof data.relay === 'boolean' ? data.relay : false;
      const resolvedIr = typeof data.ir_triggered === 'boolean' ? data.ir_triggered : false;
      const timeString = new Date().toLocaleTimeString();

      const manualStatus: Esp32HardwareStatus = {
        battery: resolvedBattery,
        battery_level: resolvedBattery,
        mode: resolvedMode,
        relay: resolvedRelay,
        ir_triggered: resolvedIr,
        isOnline: true,
        lastUpdated: timeString
      };

      setHardwareStatus(manualStatus);
      if (resolvedBattery !== null) setBatteryLevel(resolvedBattery);
      setHardwareMode(resolvedMode);
      setRelayState(resolvedRelay);
      setIrTriggered(resolvedIr);
      setIsEspConnected(true);
      setLastPolledTime(timeString);
      handleAddLog({
        method: 'GET',
        url: targetUrl,
        status: 'SUCCESS',
        statusCode: 200,
        durationMs: Math.round(performance.now() - startTime),
        message: `Manual poll OK: battery_level=${resolvedBattery}%, mode='${resolvedMode}', relay=${resolvedRelay}, ir_triggered=${resolvedIr}`
      });
    } catch (err: any) {
      clearTimeout(timeoutId);
      const timeString = new Date().toLocaleTimeString();
      setIsEspConnected(false);
      setLastPolledTime(timeString);
      setHardwareStatus(prev => ({
        ...prev,
        isOnline: false,
        lastUpdated: timeString,
        error: err.name === 'AbortError' ? 'Timeout (2.8s)' : (err.message || 'Offline')
      }));
      handleAddLog({
        method: 'GET',
        url: targetUrl,
        status: 'ERROR',
        statusCode: 0,
        durationMs: Math.round(performance.now() - startTime),
        message: `Manual poll failed: ${err.name === 'AbortError' ? 'Timeout (2.8s)' : (err.message || 'Offline')}`
      });
    } finally {
      setIsPolling(false);
    }
  };

  return (
    <div id="agro-save-app" className="min-h-screen bg-[#F4F7F4] text-neutral-900 flex flex-col font-sans">
      
      {/* GLOBAL NAVBAR */}
      <header className="bg-[#1B5E20] text-white border-b border-emerald-800 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* App Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
              <Sprout className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-bold tracking-tight text-white">AGRO SAVE</h1>
                <span className="bg-amber-400 text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                  <Award className="w-3 h-3" />
                  <span>Inspire Award MANAK</span>
                </span>
              </div>
              <p className="text-xs text-emerald-200">
                AI Smart Precision Pesticide Sprayer • Android Studio & IoT Code Hub
              </p>
            </div>
          </div>

          {/* Navigation Mode Pill Switcher */}
          <div className="flex items-center bg-black/20 p-1 rounded-xl border border-white/10">
            <button
              id="nav-tab-simulator"
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                activeTab === 'simulator'
                  ? 'bg-white text-[#1B5E20] shadow-sm'
                  : 'text-emerald-100 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Interactive App</span>
            </button>

            <button
              id="nav-tab-code"
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                activeTab === 'code'
                  ? 'bg-white text-[#1B5E20] shadow-sm'
                  : 'text-emerald-100 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Android Studio Code</span>
            </button>

            <button
              id="nav-tab-guide"
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                activeTab === 'guide'
                  ? 'bg-white text-[#1B5E20] shadow-sm'
                  : 'text-emerald-100 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Circuit & Setup</span>
            </button>
          </div>

        </div>
      </header>

      {/* SUB-HEADER INFO BAR */}
      <div className="bg-emerald-900/10 border-b border-emerald-900/15 py-2 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-emerald-900 font-medium">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Target Hardware: <strong>ESP32-CAM (AI-Thinker)</strong></span>
            <span className="text-emerald-600/40">|</span>
            <span>Wi-Fi Mode: <strong>Access Point (192.168.4.1)</strong></span>
            <span className="text-emerald-600/40">|</span>
            <span>Solenoid: <strong>12V via Relay GPIO 12</strong></span>
            <span className="text-emerald-600/40">|</span>
            <span>Sensor: <strong>IR Proximity GPIO 13</strong></span>
          </div>

          <div className="flex items-center space-x-2 font-mono text-[11px] bg-white px-2.5 py-0.5 rounded-md border border-emerald-300/60 shadow-2xs">
            <span className="text-neutral-500">ESP32 IP:</span>
            <input
              type="text"
              value={espIp}
              onChange={(e) => setEspIp(e.target.value)}
              className="w-24 text-[#1B5E20] font-bold focus:outline-none"
              title="Change ESP32 IP if using custom router subnet"
            />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 w-full">
        
        {/* VIEW 1: DUAL SIMULATOR & CODE EXPLORER */}
        {activeTab === 'simulator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Interactive Android App Simulator */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-sm font-bold text-[#1B5E20] uppercase tracking-wider flex items-center space-x-1.5">
                    <Smartphone className="w-4 h-4" />
                    <span>Android Live App Preview</span>
                  </h2>
                  <span className="text-[11px] text-neutral-500">
                    Hold button to test spray
                  </span>
                </div>

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

            {/* Right Column: Real-time Request Inspector & Quick Code Glance */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* ESP32-CAM Hardware Controller & Telemetry Poller (http://192.168.4.1) */}
              <NetworkController
                espIp={espIp}
                setEspIp={setEspIp}
                hardwareStatus={hardwareStatus}
                batteryLevel={hardwareStatus.battery_level}
                currentMode={hardwareStatus.mode}
                relay={hardwareStatus.relay}
                irTriggered={hardwareStatus.ir_triggered}
                isConnected={hardwareStatus.isOnline}
                isPolling={isPolling}
                lastPolled={hardwareStatus.lastUpdated}
                onSetMode={handleSetMode}
                onRefreshNow={handleManualPoll}
                onTriggerPoll={handleManualPoll}
              />

              {/* HTTP Request Inspector */}
              <div className="h-[270px]">
                <NetworkConsole logs={networkLogs} onClearLogs={handleClearLogs} />
              </div>

              {/* Quick Android Studio Files Tabs */}
              <div className="h-[430px]">
                <CodeViewer />
              </div>

            </div>

          </div>
        )}

        {/* VIEW 2: FULLSCREEN CODE HUB */}
        {activeTab === 'code' && (
          <div className="h-[760px] flex flex-col">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-[#1B5E20] flex items-center space-x-2">
                  <Code2 className="w-5 h-5" />
                  <span>Android Studio Project Source Code</span>
                </h2>
                <p className="text-xs text-neutral-600">
                  Copy and paste these files directly into your Android Studio "Empty Views Activity" project.
                </p>
              </div>
            </div>

            <div className="flex-1 min-h-0">
              <CodeViewer />
            </div>
          </div>
        )}

        {/* VIEW 3: CIRCUIT & SCIENCE PROJECT BLUEPRINT */}
        {activeTab === 'guide' && (
          <div className="max-w-4xl mx-auto">
            <ProjectGuide />
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-neutral-200 py-4 px-4 text-xs text-neutral-500 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-[#1B5E20]">AGRO SAVE Innovation</span>
            <span>•</span>
            <span>Inspire Award (MANAK) Project</span>
            <span>•</span>
            <span>Precision Agriculture with ESP32-CAM</span>
          </div>
          <div className="text-[11px] text-neutral-400">
            Network requests run in background threads via HttpURLConnection • cleartextTraffic enabled
          </div>
        </div>
      </footer>

    </div>
  );
}
