import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-brand-900/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center md:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center space-x-2 text-gold-500 mb-6 font-medium tracking-widest text-sm uppercase">
            <span className="w-10 h-px bg-gold-500"></span>
            <span>Institutional Asset Management</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            Building Multi-Generational <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Value & Scale.</span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light max-w-2xl md:leading-relaxed mb-10">
            Bridging vast African potential with global capital markets through strategic infrastructure and industrial investment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#expertise" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-900 bg-gold-500 hover:bg-gold-600 transition-colors w-full sm:w-auto uppercase tracking-wide"
            >
              Our Expertise
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
            <a 
              href="#heritage" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto uppercase tracking-wide"
            >
              The Heritage
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll to explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </div>
  );
}
