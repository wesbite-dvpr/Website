import { motion } from 'motion/react';

export default function Footprint() {
  return (
    <section id="global-scale" className="py-24 lg:py-32 bg-brand-900 text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518182170546-076616fdcbbe?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4 flex items-center justify-center">
            <span className="w-8 h-px bg-gold-500 mr-4"></span>
            Global Scale
            <span className="w-8 h-px bg-gold-500 ml-4"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight">
            Connecting African Momentum to Global Liquidity
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-8 md:pt-0 md:px-8"
          >
            <h4 className="text-gold-500 font-serif text-2xl mb-4">Casablanca / Lagos</h4>
            <p className="text-gray-400 font-light">The operational centers. Sourcing proprietary deal flow, maintaining regulatory relationships, and driving operational excellence natively.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-8 md:pt-0 md:px-8"
          >
            <h4 className="text-gold-500 font-serif text-2xl mb-4">London / Geneva</h4>
            <p className="text-gray-400 font-light">The capital pipelines. Fostering institutional relations, structuring complex syndications, and bridging sovereign wealth.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 md:pt-0 md:px-8"
          >
            <h4 className="text-gold-500 font-serif text-2xl mb-4">New York / Dubai</h4>
            <p className="text-gray-400 font-light">The strategic anchors. Facilitating macroeconomic scale, technological transfer, and global portfolio deployment.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
