# HOI4 Strategy Guide Web App

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node](https://img.shields.io/badge/node-18+-brightgreen)
![React](https://img.shields.io/badge/React-18-blue)
![Status](https://img.shields.io/badge/status-In_Dev-orange)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Development Plan](#development-plan)
- [Setting Up](#setting-up)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
  - [Directory Layout](#directory-layout)
  - [Directory Description](#directory-description)
- [Vision Statement](#vision-statement)


## Introduction
This is a React + Next.js single-page web application created initially as a dynamic strategy guide for the game **Hearts of Iron IV** by Paradox Interactive. By taking advantage of the modularity of JavaScript, it is scalable and adaptable for other purposes. It loads structured JSON data per nation available to the player and displays year-by-year action plans in a clean and aesthetic web interface.

It is important to note that this is a personal pastime project and is still in active development. As of current versions, there is still work to be done in rendering the complete set of data, but I decided to open-source this on GitHub not just for convenience but also to invite collaboration, feedback, or simply as an educational example. Fork for your own repos or make PRs with fixes/improvements or alternative methods as you please. This community project is not affiliated with Paradox Interactive or used for any commercial purpose.

One of the ideas in the deployment plan is to eventually make the app less dependent on a predefined JSON structure in order to improve flexibility and make it adaptable to non-gaming contexts. Where needed, it can serve as a base for future relational database integrations (e.g., SQL backends). For its initial purpose, JSON is a suitable format, but an SQL model may be created later.

## Features

NOTE: This project is still in the very early indev stage, much of the intended features contain bugs, unpredictable behaviour or are yet to be fully implemented. 

### Version 1.0
- Dynamic route parsing: /nation?name=japan&year=1936
- Interactive tabbed UI for Army, Navy, Airforce, Template *
- JSON strategy loading via internal API routes (`/api`)
- Styled with Tailwind CSS
- Fully mobile-responsive layout *

*Bugged/Work in progress


## Development Plan
This section lists the intended satisfaction criteria for each stage of the intended development cycles and may be expanded upon further down the line.

Unchecked boxes are still being worked on or need to be worked on before they satisfy the requirement.
- [ ] Incomplete/In Progress
- [x] Implemented

### Version 1.0
A basic interface for navigating the data.
- [x] Full JSON parsing for nested structured data
- [x] Nation/year page rendering
- [ ] Section filtering with tabbed interface
- [ ] Support for future data schema upgrades

### Version 2.0
Increased dynamic functionality and improvements on modular scalability.
- [ ] Componentized structure for reusability
- [ ] Full rendering for all data types (edge cases included)
- [ ] Add dynamic search / dropdown nation selector

### Version 3.0
Future improvements that may be required.
- [ ] switch to database or hybrid JSON/DB architecture
- [ ] Improved mobile formatting and print layout


## Setting Up

### Prerequisites
The following is required in your environment to set this up.
- Node.js v18+ — https://nodejs.org/en
- npm v9+ (comes with Node.js)

### Installation
Follow these steps to clone the repo for your own usage and contributions.
1. Clone the repository:
   `git clone https://github.com/Anymuz/hoi4-strategy-guides.git && cd hoi4-strategy-guides`

2. Install dependencies:
   `npm install`

3. Start the development server:
   `npm run dev`

Visit `http://localhost:3000` in your browser.


## Folder Structure 
**Note:** Some of the files in the /components directory are still being built and tested.

When cloned, the repository should resemble the current directory layout (as of version 1.0).

### Directory Layout
<details>
<summary><strong>components/</strong></summary>

```
├── NavBar.jsx
├── HomePage.jsx
├── NationPage.jsx
├── YearSwitcher.jsx
├── StrategyTabs.jsx
└── SectionBlock.jsx
```
</details>

<details>
<summary><strong>data/</strong></summary>

```
├── japan.json
└── nations.json
```
</details>

<details>
<summary><strong>pages/</strong></summary>

```
├── index.jsx
├── nation.jsx
└── api/
    ├── nations.js
    └── nation.js
```
</details>

<details>
<summary><strong>public/</strong></summary>

```
└── (static assets)
```
</details>

<details>
<summary><strong>styles/</strong></summary>

```text
└── globals.css
```
</details>

<details>
<summary><strong>utils/</strong></summary>

```
└── parseNationData
```
</details>

<details>
<summary><strong>/</strong></summary>

```
├── LICENSE.MD
├── package.json
├── postcss.config.js
├── README.MD
└── tailwind.config.js
```
</details>

### Directory Description
The pages directory is where the main templates for the application pages go, it contains an API directory which handles retrival of the data from the server securely. Componants is for specific aspects as part of the visual design that may be reused across pages.

The public directory is for static files such as images, styles is for the CSS sheets which currently loads the tailwind framework. There is a utils directory for any javascript files that serve core functions, currently this is to parse the JSON data. Finally the data directory is used to store the guides safely behind the API.

The root directory contains the required configuration files including this README.MD.

## Vision Statement
The JSON-formatted strategies were created as a fun experiment to see how AI (namely LLMs like ChatGPT) can perform in writing war strategies based on online historical information. However, as I was giving it feedback based on the game, it quickly lost its historical depiction and became more focused on winning the game based on in-game mechanics. These plans may still require player intervention in actual gameplay. Community-contributed strategies — whether AI-generated or written by human players — are welcome.

This project was inspired by the desire to easily access strategy data in an organized format while playing — often from a mobile device — and gradually evolved into a project to develop a polished frontend project using React and Tailwind CSS.