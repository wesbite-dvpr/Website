import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: 'Assets Under Management', value: '$8.5B+' },
    { label: 'Active Continents', value: '3' },
    { label: 'Portfolio Companies', value: '42' },
    { label: 'Years of Heritage', value: '65+' },
  ];

  return (
    <section id="heritage" className="py-24 lg:py-32 bg-brand-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-100 rounded-bl-[200px] -z-10 opacity-50 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4 flex items-center">
              <span className="w-8 h-px bg-gold-500 mr-4"></span>
              The Heritage
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-900 leading-tight mb-8">
              A Legacy of Unlocking Sovereign Value
            </h3>
            
            <div className="space-y-6 text-gray-600 font-light text-lg">
              <p>
                Founded on the principles of immense scale and multi-generational endurance, Omnix Capital has forged a path as the premier bridge between African momentum and global institutional capital.
              </p>
              <p>
                As a trusted partner to sovereign wealth funds, elite family offices, and top-tier endowments, we deploy capital with surgical precision—targeting structural imbalances and immense growth vectors across the continent's most critical sectors.
              </p>
              <p className="border-l-2 border-gold-500 pl-6 my-8 py-2 italic text-gray-900 font-serif text-xl">
                "We do not simply invest in markets; we build the core economic architecture that defines them."
              </p>
            </div>
            
            <div className="mt-10">
              <a href="#contact" className="inline-flex font-medium text-brand-900 uppercase tracking-widest text-sm hover:text-gold-600 transition-colors items-center group">
                Discover Our History
                <span className="block w-8 h-px bg-brand-900 ml-4 group-hover:bg-gold-600 group-hover:w-12 transition-all duration-300"></span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-px bg-gray-200 p-px"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 md:p-12 flex flex-col justify-center text-center">
                <span className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-2">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
