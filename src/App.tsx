/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modules from './components/Modules';
import Background from './components/Background';
import { Twitter, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-nexus-cyan selection:text-nexus-dark">
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        
        <Modules />

        {/* CTA Section */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">READY TO LINK?</h2>
            <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
              Join thousands of agents already connected to the Aetherium Nexus. 
              Secure your place in the new etheric economy today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-5 rounded-full bg-white text-nexus-dark font-black text-xl flex items-center gap-3 mx-auto shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all"
            >
              GET STARTED
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
          
          {/* Subtle decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nexus-violet/10 rounded-full blur-[150px] -z-10" />
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 relative bg-black/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="font-display font-bold text-2xl tracking-tight mb-6">AETHERIUM NEXUS</div>
            <p className="text-white/40 max-w-xs leading-relaxed font-light mb-8">
              A futuristic synchronization hub for decentralized energy and data exchange. 
              Built for the next era of high-frequency interaction.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-nexus-cyan transition-colors group">
                  <Icon className="w-5 h-5 text-white/50 group-hover:text-nexus-dark" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm tracking-widest uppercase">Ecosystem</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-nexus-cyan">Documentation</a></li>
              <li><a href="#" className="hover:text-nexus-cyan">Artifacts</a></li>
              <li><a href="#" className="hover:text-nexus-cyan">Nexus API</a></li>
              <li><a href="#" className="hover:text-nexus-cyan">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm tracking-widest uppercase">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/40">
              <li><a href="#" className="hover:text-nexus-cyan">About Hub</a></li>
              <li><a href="#" className="hover:text-nexus-cyan">Journal</a></li>
              <li><a href="#" className="hover:text-nexus-cyan">Careers</a></li>
              <li><a href="#" className="hover:text-nexus-cyan">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] tracking-widest font-bold uppercase text-white/20">
          <div>© 2026 AETHERIUM NEXUS • ALL RIGHTS RESERVED</div>
          <div className="flex gap-10">
            <span>Uptime: 99.99%</span>
            <span>Network: Stable</span>
            <span>Region: Global-Alpha</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
