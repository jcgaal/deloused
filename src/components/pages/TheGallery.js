import React from 'react';
import '../../App.css';
import Gallery from '../Gallery';
import Footer from '../Footer';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function TheGallery() {
	/* Scroll to top function*/
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

	return (
		<>
			<Gallery />
			<Footer />
		</>
	)
}

export default TheGallery;