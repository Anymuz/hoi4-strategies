# HOI4 Strategy Guide Web App

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node](https://img.shields.io/badge/node-18+-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

This is a React + Next.js single-page web application created initially as a dynamic strategy guide for the game **Hearts of Iron IV** by Paradox Interactive. By taking advantage of the modularity of JavaScript, it is scalable and adaptable for other purposes. It loads structured JSON data per nation available to the player and displays year-by-year action plans in a clean and aesthetic web interface.

It is important to note that this is a personal pastime project and is still in active development. As of current versions, there is still work to be done in rendering the complete set of data, but I decided to open-source this on GitHub not just for convenience but also to invite collaboration, feedback, or simply as an educational example. Fork for your own repos or make PRs with fixes/improvements or alternative methods as you please. This community project is not affiliated with Paradox Interactive or used for any commercial purpose.

One of the ideas in the deployment plan is to eventually make the app less dependent on a predefined JSON structure in order to improve flexibility and make it adaptable to non-gaming contexts. Where needed, it can serve as a base for future relational database integrations (e.g., SQL backends). For its initial purpose, JSON is a suitable format, but an SQL model may be created later.

It is also important to note that the JSON-formatted strategies were created as a fun experiment to see how AI (namely LLMs like ChatGPT) can perform in writing war strategies based on online historical information. However, as I was giving it feedback based on the game, it quickly lost its historical depiction and became more focused on winning the game based on in-game mechanics. These plans may still require player intervention in actual gameplay. Community-contributed strategies — whether AI-generated or written by human players — are welcome.

This project was inspired by the desire to easily access strategy data in an organized format while playing — often from a mobile device — and gradually evolved into a project to develop apolished frontend project using React and Tailwind CSS.

---

## Feature Log

NOTE: This project is still in the very early indev stage, much of the intended features contain bugs, unpredictable behaviour or are yet to be fully implemented. 

### Version 1.0
- Dynamic route parsing: /nation?name=japan&year=1936
- Interactive tabbed UI for Army, Navy, Airforce, Template *
- JSON strategy loading via internal API routes (`/api`)
- Styled with Tailwind CSS
- Fully mobile-responsive layout *

* Bugged/Work in progress
---

## Development Plan
This section lists the intended satisfaction criteria for each stage of the intended development cycles and may be expanded upon further ddown the line.

### Key
[ ] - Incomplete [/] - Work in Progress [x] - Implemented

## Version 1.0
- [x] Full JSON parsing for nested structured data
- [x] Nation/year page rendering
- [/] Section filtering with tabbed interface
- [ ] Support for future data schema upgrades

## Version 2.0
- [ ] Componentized structure for reusability
- [ ] Full rendering for all data types (edge cases included)
- [ ] Add dynamic search / dropdown nation selector

## Version 3.0
- [ ] switch to database or hybrid JSON/DB architecture
- [ ] Improved mobile formatting and print layout

---

## Prerequisites

- Node.js v18+ — https://nodejs.org/en
- npm v9+ (comes with Node.js)

---

## Getting Started

1. Clone the repository:
   `git clone https://github.com/Anymuz/hoi4-strategy-guides.git && cd hoi4-strategy-guides`

2. Install dependencies:
   `npm install`

3. Start the development server:
   `npm run dev`

Visit `http://localhost:3000` in your browser.

---

## Folder Structure

├── pages/
│   ├── index.jsx
│   ├── nation.jsx
│   └── api/
│       ├── nations.js
│       └── japan.js
├── components/
│   ├── NavBar.jsx
│   ├── HomePage.jsx
│   ├── NationPage.jsx
│   ├── YearSwitcher.jsx
│   ├── StrategyTabs.jsx
│   └── SectionBlock.jsx
├── public/
│   └── (static assets)
├── styles/
│   └── globals.css
├── tailwind.config.js
└── package.json


## License

This project is licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sellcopies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.