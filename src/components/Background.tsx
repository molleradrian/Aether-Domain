import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-nexus-dark overflow-hidden">
      {/* Primary atmosphere */}
      <div 
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-nexus-cyan/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"
      />
      <div 
        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-nexus-violet/10 rounded-full blur-[120px] mix-blend-screen"
      />
      
      {/* Grain effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-nexus-cyan rounded-full opacity-20"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            scale: Math.random() * 2
          }}
          animate={{ 
            y: [null, '-20%', '120%'],
            opacity: [0, 0.2, 0]
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10
          }}
        />
      ))}
    </div>
  );
}
