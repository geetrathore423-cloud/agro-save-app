export interface CodeFile {
  id: string;
  name: string;
  path: string;
  language: string;
  description: string;
  code: string;
}

export interface NetworkLog {
  id: string;
  timestamp: string;
  method: 'GET' | 'POST';
  url: string;
  status: 'PENDING' | 'SUCCESS' | 'ERROR';
  statusCode?: number;
  durationMs?: number;
  message: string;
}

export type OperationalSprayMode = 1 | 2 | 3;
export type Esp32Mode = 'CROP' | 'WEED' | 'crop' | 'weed' | 'universal';

export interface Esp32HardwareStatus {
  battery?: number | null;
  battery_level?: number | null;
  mode: Esp32Mode | string;
  relay?: boolean;
  ir_triggered?: boolean;
  isOnline: boolean;
  lastUpdated?: string;
  error?: string;
}

export interface CropLifecycle {
  weedicideDay: number;       // Days after sowing for 1st weedicide spray
  weedicideNameEn: string;
  weedicideNameHi: string;
  fertilizerDay: number;      // Days after sowing for 1st fertilizer application
  fertilizerNameEn: string;
  fertilizerNameHi: string;
  secondPesticideDay: number; // Days after sowing for 2nd disease/pest prevention
  secondPesticideNameEn: string;
  secondPesticideNameHi: string;
  harvestDay: number;         // Days after sowing for harvest maturity
}

export interface CropItem {
  id: string;
  code: string;
  nameEn: string;
  nameHi: string;
  emoji: string;
  standardDosageLitersPerHectare: number; // e.g., 2.5 L/Ha for wheat
  lifecycle: CropLifecycle;
}

export interface WeatherAdvisoryData {
  temperatureC: number;
  humidityPercent: number;
  windSpeedKmh: number;
  rainChancePercent: number;
  isSafeToSpray: boolean;
  advisoryEn: string;
  advisoryHi: string;
  safetyLockActive: boolean;
}

export interface WeedItem {
  id: string;
  code: string;
  nameEn: string;
  nameHi: string;
  scientificName: string;
}

export interface TelemetryData {
  batteryPercent: number;
  voltageVolts: number;
  isLowBattery: boolean;
  tankLevelPercent: number;
  flowRateLpm: number;
  isOnline: boolean;
}

export interface WeedDetection {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  confidence: number;
  isWeed: boolean;
}

export interface AiDoctorRemedy {
  id: string;
  keywords: string[];
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
  recommendedChemical: string;
  recommendedDosage: string;
  modeTipHi: string;
  modeTipEn: string;
}
