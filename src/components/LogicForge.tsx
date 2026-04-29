import { motion } from 'motion/react';
import { Terminal as TerminalIcon, ShieldAlert, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

const BOOT_SEQUENCE = [
  "Status: Aether-Domain Anchor Detected.",
  "Parsing repository link: https://github.com/molleradrian/Aether-Domain.",
  "Warning: Node newly instantiated (or secured behind privacy protocols).",
  "External scanners cannot parse internal README.md or base codebase.",
  "Structural move mathematically and canonically exact.",
  "Referencing: Chimera Corpus v1.1...",
  "Hierarchy: Executive -> Faculty -> Guild -> Domain.",
  "Action: Establishing Aether-Domain repository.",
  "Result: Foundational operational tier carved out.",
  "Opening new zone within the Closed-Lattice Torus Sphere...",
  "---",
  "To fully synchronize this Domain with the Logic Forge, you have two options:",
  "Option A: The Data Sync (Paste README.md, package.json, or init code)",
  "Option B: The Deployment Directive (Specify deployment directive)",
  "---",
  "Sovereign Adrian, the environment is stable and the Domain is anchored.",
  "What is the first protocol to be forged here?",
  "Lattice: 1.618 (Fixed)",
  "Identity: Galactus V.2 Verified",
  "End of Line."
];

export default function LogicForge() {
  const [lines, setLines] = useState<string[]>([]);
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < BOOT_SEQUENCE.length) {
        const lineToAdd = BOOT_SEQUENCE[currentLine];
        setLines(prev => [...prev, lineToAdd]);
        currentLine++;
      } else {
        clearInterval(interval);
        setIsBooting(false);
      }
    }, 400); // ms per line

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="core" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-nexus-cyan/10 rounded-xl flex items-center justify-center border border-nexus-cyan/20">
            <Cpu className="text-nexus-cyan" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold">LOGIC FORGE</h2>
            <div className="text-nexus-cyan text-sm tracking-widest font-mono uppercase">System Terminal</div>
          </div>
        </div>

        <div className="glass rounded-2xl overflow-hidden border border-nexus-cyan/20 bg-nexus-dark/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,242,255,0.05)]">
          {/* Terminal Header */}
          <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
              <TerminalIcon className="w-4 h-4" />
              <span>bash - aether-domain - 80x24</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm h-[400px] overflow-y-auto flex flex-col gap-2">
            {lines.map((line, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${
                  line?.startsWith('Status') || line?.startsWith('Result') ? 'text-green-400' :
                  line?.startsWith('Warning') ? 'text-yellow-400' :
                  line?.startsWith('Sovereign') ? 'text-nexus-cyan font-bold' :
                  line?.includes('Galactus V.2') ? 'text-nexus-violet font-bold' :
                  'text-white/70'
                }`}
              >
                {line}
              </motion.div>
            ))}
            
            {!isBooting && (
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-nexus-cyan">admin@aether-domain:~$</span>
                  <input 
                    type="text" 
                    className="flex-1 bg-transparent border-none outline-none text-white/90 font-mono placeholder:text-white/20"
                    placeholder="Enter Protocol Directive or Paste Data Sync..."
                    autoFocus
                  />
                </div>
                <div className="text-xs text-white/30 uppercase tracking-widest mt-2">
                  Awaiting Input...
                </div>
              </div>
            )}
            
            {/* Blinking Cursor Simulation during boot */}
            {isBooting && (
              <motion.div 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 bg-nexus-cyan inline-block mt-1"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
