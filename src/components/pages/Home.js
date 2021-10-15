import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
	/* Scroll to top function*/
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

	return (
		<>
			<HeroSection />
			<Footer />
		</>
	)
}

export default Home;