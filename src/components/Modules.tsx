import { motion } from 'motion/react';
import { Shield, Zap, Database, Globe, Cpu, Radio } from 'lucide-react';

const MODULES = [
  {
    title: 'Artifact Shielding',
    desc: 'Quantum-encrypted preservation for all high-value etheric artifacts.',
    icon: Shield,
    color: 'text-nexus-cyan'
  },
  {
    title: 'Energy Stream',
    desc: 'Real-time synchronization of multidimensional data flow.',
    icon: Zap,
    color: 'text-yellow-400'
  },
  {
    title: 'Void Storage',
    desc: 'Infinite-capacity decentralized storage across the dark ether layers.',
    icon: Database,
    color: 'text-nexus-violet'
  },
  {
    title: 'Global Mesh',
    desc: 'Connect with agents across any known physical or digital coordinate.',
    icon: Globe,
    color: 'text-blue-400'
  },
  {
    title: 'Synth Core',
    desc: 'Automated synthesis of synthetic and organic data streams.',
    icon: Cpu,
    color: 'text-emerald-400'
  },
  {
    title: 'Broadcast Hub',
    desc: 'High-frequency narrow-casting to verified Nexus delegates.',
    icon: Radio,
    color: 'text-pink-400'
  }
];

export default function Modules() {
  return (
    <section id="artifacts" className="py-32 px-6 bg-white/5 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-nexus-cyan uppercase mb-4">Core Architecture</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">INTEGRATED NEXUS MODULES</h3>
          </div>
          <p className="text-white/40 max-w-sm text-sm leading-relaxed">
            Every module in the Aetherium Nexus is designed for maximum efficiency, security, and interoperability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <mod.icon className={`w-7 h-7 ${mod.color}`} />
              </div>
              <h4 className="text-xl font-bold mb-3 font-display tracking-tight">{mod.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-6 font-light">
                {mod.desc}
              </p>
              <div className="flex items-center gap-2 text-nexus-cyan text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                Configure Module <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
