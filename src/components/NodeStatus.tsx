import { motion } from 'motion/react';
import { Activity, Radio, Signal, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

const LOG_ENTRIES = [
  { time: 'T-0.001', event: 'Domain Resync Initialized', type: 'system' },
  { time: 'T-0.015', event: 'Cryptographic Handshake Verified', type: 'security' },
  { time: 'T-0.042', event: 'New agent requesting portal entry', type: 'network' },
  { time: 'T-0.089', event: 'Etheric pressure stabilized', type: 'system' },
  { time: 'T-0.124', event: 'Manifesting digital assets...', type: 'action' },
];

export default function NodeStatus() {
  const [activeNodes, setActiveNodes] = useState(1);
  const [logs, setLogs] = useState(LOG_ENTRIES);

  useEffect(() => {
    // Simulate real-time network fluctuations
    const interval = setInterval(() => {
      setActiveNodes(prev => {
        const variance = Math.random() > 0.5 ? 1 : -1;
        const next = prev + variance;
        return next > 0 && next < 1000 ? next : prev;
      });

      if (Math.random() > 0.8) {
        const newLog = {
          time: `T-${(Math.random() * 0.9).toFixed(3)}`,
          event: ['Sub-routing enabled', 'Packet collision avoided', 'Quantum lattice updated', 'Squarespace webhook pinged'][Math.floor(Math.random() * 4)],
          type: ['system', 'network', 'security', 'action'][Math.floor(Math.random() * 4)]
        };
        setLogs(prev => [newLog, ...prev].slice(0, 5));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Node Telemetry */}
        <div className="glass p-8 rounded-3xl lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="text-nexus-cyan w-6 h-6" />
            <h3 className="font-display font-bold text-xl tracking-wide">NODE TELEMETRY</h3>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-mono text-white/50 mb-2">
                <span>Core Temperature</span>
                <span className="text-nexus-cyan">34°C</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '45%' }}
                  className="bg-nexus-cyan h-1 rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-white/50 mb-2">
                <span>Etheric Bridge Capacity</span>
                <span className="text-nexus-violet">88%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '88%' }}
                  className="bg-nexus-violet h-1 rounded-full"
                />
              </div>
            </div>

             <div>
              <div className="flex justify-between text-xs font-mono text-white/50 mb-2">
                <span>Active Linkages</span>
                <span className="text-yellow-400">{activeNodes}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Global Mesh */}
        <div className="glass p-8 rounded-3xl lg:col-span-2 flex flex-col relative overflow-hidden">
          {/* Background Map Simulation */}
          <div className="absolute top-0 right-0 p-10 opacity-10">
             <Signal className="w-64 h-64 animate-pulse" />
          </div>

          <div className="flex items-center gap-3 mb-8 relative z-10">
            <Radio className="text-nexus-cyan w-6 h-6" />
            <h3 className="font-display font-bold text-xl tracking-wide">STREAM LOG</h3>
          </div>

          <div className="flex-1 flex flex-col justify-end gap-3 font-mono text-sm relative z-10">
             {logs.map((log, i) => (
                <motion.div 
                  key={`${log.time}-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex gap-4 p-2 rounded bg-white/5 border-l-2 ${
                    log.type === 'system' ? 'border-nexus-cyan text-nexus-cyan' :
                    log.type === 'security' ? 'border-red-400 text-red-400' :
                    log.type === 'network' ? 'border-nexus-violet text-nexus-violet' :
                    'border-yellow-400 text-yellow-400'
                  }`}
                >
                  <span className="opacity-50 w-24 flex-shrink-0">{log.time}</span>
                  <span className="truncate">{log.event}</span>
                </motion.div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
