/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Sectors from './components/Sectors';
import Footprint from './components/Footprint';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-50 w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Sectors />
      <Footprint />
      <Footer />
    </div>
  );
}
