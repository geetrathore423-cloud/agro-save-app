import React, { useState } from 'react';
import { Copy, Check, FileCode, Download, ExternalLink, Terminal } from 'lucide-react';
import { ANDROID_FILES } from '../data/androidCode';
import { CodeFile } from '../types';

export const CodeViewer: React.FC = () => {
  const [selectedFileId, setSelectedFileId] = useState<string>('mainactivity');
  const [copied, setCopied] = useState<boolean>(false);

  const activeFile: CodeFile = ANDROID_FILES.find(f => f.id === selectedFileId) || ANDROID_FILES[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeFile.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownload = () => {
    const blob = new Blob([activeFile.code], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = activeFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="code-viewer-container" className="flex flex-col h-full bg-neutral-900 rounded-2xl border border-neutral-800 shadow-xl overflow-hidden">
      {/* File Tabs Header */}
      <div className="bg-neutral-950 px-3 pt-3 border-b border-neutral-800 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-1 overflow-x-auto pb-2 scrollbar-thin">
          {ANDROID_FILES.map((file) => {
            const isSelected = file.id === selectedFileId;
            return (
              <button
                key={file.id}
                id={`tab-${file.id}`}
                onClick={() => setSelectedFileId(file.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center space-x-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-[#1B5E20] text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                <FileCode className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-300' : 'text-neutral-500'}`} />
                <span>{file.name}</span>
              </button>
            );
          })}
        </div>

        {/* Action Buttons: Copy & Download */}
        <div className="flex items-center space-x-2 pb-2">
          <button
            id="btn-copy-code"
            onClick={handleCopy}
            className="flex items-center space-x-1.5 bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors shadow"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>

          <button
            id="btn-download-file"
            onClick={handleDownload}
            className="flex items-center space-x-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs px-2.5 py-1.5 rounded-lg transition-colors border border-neutral-700"
            title="Download file"
          >
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* File Path & Description Bar */}
      <div className="bg-neutral-900/90 px-4 py-2 border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
        <div className="flex items-center space-x-2 truncate">
          <span className="text-neutral-500 font-mono">Location:</span>
          <code className="text-emerald-400 font-mono bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800 truncate">
            {activeFile.path}
          </code>
        </div>
        <span className="text-[11px] text-neutral-500 hidden sm:inline-block">
          {activeFile.description}
        </span>
      </div>

      {/* Syntax Code Editor View */}
      <div className="flex-1 overflow-auto bg-[#0d1117] p-4 text-xs font-mono text-neutral-200 leading-relaxed scrollbar-thin">
        <pre className="overflow-x-auto">
          <code>
            {activeFile.code.split('\n').map((line, idx) => (
              <div key={idx} className="flex hover:bg-neutral-800/40 px-1 py-0.5 rounded">
                <span className="w-10 select-none text-neutral-600 text-right pr-4 shrink-0 font-mono">
                  {idx + 1}
                </span>
                <span className="whitespace-pre flex-1">
                  {line}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Bottom helper footnote */}
      <div className="bg-neutral-950 px-4 py-2 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500">
        <span>Language: <strong className="text-neutral-300 uppercase">{activeFile.language}</strong></span>
        <span>Ready for Android Studio (Empty Views Activity)</span>
      </div>
    </div>
  );
};
