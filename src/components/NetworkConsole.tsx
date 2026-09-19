import React from 'react';
import { Terminal, Trash2, ArrowUpRight, CheckCircle2, XCircle } from 'lucide-react';
import { NetworkLog } from '../types';

interface NetworkConsoleProps {
  logs: NetworkLog[];
  onClearLogs: () => void;
}

export const NetworkConsole: React.FC<NetworkConsoleProps> = ({ logs, onClearLogs }) => {
  return (
    <div id="network-console-container" className="bg-neutral-900 rounded-2xl border border-neutral-800 shadow-md flex flex-col h-full overflow-hidden">
      {/* Console Header */}
      <div className="bg-neutral-950 px-3.5 py-2.5 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-neutral-200">
            HTTP REQUEST INSPECTOR (HttpURLConnection)
          </span>
          <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-800/40">
            {logs.length} calls
          </span>
        </div>

        <button
          onClick={onClearLogs}
          className="text-neutral-400 hover:text-red-400 transition-colors p-1 rounded hover:bg-neutral-800"
          title="Clear request history"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Log Feed */}
      <div className="flex-1 overflow-y-auto p-2.5 font-mono text-xs space-y-1.5 scrollbar-thin">
        {logs.length === 0 ? (
          <div className="h-28 flex flex-col items-center justify-center text-neutral-500 text-xs italic">
            <span>Press the Manual Spray button or toggle Auto Mode to dispatch HTTP commands...</span>
          </div>
        ) : (
          logs.map((log) => (
            <div
              key={log.id}
              className="bg-neutral-950/70 border border-neutral-800/80 hover:border-neutral-700 rounded-lg p-2 flex items-start justify-between text-[11px] gap-2 transition-all"
            >
              <div className="flex items-start space-x-2 min-w-0">
                <span className="text-neutral-500 text-[10px] pt-0.5 shrink-0">
                  {log.timestamp}
                </span>

                <span className="bg-emerald-900/60 text-emerald-300 font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0">
                  {log.method}
                </span>

                <div className="min-w-0">
                  <div className="text-neutral-200 truncate font-semibold">
                    {log.url}
                  </div>
                  <div className="text-neutral-400 text-[10px] truncate">
                    {log.message}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1.5 shrink-0 text-[10px]">
                {log.status === 'SUCCESS' ? (
                  <span className="flex items-center text-emerald-400 font-bold">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {log.statusCode || 200} OK
                  </span>
                ) : (
                  <span className="flex items-center text-red-400 font-bold">
                    <XCircle className="w-3 h-3 mr-1" />
                    ERR
                  </span>
                )}
                <span className="text-neutral-500 font-mono">
                  {log.durationMs}ms
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Info */}
      <div className="bg-neutral-950 px-3 py-1.5 border-t border-neutral-800 text-[10px] text-neutral-400 flex items-center justify-between">
        <span>Executed asynchronously in <code className="text-emerald-400">Executors.newSingleThreadExecutor()</code></span>
        <span>UI Thread Safe</span>
      </div>
    </div>
  );
};
