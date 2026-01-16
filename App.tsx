
import React, { useState, useEffect } from 'react';
import { 
  X, 
  Minus, 
  Square, 
  FolderOpen, 
  Download, 
  CircleStop, 
  Monitor, 
  Cpu,
  Smartphone,
  Info,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  RotateCcw,
  Search,
  Star,
  HardDrive,
  Folder,
  FileText,
  Clock,
  LayoutGrid,
  ChevronDown,
  Check
} from 'lucide-react';
import { TabType, Partition } from './types';
import { INITIAL_PARTITIONS } from './constants';

const SuccessDialog: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/5">
      <div className="w-[300px] bg-white border border-[#a0a0a0] shadow-xl flex flex-col rounded-sm overflow-hidden animate-in fade-in zoom-in duration-150">
        {/* Title Bar */}
        <div className="bg-white h-7 flex items-center justify-between px-2 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-600 rounded-sm flex items-center justify-center">
              <Check size={10} className="text-white" />
            </div>
            <span className="text-[11px] text-gray-700">Download Ok</span>
          </div>
          <button onClick={onClose} className="h-full px-2 hover:bg-red-500 hover:text-white transition-colors">
            <X size={12} />
          </button>
        </div>
        
        {/* Content Area - Cyan Background with Large Check */}
        <div className="h-40 bg-[#00e5ff] flex items-center justify-center relative">
          <div className="w-24 h-24 bg-[#8bc34a] rounded-full flex items-center justify-center border-[6px] border-white shadow-lg">
             <Check size={60} strokeWidth={4} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FileSelector: React.FC<{ isOpen: boolean; onClose: () => void; title: string }> = ({ isOpen, onClose, title }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
      <div className="w-[800px] h-[550px] bg-white border border-[#0067c0] shadow-2xl flex flex-col rounded-sm overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Windows Title Bar */}
        <div className="bg-white h-8 flex items-center justify-between px-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <FolderOpen size={14} className="text-yellow-600" />
            <span className="text-[12px] text-gray-700">{title}</span>
          </div>
          <button onClick={onClose} className="h-full px-4 hover:bg-red-600 hover:text-white transition-colors group">
            <X size={14} className="group-hover:scale-110" />
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="flex items-center gap-2 px-2 py-1 bg-white border-b border-gray-100 h-10">
          <div className="flex items-center gap-1 pr-2 border-r border-gray-200">
            <button className="p-1 hover:bg-gray-100 rounded opacity-40"><ArrowLeft size={16} /></button>
            <button className="p-1 hover:bg-gray-100 rounded opacity-40"><ArrowRight size={16} /></button>
            <button className="p-1 hover:bg-gray-100 rounded"><ChevronDown size={14} /></button>
            <button className="p-1 hover:bg-gray-100 rounded"><ArrowUp size={16} /></button>
          </div>
          
          {/* Address Bar */}
          <div className="flex-1 flex items-center bg-[#f0f0f0] border border-gray-200 rounded-sm px-2 py-0.5 text-[12px] hover:bg-white focus-within:bg-white focus-within:border-blue-500 group">
             <div className="flex items-center gap-1 text-gray-600">
                <HardDrive size={14} />
                <ChevronRight size={12} className="opacity-50" />
                <span>SP Flash tool</span>
                <ChevronRight size={12} className="opacity-50" />
                <span className="font-medium text-black">Firmware</span>
             </div>
             <div className="flex-1"></div>
             <RotateCcw size={12} className="text-blue-500 cursor-pointer" />
          </div>

          {/* Search Bar */}
          <div className="w-48 flex items-center bg-white border border-gray-200 px-2 py-0.5 text-[12px]">
            <span className="text-gray-400 italic flex-1">Search Firmware</span>
            <Search size={14} className="text-gray-400" />
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-4 px-3 py-1 bg-white border-b border-gray-100 text-[12px] text-gray-600">
          <button className="hover:text-blue-600 flex items-center gap-1">Organize <ChevronDown size={10} /></button>
          <button className="hover:text-blue-600 flex items-center gap-1">New folder</button>
          <div className="flex-1"></div>
          <button className="p-1 hover:bg-gray-100 rounded"><LayoutGrid size={14} /></button>
        </div>

        {/* Main Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-44 bg-white border-r border-gray-200 p-2 overflow-y-auto custom-scrollbar space-y-4">
             <div className="space-y-1">
                <div className="flex items-center gap-2 px-2 py-1 text-[11px] font-semibold text-blue-600 hover:bg-blue-50 rounded cursor-default">
                  <Star size={14} fill="currentColor" /> Quick access
                </div>
                <div className="pl-6 space-y-1 text-[11px] text-gray-700">
                   <div className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded">Desktop</div>
                   <div className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded">Downloads</div>
                   <div className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded">Pictures</div>
                </div>
             </div>
             <div className="space-y-1">
                <div className="flex items-center gap-2 px-2 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-100 rounded cursor-default">
                  <HardDrive size={14} /> This PC
                </div>
                <div className="pl-6 space-y-1 text-[11px] text-gray-700">
                   <div className="flex items-center gap-2 p-1 bg-gray-200 rounded font-medium">Desktop</div>
                   <div className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded">Documents</div>
                </div>
             </div>
          </div>

          {/* File List */}
          <div className="flex-1 bg-white p-1 overflow-y-auto custom-scrollbar">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="text-gray-500 border-b border-gray-100">
                <tr>
                  <th className="font-normal p-2 w-[55%]">Name</th>
                  <th className="font-normal p-2">Date modified</th>
                  <th className="font-normal p-2">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  onClick={() => setSelectedFile("MT6761_Android_scatter")}
                  className={`group cursor-default ${selectedFile === "MT6761_Android_scatter" ? 'bg-[#cce8ff]' : 'hover:bg-[#e5f3ff]'}`}
                >
                  <td className="p-2 flex items-center gap-2">
                    <FileText size={16} className="text-gray-400 group-hover:text-blue-500" />
                    <span className="text-gray-800">MT6761_Android_scatter</span>
                  </td>
                  <td className="p-2 text-gray-500">11/12/2019 12:34 PM</td>
                  <td className="p-2 text-gray-500">Text Document</td>
                </tr>
                {/* Dummy folders for filling */}
                <tr className="hover:bg-[#e5f3ff] cursor-default">
                  <td className="p-2 flex items-center gap-2">
                    <Folder size={16} className="text-yellow-500" />
                    <span className="text-gray-800">Logs</span>
                  </td>
                  <td className="p-2 text-gray-500">01/05/2023 09:15 AM</td>
                  <td className="p-2 text-gray-500">File folder</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#f0f0f0] border-t border-gray-200 space-y-3">
          <div className="flex items-center gap-4 text-[12px]">
            <span className="text-gray-600 w-20">File name:</span>
            <div className="flex-1 flex">
               <input 
                 type="text" 
                 value={selectedFile || ""}
                 readOnly
                 className="flex-1 border border-gray-300 bg-white px-2 py-1 outline-none focus:border-blue-500" 
               />
               <select className="border border-l-0 border-gray-300 bg-white px-1 outline-none">
                  <option></option>
               </select>
            </div>
            <div className="flex-1 max-w-[200px] flex">
               <select className="flex-1 border border-gray-300 bg-white px-2 py-1 outline-none text-[11px]">
                  <option>Map File (*.txt *.xml)</option>
                  <option>All Files (*.*)</option>
               </select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button 
              onClick={onClose}
              className="px-8 py-1 bg-[#e1e1e1] border border-[#adadad] text-[12px] hover:bg-[#d5d5d5] active:bg-[#c6c6c6]"
            >
              Open
            </button>
            <button 
              onClick={onClose}
              className="px-8 py-1 bg-[#e1e1e1] border border-[#adadad] text-[12px] hover:bg-[#d5d5d5] active:bg-[#c6c6c6]"
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.DOWNLOAD);
  const [isFlashing, setIsFlashing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [partitions, setPartitions] = useState<Partition[]>(INITIAL_PARTITIONS);
  const [statusText, setStatusText] = useState("USB: DA Download All(high speed,auto detect)");
  const [isFileSelectorOpen, setIsFileSelectorOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [selectorTitle, setSelectorTitle] = useState("Open Scatter File");

  const openSelector = (title: string) => {
    setSelectorTitle(title);
    setIsFileSelectorOpen(true);
  };

  const handleFlash = () => {
    if (isFlashing) return;
    setIsFlashing(true);
    setProgress(0);
    setStatusText("Flashing in progress... (Simulated)");
    setIsSuccessDialogOpen(false);
  };

  const handleStop = () => {
    setIsFlashing(false);
    setProgress(0);
    setStatusText("USB: DA Download All(high speed,auto detect)");
  };

  useEffect(() => {
    let interval: any;
    if (isFlashing && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => Math.min(prev + Math.random() * 8, 100));
      }, 300);
    } else if (progress >= 100 && isFlashing) {
      setIsFlashing(false);
      setStatusText("Download OK");
      setIsSuccessDialogOpen(true);
    }
    return () => clearInterval(interval);
  }, [isFlashing, progress]);

  const togglePartition = (id: string) => {
    setPartitions(prev => prev.map(p => p.id === id ? { ...p, enabled: !p.enabled } : p));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#ccd1d9]">
      
      {/* Fake Windows File Selector */}
      <FileSelector 
        isOpen={isFileSelectorOpen} 
        onClose={() => setIsFileSelectorOpen(false)} 
        title={selectorTitle} 
      />

      {/* Success Dialog */}
      <SuccessDialog 
        isOpen={isSuccessDialogOpen} 
        onClose={() => setIsSuccessDialogOpen(false)} 
      />

      {/* Main Window */}
      <div className="w-[1000px] h-[650px] bg-[#f0f0f0] border border-[#a0a0a0] flex flex-col win-shadow rounded-sm overflow-hidden select-none">
        
        {/* Title Bar */}
        <div className="bg-white px-3 py-1 flex items-center justify-between border-b border-[#d0d0d0]">
          <div className="flex items-center gap-2">
            <Monitor size={16} className="text-[#4a90e2]" />
            <span className="text-sm font-medium text-[#333]">Smart Phone Flash Tool (Runtime Trace Mode)</span>
          </div>
          <div className="flex items-center">
            <button className="p-2 hover:bg-[#e5e5e5] transition-colors"><Minus size={14} /></button>
            <button className="p-2 hover:bg-[#e5e5e5] transition-colors"><Square size={12} /></button>
            <button className="p-2 hover:bg-[#e81123] hover:text-white transition-colors"><X size={14} /></button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="flex px-1 bg-white border-b border-[#d0d0d0] gap-4 py-0.5 text-[12px] text-[#333]">
          <button className="px-2 hover:bg-[#f2f2f2]">File</button>
          <button className="px-2 hover:bg-[#f2f2f2]">Options</button>
          <button className="px-2 hover:bg-[#f2f2f2]">Window</button>
          <button className="px-2 hover:bg-[#f2f2f2]">Help</button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Left Panel: Device Status */}
          <div className="w-64 border-r border-[#d0d0d0] p-6 flex flex-col items-center bg-white">
            <div className="relative w-40 h-80 bg-black rounded-[2rem] border-4 border-[#333] shadow-inner flex flex-col items-center justify-center p-4">
               <div className="absolute top-4 w-12 h-1 bg-[#222] rounded-full"></div>
               <div className="text-orange-500 font-bold text-2xl tracking-tighter mb-4 text-center">MT6761</div>
               <div className="absolute bottom-4 flex gap-2">
                 <div className="w-6 h-2 bg-[#222] rounded-sm"></div>
                 <div className="w-10 h-2 bg-[#222] rounded-sm"></div>
                 <div className="w-6 h-2 bg-[#222] rounded-sm"></div>
               </div>
            </div>
            <div className="mt-6 w-full space-y-2 text-[11px] text-[#666]">
                <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span>Chip Name:</span>
                    <span className="font-semibold text-gray-800 uppercase">MT6761</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span>Chip Version:</span>
                    <span className="font-semibold text-gray-800">0x00000000</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span>EMMC Flash:</span>
                    <span className="font-semibold text-green-600">Detected</span>
                </div>
            </div>
          </div>

          {/* Right Panel: Content */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#f0f0f0]">
            
            {/* Tabs */}
            <div className="flex bg-[#f0f0f0] border-b border-[#d0d0d0] px-2 pt-2">
              {Object.values(TabType).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 text-xs border border-b-0 rounded-t-sm mr-[2px] transition-colors ${
                    activeTab === tab 
                    ? 'bg-white border-[#d0d0d0] relative z-10' 
                    : 'bg-[#e5e5e5] border-[#d0d0d0] hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab View */}
            <div className="flex-1 p-4 overflow-y-auto bg-white m-2 border border-[#d0d0d0] custom-scrollbar">
              {activeTab === TabType.DOWNLOAD && (
                <div className="space-y-4">
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-6 pb-2 border-b border-gray-100">
                    <button 
                        onClick={handleFlash}
                        disabled={isFlashing}
                        className="flex flex-col items-center gap-1 group disabled:opacity-50"
                    >
                      <div className="p-2 rounded hover:bg-green-50 text-green-600 border border-transparent hover:border-green-200 flex flex-col items-center">
                        <Download size={24} />
                        <span className="text-[10px] uppercase font-bold text-gray-600 group-hover:text-green-600">Download</span>
                      </div>
                    </button>
                    <button 
                        onClick={handleStop}
                        className="flex flex-col items-center gap-1 group"
                    >
                      <div className="p-2 rounded hover:bg-red-50 text-red-600 border border-transparent hover:border-red-200 flex flex-col items-center">
                        <CircleStop size={24} />
                        <span className="text-[10px] uppercase font-bold text-gray-600 group-hover:text-red-600">Stop</span>
                      </div>
                    </button>
                  </div>

                  {/* Config Fields */}
                  <div className="space-y-2 text-[11px]">
                    <div className="grid grid-cols-[120px_1fr_80px] items-center gap-2">
                      <span className="text-gray-600">Download-Agent</span>
                      <input 
                        type="text" 
                        readOnly 
                        value="ovatek\SP Flash Tool Version 5.1916 (Windows)\MTK_AllInOne_DA.bin" 
                        className="border border-[#ccc] px-2 py-0.5 bg-gray-50 outline-none" 
                      />
                      <button 
                        onClick={() => openSelector("Open Download-Agent File")}
                        className="flex items-center justify-center gap-1 border border-[#ccc] bg-gray-100 py-0.5 hover:bg-gray-200"
                      >
                        <FolderOpen size={12} className="text-yellow-600" />
                        <span>choose</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-[120px_1fr_80px] items-center gap-2">
                      <span className="text-gray-600">Scatter-loading File</span>
                      <input 
                        type="text" 
                        readOnly 
                        value="C:\Users\Hovatek\Desktop\SP Flash tool\Firmware\MT6761_Android_scatter.txt" 
                        className="border border-[#ccc] px-2 py-0.5 bg-gray-50 outline-none" 
                      />
                      <button 
                        onClick={() => openSelector("Open Scatter File")}
                        className="flex items-center justify-center gap-1 border border-[#ccc] bg-gray-100 py-0.5 hover:bg-gray-200"
                      >
                        <FolderOpen size={12} className="text-yellow-600" />
                        <span>choose</span>
                      </button>
                    </div>
                    <div className="grid grid-cols-[120px_1fr_80px] items-center gap-2">
                      <span className="text-gray-600">Authentication File</span>
                      <input 
                        type="text" 
                        readOnly 
                        value="" 
                        placeholder="Optional"
                        className="border border-[#ccc] px-2 py-0.5 bg-gray-50 outline-none" 
                      />
                      <button 
                        onClick={() => openSelector("Open Authentication File")}
                        className="flex items-center justify-center gap-1 border border-[#ccc] bg-gray-100 py-0.5 hover:bg-gray-200"
                      >
                        <FolderOpen size={12} className="text-yellow-600" />
                        <span>choose</span>
                      </button>
                    </div>

                    <div className="flex items-center pt-2">
                       <select className="border border-[#ccc] text-[11px] px-1 py-0.5 outline-none bg-white min-w-[150px]">
                           <option>Download Only</option>
                           <option>Firmware Upgrade</option>
                           <option>Format All + Download</option>
                       </select>
                    </div>
                  </div>

                  {/* Partition Table */}
                  <div className="border border-[#ccc] overflow-x-auto">
                    <table className="w-full text-left text-[11px] border-collapse min-w-[800px]">
                      <thead className="bg-[#e1e1e1] text-gray-700">
                        <tr>
                          <th className="p-1 border-r border-[#ccc] w-8">
                            <input type="checkbox" checked readOnly />
                          </th>
                          <th className="p-1 border-r border-[#ccc] w-24">Name</th>
                          <th className="p-1 border-r border-[#ccc] w-40">Begin Address</th>
                          <th className="p-1 border-r border-[#ccc] w-40">End Address</th>
                          <th className="p-1 border-r border-[#ccc] w-40">Region</th>
                          <th className="p-1">Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {partitions.map((part) => (
                          <tr 
                            key={part.id} 
                            className={`border-b border-[#eee] ${part.enabled ? 'bg-[#3cb371] text-white' : 'bg-white opacity-60'}`}
                          >
                            <td className="p-1 border-r border-[#ccc] text-center">
                              <input 
                                type="checkbox" 
                                checked={part.enabled} 
                                onChange={() => togglePartition(part.id)} 
                              />
                            </td>
                            <td className="p-1 border-r border-[#ccc] font-medium">{part.name}</td>
                            <td className="p-1 border-r border-[#ccc] font-mono">{part.beginAddress}</td>
                            <td className="p-1 border-r border-[#ccc] font-mono">{part.endAddress}</td>
                            <td className="p-1 border-r border-[#ccc]">{part.region}</td>
                            <td className="p-1 truncate max-w-[200px] italic">{part.location || 'Click to load...'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab !== TabType.DOWNLOAD && (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-2">
                    <Info size={48} />
                    <p className="text-sm font-medium">Feature not implemented in this demo</p>
                    <p className="text-xs">Navigate to the 'Download' tab for the main interface simulation.</p>
                </div>
              )}
            </div>

            {/* Progress Bar Component */}
            <div className="px-2 pb-1">
                 <div className="h-6 w-full bg-[#ddd] border border-[#bbb] relative overflow-hidden">
                    <div 
                        className={`h-full transition-all duration-300 ${isFlashing ? 'bg-yellow-400' : progress === 100 ? 'bg-green-500' : 'bg-gray-300'}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-800 drop-shadow-sm">
                        {isFlashing ? `[recovery] Download Flash ${Math.floor(progress)}%` : progress === 100 ? '[recovery] Download Flash 100%' : ''}
                    </div>
                 </div>
            </div>

          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#f0f0f0] border-t border-[#d0d0d0] px-3 py-1 text-[11px] text-gray-700 grid grid-cols-[100px_100px_150px_80px_1fr] divide-x divide-gray-300 items-center">
          <div className="pr-2">15.25 M/s</div>
          <div className="px-2">32.00M</div>
          <div className="px-2 font-bold flex items-center gap-1">
             EMMC <span className="font-normal text-gray-500 ml-1">High Speed</span>
          </div>
          <div className="px-2">0:06</div>
          <div className="px-2 truncate">
            MediaTek PreLoader USB VCOM Port (COM48)
          </div>
        </div>

      </div>
      
      {/* OS Context Decorations */}
      <div className="fixed bottom-0 left-0 w-full h-10 bg-[#3a3a3a] flex items-center px-4 gap-4 opacity-50 pointer-events-none">
          <Smartphone size={18} className="text-white" />
          <div className="flex-1"></div>
          <div className="text-white text-xs">7:56 AM <br/> 4/24/2019</div>
      </div>
    </div>
  );
};

export default App;
