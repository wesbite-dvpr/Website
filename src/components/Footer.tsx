export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a101d] text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-white mb-6 block">
              OMNIX<span className="text-gold-500">.</span> CAPITAL
            </span>
            <p className="text-gray-400 font-light max-w-sm mb-8 leading-relaxed">
              Institutional asset management dedicated to building multi-generational scale across core African economies and global markets.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors uppercase tracking-wider text-xs font-medium">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors uppercase tracking-wider text-xs font-medium">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors uppercase tracking-wider text-xs font-medium">Investor Portal</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif uppercase tracking-widest text-sm mb-6">Offices</h4>
            <ul className="space-y-4 font-light text-gray-400">
              <li>
                <span className="block text-white font-medium mb-1">London</span>
                15 St. James's Square<br />
                London SW1Y 4LB
              </li>
              <li className="pt-2">
                <span className="block text-white font-medium mb-1">Casablanca</span>
                Casablanca Finance City<br />
                Tour CFC, 25th Floor
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif uppercase tracking-widest text-sm mb-6">Inquiries</h4>
            <ul className="space-y-4 font-light text-gray-400">
              <li>
                <span className="block text-white font-medium mb-1">Investor Relations</span>
                <a href="mailto:ir@omnixcapital.com" className="hover:text-gold-500 transition-colors">ir@omnixcapital.com</a>
              </li>
              <li className="pt-2">
                <span className="block text-white font-medium mb-1">Media</span>
                <a href="mailto:media@omnixcapital.com" className="hover:text-gold-500 transition-colors">media@omnixcapital.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Omnix Capital Partners. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Regulatory Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
