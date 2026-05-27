import { motion } from 'motion/react';
import { Building2, Globe2, Briefcase, Cpu, ShieldCheck } from 'lucide-react';

const sectors = [
  {
    title: 'Core Infrastructure',
    description: 'Transformative large-scale projects encompassing energy, transportation, and logistics that power continental growth and economic connectivity.',
    image: 'https://images.unsplash.com/photo-1541888086225-f6740f9eec46?q=80&w=2070&auto=format&fit=crop',
    icon: Building2,
  },
  {
    title: 'Financial Services',
    description: 'Strategic investments in banking, insurance, and institutional capital systems creating resilient economic foundations across emerging markets.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    icon: Briefcase,
  },
  {
    title: 'Industrial & Manufacturing',
    description: 'Scaling heavy industries and essential manufacturing capabilities to localize production and secure critical supply chains.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop',
    icon: ShieldCheck,
  },
  {
    title: 'Digital & Technology',
    description: 'Accelerating digital transformation through telecommunications infrastructure, data centers, and enterprise technology platforms.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    icon: Cpu,
  }
];

export default function Sectors() {
  return (
    <section id="expertise" className="py-24 lg:py-32 bg-white text-brand-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-gold-500 text-sm font-medium tracking-widest uppercase mb-4 flex items-center">
              <span className="w-8 h-px bg-gold-500 mr-4"></span>
              Our Sectors
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-900 leading-tight">
              Strategic Allocation Across High-Yield Verticals
            </h3>
          </div>
          <p className="text-gray-600 max-w-md text-lg font-light md:text-right">
            We deploy patient capital into cornerstone industries, fostering resilience and long-term alpha across interconnected global economies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <motion.div 
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-6 overflow-hidden bg-gray-100">
                  <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-900/80 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20 text-white">
                    <Icon className="w-8 h-8 opacity-70 group-hover:opacity-100 group-hover:text-gold-500 transition-colors" />
                  </div>
                </div>
                <h4 className="text-xl font-serif font-semibold mb-3 group-hover:text-gold-600 transition-colors">
                  {sector.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
