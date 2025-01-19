import React from "react";
import Image from "next/image";

import Header from "../components/Header";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import Percentage from "../components/Percentage";

export default function page() {
  return (
    <div className="overflow-hidden font-normal bg-b-900">
      <Percentage/>

      <Header />
      <div className="pt-[135px] lg:pt-[164px] pb-24  bg-center bg-no-repeat bg-cover bg-primary-hero">
        <div className="container px-5 mx-auto xl:px-0">
          <h1
            data-aos="fade-up"
            className="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
          >
            Services Powered
            <span className="inline-block lg:block"></span>
            by closingbrackets
          </h1>
          <p
            data-aos="fade-up"
            className="mt-6 text-base text-center md:text-xl text-w-100"
          >
            closingbrackets operates services across various industries, both
            independently<span className="inline-block lg:block"></span>
            and in partnership with global leaders in their respective fields.
          </p>
        </div>
      </div>
      <div className="py-8 bg-center bg-no-repeat bg-cover lg:py-24 bg-powered">
        <div className="container px-5 mx-auto xl:px-0">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Transformative Services
            <span className="inline-block lg:block">Expand Your Business</span>
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col gap-[30px]">
              <div
                data-aos="fade-up-right"
                className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Revolutionizing Hotel Booking
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    closingbrackets utilizes advanced AI and data processing solutions
                    to instantly find the lowest prices among 3.16 million
                    hotels worldwide. Operating at minimal costs, closingbrackets
                    offers additional discounts on top of the lowest real-time
                    hotel prices.
                  </p>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/service-card1.png"
                    alt="service"
                    width={534}
                    height={464}
                  />
                </div>
              </div>
              <div
                data-aos="fade-up-left"
                className="flex flex-col-reverse lg:flex-row-reverse justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Transforming Movie Search
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    Users can effortlessly discover movies by &#39;Picking&#39;
                    from a list of closingbrackets or use &#39;Say&#39; to find movies
                    based on spoken clues or context. closingbrackets guides users to
                    explore new movies from a database of over 760,000 titles.
                  </p>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/service-card2.png"
                    alt="service"
                    width={534}
                    height={464}
                  />
                </div>
              </div>
              <div
                data-aos="fade-up-right"
                className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    AI-driven Beauty Assistant
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    Linked to 4,600+ beauty products available on retailers&#39;
                    websites like Sephora, Amazon, Nordstrom, and Walmart.
                    Product-related information, including ingredients, colors,
                    tones, and awards, is updated in real-time through AI.
                  </p>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/service-card3.png"
                    alt="service"
                    width={534}
                    height={464}
                  />
                </div>
              </div>
              <div
                data-aos="fade-up-left"
                className="flex flex-col-reverse lg:flex-row-reverse justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    AI-Powered Destination Search
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    Users can effortlessly discover movies by &#39;Picking&#39;
                    from a list of closingbrackets or use &#39;Say&#39; to find movies
                    based on spoken clues or context. closingbrackets guides users to
                    explore new movies from a database of over 760,000 titles.
                  </p>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/service-card4.png"
                    alt="service"
                    width={534}
                    height={464}
                  />
                </div>
              </div>
              <div
                data-aos="fade-up-right"
                className="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
              >
                <div className="flex flex-col items-start justify-center">
                  <h3 className="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500">
                    Explore Live Celebrity Personas
                  </h3>
                  <p className="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                    closingbrackets Star connects communal fandoms that share similar
                    preferences. With 100k+ user participations per year, it
                    gives real-time updates based on fan responses—also
                    reflected in Circle Chart&#39;s &#39;Hot Star Awards&#39;.
                  </p>
                </div>
                <div className="relative w-full lg:w-[534px] lg:h-[464px]">
                  <Image
                    className="w-full rounded-lg"
                    src="/img/service-card5.png"
                    alt="service"
                    width={534}
                    height={464}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}
