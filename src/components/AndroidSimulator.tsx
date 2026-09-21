import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Droplets, 
  Battery, 
  BatteryWarning, 
  AlertTriangle, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Calculator, 
  Layers, 
  Leaf, 
  Sliders, 
  Target,
  Zap,
  Languages,
  Check,
  Mic,
  MicOff,
  Search,
  Bot,
  CloudRain,
  Calendar,
  ShieldAlert,
  ShieldCheck,
  Sun,
  Wind,
  Thermometer,
  Lock,
  Unlock,
  Clock,
  AlertCircle,
  Square
} from 'lucide-react';
import { NetworkLog, OperationalSprayMode, CropItem, WeedItem, AiDoctorRemedy } from '../types';
import { INDIAN_CROPS, INDIAN_WEEDS } from '../data/androidCode';
import { COMPREHENSIVE_AGRO_REMEDIES, diagnoseAgroQuery } from '../utils/aiDoctorEngine';
import { startSpraySound, stopSpraySound } from '../utils/audio';
import { AiAgroDoctor } from './AiAgroDoctor';

interface AndroidSimulatorProps {
  onAddLog: (log: Omit<NetworkLog, 'id' | 'timestamp'>) => void;
  espIp: string;
  setEspIp: (ip: string) => void;
  batteryLevel?: number | null;
  hardwareMode?: string;
  relay?: boolean;
  irTriggered?: boolean;
  isEspConnected?: boolean;
  onSetHardwareMode?: (mode: 'CROP' | 'WEED' | 'crop' | 'weed') => void;
}

export const AndroidSimulator: React.FC<AndroidSimulatorProps> = ({ 
  onAddLog, 
  espIp, 
  setEspIp,
  batteryLevel,
  hardwareMode,
  relay,
  irTriggered,
  isEspConnected,
  onSetHardwareMode
}) => {
  // Dual Language State
  const [lang, setLang] = useState<'HI' | 'EN'>('HI');

  // App & Hardware States
  const [isConnected, setIsConnected] = useState(true);
  const [batteryPercent, setBatteryPercent] = useState(82);
  const [batteryVoltage, setBatteryVoltage] = useState(12.4);
  const [sprayMode, setSprayMode] = useState<OperationalSprayMode>(1);

  // Synced hardware state with fallbacks
  const isHardwareOnline = isEspConnected !== undefined ? isEspConnected : isConnected;
  const displayBattery = isHardwareOnline 
    ? (batteryLevel !== undefined ? batteryLevel : batteryPercent) 
    : null;
  const effectiveMode = (hardwareMode 
    ? hardwareMode.toLowerCase() 
    : (sprayMode === 2 ? 'crop' : sprayMode === 1 ? 'weed' : 'universal'));
  const [selectedCrop, setSelectedCrop] = useState<CropItem>(INDIAN_CROPS[0]); // Wheat
  const [selectedWeed, setSelectedWeed] = useState<WeedItem>(INDIAN_WEEDS[0]); // Phalaris
  const [landAreaHa, setLandAreaHa] = useState<number>(1.0);
  
  // Smart Weather Advisory & Safety Lock State
  const [isWeatherHighRisk, setIsWeatherHighRisk] = useState(false);
  const [isHardwareSafetyLocked, setIsHardwareSafetyLocked] = useState(true);

  // Sowing Date & Crop Lifecycle Schedule State
  const [sowingDate, setSowingDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() - 25);
    return d.toISOString().split('T')[0];
  });

  // Real-time Spray Action
  const [isSpraying, setIsSpraying] = useState(false);
  const [statusLog, setStatusLog] = useState('तैयार (System Ready • Mode 1 Active)');
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  // Dynamic chemical calculation
  const estimatedChemicalVolume = (landAreaHa * selectedCrop.standardDosageLitersPerHectare).toFixed(2);

  // Dedicated Hardware Mode Switcher: GET http://192.168.4.1/setMode?mode=CROP | WEED
  const handleExecuteSetMode = async (mode: 'CROP' | 'WEED' | 'crop' | 'weed') => {
    if (isHardwareSafetyLocked && isWeatherHighRisk) {
      const alertMsg = lang === 'HI'
        ? '⚠️ बारिश सुरक्षा लॉक: 75% बारिश के जोखिम के कारण सोलेनोइड स्प्रे लॉक है!'
        : '⚠️ Rain Safety Lock: Solenoid locked due to 75% rain probability!';
      setStatusLog(alertMsg);
      return;
    }

    const modeParam = mode.toUpperCase() === 'WEED' ? 'WEED' : 'CROP';
    setSprayMode(modeParam === 'CROP' ? 2 : 1);
    
    // Delegate to central handler if provided
    if (onSetHardwareMode) {
      onSetHardwareMode(modeParam);
      setStatusLog(
        lang === 'HI' 
          ? `मोड सक्रिय: ${modeParam === 'CROP' ? 'फसल खाद मोड (CROP)' : 'खरपतवार मारक मोड (WEED)'}`
          : `Active Mode: ${modeParam}`
      );
      return;
    }

    const targetUrl = `http://${espIp || '192.168.4.1'}/setMode?mode=${modeParam}`;
    const startTime = performance.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    try {
      const res = await fetch(targetUrl, { mode: 'cors', signal: controller.signal });
      clearTimeout(timeoutId);
      const duration = Math.round(performance.now() - startTime);
      onAddLog({
        method: 'GET',
        url: targetUrl,
        status: 'SUCCESS',
        statusCode: res.status || 200,
        durationMs: duration,
        message: `ESP32 setMode OK: ${modeParam} mode active (GET /setMode?mode=${modeParam})`
      });
      setStatusLog(
        lang === 'HI' 
          ? `मोड सक्रिय: ${modeParam === 'CROP' ? 'फसल खाद मोड (CROP)' : 'खरपतवार मारक मोड (WEED)'}`
          : `Active Mode: ${modeParam}`
      );
    } catch (err: any) {
      clearTimeout(timeoutId);
      const duration = Math.round(performance.now() - startTime);
      onAddLog({
        method: 'GET',
        url: targetUrl,
        status: 'ERROR',
        statusCode: 0,
        durationMs: duration,
        message: `ESP32 /setMode?mode=${modeParam} failed: ${err.message || 'Offline/Network error'}`
      });
      setStatusLog(
        lang === 'HI'
          ? `मोड: ${modeParam} (ऑफ़लाइन स्टैंडबाय)`
          : `Mode: ${modeParam} (Offline Standby)`
      );
    }
  };

  // Mode 3 continuous spray automation simulation
  useEffect(() => {
    if (sprayMode === 3) {
      setIsSpraying(true);
      setStatusLog(lang === 'HI' ? 'मोड 3: सामान्य संपूर्ण स्प्रे सक्रिय...' : 'Mode 3: Universal Continuous Spray Active...');
      if (isSoundEnabled) startSpraySound();
    } else if (sprayMode !== 3 && isSpraying) {
      setIsSpraying(false);
      stopSpraySound();
    }
  }, [sprayMode, isSoundEnabled, lang]);

  // Handle Mode Change
  const handleSelectMode = (mode: OperationalSprayMode) => {
    if (isHardwareSafetyLocked && isWeatherHighRisk) {
      const alertMsg = lang === 'HI'
        ? '⚠️ बारिश सुरक्षा लॉक: 75% बारिश के जोखिम के कारण सोलेनोइड स्प्रे लॉक है!'
        : '⚠️ Rain Safety Lock: Solenoid locked due to 75% rain probability!';
      setStatusLog(alertMsg);
      onAddLog({
        method: 'GET',
        url: `http://${espIp}/lock_solenoid?locked=true`,
        status: 'SUCCESS',
        statusCode: 200,
        durationMs: 14,
        message: 'ESP32 Solenoid Lock Enforced: Prevented chemical discharge due to high rain forecast.'
      });
      return;
    }

    if (mode === 1) {
      handleExecuteSetMode('weed');
    } else if (mode === 2) {
      handleExecuteSetMode('crop');
    } else {
      setSprayMode(3);
      const modeName = lang === 'HI' ? 'पूरे खेत में छिड़काव मोड' : 'Universal Field Spray Mode';
      setStatusLog(`${lang === 'HI' ? 'मोड बदला' : 'Mode Changed'}: ${modeName}`);
      onAddLog({
        method: 'GET',
        url: `http://${espIp || '192.168.4.1'}/set_mode?mode=3`,
        status: 'SUCCESS',
        statusCode: 200,
        durationMs: 18,
        message: `Operational Mode set to 3 (${modeName})`
      });
    }
  };

  // Toggle Weather Rain Risk Simulation
  const handleToggleWeatherSimulation = () => {
    const nextRisk = !isWeatherHighRisk;
    setIsWeatherHighRisk(nextRisk);
    const msg = nextRisk
      ? (lang === 'HI' ? '⚠️ सिमुलेशन: उच्च बारिश जोखिम (75%) • आज स्प्रे न करें' : '⚠️ Simulated: High Rain Risk (75%) • Do Not Spray')
      : (lang === 'HI' ? '✅ सिमुलेशन: मौसम अनुकूल (12% बारिश) • सुरक्षित स्प्रे' : '✅ Simulated: Clear Weather (12% Rain) • Safe to Spray');
    setStatusLog(msg);
  };

  // Toggle Hardware Safety Lock Switch
  const handleToggleSafetyLock = () => {
    const nextLock = !isHardwareSafetyLocked;
    setIsHardwareSafetyLocked(nextLock);
    const msg = nextLock
      ? (lang === 'HI' ? 'सुरक्षा लॉक: सक्रिय (LOCKED)' : 'Safety Lock: ACTIVE (LOCKED)')
      : (lang === 'HI' ? 'सुरक्षा लॉक: निष्क्रिय (UNLOCKED)' : 'Safety Lock: DISABLED (UNLOCKED)');
    setStatusLog(msg);
    onAddLog({
      method: 'GET',
      url: `http://${espIp}/lock_solenoid?locked=${nextLock}`,
      status: 'SUCCESS',
      statusCode: 200,
      durationMs: 16,
      message: `ESP32 Solenoid Safety Lock set to: ${nextLock}`
    });
  };

  // Handle Weed Selection: Immediately dispatches GET /set_weed?type=...
  const handleSelectWeed = (weed: WeedItem) => {
    setSelectedWeed(weed);
    const msg = lang === 'HI' ? `खरपतवार सेट: ${weed.nameHi}` : `Weed set: ${weed.nameEn}`;
    setStatusLog(msg);
    onAddLog({
      method: 'GET',
      url: `http://${espIp}/set_weed?type=${weed.code}`,
      status: 'SUCCESS',
      statusCode: 200,
      durationMs: 20,
      message: `ESP32 Vision Target updated: ${weed.code} (${weed.scientificName})`
    });
  };

  // Handle AI Model Calibration
  const handleConfigureModel = () => {
    const msg = lang === 'HI' 
      ? `AI मॉडल कैलिब्रेट हुआ: ${selectedCrop.nameHi} vs ${selectedWeed.nameHi}` 
      : `AI Model Calibrated: ${selectedCrop.nameEn} vs ${selectedWeed.nameEn}`;
    setStatusLog(msg);
    onAddLog({
      method: 'GET',
      url: `http://${espIp}/set_model?crop=${selectedCrop.code}&weed=${selectedWeed.code}`,
      status: 'SUCCESS',
      statusCode: 200,
      durationMs: 24,
      message: `AI Model calibrated: Crop=${selectedCrop.code}, Weed=${selectedWeed.code}`
    });
  };

  // Toggle Low Battery for inspection
  const toggleLowBatteryTest = () => {
    if (batteryPercent > 15) {
      setBatteryPercent(11);
      setBatteryVoltage(11.1);
      setStatusLog(lang === 'HI' ? '⚠️ कम बैटरी चेतावनी! Low Battery (< 15%)' : '⚠️ Low Battery Warning (< 15%) Triggered');
    } else {
      setBatteryPercent(85);
      setBatteryVoltage(12.5);
      setStatusLog(lang === 'HI' ? 'बैटरी सामान्य (Battery Normal 85%)' : 'Battery Normal (85%)');
    }
  };

  return (
    <div id="agro-save-native-view" className="w-full flex flex-col flex-1">
      {/* Top Header & Android Status Bar */}
      <header className="bg-[#1B5E20] text-white shadow-md sticky top-0 z-40">
        {/* Hardware Status Strip */}
        <div className="bg-[#144718] text-emerald-200 text-[11px] px-4 py-1.5 flex items-center justify-between font-mono">
          <span className="font-semibold tracking-wider flex items-center space-x-1.5">
            <span className={`w-2 h-2 rounded-full ${isHardwareOnline ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`}></span>
            <span>ESP32-CAM AP</span>
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] bg-emerald-900/80 px-2 py-0.5 rounded border border-emerald-700/50 text-emerald-200 font-mono">
              {espIp}
            </span>
            <div className="flex items-center space-x-1">
              <Wifi className={`w-3.5 h-3.5 ${isHardwareOnline ? 'text-emerald-300' : 'text-red-400'}`} />
              <span className="text-[10px]">
                {isHardwareOnline && displayBattery !== null ? `${displayBattery}%` : '--%'}
              </span>
            </div>
          </div>
        </div>

        {/* Primary App Bar with Language Toggle & Connection Status */}
        <div className="w-full px-3.5 py-2.5 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-[15px] tracking-wide leading-tight text-white flex items-center space-x-1.5">
              <span>{lang === 'HI' ? 'AGRO SAVE • स्मार्ट कृषि' : 'AGRO SAVE • Smart Agri'}</span>
            </h1>
            <p className="text-[10px] text-emerald-200 leading-tight">
              {lang === 'HI' ? 'एआई परिशुद्धता छिड़काव यंत्र' : 'AI Precision Sprayer | ESP32'}
            </p>
            {/* Top Header Dedication Badge */}
            <div className="mt-1 inline-flex items-center space-x-1 bg-amber-400/20 border border-amber-300/40 rounded-full px-2 py-0.5 text-[10px] font-bold text-amber-200">
              <span>👑</span>
              <span>Engineered & Designed by Anant Rathore</span>
            </div>
          </div>

          {/* Language Switcher & Connection Pill */}
          <div className="flex items-center space-x-1.5">
            {/* Prominent Language Button ("Language / भाषा: EN | HI") */}
            <button
              type="button"
              onClick={() => setLang(prev => prev === 'HI' ? 'EN' : 'HI')}
              className="bg-[#2E7D32] hover:bg-[#388E3C] text-white border border-emerald-400/50 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all active:scale-95 shadow-xs flex items-center space-x-1"
              title="Toggle Language / भाषा बदलें"
            >
              <Languages className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'HI' ? 'भाषा: HI | EN' : 'Lang: EN | HI'}</span>
            </button>

            {/* Connection LED */}
            <div 
              onClick={() => setIsConnected(!isConnected)}
              className="flex items-center space-x-1 bg-black/25 px-2.5 py-1 rounded-full border border-emerald-500/30 cursor-pointer"
              title="Connection Status"
            >
              <div className={`w-2 h-2 rounded-full ${isHardwareOnline ? 'bg-[#00E676] shadow-[0_0_6px_#00E676]' : 'bg-[#FF1744]'}`} />
              <span className="text-[10px] font-bold text-emerald-100">
                {isHardwareOnline ? (lang === 'HI' ? 'ऑनलाइन' : 'ONLINE') : (lang === 'HI' ? 'डिस्कनेक्टेड' : 'DISCONNECTED')}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* NATIVE SCROLLABLE APP BODY */}
      <main className="w-full p-3 space-y-3 pb-8">
            
            {/* 0. AI AGRO-DOCTOR & VOICE ASSISTANT CARD (BILINGUAL & VOICE-ENABLED) */}
            <AiAgroDoctor 
              lang={lang} 
              effectiveMode={effectiveMode} 
              onSetHardwareMode={(mode) => handleExecuteSetMode(mode)} 
              onStatusChange={(status) => setStatusLog(status)} 
            />
            
            {/* 1. MACHINE STATUS & BATTERY TELEMETRY CARD */}
            <div id="simulator-battery-health-card" className="bg-white rounded-xl p-3 shadow-sm border border-emerald-900/10">
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center space-x-1.5 font-bold text-[#1B5E20]">
                  <Battery className={`w-4 h-4 ${displayBattery !== null && displayBattery < 15 ? 'text-red-600' : 'text-emerald-700'}`} />
                  <span>{lang === 'HI' ? 'मशीन स्थिति / बैटरी का स्तर' : 'Battery Health / Machine Status'}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                    isHardwareOnline ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-700'
                  }`}>
                    {isHardwareOnline ? (lang === 'HI' ? 'कनेक्टेड' : 'ONLINE') : (lang === 'HI' ? 'डिस्कनेक्टेड' : 'DISCONNECTED')}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-neutral-600">
                    {displayBattery !== null ? `${(11.1 + (displayBattery / 100) * 1.5).toFixed(1)}V` : '--V'} • 12V Li-ion
                  </span>
                </div>
              </div>

              {/* Battery Bar */}
              <div className="flex items-center space-x-2">
                <div className="flex-1 h-3.5 bg-neutral-200 rounded-full overflow-hidden p-0.5">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      displayBattery === null 
                        ? 'bg-neutral-300 w-0' 
                        : displayBattery < 15 
                          ? 'bg-[#C62828]' 
                          : displayBattery < 40 
                            ? 'bg-amber-500' 
                            : 'bg-[#2E7D32]'
                    }`}
                    style={{ width: displayBattery !== null ? `${Math.min(100, Math.max(0, displayBattery))}%` : '0%' }}
                  />
                </div>
                <span className={`text-xs font-bold font-mono ${
                  displayBattery === null 
                    ? 'text-neutral-500' 
                    : displayBattery < 15 
                      ? 'text-red-700' 
                      : 'text-[#1B5E20]'
                }`}>
                  {displayBattery !== null ? `${displayBattery}%` : '--%'}
                </span>
              </div>

              {/* Relay and IR Sensor Live Status */}
              {isHardwareOnline && (
                <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px]">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-neutral-500 font-semibold">{lang === 'HI' ? 'रिले:' : 'Relay:'}</span>
                    <span className={`font-mono font-bold px-1.5 py-0.2 rounded border ${
                      relay 
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                        : 'bg-neutral-100 text-neutral-600 border-neutral-200'
                    }`}>
                      {relay ? (lang === 'HI' ? 'चालू (स्प्रे)' : 'ON (Spraying)') : (lang === 'HI' ? 'बंद (निष्क्रिय)' : 'OFF (Idle)')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-neutral-500 font-semibold">{lang === 'HI' ? 'IR सेंसर:' : 'IR Sensor:'}</span>
                    <span className={`font-mono font-bold px-1.5 py-0.2 rounded border ${
                      irTriggered 
                        ? 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse' 
                        : 'bg-neutral-100 text-neutral-600 border-neutral-200'
                    }`}>
                      {irTriggered ? (lang === 'HI' ? 'लक्षित' : 'TRIGGERED') : (lang === 'HI' ? 'साफ' : 'CLEAR')}
                    </span>
                  </div>
                </div>
              )}

              {/* Graceful Disconnection Alert if offline */}
              {!isHardwareOnline && (
                <div className="mt-2 bg-red-50/80 border border-red-200 rounded-lg p-2 text-[10px] text-red-900 flex items-start space-x-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-red-700 font-bold">
                      {lang === 'HI' ? 'ESP32 डिस्कनेक्टेड (--%)' : 'ESP32 Hardware Disconnected (--%)'}
                    </strong>
                    <span>
                      {lang === 'HI' 
                        ? `http://${espIp}/status से संपर्क नहीं हुआ। कृपया ESP32-CAM को चालू करें।`
                        : `No response from http://${espIp}/status. Connect to ESP32 Wi-Fi AP.`}
                    </span>
                  </div>
                </div>
              )}

              {/* Low Battery Warning Banner (< 15%) */}
              {isHardwareOnline && displayBattery !== null && displayBattery < 15 && (
                <div className="mt-2.5 bg-red-50 border border-red-200 rounded-lg p-2 flex items-start space-x-2 animate-pulse">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-[10px] text-red-900 leading-tight">
                    <strong className="block text-red-700 font-bold">
                      {lang === 'HI' ? 'कम बैटरी चेतावनी (LOW BATTERY WARNING)' : 'LOW BATTERY WARNING (< 15%)'}
                    </strong>
                    {lang === 'HI' 
                      ? 'बैटरी 15% से कम है। कृपया 12V चार्जर तुरंत जोड़ें।' 
                      : 'Battery is below 15%. Please connect 12V charger immediately.'}
                  </div>
                </div>
              )}
            </div>

            {/* NEW FEATURE 1: SMART WEATHER & RAIN LOSS WARNING ENGINE */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-emerald-900/10">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-1.5">
                  <CloudRain className="w-4 h-4 text-sky-700" />
                  <span className="text-xs font-bold text-[#1B5E20]">
                    {lang === 'HI' ? 'मौसम एवं वर्षा पूर्व चेतावनी' : 'Smart Weather & Rain Loss Warning'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleToggleWeatherSimulation}
                  className="text-[9px] font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200 hover:bg-sky-100 transition-colors"
                >
                  🔄 {lang === 'HI' ? 'सिमुलेशन बदलें' : 'Simulate Rain'}
                </button>
              </div>

              <div className="text-[10px] text-neutral-500 mb-2 flex items-center justify-between">
                <span>📍 {lang === 'HI' ? 'स्थान: पंजाब (बठिंडा स्टेशन)' : 'Location: Punjab (Bathinda Stn)'}</span>
                <span className="font-mono text-neutral-400">GPS: Auto-Locked</span>
              </div>

              {/* Weather Metrics Grid */}
              <div className="grid grid-cols-4 gap-1.5 mb-2.5">
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-1.5 text-center">
                  <div className="text-[9px] text-neutral-500 flex items-center justify-center space-x-0.5">
                    <Thermometer className="w-2.5 h-2.5 text-amber-600" />
                    <span>{lang === 'HI' ? 'तापमान' : 'Temp'}</span>
                  </div>
                  <div className="text-xs font-bold font-mono text-neutral-800">
                    {isWeatherHighRisk ? '31°C' : '28°C'}
                  </div>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-1.5 text-center">
                  <div className="text-[9px] text-neutral-500 flex items-center justify-center space-x-0.5">
                    <Droplets className="w-2.5 h-2.5 text-blue-600" />
                    <span>{lang === 'HI' ? 'आर्द्रता' : 'Humidity'}</span>
                  </div>
                  <div className="text-xs font-bold font-mono text-neutral-800">
                    {isWeatherHighRisk ? '78%' : '52%'}
                  </div>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-1.5 text-center">
                  <div className="text-[9px] text-neutral-500 flex items-center justify-center space-x-0.5">
                    <Wind className="w-2.5 h-2.5 text-teal-600" />
                    <span>{lang === 'HI' ? 'हवा' : 'Wind'}</span>
                  </div>
                  <div className="text-xs font-bold font-mono text-neutral-800">
                    {isWeatherHighRisk ? '14 km/h' : '6 km/h'}
                  </div>
                </div>
                <div className={`rounded-lg p-1.5 text-center border ${
                  isWeatherHighRisk ? 'bg-red-50 border-red-300 text-red-900' : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                }`}>
                  <div className="text-[9px] flex items-center justify-center space-x-0.5 opacity-80">
                    <CloudRain className="w-2.5 h-2.5" />
                    <span>{lang === 'HI' ? 'बारिश' : 'Rain'}</span>
                  </div>
                  <div className="text-xs font-extrabold font-mono">
                    {isWeatherHighRisk ? '75%' : '12%'}
                  </div>
                </div>
              </div>

              {/* Status Badge & Advisory */}
              <div className={`rounded-lg p-2.5 border mb-2 transition-all ${
                isWeatherHighRisk
                  ? 'bg-red-50/80 border-red-200 text-red-900'
                  : 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-1.5 font-bold text-xs">
                    {isWeatherHighRisk ? (
                      <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                    ) : (
                      <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    )}
                    <span>
                      {isWeatherHighRisk
                        ? (lang === 'HI' ? 'आज स्प्रे न करें (DO NOT SPRAY)' : 'DO NOT SPRAY (High Rain Risk)')
                        : (lang === 'HI' ? 'सुरक्षित मौसम (SAFE TO SPRAY)' : 'SAFE TO SPRAY (Clear Weather)')}
                    </span>
                  </div>
                  <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded font-mono ${
                    isWeatherHighRisk ? 'bg-red-200 text-red-900' : 'bg-emerald-200 text-emerald-900'
                  }`}>
                    {isWeatherHighRisk ? 'RISK: 75%' : 'RISK: 12%'}
                  </span>
                </div>

                <p className="text-[10px] leading-relaxed">
                  {isWeatherHighRisk
                    ? (lang === 'HI' 
                        ? 'सावधान: आज 75% बारिश का अनुमान है। अभी छिड़काव करने पर रासायनिक दवा बह जाएगी और समय व पैसे की भारी हानि होगी। कृपया कल तक प्रतीक्षा करें।'
                        : 'Warning: 75% rain probability today. Spraying now will wash away expensive chemicals, wasting labor and capital. Postpone spraying!')
                    : (lang === 'HI'
                        ? 'मौसम बिल्कुल साफ है (12% बारिश, हवा 6 km/h)। रासायनिक बहाव (drift) का खतरा नहीं है और पौधे दवा को तेजी से सोखेंगे।'
                        : 'Weather conditions are optimal (12% rain, wind 6 km/h). Safe for high-efficiency precision spraying with zero chemical washout risk.')}
                </p>
              </div>

              {/* Hardware Solenoid Safety Lock Switch */}
              <div className="bg-neutral-50 rounded-lg p-2 border border-neutral-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {isHardwareSafetyLocked ? (
                    <Lock className="w-3.5 h-3.5 text-amber-700" />
                  ) : (
                    <Unlock className="w-3.5 h-3.5 text-neutral-400" />
                  )}
                  <div>
                    <div className="text-[11px] font-bold text-neutral-800 leading-tight">
                      {lang === 'HI' ? 'हार्डवेयर सोलेनोइड सुरक्षा लॉक' : 'Hardware Solenoid Safety Lock'}
                    </div>
                    <div className="text-[9px] text-neutral-500">
                      {lang === 'HI' ? 'बारिश जोखिम > 60% होने पर वाल्व लॉक रखता है' : 'Prevents solenoid discharge if rain risk > 60%'}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleToggleSafetyLock}
                  className={`w-10 h-5 rounded-full transition-colors relative p-0.5 ${
                    isHardwareSafetyLocked ? 'bg-[#1B5E20]' : 'bg-neutral-300'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    isHardwareSafetyLocked ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>

            {/* NEW FEATURE 2: SOWING DATE & CROP LIFECYCLE SPRAY SCHEDULE PLANNER */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-emerald-900/10">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-bold text-[#1B5E20]">
                    {lang === 'HI' ? 'बुवाई तिथि एवं फसल जीवन चक्र स्प्रे योजना' : 'Crop Lifecycle & Spray Schedule Planner'}
                  </span>
                </div>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {selectedCrop.emoji} {lang === 'HI' ? selectedCrop.nameHi : selectedCrop.nameEn}
                </span>
              </div>

              <p className="text-[10px] text-neutral-500 mb-2 leading-tight">
                {lang === 'HI' 
                  ? 'बुवाई की तारीख दर्ज करें, एआई सिस्टम संपूर्ण जीवन चक्र के लिए सटीक स्प्रे तिथियों की गणना करेगा' 
                  : 'Enter sowing date to generate automated milestone spray schedules from sowing to harvest'}
              </p>

              {/* Sowing Date Selector */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-2 mb-2 flex items-center justify-between">
                <label className="text-[10px] font-bold text-neutral-700 flex items-center space-x-1">
                  <span>📅 {lang === 'HI' ? 'बुवाई की तारीख:' : 'Sowing Date:'}</span>
                </label>
                <input
                  type="date"
                  value={sowingDate}
                  onChange={(e) => setSowingDate(e.target.value)}
                  className="text-[11px] font-mono font-bold bg-white border border-neutral-300 rounded px-2 py-0.5 text-neutral-800 focus:outline-emerald-600"
                />
              </div>

              {/* Crop Age Bar */}
              {(() => {
                const daysElapsed = Math.max(0, Math.floor((Date.now() - new Date(sowingDate).getTime()) / (1000 * 60 * 60 * 24)));
                const lifecycle = selectedCrop.lifecycle;
                const progressPercent = Math.min(100, Math.round((daysElapsed / lifecycle.harvestDay) * 100));

                const getStageDate = (days: number) => {
                  const d = new Date(sowingDate);
                  d.setDate(d.getDate() + days);
                  return d.toLocaleDateString(lang === 'HI' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'short' });
                };

                return (
                  <div>
                    <div className="flex items-center justify-between text-[10px] mb-1 font-semibold text-neutral-700">
                      <span>{lang === 'HI' ? `फसल की उम्र: ${daysElapsed} दिन` : `Crop Age: ${daysElapsed} Days`}</span>
                      <span>{lang === 'HI' ? `कुल चक्र: ${lifecycle.harvestDay} दिन` : `Total Cycle: ${lifecycle.harvestDay} Days`}</span>
                    </div>

                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden mb-3">
                      <div 
                        className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    {/* 4 Milestones Timeline */}
                    <div className="space-y-1.5">
                      {/* Milestone 1: Weedicide Spray */}
                      <div className={`p-2 rounded-lg border text-[10px] flex items-start justify-between transition-colors ${
                        daysElapsed >= lifecycle.weedicideDay + 5 
                          ? 'bg-neutral-50 border-neutral-200 text-neutral-600' 
                          : Math.abs(daysElapsed - lifecycle.weedicideDay) <= 4
                            ? 'bg-amber-50 border-amber-300 text-amber-900 ring-1 ring-amber-300'
                            : 'bg-white border-neutral-200 text-neutral-800'
                      }`}>
                        <div>
                          <div className="font-bold flex items-center space-x-1">
                            <span>1️⃣ {lang === 'HI' ? `खरपतवार नियंत्रण स्प्रे (दिन ${lifecycle.weedicideDay})` : `Weedicide Spray (Day ${lifecycle.weedicideDay})`}</span>
                            {Math.abs(daysElapsed - lifecycle.weedicideDay) <= 4 && (
                              <span className="text-[8px] bg-amber-500 text-white px-1 rounded font-mono font-bold animate-pulse">
                                {lang === 'HI' ? 'सक्रिय' : 'ACTIVE NOW'}
                              </span>
                            )}
                          </div>
                          <div className="text-[9px] text-neutral-500 mt-0.5">
                            🧪 {lang === 'HI' ? lifecycle.weedicideNameHi : lifecycle.weedicideNameEn}
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-2">
                          <div className="font-mono font-bold text-neutral-700">{getStageDate(lifecycle.weedicideDay)}</div>
                          <div className="text-[9px] text-neutral-400">
                            {daysElapsed >= lifecycle.weedicideDay + 5 ? (lang === 'HI' ? 'संपन्न' : 'Done') : (lang === 'HI' ? 'आगामी' : 'Upcoming')}
                          </div>
                        </div>
                      </div>

                      {/* Milestone 2: Nutrition / Fertilizer Spray */}
                      <div className={`p-2 rounded-lg border text-[10px] flex items-start justify-between transition-colors ${
                        daysElapsed >= lifecycle.fertilizerDay + 5 
                          ? 'bg-neutral-50 border-neutral-200 text-neutral-600' 
                          : Math.abs(daysElapsed - lifecycle.fertilizerDay) <= 4
                            ? 'bg-amber-50 border-amber-300 text-amber-900 ring-1 ring-amber-300'
                            : 'bg-white border-neutral-200 text-neutral-800'
                      }`}>
                        <div>
                          <div className="font-bold flex items-center space-x-1">
                            <span>2️⃣ {lang === 'HI' ? `पोषण / यूरिया टॉप-ड्रेस (दिन ${lifecycle.fertilizerDay})` : `Foliar / Top-Dress (Day ${lifecycle.fertilizerDay})`}</span>
                            {Math.abs(daysElapsed - lifecycle.fertilizerDay) <= 4 && (
                              <span className="text-[8px] bg-amber-500 text-white px-1 rounded font-mono font-bold animate-pulse">
                                {lang === 'HI' ? 'सक्रिय' : 'ACTIVE NOW'}
                              </span>
                            )}
                          </div>
                          <div className="text-[9px] text-neutral-500 mt-0.5">
                            🌾 {lang === 'HI' ? lifecycle.fertilizerNameHi : lifecycle.fertilizerNameEn}
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-2">
                          <div className="font-mono font-bold text-neutral-700">{getStageDate(lifecycle.fertilizerDay)}</div>
                          <div className="text-[9px] text-neutral-400">
                            {daysElapsed >= lifecycle.fertilizerDay + 5 ? (lang === 'HI' ? 'संपन्न' : 'Done') : (lang === 'HI' ? 'आगामी' : 'Upcoming')}
                          </div>
                        </div>
                      </div>

                      {/* Milestone 3: Protective Fungicide / Pesticide */}
                      <div className={`p-2 rounded-lg border text-[10px] flex items-start justify-between transition-colors ${
                        daysElapsed >= lifecycle.secondPesticideDay + 5 
                          ? 'bg-neutral-50 border-neutral-200 text-neutral-600' 
                          : Math.abs(daysElapsed - lifecycle.secondPesticideDay) <= 4
                            ? 'bg-amber-50 border-amber-300 text-amber-900 ring-1 ring-amber-300'
                            : 'bg-white border-neutral-200 text-neutral-800'
                      }`}>
                        <div>
                          <div className="font-bold flex items-center space-x-1">
                            <span>3️⃣ {lang === 'HI' ? `रोग एवं कीट सुरक्षा स्प्रे (दिन ${lifecycle.secondPesticideDay})` : `Pest & Fungal Protective (Day ${lifecycle.secondPesticideDay})`}</span>
                            {Math.abs(daysElapsed - lifecycle.secondPesticideDay) <= 4 && (
                              <span className="text-[8px] bg-amber-500 text-white px-1 rounded font-mono font-bold animate-pulse">
                                {lang === 'HI' ? 'सक्रिय' : 'ACTIVE NOW'}
                              </span>
                            )}
                          </div>
                          <div className="text-[9px] text-neutral-500 mt-0.5">
                            🛡️ {lang === 'HI' ? lifecycle.secondPesticideNameHi : lifecycle.secondPesticideNameEn}
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-2">
                          <div className="font-mono font-bold text-neutral-700">{getStageDate(lifecycle.secondPesticideDay)}</div>
                          <div className="text-[9px] text-neutral-400">
                            {daysElapsed >= lifecycle.secondPesticideDay + 5 ? (lang === 'HI' ? 'संपन्न' : 'Done') : (lang === 'HI' ? 'आगामी' : 'Upcoming')}
                          </div>
                        </div>
                      </div>

                      {/* Milestone 4: Harvest Maturity & Pre-Harvest Stop */}
                      <div className={`p-2 rounded-lg border text-[10px] flex items-start justify-between transition-colors ${
                        daysElapsed >= lifecycle.harvestDay 
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                          : 'bg-white border-neutral-200 text-neutral-800'
                      }`}>
                        <div>
                          <div className="font-bold flex items-center space-x-1">
                            <span>4️⃣ {lang === 'HI' ? `फसल परिपक्वता व कटाई (दिन ${lifecycle.harvestDay})` : `Maturity & Harvest (Day ${lifecycle.harvestDay})`}</span>
                          </div>
                          <div className="text-[9px] text-neutral-500 mt-0.5">
                            ⚠️ {lang === 'HI' ? 'कटाई से 15 दिन पूर्व सभी रासायनिक स्प्रे बंद करें' : 'Zero spray window: Halt all chemicals 15 days before harvest'}
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-2">
                          <div className="font-mono font-bold text-neutral-700">{getStageDate(lifecycle.harvestDay)}</div>
                          <div className="text-[9px] text-emerald-700 font-bold">
                            {daysElapsed >= lifecycle.harvestDay ? (lang === 'HI' ? 'कटाई हेतु तैयार' : 'Ready to Harvest') : (lang === 'HI' ? 'कटाई आगामी' : 'Upcoming')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* 3. THREE OPERATIONAL SPRAY MODES CARD */}
            <div id="simulator-spray-modes-card" className="bg-white rounded-xl p-3 shadow-sm border border-emerald-900/10">
              <div className="flex items-center justify-between mb-1">
                <div className="text-xs font-bold text-[#1B5E20] flex items-center space-x-1.5">
                  <Sliders className="w-4 h-4" />
                  <span>{lang === 'HI' ? 'स्प्रे मोड नियंत्रण (Operating Mode Control)' : 'Operating Mode Control'}</span>
                </div>
                <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 uppercase">
                  {effectiveMode.toUpperCase()}
                </span>
              </div>
              <p className="text-[10px] text-neutral-500 mb-2">
                {lang === 'HI' 
                  ? 'सोलेनोइड वाल्व नियंत्रण विधि का चयन करें (GET http://192.168.4.1/setMode)' 
                  : 'Hardware Switcher: Dispatches GET http://192.168.4.1/setMode'}
              </p>

              {/* DEDICATED HARDWARE CROP & WEED MODE BUTTONS WITH ACTIVE HIGHLIGHT */}
              <div className="grid grid-cols-2 gap-2 mb-2.5">
                {/* Crop Mode Button */}
                <button
                  id="simulator-btn-crop-mode"
                  type="button"
                  onClick={() => handleExecuteSetMode('CROP')}
                  className={`py-2 px-2.5 rounded-lg border text-xs font-bold transition-all flex items-center justify-center space-x-1.5 active:scale-[0.98] ${
                    effectiveMode.toUpperCase() === 'CROP'
                      ? 'bg-[#1B5E20] text-white border-[#1B5E20] shadow-sm ring-2 ring-emerald-500/40'
                      : 'bg-neutral-50 text-neutral-800 border-neutral-300 hover:bg-emerald-50 hover:border-emerald-300'
                  }`}
                >
                  <Leaf className={`w-3.5 h-3.5 ${effectiveMode.toUpperCase() === 'CROP' ? 'text-emerald-200' : 'text-emerald-700'}`} />
                  <span>{lang === 'HI' ? 'फसल मोड (Crop)' : 'Crop Mode'}</span>
                  {effectiveMode.toUpperCase() === 'CROP' && <Check className="w-3 h-3 text-emerald-200 ml-0.5" />}
                </button>

                {/* Weed Mode Button */}
                <button
                  id="simulator-btn-weed-mode"
                  type="button"
                  onClick={() => handleExecuteSetMode('WEED')}
                  className={`py-2 px-2.5 rounded-lg border text-xs font-bold transition-all flex items-center justify-center space-x-1.5 active:scale-[0.98] ${
                    effectiveMode.toUpperCase() === 'WEED'
                      ? 'bg-[#1B5E20] text-white border-[#1B5E20] shadow-sm ring-2 ring-emerald-500/40'
                      : 'bg-neutral-50 text-neutral-800 border-neutral-300 hover:bg-emerald-50 hover:border-emerald-300'
                  }`}
                >
                  <Target className={`w-3.5 h-3.5 ${effectiveMode.toUpperCase() === 'WEED' ? 'text-amber-200' : 'text-[#1B5E20]'}`} />
                  <span>{lang === 'HI' ? 'खरपतवार मोड (Weed)' : 'Weed Mode'}</span>
                  {effectiveMode.toUpperCase() === 'WEED' && <Check className="w-3 h-3 text-emerald-200 ml-0.5" />}
                </button>
              </div>

              <div className="space-y-1.5">
                {/* Mode 1: Weedicide */}
                <button
                  type="button"
                  onClick={() => handleSelectMode(1)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-start justify-between ${
                    effectiveMode === 'weed'
                      ? 'bg-[#E8F5E9] border-[#1B5E20] shadow-sm'
                      : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <div className="pr-2">
                    <div className="text-xs font-bold text-neutral-900 flex items-center space-x-1.5">
                      <Target className="w-3.5 h-3.5 text-[#1B5E20]" />
                      <span>{lang === 'HI' ? 'केवल खरपतवार मारक मोड (Weedicide)' : 'Targeted Weedicide Mode (Weed)'}</span>
                    </div>
                    <div className="text-[10px] text-neutral-600 mt-0.5 leading-tight">
                      {lang === 'HI' 
                        ? 'मुख्य फसल सुरक्षित, केवल खरपतवार पर स्प्रे (Protects Main Crops)' 
                        : 'Protects main crop foliage, sprays only detected weeds'}
                    </div>
                  </div>
                  <input type="radio" checked={effectiveMode === 'weed'} readOnly className="mt-1 accent-[#1B5E20]" />
                </button>

                {/* Mode 2: Fertilizer / Crop */}
                <button
                  type="button"
                  onClick={() => handleSelectMode(2)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-start justify-between ${
                    effectiveMode === 'crop'
                      ? 'bg-[#E8F5E9] border-[#1B5E20] shadow-sm'
                      : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <div className="pr-2">
                    <div className="text-xs font-bold text-neutral-900 flex items-center space-x-1.5">
                      <Leaf className="w-3.5 h-3.5 text-[#1B5E20]" />
                      <span>{lang === 'HI' ? 'केवल फसल खाद मोड (Fertilizer)' : 'Targeted Crop Fertilizer Mode (Crop)'}</span>
                    </div>
                    <div className="text-[10px] text-neutral-600 mt-0.5 leading-tight">
                      {lang === 'HI' 
                        ? 'पौधों के पत्तों पर स्प्रे, खाली जमीन पर दवा की बचत' 
                        : 'Sprays only healthy crop foliage, saves liquid on bare soil'}
                    </div>
                  </div>
                  <input type="radio" checked={effectiveMode === 'crop'} readOnly className="mt-1 accent-[#1B5E20]" />
                </button>

                {/* Mode 3: Universal Field */}
                <button
                  type="button"
                  onClick={() => handleSelectMode(3)}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-start justify-between ${
                    sprayMode === 3
                      ? 'bg-[#E8F5E9] border-[#1B5E20] shadow-sm'
                      : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  <div className="pr-2">
                    <div className="text-xs font-bold text-neutral-900 flex items-center space-x-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#1B5E20]" />
                      <span>{lang === 'HI' ? 'पूरे खेत में छिड़काव मोड (Universal Field)' : 'Universal Field Spray Mode'}</span>
                    </div>
                    <div className="text-[10px] text-neutral-600 mt-0.5 leading-tight">
                      {lang === 'HI' 
                        ? 'समान रोकथाम के लिए निरंतर व्यापक छिड़काव' 
                        : 'Continuous blanket spraying across the entire field'}
                    </div>
                  </div>
                  <input type="radio" checked={sprayMode === 3} readOnly className="mt-1 accent-[#1B5E20]" />
                </button>
              </div>
            </div>

            {/* 3. CROP & EXPANDED 11 INDIAN WEEDS SELECTOR */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-emerald-900/10">
              <div className="text-xs font-bold text-[#1B5E20] mb-0.5 flex items-center space-x-1.5">
                <Layers className="w-4 h-4" />
                <span>{lang === 'HI' ? 'फसल एवं खरपतवार चयन (AI मॉडल)' : 'Crop & Weed Calibration (AI Model)'}</span>
              </div>
              <p className="text-[10px] text-neutral-500 mb-2">
                {lang === 'HI' 
                  ? 'खेत के अनुसार ईएसपी32 कैमरा पहचान मॉडल सेट करें' 
                  : 'Configure ESP32 vision detection parameters for field pests'}
              </p>

              {/* Crop Selector (20 Indian Crops) */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-neutral-700">
                    {lang === 'HI' ? 'मुख्य फसल (Main Crop - 20 किस्में):' : 'Main Field Crop (20 Indian Varieties):'}
                  </span>
                  <span className="text-[9px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                    {selectedCrop.emoji} {selectedCrop.standardDosageLitersPerHectare} L/Ha
                  </span>
                </div>

                <select
                  value={selectedCrop.id}
                  onChange={(e) => {
                    const crop = INDIAN_CROPS.find(c => c.id === e.target.value) || INDIAN_CROPS[0];
                    setSelectedCrop(crop);
                  }}
                  className="w-full text-xs font-semibold p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 focus:outline-none focus:ring-1 focus:ring-emerald-700 mb-2"
                >
                  {INDIAN_CROPS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.emoji} {lang === 'HI' ? `${c.nameHi} (${c.nameEn})` : `${c.nameEn} (${c.nameHi})`} - {c.standardDosageLitersPerHectare} L/Ha
                    </option>
                  ))}
                </select>

                {/* Quick Touch Grid (Scrollable / Compact) */}
                <div className="flex space-x-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
                  {INDIAN_CROPS.map((crop) => {
                    const isSelected = crop.id === selectedCrop.id;
                    return (
                      <button
                        key={crop.id}
                        type="button"
                        onClick={() => setSelectedCrop(crop)}
                        className={`flex-shrink-0 px-2.5 py-1.5 rounded-lg text-center transition-all flex flex-col items-center justify-center border text-nowrap ${
                          isSelected
                            ? 'bg-[#1B5E20] text-white border-[#1B5E20] shadow-xs'
                            : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        <span className="text-sm leading-none">{crop.emoji}</span>
                        <span className="text-[10px] font-bold mt-0.5 leading-tight">
                          {lang === 'HI' ? crop.nameHi : crop.nameEn}
                        </span>
                        <span className={`text-[8px] leading-tight ${isSelected ? 'text-emerald-200' : 'text-neutral-500'}`}>
                          {crop.standardDosageLitersPerHectare} L/Ha
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Expanded 20 Indian Weeds Selector */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-neutral-700">
                    {lang === 'HI' ? 'लक्षित खरपतवार (Target Weed - 20 किस्में):' : 'Target Weed (20 Indian Varieties):'}
                  </span>
                  <span className="text-[9px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded font-mono font-bold">
                    HTTP: /set_weed
                  </span>
                </div>

                <select
                  value={selectedWeed.id}
                  onChange={(e) => {
                    const weed = INDIAN_WEEDS.find(w => w.id === e.target.value) || INDIAN_WEEDS[0];
                    handleSelectWeed(weed);
                  }}
                  className="w-full text-xs font-semibold p-2 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 focus:outline-none focus:ring-1 focus:ring-emerald-700"
                >
                  {INDIAN_WEEDS.map((w) => (
                    <option key={w.id} value={w.id}>
                      {lang === 'HI' ? `${w.nameHi} (${w.scientificName})` : `${w.nameEn} - ${w.nameHi}`}
                    </option>
                  ))}
                </select>

                {/* Active Weed Badge Info & Real-time Command Dispatch Preview */}
                <div className="mt-1.5 p-2 bg-[#F9FBE7] border border-[#DCEDC8] rounded-lg text-[10px] text-emerald-950">
                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="text-[#33691E]">{selectedWeed.nameHi}</strong>
                      <span className="text-neutral-600 ml-1">({selectedWeed.scientificName})</span>
                    </div>
                    <span className="font-mono text-[9px] bg-[#33691E] text-white px-1.5 py-0.5 rounded font-bold">
                      {selectedWeed.code}
                    </span>
                  </div>
                  <div className="mt-1 font-mono text-[9px] text-[#558B2F] bg-white/70 px-1.5 py-0.5 rounded border border-[#C5E1A5]">
                    GET http://{espIp}/set_weed?type={selectedWeed.code}
                  </div>
                </div>
              </div>

              {/* Configure Model Button */}
              <button
                type="button"
                onClick={handleConfigureModel}
                className="w-full py-2.5 bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-xs font-bold rounded-lg shadow-sm transition-transform active:scale-[0.98] flex items-center justify-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>
                  {lang === 'HI' ? 'एआई मॉडल कॉन्फ़िगर करें (CONFIGURE MODEL)' : 'CONFIGURE AI MODEL'}
                </span>
              </button>
            </div>

            {/* 4. SMART LAND AREA & CHEMICAL ESTIMATOR */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-emerald-900/10">
              <div className="text-xs font-bold text-[#1B5E20] mb-0.5 flex items-center space-x-1.5">
                <Calculator className="w-4 h-4" />
                <span>{lang === 'HI' ? 'खेत रकबा और अनुमानित दवा (Chemical Estimator)' : 'Land Area & Chemical Estimator'}</span>
              </div>
              <p className="text-[10px] text-neutral-500 mb-2">
                {lang === 'HI' 
                  ? 'रकबा चुनें (हेक्टेयर) और कीटनाशक मात्रा की गणना करें' 
                  : 'Quick-select area (Hectares) to calculate pesticide volume'}
              </p>

              {/* Quick Area Preset Buttons */}
              <div className="grid grid-cols-4 gap-1.5 mb-2">
                {[0.5, 1.0, 2.0, 5.0].map((ha) => {
                  const isSelected = landAreaHa === ha;
                  return (
                    <button
                      key={ha}
                      type="button"
                      onClick={() => setLandAreaHa(ha)}
                      className={`py-1.5 rounded-lg text-xs font-bold transition-all border ${
                        isSelected
                          ? 'bg-[#1B5E20] text-white border-[#1B5E20]'
                          : 'bg-[#E8F5E9] text-[#1B5E20] border-emerald-200'
                      }`}
                    >
                      {ha} Ha
                    </button>
                  );
                })}
              </div>

              {/* Custom Area Input */}
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-[11px] text-neutral-600 shrink-0">
                  {lang === 'HI' ? 'कस्टम रकबा:' : 'Custom Area:'}
                </span>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  value={landAreaHa}
                  onChange={(e) => setLandAreaHa(parseFloat(e.target.value) || 0.5)}
                  className="w-20 px-2 py-1 text-xs font-bold text-center bg-neutral-50 border border-neutral-300 rounded font-mono"
                />
                <span className="text-[11px] text-neutral-500">
                  {lang === 'HI' ? 'Hectares (हेक्टेयर)' : 'Hectares'}
                </span>
              </div>

              {/* Output Result Banner */}
              <div className="bg-[#E8F5E9] border border-emerald-200 rounded-lg p-2.5">
                <span className="text-[10px] font-bold text-emerald-900 block">
                  {lang === 'HI' ? 'अनुमानित दवा की मात्रा (Estimated Liquid):' : 'Estimated Liquid Volume:'}
                </span>
                <div className="text-xl font-bold text-[#1B5E20] mt-0.5">
                  {estimatedChemicalVolume} {lang === 'HI' ? 'Liters (लीटर)' : 'Liters'}
                </div>
                <div className="text-[10px] text-emerald-800 font-mono mt-0.5">
                  {lang === 'HI'
                    ? `दर: ${selectedCrop.standardDosageLitersPerHectare} L/Ha (${selectedCrop.nameHi} मानक)`
                    : `Rate: ${selectedCrop.standardDosageLitersPerHectare} L/Ha (${selectedCrop.nameEn} standard)`}
                </div>
              </div>
            </div>

            {/* 5. SYSTEM STATUS CARD */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-emerald-900/10">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-[#1B5E20]">
                  {lang === 'HI' ? 'सिस्टम स्थिति (System Status Log)' : 'System Status Log'}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800">
                  ONLINE
                </span>
              </div>
              <div className="bg-[#FAFAFA] border border-neutral-200 rounded-lg p-2.5 text-[11px] text-neutral-700 font-mono">
                {statusLog}
              </div>
            </div>

            {/* DEDICATED CREATOR & INNOVATOR CARD: ANANT RATHORE */}
            <div className="bg-gradient-to-br from-emerald-900 to-[#1B5E20] text-white rounded-xl p-3.5 shadow-md border border-emerald-500/30 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center space-x-1 bg-amber-400 text-neutral-900 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-1.5 shadow-xs">
                    <span>👑</span>
                    <span>Official Dedicated Edition</span>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">
                    Anant Rathore
                  </h3>
                  <p className="text-emerald-200 text-xs font-medium">
                    Lead System Architect & Developer
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-800/80 border border-emerald-400/40 flex items-center justify-center text-amber-300 font-bold text-sm shadow-inner shrink-0">
                  AR
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-emerald-800/80 grid grid-cols-2 gap-2 text-[11px]">
                <div>
                  <span className="text-emerald-300 block text-[9px] uppercase font-semibold">Project Vision:</span>
                  <strong className="text-white">AGRO SAVE</strong>
                </div>
                <div>
                  <span className="text-emerald-300 block text-[9px] uppercase font-semibold">Core Stack:</span>
                  <span className="text-emerald-100 font-mono text-[10px]">ESP32, React Native, AI & Voice</span>
                </div>
              </div>
            </div>

      </main>

      {/* Helper Footer for Field Tests */}
      <footer className="bg-white/90 border-t border-slate-200 py-2.5 px-3 text-xs text-neutral-600 mt-auto">
        <div className="w-full flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLowBatteryTest}
              className="bg-white hover:bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full border border-neutral-300 shadow-2xs font-medium flex items-center space-x-1 text-[11px] active:scale-95 transition-all"
            >
              <BatteryWarning className="w-3.5 h-3.5 text-amber-600" />
              <span>Test Low Battery Alert (&lt;15%)</span>
            </button>

            <button
              onClick={() => setIsSoundEnabled(!isSoundEnabled)}
              className="bg-white hover:bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full border border-neutral-300 shadow-2xs font-medium flex items-center space-x-1 text-[11px] active:scale-95 transition-all"
            >
              {isSoundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-600" /> : <VolumeX className="w-3.5 h-3.5 text-neutral-400" />}
              <span>Audio: {isSoundEnabled ? 'ON' : 'MUTED'}</span>
            </button>
          </div>

          <span className="font-mono text-[11px] text-neutral-500">
            Target: <strong className="text-neutral-800">{espIp}</strong>
          </span>
        </div>
      </footer>
    </div>
  );
};
