"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companySize: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data:", formData);

    alert("Information is submitted");

    window.location.reload();
  };

  return (
    <div className="py-8 overflow-hidden bg-center bg-no-repeat bg-cover lg:py-24 bg-form">
      <div className="container px-5 mx-auto xl:px-0">
        <div className="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-[30px]">
          <div data-aos="fade-up" className="px-6 md:px-12">
            <h2 className="gd-title text-left lg:leading-[42px] text-32x font-medium">
              Find Your Perfect Fit <span className="block"></span> with
              closingbrackets
            </h2>
            <p className="mt-4 mb-12 text-base text-w-100">
              We&#39;re here to answer any questions you may have.
            </p>
            <ul className="flex flex-col gap-4 text-base font-medium text-w-900">
              <li className="flex items-start justify-start gap-2">
                <Image
                  src="/img/icons/colored-check.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                Context-rich prompts tailored to your unique data sources.
              </li>
              <li className="flex items-start justify-start gap-2">
                <Image
                  src="/img/icons/colored-check.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                Boost efficiency with upgraded security and support.
              </li>
              <li className="flex items-start justify-start gap-2">
                <Image
                  src="/img/icons/colored-check.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
                Find the perfect fit for every team with closingbrackets.
              </li>
            </ul>
            <span className="inline-block mt-12 mb-6 text-base text-w-100">
              Trusted by Growing Teams
            </span>
            <Image
              src="/img/brand/group.png"
              alt="Trusted by Growing Teams"
              width={472}
              height={16}
            />
          </div>
          <div
            data-aos="fade-up"
            className="p-6 md:p-12 w-full md:max-w-[630px] rounded-lg bg-gd-tertiary border border-b-600"
          >
            <h3 className="mb-6 text-2xl font-medium text-w-500">
              Share About Yourself and Expect{" "}
              <span className="inline-block md:block"></span> a Prompt Response
            </h3>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 placeholder-b-100 capitalize text-base bg-transparent text-b-100"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 placeholder-b-100 capitalize text-base bg-transparent text-b-100"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 placeholder-b-100 capitalize text-base bg-transparent text-b-100"
                  required
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 placeholder-b-100 capitalize text-base bg-transparent text-b-100"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 placeholder-b-100 capitalize text-base bg-transparent text-b-100"
                  required
                />
                <div className="px-6 py-[14px] w-full rounded-full border border-b-500 bg-transparent">
                  <select
                    name="companySize"
                    id="company-size"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full text-base capitalize bg-transparent outline-none text-b-100"
                    required
                  >
                    <option value="">Company Size</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="px-6 py-[14px] w-full h-[120px] md:h-[240px] outline-none rounded-3xl border border-b-500 placeholder-b-100 capitalize text-base bg-transparent text-b-100"
                placeholder="Enter your message here"
                required
              ></textarea>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="agree"
                  id="check"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="text-base text-b-100"
                  required
                />
                <p className="text-base text-b-100">
                  I agree to closingbrackets&#39;s{" "}
                  <Link href="/privacy-policy" legacyBehavior>
                    <a className="underline !important transition-all gd-title hover:underline">
                      Privacy Policy
                    </a>
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms-of-service" legacyBehavior>
                    <a className="underline !important transition-all gd-title hover:underline">
                      Terms of Service
                    </a>
                  </Link>
                  .
                </p>
              </div>
              <button
                type="submit"
                className="flex justify-center items-center gap-2 mt-6 py-[14px] rounded-full capitalize bg-gd-secondary text-w-900"
              >
                contact sales
                <Image
                  src="/img/icons/arrow-right.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
