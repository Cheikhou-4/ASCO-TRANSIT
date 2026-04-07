import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Expertise from './components/Expertise/Expertise';
import StudiesTraining from './components/StudiesTraining/StudiesTraining';
import WhyUs from './components/WhyUs/WhyUs';
import StudioIA from './components/StudioIA/StudioIA';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsApp from './components/WhatsApp/WhatsApp';

export default function App() {
  return (
    <div className="app">
      <div className="app__bar" aria-hidden="true" />
      <Navbar />
      <Hero />
      <Services />
      <Expertise />
      <StudiesTraining />
      <StudioIA />
      <WhyUs />
      <Contact />
      <WhatsApp />
      <Footer />
    </div>
  );
}
