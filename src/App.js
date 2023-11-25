
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Features from './components/Features';
import GrowthPartner from './components/GrowthPartner';
import Header from './components/Header';
import LearnFromUs from './components/LearnFromUs';
import SatisfiedClient from './components/SatisfiedClient';
import StartEarning from './components/StartEarning';
import DigitalMarketing from './components/DigitalMarketing';
import Goals from './components/Goals';
import Footer from './components/Footer';
import ActualResults from './components/ActualResults';
import BackToTop from './assets/images/png/BackToTop.png';
import { Loader } from './components/IconImg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  // -------------------preloader------------------------
  document.getElementById('root')
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <>
            <div className='overflow-hidden'>
              <Header />
              <Features />
              <SatisfiedClient />
              <DigitalMarketing />
              <StartEarning />
              <GrowthPartner />
              <ActualResults />
              <LearnFromUs />
              <Goals />
              <Footer />
            </div>
            <div>
              <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "back_to_top" : "d-none"} />
            </div>
          </>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
