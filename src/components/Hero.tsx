import { motion } from 'motion/react';
import NexusCore from './NexusCore';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="inline-block px-3 py-1 rounded-full border border-nexus-cyan/30 text-[10px] tracking-[0.2em] font-bold text-nexus-cyan mb-6 uppercase"
          >
            System Status: Optimal • Link Active
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            TRANSCEND THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-cyan to-nexus-violet animate-gradient-x underline decoration-nexus-cyan/20">
              AETHER
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 max-w-xl mb-10 leading-relaxed font-light">
            Welcome to the Nexus. A decentralized architecture for etheric energy exchange, 
            artifact preservation, and multi-dimensional community synchronization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-nexus-cyan text-nexus-dark font-bold text-lg shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all"
            >
              Enter the Hub
            </motion.button>
            <motion.button
              whileHover={{ opacity: 1 }}
              className="px-8 py-4 rounded-full border border-white/20 text-white/70 font-medium text-lg hover:border-white/50 transition-all"
            >
              Read Whitepaper
            </motion.button>
          </div>

          <div className="mt-12 flex items-center gap-10 opacity-30 grayscale justify-center lg:justify-start">
            <div className="text-xs tracking-widest font-bold uppercase">Trusted By</div>
            <div className="flex gap-8 items-center text-xl font-display font-black italic">
              <span>LITHOS</span>
              <span>VOID</span>
              <span>SYNTH</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <NexusCore />
        </motion.div>
      </div>
    </section>
  );
}
