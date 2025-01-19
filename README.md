# closingbrackets - AI Deep Search Technology React Template

closingbrackets is a modern React template built with Next.js, designed for AI technology companies, startups, and agencies. It features a sleek design with smooth animations and interactive components.

## Features

- 🚀 Built with Next.js 14
- 💫 Smooth scroll animations using Lenis
- 🎨 Animated components with AOS (Animate On Scroll)
- 📱 Fully responsive design
- 🎯 Microsoft Clarity analytics integration
- 🔍 AI-focused sections including:
  - Smart Search
  - AI Prompt Engine
  - AI Guided Suggestions
  - AI Profitization

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- AOS (Animate On Scroll)
- Lenis Smooth Scroll
- Microsoft Clarity

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
closingbrackets-react/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── VideoSection.js
│   │   │   ├── SaleBtn.js
│   │   │   └── ...
│   │   ├── page.js
│   │   ├── layout.js
│   │   └── globals.css
│   └── data/
│       └── updateCardData.json
├── public/
│   ├── img/
│   └── favicon.ico
└── package.json
```

## Key Components

### SaleBtn

A fixed position button component that appears on all pages, promoting the template sale.

### VideoSection

Interactive video component with custom play/pause controls and outside click handling.

### UpdateCard

Reusable card component for displaying blog posts and updates with tags.

### EnhancingCard

Component for displaying feature cards with icons and descriptions.

## Customization

### Styling

- The project uses Tailwind CSS for styling
- Global styles are defined in `src/app/globals.css`
- Custom gradients and animations are available through utility classes

### Analytics

Microsoft Clarity tracking is integrated in `layout.js`. Update the tracking ID:

```javascript
<Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
  `}
</Script>
```

## Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm run start
# or
yarn start
```

## License

This template is available for purchase on ThemeForest. Please refer to the license terms on ThemeForest for usage rights.

## Support

For support, please contact through ThemeForest or raise an issue in the repository.
