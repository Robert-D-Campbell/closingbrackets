import React from "react";
import Header from "../components/Header";
import PatentCard from "../components/PatentCard";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import Image from "next/image";
import Percentage from "../components/Percentage";
import PatentSection from "../components/PatentSection";

export default function page() {
  return (
    <div className="overflow-hidden font-normal bg-b-900">
      <Percentage />
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-primary-hero">
        <div className="container px-5 mx-auto xl:px-0">
          <h1
            data-aos="fade-up"
            className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
          >
            Patents Registered
            <span className="inline-block lg:block"></span>by closingbrackets
          </h1>
          <p
            data-aos="fade-up"
            className="mt-6 text-base text-center md:text-xl text-w-100"
          >
            closingbrackets holds a strong global patent portfolio covering AI search
            solutions,
            <span className="inline-block lg:block"></span>AI recommendation
            solutions, and live-updated AI content.
          </p>
        </div>
      </div>
      <PatentSection />

      <FooterTop />
      <Footer />
    </div>
  );
}
