import React from 'react';
import { 
  Award, 
  Cpu, 
  Wifi, 
  Layers, 
  CheckSquare, 
  AlertTriangle, 
  Battery, 
  Calculator, 
  Droplets,
  Languages
} from 'lucide-react';
import { INDIAN_CROPS, INDIAN_WEEDS } from '../data/androidCode';

export const ProjectGuide: React.FC = () => {
  return (
    <div id="project-guide-container" className="space-y-6 text-neutral-800">
      
      {/* Inspire Award (MANAK) Agri-Tech Innovation Banner */}
      <div className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white p-5 rounded-2xl shadow-lg border border-emerald-600/40">
        <div className="flex items-start space-x-3">
          <div className="bg-white/10 p-2.5 rounded-xl">
            <Award className="w-7 h-7 text-amber-300" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-bold">AGRO SAVE • स्मार्ट कृषि (Indian Agri-Tech Precision Sprayer)</h3>
              <span className="bg-amber-400 text-neutral-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                MANAK Award
              </span>
            </div>
            <p className="text-xs text-emerald-100 mt-1 leading-relaxed">
              Designed specifically for smallholder and commercial Indian farmers. By combining local <strong>ESP32-CAM AI vision processing</strong>, 
              <strong>real-time 12V battery telemetry</strong>, an <strong>area chemical dosage calculator</strong>, and <strong>3 adaptive operational spraying modes</strong>, 
              AGRO SAVE reduces pesticide expenditure by up to 75% while preventing chemical runoff and soil degradation.
            </p>
          </div>
        </div>
      </div>

      {/* 3 Operational Spray Modes Explained */}
      <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
        <h4 className="font-bold text-sm text-[#1B5E20] mb-3 flex items-center space-x-2">
          <Droplets className="w-4 h-4" />
          <span>3 Adaptive Operational Spray Modes (विशिष्ट छिड़काव मोड)</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg">
            <div className="font-bold text-emerald-950 mb-1 flex items-center space-x-1">
              <span className="w-5 h-5 rounded-full bg-[#1B5E20] text-white flex items-center justify-center text-[10px]">1</span>
              <span>Targeted Weedicide Mode</span>
            </div>
            <p className="text-neutral-600 text-[11px] leading-relaxed">
              <strong>लक्षित खरपतवार स्प्रे:</strong> Solenoid valve actuates ONLY when invasive weeds (e.g., Phalaris, Parthenium) are detected in crop furrows. Main crops are left untouched.
            </p>
            <code className="mt-2 block bg-white px-2 py-0.5 rounded text-[10px] font-mono text-emerald-800 border border-emerald-200">
              GET /set_mode?mode=1
            </code>
          </div>

          <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg">
            <div className="font-bold text-emerald-950 mb-1 flex items-center space-x-1">
              <span className="w-5 h-5 rounded-full bg-[#1B5E20] text-white flex items-center justify-center text-[10px]">2</span>
              <span>Targeted Crop Fertilizer</span>
            </div>
            <p className="text-neutral-600 text-[11px] leading-relaxed">
              <strong>लक्षित फसल पोषण:</strong> Solenoid triggers ONLY when healthy crop foliage passes beneath the nozzle. Liquid is saved on barren soil or walking paths.
            </p>
            <code className="mt-2 block bg-white px-2 py-0.5 rounded text-[10px] font-mono text-emerald-800 border border-emerald-200">
              GET /set_mode?mode=2
            </code>
          </div>

          <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg">
            <div className="font-bold text-emerald-950 mb-1 flex items-center space-x-1">
              <span className="w-5 h-5 rounded-full bg-[#1B5E20] text-white flex items-center justify-center text-[10px]">3</span>
              <span>Universal Field Spray</span>
            </div>
            <p className="text-neutral-600 text-[11px] leading-relaxed">
              <strong>सामान्य संपूर्ण स्प्रे:</strong> Continuous blanket spraying across the entire field for uniform preventative fungicides or broad-spectrum soil treatments.
            </p>
            <code className="mt-2 block bg-white px-2 py-0.5 rounded text-[10px] font-mono text-emerald-800 border border-emerald-200">
              GET /set_mode?mode=3
            </code>
          </div>
        </div>
      </div>

      {/* Major Indian Crops & Presets Supported */}
      <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
        <h4 className="font-bold text-sm text-[#1B5E20] mb-3 flex items-center space-x-2">
          <Languages className="w-4 h-4" />
          <span>Major Indian Crops &amp; Weed Presets (फसल एवं खरपतवार डेटा)</span>
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs">
          {INDIAN_CROPS.map((crop) => (
            <div key={crop.id} className="p-2 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center space-x-2">
              <span className="text-lg">{crop.emoji}</span>
              <div>
                <strong className="block text-neutral-800">{crop.nameHi} / {crop.nameEn}</strong>
                <span className="text-[10px] text-neutral-500 font-mono">{crop.standardDosageLitersPerHectare} L/Ha</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-xs text-neutral-700">
          <strong className="text-neutral-900 block mb-1">11 Major Indian Weed Varieties Calibrated:</strong>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-neutral-600 mt-1">
            <span>• <strong>Phalaris minor:</strong> गुल्ली डंडा / गेहूं का मामा</span>
            <span>• <strong>Chenopodium album:</strong> बथुआ</span>
            <span>• <strong>Cyperus rotundus:</strong> मोथा / नागरमोथा</span>
            <span>• <strong>Parthenium hysterophorus:</strong> गाजर घास / चटकचांदनी</span>
            <span>• <strong>Amaranthus viridis:</strong> चौलाई / जंगली चौलाई</span>
            <span>• <strong>Echinochloa crus-galli:</strong> सांवा / दुबड़ा</span>
            <span>• <strong>Cynodon dactylon:</strong> दूब घास / दूर्वा</span>
            <span>• <strong>Convolvulus arvensis:</strong> हिरणखुरी</span>
            <span>• <strong>Portulaca oleracea:</strong> कुलफा / नोनी</span>
            <span>• <strong>Solanum nigrum:</strong> मकोय</span>
            <span>• <strong>Celosia argentea:</strong> सफेद मुर्गा / कुरु</span>
          </div>
        </div>
      </div>

      {/* Hardware Architecture & Telemetry Pinout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
          <div className="flex items-center space-x-2 text-[#1B5E20] font-bold text-sm mb-3">
            <Cpu className="w-4 h-4" />
            <h4>Hardware Pinout (ESP32-CAM)</h4>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between p-2 bg-neutral-50 rounded border border-neutral-200">
              <span className="text-neutral-700">GPIO 12</span>
              <span className="text-emerald-700 font-bold">5V Relay Module &rarr; 12V Solenoid</span>
            </div>
            <div className="flex justify-between p-2 bg-neutral-50 rounded border border-neutral-200">
              <span className="text-neutral-700">GPIO 33 (ADC)</span>
              <span className="text-emerald-700 font-bold">Battery Voltage Divider (R1=100k, R2=27k)</span>
            </div>
            <div className="flex justify-between p-2 bg-neutral-50 rounded border border-neutral-200">
              <span className="text-neutral-700">GPIO 13</span>
              <span className="text-emerald-700 font-bold">IR Obstacle / Crop Proximity Sensor</span>
            </div>
            <div className="flex justify-between p-2 bg-neutral-50 rounded border border-neutral-200">
              <span className="text-neutral-700">Power Input</span>
              <span className="text-neutral-800 font-bold">12V Battery &rarr; LM2596 Buck (5V 2A)</span>
            </div>
          </div>
        </div>

        {/* REST API Specification */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
          <div className="flex items-center space-x-2 text-[#1B5E20] font-bold text-sm mb-3">
            <Wifi className="w-4 h-4" />
            <h4>ESP32-CAM REST API Endpoints</h4>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 bg-neutral-50 rounded border border-neutral-200">
              <div className="text-emerald-800 font-bold">GET http://192.168.4.1/telemetry</div>
              <div className="text-[11px] text-neutral-500 font-sans">Returns JSON: battery %, voltage, and operational mode</div>
            </div>
            <div className="p-2 bg-neutral-50 rounded border border-neutral-200">
              <div className="text-emerald-800 font-bold">GET http://192.168.4.1/set_weed?type=PHALARIS</div>
              <div className="text-[11px] text-neutral-500 font-sans">Sets target weed classifier parameters on ESP32</div>
            </div>
            <div className="p-2 bg-neutral-50 rounded border border-neutral-200">
              <div className="text-emerald-800 font-bold">GET http://192.168.4.1/set_mode?mode=1|2|3</div>
              <div className="text-[11px] text-neutral-500 font-sans">Switches operational spraying behavior</div>
            </div>
          </div>
        </div>
      </div>

      {/* Android Studio Setup Guide */}
      <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
        <h4 className="font-bold text-sm text-[#1B5E20] mb-3 flex items-center space-x-2">
          <CheckSquare className="w-4 h-4" />
          <span>Android Studio Setup Checklist (Empty Views Activity)</span>
        </h4>

        <ol className="space-y-2 text-xs text-neutral-700 list-decimal list-inside">
          <li className="p-2 bg-neutral-50 rounded border border-neutral-100">
            Open Android Studio &rarr; <em>New Project</em> &rarr; select <strong>Empty Views Activity</strong>.
          </li>
          <li className="p-2 bg-neutral-50 rounded border border-neutral-100">
            Set Package Name to <code className="bg-neutral-200 px-1 rounded font-mono">com.agrosave.precisionsprayer</code> and Language to <strong>Kotlin</strong>.
          </li>
          <li className="p-2 bg-neutral-50 rounded border border-neutral-100">
            Replace <code className="font-mono">app/src/main/AndroidManifest.xml</code> with the provided code (with <code className="font-mono text-emerald-800">android:usesCleartextTraffic="true"</code>).
          </li>
          <li className="p-2 bg-neutral-50 rounded border border-neutral-100">
            Replace <code className="font-mono">app/src/main/res/layout/activity_main.xml</code> with the provided bilingual ScrollView layout.
          </li>
          <li className="p-2 bg-neutral-50 rounded border border-neutral-100">
            Replace <code className="font-mono">MainActivity.kt</code>. All network requests run asynchronously in background thread pools.
          </li>
        </ol>
      </div>

    </div>
  );
};
