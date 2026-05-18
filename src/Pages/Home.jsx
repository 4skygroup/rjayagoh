import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Frais from '../components/Frais';
import Process from '../components/Process';
import Avantages from '../components/Avantages';
import Entreprises from '../components/Entreprises';
import FAQ from '../components/Faq.jsx';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppBtn from '../components/WhatsAppBtn';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Frais />
      <Process />
      <Avantages />
      <Entreprises />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppBtn />
    </>
  );
}