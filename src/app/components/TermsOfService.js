"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const TermsSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#intro");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (event, href) => {
    event.preventDefault();
    setActiveLink(href);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust offset as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pb-24 bg-center bg-no-repeat bg-cover lg:py-24 bg-terms">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col md:flex-row justify-start items-start gap-[30px]">
          <div
            className={`flex flex-col justify-start items-start gap-4 w-full md:max-w-[410px] ${
              isScrolled ? "shadow-md" : ""
            }`}
            id="nav-container"
          >
            {[
              { href: "#intro", label: "Introduction" },
              { href: "#acceptance-of-terms", label: "Acceptance of Terms" },
              {
                href: "#changes-to-terms-or-service",
                label: "Changes to Terms or Service",
              },
              { href: "#privacy-policy", label: "Privacy Policy" },
              {
                href: "#access-to-the-service",
                label: "Access to the Service",
              },
              { href: "#user-content", label: "User Content" },
              { href: "#prohibited-conduct", label: "Prohibited Conduct" },
              {
                href: "#intellectual-property",
                label: "Intellectual Property",
              },
              { href: "#termination", label: "Termination" },
              { href: "#disclaimer", label: "Disclaimer" },
              {
                href: "#limitation-of-liability",
                label: "Limitation of Liability",
              },
              { href: "#governing-law", label: "Governing Law" },
              { href: "#contact-us", label: "Contact Us" },
            ].map((link) => (
              <Link key={link.href} href={link.href} legacyBehavior>
                <a
                  className={`inline-block text-xl font-medium ${
                    activeLink === link.href ? "gd-title" : "text-w-100"
                  }`}
                  onClick={(event) => handleLinkClick(event, link.href)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
          <div className="ps-[30px] w-full md:max-w-[810px] border-s border-b-600">
            <h2
              data-aos="fade-up"
              className="mb-4 text-2xl font-medium text-w-500"
              id="intro"
            >
              Introduction
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              Welcome to closingbrackets! These Terms of Service (&rdquo;Terms&rdquo;)
              govern your use of our website located at
              <a href="http://www.closingbrackets.ai/">www.closingbrackets.ai</a> and our
              related services (collectively, the &rdquo;Service&rdquo;). Our
              Service is provided to you by closingbrackets AI, Inc.
              (&rdquo;closingbrackets,&rdquo; &rdquo;we,&rdquo; &rdquo;us,&rdquo; or
              &rdquo;our&rdquo;).
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="acceptance-of-terms"
            >
              Acceptance of Terms
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              By accessing or using our Service, you agree to be bound by these
              Terms and all terms incorporated by reference. If you do not agree
              to all these Terms, then you may not access or use the Service.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="changes-to-terms-or-service"
            >
              Changes to Terms or Service
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              We reserve the right to update or modify these Terms at any time
              without prior notice. Your use of the Service after any such
              changes constitutes your acceptance of the new Terms. It is your
              responsibility to review these Terms regularly.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="privacy-policy"
            >
              Privacy Policy
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              Please review our Privacy Policy, which also governs your use of
              the Service, to understand our practices.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="access-to-the-service"
            >
              Access to the Service
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              Please review our Privacy Policy, which also governs your use of
              the Service, to understand our practices.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="user-content"
            >
              User Content
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              Our Service may allow you to post, link, store, share, and
              otherwise make available certain information, text, graphics,
              videos, or other material (&rdquo;Content&rdquo;). You are
              responsible for the Content that you post to the Service,
              including its legality, reliability, and appropriateness.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="prohibited-conduct"
            >
              Prohibited Conduct
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              When using the Service, you agree not to engage in any of the
              following prohibited activities:
            </p>
            <ul
              data-aos="fade-up"
              className="flex flex-col text-base list-disc ms-5 text-w-100"
            >
              <li>Violating any law, regulation, or our policies.</li>
              <li>
                Using the Service in any manner that could interfere with,
                disrupt, negatively affect, or inhibit other users from fully
                enjoying the Service.
              </li>
              <li>Impersonating or intimidating others.</li>
              <li>
                Using any data mining, robots, or similar data gathering or
                extraction methods.
              </li>
              <li>
                Transmitting any viruses, worms, defects, Trojan horses, or any
                items of a destructive nature.
              </li>
            </ul>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="intellectual-property"
            >
              Intellectual Property
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              All Content on the Service, including but not limited to text,
              graphics, logos, button icons, images, audio clips, digital
              downloads, data compilations, and software, is the property of
              closingbrackets or its Content suppliers and is protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="termination"
            >
              Termination
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach these Terms.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="disclaimer"
            >
              Disclaimer
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              Our Service is provided on an &rdquo;as is&rdquo; and &rdquo;as
              available&rdquo; basis. We make no warranties or representations
              regarding the accuracy or completeness of the Service.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="limitation-of-liability"
            >
              Limitation of Liability
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              In no event shall closingbrackets be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation lost profits, data, or other intangible losses,
              resulting from your use or inability to use the Service.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="governing-law"
            >
              Governing Law
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              These Terms shall be governed and construed in accordance with the
              laws of the State of [Your State], without regard to its conflict
              of law principles.
            </p>
            <h2
              data-aos="fade-up"
              className="pt-12 mb-4 text-2xl font-medium text-w-500"
              id="contact-us"
            >
              Contact Us
            </h2>
            <p data-aos="fade-up" className="text-base text-w-100">
              If you have any questions about these Terms, please contact us at
              support@closingbrackets.ai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsSection;
