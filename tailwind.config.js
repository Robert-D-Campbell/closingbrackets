/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        "2xl": "1290px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "32x": "32px",
        "40x": "40px",
        "64x": "64px",
      },
      colors: {
        "b-900": "#030012",
        "b-800": "#100E1B",
        "b-700": "#181627",
        "b-600": "#221F33",
        "b-500": "#2C293D",
        "b-400": "#363347",
        "b-300": "#3F3C53",
        "b-200": "#48455F",
        "b-100": "#514D6A",
        "b-50": "#5A5676",
        "w-900": "#EEEBFF",
        "w-800": "#DEDAFB",
        "w-700": "#D2CDF4",
        "w-600": "#C8C3EA",
        "w-500": "#C3C0D8",
        "w-400": "#B8B4CF",
        "w-300": "#ADA9C6",
        "w-200": "#A3A0BA",
        "w-100": "#9B98AE",
        "w-50": "#9896A2",
        "border-r": " rgb(34, 31, 51);",
        primary: "#7361E5",
        "tropical-indigo": "#9A8DEC",
      },
      backgroundImage: () => ({
        hero: "url('/img/bg/hero-bg.jpg')",
        "primary-hero": "url('/img/bg/primary-hero-bg.svg')",
        "secondary-hero": "url('/img/bg/secondary-hero-bg.svg')",
        semantic: "url('/img/bg/semantic-bg.svg')",
        binary: "url('/img/bg/binary-bg.svg')",
        linked: "url('/img/bg/linked-bg.svg')",
        media: "url('/img/bg/media-bg.svg')",
        according: "url('/img/bg/according-bg.svg')",
        cta: "url('/img/bg/cta-bg.svg')",
        footer: "url('/img/bg/footer-bg.svg')",
        enhance: "url('/img/bg/enhance-bg.svg')",
        problems: "url('/img/bg/problems-bg.svg')",
        diverse: "url('/img/bg/diverse-bg.svg')",
        "ai-solution": "url('/img/bg/ai-solution-bg.svg')",
        counter: "url('/img/bg/counter-bg.svg')",
        source: "url('/img/bg/source-bg.svg')",
        ai: "url('/img/bg/ai-bg.svg')",
        core: "url('/img/bg/core-bg.svg')",
        philosophy: "url('/img/bg/philosophy-bg.svg')",
        "ai-corp": "url('/img/bg/ai-corp-bg.svg')",
        team: "url('/img/bg/team-bg.svg')",
        "data-science": "url('/img/bg/data-science-bg.svg')",
        milestone: "url('/img/bg/milestone-bg.svg')",
        "lead-ai": "url('/img/bg/lead-ai-bg.svg')",
        corporate: "url('/img/bg/corporate-bg.svg')",
        powered: "url('/img/bg/powered-bg.svg')",
        patent: "url('/img/bg/patent-bg.svg')",
        doc: "url('/img/bg/doc-bg.svg')",
        "secondary-hero": "url('/img/bg/secondary-hero-bg.svg')",
        blog: "url('/img/bg/blog-bg.svg')",
        "blog-single": "url('/img/bg/blog-single-bg.svg')",
        "case-studies": "url('/img/bg/case-studies-bg.svg')",
        "case-single": "url('/img/bg/case-single.svg')",
        "privacy-bg": "url('/img/bg/privacy-bg.svg')",
        "sign-in-bg": "url('/img/bg/sign-in-bg.svg')",
        "sign-up-bg": "url('/img/bg/sign-up-bg.svg')",
        "not-found-bg": "url('/img/bg/not-found-bg.svg')",
        "media-kit-bg": "url('/img/bg/media-kit-bg.svg')",
        "Explore-other-Case-studies":
          "url('/img/bg/Explore-other-Case-studies.svg')",
        form: "url('/img/bg/form.svg')",
        terms: "url('/img/bg/terms-bg.svg')",

        sign: "url('/img/bg/sign-bg.svg')",
        //here

        "body-gd":
          "linear-gradient(to bottom, #19162B 0%, #0E0A25 50%, #1A162B 100%)",
        "gd-primary": "linear-gradient(to bottom, #C3C0D8 0%, #9A8DEC 100%);",
        "gd-secondary": "linear-gradient(to bottom, #9A8DEC 0%, #7361E5 100%)",
        "gd-tertiary":
          "linear-gradient(330.61deg, rgba(238, 235, 255, 0.04) -7.38%, rgba(238, 235, 255, 0.02) -7.37%, rgba(238, 235, 255, 0.0718553) 91.81%, rgba(238, 235, 255, 0.08) 107.38%)", // w-900 -> w-900
        "gd-cv":
          " linear-gradient(90deg, rgba(0, 0, 0, 0) 4.04%, #000000 50%, rgba(0, 0, 0, 0) 95.96%)",
      }),
    },
  },
};
