"use client";
import { useState } from "react";
import Image from "next/image";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What do our Subscription Plans and Add-ons offer?",
      answer:
        "closingbrackets is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
    },
    {
      question: "What is the Mechanism Behind Functionality?",
      answer:
        "closingbrackets is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
    },
    {
      question: "What Advantages Does Search Offer?",
      answer:
        "closingbrackets is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
    },
    {
      question: "What Functionalities does the solution offer?",
      answer:
        "closingbrackets is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
    },
    {
      question: "What Advantages Does Personalization Offer?",
      answer:
        "closingbrackets is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
    },
    {
      question: "How is it utilized for personalization?",
      answer:
        "closingbrackets is cutting-edge technology that offers advanced AI-driven contextual search and recommendations. This innovative solution brings tangible advantages such as improved longtail search, enhanced personalization, and streamlined operations.",
    },
  ];

  return (
    <div className="py-8 bg-center bg-no-repeat bg-cover lg:py-24 bg-according">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col items-center justify-center">
          <h2
            data-aos="fade-down"
            className="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Frequently Asked
            <span className="inline-block lg:block"></span>Questions
          </h2>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-4 w-full lg:max-w-[850px]"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`p-6 border rounded-lg according border-b-600 bg-gd-tertiary ${
                  activeIndex === index ? "bg-faq-card-item" : ""
                }`}
              >
                <div
                  className="flex items-start gap-2 text-xl font-medium cursor-pointer according-header text-w-500"
                  onClick={() => handleToggle(index)}
                >
                  <Image
                    width={28}
                    height={28}
                    src="/faq-icon.svg"
                    alt="icon"
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                  {faq.question}
                </div>
                <div
                  className="according-content pl-[40px]"
                  style={{ display: activeIndex === index ? "block" : "none" }}
                >
                  <p className="pt-4 text-base text-w-100">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
