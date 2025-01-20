import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="font-normal bg-center bg-no-repeat bg-cover bg-sign-in-bg bg-b-900">
      <div className="py-12">
        <div className="container px-5 mx-auto xl:px-0">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[30px] h-full lg:h-screen">
            <div className="w-full lg:max-w-[850px]">
              <Link
                data-aos="fade-up"
                href="/"
                className="flex items-center justify-start gap-2"
              >
                <Image width={35.49} height={32} src="/logo.svg" alt="logo" />
                <span className="text-xl font-medium text-w-900">
                  closingbrackets
                </span>
              </Link>
              <h2
                data-aos="fade-up"
                className="mt-6 lg:mt-12 mb-4 leading-8 md:leading-[42px] text-2xl lg:text-32x font-medium gd-title"
              >
                Unlock AI Potential with
                <span className="inline-block lg:block"></span> Context-Rich
                Prompts
              </h2>
              <p data-aos="fade-up" className="text-base text-w-100">
                Discover the power of AI with our context-rich, non-binary
                <span className="inline-block lg:block"></span> prompts crafted
                from your unique data sources.
              </p>
              <ul
                data-aos="fade-up"
                className="flex flex-col gap-2 my-6 lg:my-12"
              >
                <li className="flex items-start justify-start gap-2 text-base font-medium text-w-900">
                  <Image
                    width={24}
                    height={24}
                    src="/colored-check.svg"
                    alt="check icon"
                  />
                  Personalized recommendations and insights
                </li>
                <li className="flex items-start justify-start gap-2 text-base font-medium text-w-900">
                  <Image
                    width={24}
                    height={24}
                    src="/colored-check.svg"
                    alt="check icon"
                  />
                  Enhance user experience and engagement
                </li>
                <li className="flex items-start justify-start gap-2 text-base font-medium text-w-900">
                  <Image
                    width={24}
                    height={24}
                    src="/colored-check.svg"
                    alt="check icon"
                  />
                  Engineered from your unique data sources
                </li>
              </ul>
              <p className="mb-6 text-base text-w-100">
                Trusted by Growing Teams
              </p>
              <Image width={472} height={16} src="/group.png" alt="brand" />
            </div>
            <div
              data-aos="fade-up"
              className="p-6 lg:p-12 rounded-lg w-full md:max-w-[410px] bg-gd-tertiary border border-b-600"
            >
              <Link href="/">
                <Image
                  width={53.24}
                  height={48}
                  src="/sign-logo.svg"
                  alt="brand logo"
                />
              </Link>
              <h3 className="mt-6 mb-2 text-2xl font-medium capitalize text-w-500">
                welcome
              </h3>
              <span className="text-base text-w-100">
                Sign in to closingbrackets Account for Access
              </span>
              <a
                href="#"
                className="flex justify-center items-center gap-2 my-6 py-[14px] px-6 rounded-full border border-b-500 w-full text-w-900"
              >
                <Image width={24} height={24} src="/g.svg" alt="google icon" />{" "}
                Continue with Google
              </a>
              <div className="flex justify-center items-center gap-2 py-[14px] px-6">
                <span className="inline-block w-full h-[1px] bg-b-500"></span>
                <span className="inline-block text-xs capitalize text-w-500">
                  OR
                </span>
                <span className="inline-block w-full h-[1px] bg-b-500"></span>
              </div>
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="mt-6 mb-3 py-[14px] px-6 rounded-full border border-b-500 w-full outline-none capitalize text-left text-b-100 placeholder-b-100 bg-transparent"
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="mb-3 py-[14px] px-6 rounded-full border border-b-500 w-full outline-none capitalize text-left text-b-100 placeholder-b-100 bg-transparent"
                  required
                />
                <Link href="#" className="text-sm underline gd-title">
                  Forgot Password?
                </Link>
                <button className="flex justify-center items-center gap-2 mt-6 mb-3 py-[14px] px-6 rounded-full w-full text-base font-medium text-w-900 bg-gd-secondary border border-tropical-indigo">
                  Continue
                  <Image
                    width={24}
                    height={24}
                    src="/arrow-right.svg"
                    alt="arrow"
                  />
                </button>
                <h4 className="text-sm text-w-100">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/sign-up"
                    className="underline capitalize gd-title"
                  >
                    sign up
                  </Link>
                </h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
