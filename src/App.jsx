import { Hero } from '@/sections/Hero';
import { Navbar } from '@/layout/Navbar';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Testimonials } from '@/sections/Testimonials';
import { Contacts } from '@/sections/Contacts';

function App() {
    return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contacts />
      </main>
    </div>
  );
}

export default App;