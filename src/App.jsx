import './css/Home.css';
import './css/Style.css';
import './css/Responsive.css';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Solutions from "./components/Solutions.jsx";
import Frais from "./components/Frais.jsx";
import Process from "./components/Process.jsx";
import Avantages from "./components/Avantages.jsx";
import Entreprises from "./components/Entreprises.jsx";
import FAQ from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppBtn from "./components/Whatsappbtn.jsx";

export default function App() {
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