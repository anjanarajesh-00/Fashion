# Fashion
# AtelierAI ✦ Fashion Design Studio

An AI-powered fashion design studio built with React + Claude API.

## Features
- 8 garment types with live SVG mannequin preview
- Section-by-section AI design feedback with fabric validation
- AI Design Brief generator
- AI Advisor for critique, trends, and cost estimates
- Technical specification sheet generator

## Setup

1. Clone the repo
   git clone https://github.com/your-username/AtelierAI.git
   cd AtelierAI

2. Install dependencies
   npm install

3. Add your Anthropic API key
   Create a file: src/config.js
   export const API_KEY = "your-key-here";
   Then update the fetch headers in App.jsx:
   "x-api-key": API_KEY

4. Run locally
   npm run dev

## Tech Stack
- React 18 + Vite
- Claude Sonnet (claude-sonnet-4-20250514)
- Google Fonts: Cormorant Garamond + Jost
- Pure CSS (no UI library)

## ⚠️ API Key Warning
Never commit your API key to GitHub.
Use environment variables in production:
   VITE_ANTHROPIC_KEY=your-key
And access it as: import.meta.env.VITE_ANTHROPIC_KEY
