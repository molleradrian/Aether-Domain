import { motion } from 'motion/react';
import { Menu, X, Hexagon } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-nexus-cyan/10 rounded-lg flex items-center justify-center border border-nexus-cyan/20">
            <Hexagon className="w-6 h-6 text-nexus-cyan animate-pulse" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">AETHERIUM NEXUS</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Artifacts', 'Nexus Feed', 'Core', 'Connect'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/50 hover:text-nexus-cyan transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 rounded-full bg-nexus-cyan text-nexus-dark text-sm font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] transition-all"
          >
            JOIN HUB
          </motion.button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-white/5"
        >
          <div className="flex flex-col gap-4 p-6">
            {['Artifacts', 'Nexus Feed', 'Core', 'Connect'].map((item) => (
              <a key={item} href="#" className="text-lg font-medium text-white/70 hover:text-nexus-cyan">
                {item}
              </a>
            ))}
            <button className="w-full py-3 rounded-xl bg-nexus-cyan text-nexus-dark font-bold">
              JOIN HUB
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
