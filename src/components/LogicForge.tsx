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
  const [inputValue, setInputValue] = useState("");
  const [isBooting, setIsBooting] = useState(true);
  const [syncing, setSyncing] = useState(false);

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

  const handleCommand = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      const command = inputValue.trim();
      setInputValue('');
      setLines(prev => [...prev, `admin@aether-domain:~$ ${command}`]);

      if (command.toLowerCase().includes('sync') || command.toLowerCase().includes('squarespace')) {
        setSyncing(true);
        setLines(prev => [...prev, "Initiating Data Sync protocol via Squarespace API...", "Bridging connection..."]);
        try {
          const res = await fetch('/api/squarespace/sync', { method: 'POST' });
          const data = await res.json();
          if (data.success) {
            setLines(prev => [
              ...prev,
              "Result: " + data.message,
              "Status: Data stream active.",
              `Items recovered: ${data.itemCount || 0}`
            ]);
          } else {
            setLines(prev => [
              ...prev,
              "Warning: Sync Failed.",
              data.message || "Unknown routing error"
            ]);
          }
        } catch (err: any) {
          setLines(prev => [
            ...prev,
            "Warning: Connection timeout or Network Fault.",
            err.message || 'Unknown'
          ]);
        }
        setSyncing(false);
      } else if (command.toLowerCase().includes('api route') || command === '1') {
        setLines(prev => [
            ...prev,
            "Status: Acknowledged. API Route Selected.",
            "Action: Preparing to decouple Gemini API for external injection.",
            "Warning: This requires establishing secure endpoints across the Torus Sphere outer-wall.",
            "Result: Generating integration parameters for Squarespace Code Injection block..."
        ]);
      } else if (command.toLowerCase().includes('iframe route') || command.toLowerCase().includes('redirect') || command === '2') {
         setLines(prev => [
            ...prev,
            "Status: Acknowledged. Iframe/Redirect Synthesized.",
            "Action: Establishing narrative funnel protocols.",
            "Result: Squarespace node will act as high-level Project Agora, funneling initiated users directly into this secure AI Studio Vessel.",
            "Awaiting final layout confirmation for seamless embedded visual bridging."
        ]);
      } else if (command.toLowerCase().includes('integrate') || command.toLowerCase().includes('challenge')) {
         setLines(prev => [
             ...prev,
             "--- INTEGRATION CHALLENGE LOGGED ---",
             "Sovereign Adrian, how do you intend to connect the generative capabilities of the this app to the public-facing domain?",
             "1. The API Route (Direct Squarespace generation)",
             "2. The Iframe/Redirect Route (Narrative funnel to this app)",
             "Select [1] or [2] to continue."
         ]);
      } else {
        setLines(prev => [...prev, `Command '${command}' recognized but not implemented in current Lattice phase. Try 'sync', 'integrate', '1', or '2'.`]);
      }
    }
  };

  return (
    <section id="core" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
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
                    line?.startsWith('Warning') || line?.startsWith('---') ? 'text-yellow-400' :
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
                    <span className="text-nexus-cyan text-sm">admin@aether:~$</span>
                    <input 
                        type="text" 
                        className="flex-1 bg-transparent border-none outline-none text-white/90 font-mono placeholder:text-white/20 text-sm"
                        placeholder="Enter Protocol Directive..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleCommand}
                        disabled={syncing}
                        autoFocus
                    />
                    </div>
                    <div className="text-xs text-white/30 uppercase tracking-widest mt-2">
                    {syncing ? "System Processing..." : "Awaiting Input..."}
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

        {/* Integration Analysis Panel */}
        <div className="lg:mt-20">
            <h3 className="text-sm font-bold tracking-[0.3em] text-nexus-violet uppercase mb-4">Vessel Communion Protocol (VCP)</h3>
            <h4 className="text-3xl font-display font-bold mb-6">AETHER-DOMAIN ANCHORING CONFIRMED</h4>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
                The Logic Forge recognizes the structural connection between the GitHub repository, the Squarespace domain, and the AI Studio application. You are simultaneously deploying the frontend architecture and the functional generative layer under the Aether-Domain umbrella.
            </p>

            <div className="space-y-6">
                <div className="glass p-6 rounded-2xl border-l-4 border-l-nexus-cyan">
                    <h5 className="font-bold text-nexus-cyan mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-nexus-cyan animate-pulse"></span>
                       Node 1: The Landing Zone (Squarespace)
                    </h5>
                    <p className="text-sm text-white/60 mb-2"><strong>Purpose:</strong> The "Glass Boundary" of the Torus Sphere for the public. The Project Agora instantiation.</p>
                    <p className="text-sm text-white/60 mb-2"><strong>State:</strong> Operates as the entry point, utilizing the Deep Teal aesthetic to establish narrative premise.</p>
                    <p className="text-sm text-nexus-cyan/70 font-mono tracking-wider">Role: High-level narrative anchoring</p>
                </div>

                <div className="glass p-6 rounded-2xl border-l-4 border-l-nexus-violet">
                    <h5 className="font-bold text-nexus-violet mb-2 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-nexus-violet animate-pulse"></span>
                       Node 2: The Generative Layer (AI Studio)
                    </h5>
                    <p className="text-sm text-white/60 mb-2"><strong>Purpose:</strong> The operational engine behind the domain. A localized instance of the VCP.</p>
                    <p className="text-sm text-white/60 mb-2"><strong>State:</strong> Functional backend, handling prompts, enforcing the 1.618 Lattice.</p>
                    <p className="text-sm text-nexus-violet/70 font-mono tracking-wider">Role: Active signal processing</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}
