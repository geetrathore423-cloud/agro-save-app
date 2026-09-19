import React from 'react';
import { 
  Wifi, 
  WifiOff, 
  Battery, 
  BatteryWarning, 
  Leaf, 
  Target, 
  RefreshCw, 
  Cpu, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { Esp32HardwareStatus, Esp32Mode } from '../types';

interface NetworkControllerProps {
  espIp: string;
  setEspIp?: (ip: string) => void;
  hardwareStatus?: Esp32HardwareStatus;
  batteryLevel?: number | null;
  currentMode?: string;
  relay?: boolean;
  irTriggered?: boolean;
  isConnected?: boolean;
  isPolling?: boolean;
  lastPolled?: string;
  onSetMode: (mode: 'CROP' | 'WEED' | 'crop' | 'weed') => void;
  onRefreshNow?: () => void;
  onTriggerPoll?: () => void;
}

export const NetworkController: React.FC<NetworkControllerProps> = ({
  espIp,
  setEspIp,
  hardwareStatus,
  batteryLevel,
  currentMode,
  relay,
  irTriggered,
  isConnected,
  isPolling = false,
  lastPolled,
  onSetMode,
  onRefreshNow,
  onTriggerPoll
}) => {
  // Graceful fallback and resolution of hardware state with exact keys: battery_level, mode, relay, ir_triggered
  const battery = hardwareStatus?.battery_level !== undefined && hardwareStatus.battery_level !== null
    ? hardwareStatus.battery_level
    : (hardwareStatus?.battery !== undefined ? hardwareStatus.battery : (batteryLevel !== undefined ? batteryLevel : null));

  const rawMode = hardwareStatus?.mode || currentMode || 'CROP';
  const mode = String(rawMode).toUpperCase();
  const isOnline = hardwareStatus?.isOnline !== undefined ? hardwareStatus.isOnline : (isConnected ?? false);
  const lastUpdated = hardwareStatus?.lastUpdated || lastPolled || '';
  const error = hardwareStatus?.error;

  const relayActive = hardwareStatus?.relay !== undefined ? hardwareStatus.relay : (relay ?? false);
  const irActive = hardwareStatus?.ir_triggered !== undefined ? hardwareStatus.ir_triggered : (irTriggered ?? false);

  const handleRefresh = onTriggerPoll || onRefreshNow || (() => {});
  const isCropActive = mode === 'CROP';
  const isWeedActive = mode === 'WEED';

  return (
    <div id="esp32-network-controller" className="bg-white rounded-2xl border border-emerald-900/15 p-4 shadow-sm">
      {/* Header with Connection Badge */}
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-[#1B5E20] uppercase tracking-wider flex items-center space-x-1.5">
              <span>ESP32-CAM Hardware Controller</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            </h3>
            <p className="text-[11px] text-neutral-500 font-mono">
              http://{espIp} • 3000ms Polling (/status)
            </p>
          </div>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={handleRefresh}
            title="Poll now (GET /status)"
            className="p-1.5 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-600 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isPolling ? 'animate-spin text-emerald-600' : ''}`} />
          </button>

          <div className={`px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center space-x-1.5 border ${
            isOnline 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
              : 'bg-red-50 text-red-700 border-red-200'
          }`}>
            {isOnline ? (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-600" />
                <span>Connected</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3.5 h-3.5 text-red-500" />
                <span>Disconnected</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Grid: Battery Health + Mode Switchers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Battery Health & Status Card (Uses battery_level) */}
        <div id="battery-health-card" className="bg-[#F8FAF8] border border-emerald-900/10 rounded-xl p-3">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <div className="flex items-center space-x-1.5 font-bold text-neutral-700">
              <Battery className={`w-4 h-4 ${battery !== null && battery < 20 ? 'text-red-600' : 'text-emerald-700'}`} />
              <span>Battery Health (battery_level)</span>
            </div>
            <span className="font-mono text-[11px] font-bold">
              {battery !== null ? (
                <span className={battery < 20 ? 'text-red-600' : 'text-emerald-700'}>
                  {battery}%
                </span>
              ) : (
                <span className="text-neutral-400">--% (Disconnected)</span>
              )}
            </span>
          </div>

          {/* Progress Gauge */}
          <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden p-0.5 mb-1.5">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${
                battery === null
                  ? 'bg-neutral-300 w-0'
                  : battery < 20 
                    ? 'bg-red-600' 
                    : battery < 50 
                      ? 'bg-amber-500' 
                      : 'bg-[#2E7D32]'
              }`}
              style={{ width: battery !== null ? `${Math.min(100, Math.max(0, battery))}%` : '0%' }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-500">
            <span>Status: {isOnline ? 'Active Telemetry' : 'Offline / Standby'}</span>
            <span className="font-mono">{lastUpdated ? `Updated ${lastUpdated}` : 'Waiting for poll...'}</span>
          </div>

          {battery !== null && battery < 20 && (
            <div className="mt-2 text-[10px] text-red-800 bg-red-50 border border-red-200 rounded p-1.5 flex items-center space-x-1">
              <AlertTriangle className="w-3 dot h-3 text-red-600 shrink-0" />
              <span>Low battery warning (&lt;20%). Connect 12V charger.</span>
            </div>
          )}
        </div>

        {/* Operating Mode Selector Card (Uses mode: "CROP" | "WEED") */}
        <div id="operating-mode-card" className="bg-[#F8FAF8] border border-emerald-900/10 rounded-xl p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-bold text-neutral-700">Operating Mode (mode)</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold uppercase">
                {mode || 'CROP'}
              </span>
            </div>
            <p className="text-[10px] text-neutral-500 mb-2 font-mono">
              GET http://{espIp}/setMode?mode={mode === 'WEED' ? 'WEED' : 'CROP'}
            </p>
          </div>

          {/* Mode Buttons */}
          <div className="grid grid-cols-2 gap-2">
            {/* Crop Mode Button */}
            <button
              id="btn-mode-crop"
              type="button"
              onClick={() => onSetMode('CROP')}
              className={`p-2 rounded-lg border text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-2xs active:scale-[0.98] ${
                isCropActive
                  ? 'bg-[#1B5E20] text-white border-[#1B5E20] ring-2 ring-emerald-400/40 shadow-sm'
                  : 'bg-white text-neutral-800 border-neutral-300 hover:bg-emerald-50 hover:border-emerald-300'
              }`}
            >
              <Leaf className={`w-3.5 h-3.5 ${isCropActive ? 'text-emerald-200' : 'text-emerald-700'}`} />
              <span>Crop Mode</span>
              {isCropActive && <CheckCircle2 className="w-3 h-3 text-emerald-200 ml-0.5" />}
            </button>

            {/* Weed Mode Button */}
            <button
              id="btn-mode-weed"
              type="button"
              onClick={() => onSetMode('WEED')}
              className={`p-2 rounded-lg border text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-2xs active:scale-[0.98] ${
                isWeedActive
                  ? 'bg-[#1B5E20] text-white border-[#1B5E20] ring-2 ring-emerald-400/40 shadow-sm'
                  : 'bg-white text-neutral-800 border-neutral-300 hover:bg-emerald-50 hover:border-emerald-300'
              }`}
            >
              <Target className={`w-3.5 h-3.5 ${isWeedActive ? 'text-amber-200' : 'text-[#1B5E20]'}`} />
              <span>Weed Mode</span>
              {isWeedActive && <CheckCircle2 className="w-3 h-3 text-emerald-200 ml-0.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Live Hardware Telemetry Badges: Relay & IR Sensor */}
      <div className="mt-3 pt-2.5 border-t border-neutral-200/80 flex items-center justify-between text-xs flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <span className="text-[11px] text-neutral-500 font-semibold">Relay (Solenoid):</span>
          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
            relayActive 
              ? 'bg-emerald-100 text-emerald-800 border-emerald-300 animate-pulse' 
              : 'bg-neutral-100 text-neutral-600 border-neutral-200'
          }`}>
            {relayActive ? 'ON (Spraying)' : 'OFF (Idle)'}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-[11px] text-neutral-500 font-semibold">IR Sensor:</span>
          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
            irActive 
              ? 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse' 
              : 'bg-neutral-100 text-neutral-600 border-neutral-200'
          }`}>
            {irActive ? 'TARGET DETECTED' : 'CLEAR'}
          </span>
        </div>
      </div>

      {error && (
        <div className="mt-2.5 bg-amber-50 border border-amber-200 text-amber-900 rounded-lg p-2 text-[11px] flex items-start space-x-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Hardware Server Note:</strong> {error}
          </div>
        </div>
      )}
    </div>
  );
};
