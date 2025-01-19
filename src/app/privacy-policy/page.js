import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";
import Percentage from "../components/Percentage";
export default function page() {
  return (
    <div className="overflow-hidden font-normal bg-b-900">
      <Percentage/>
      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-primary-hero">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-up"
            className="gd-title text-center tracking-[-0.02em] md:leading-[84px] text-3xl md:text-64x font-semibold"
          >
            closingbrackets
            <span className="block">Privacy Policy</span>
          </h2>
          <p
            data-aos="fade-up"
            className="mt-6 text-base text-center md:text-xl text-w-100"
          >
            Latest Update: November 1, 2023
          </p>
        </div>
      </div>
      <PrivacyPolicy />

      <Footer />
    </div>
  );
}
