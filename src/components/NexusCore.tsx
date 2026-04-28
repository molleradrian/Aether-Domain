import { motion } from 'motion/react';

export default function NexusCore() {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
      {/* Central Core */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-32 h-32 md:w-52 md:h-52 bg-nexus-cyan rounded-full blur-[60px] opacity-20"
      />
      
      {/* Inner Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute w-full h-full border border-nexus-cyan/20 rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-nexus-cyan rounded-full blur-[2px] shadow-[0_0_15px_#00f2ff]" />
      </motion.div>

      {/* Middle Ring (Dashed) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[85%] h-[85%] border border-dashed border-nexus-violet/30 rounded-full"
      />

      {/* Outer Geometric Frame */}
      <motion.div 
        animate={{ rotate: 180 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[110%] h-[110%] flex items-center justify-center"
      >
        <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 w-1/4 h-1/4 border-t border-l border-nexus-cyan/40" />
            <div className="absolute top-0 right-0 w-1/4 h-1/4 border-t border-r border-nexus-cyan/40" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 border-b border-l border-nexus-cyan/40" />
            <div className="absolute bottom-0 right-0 w-1/4 h-1/4 border-b border-r border-nexus-cyan/40" />
        </div>
      </motion.div>

      {/* Core Cube/Hexagon */}
      <motion.div
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 md:w-24 md:h-24 glass flex items-center justify-center border border-nexus-cyan rotate-45"
      >
        <div className="w-8 h-8 md:w-12 md:h-12 border border-nexus-cyan/50" />
      </motion.div>
    </div>
  );
}
