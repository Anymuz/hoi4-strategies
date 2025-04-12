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

## Current Features
The features that are either currently implemented from previous interations or are implemented and tested from the current iteration are listed here. There are plans for a seperate changelog document to prevent this list becoming too large.
*NOTE: This project is still in the very early indev stage, much of the intended features contain bugs, unpredictable behaviour or are yet to be fully implemented. Because of this the first iteration is yet to be complete making this section largely redundent as of right now.* 

### Version InDev 0.1
- Dynamic route parsing: /nation?name=japan&year=1936
- Interactive tabbed UI for Army, Navy, Airforce, Templates 
- JSON strategy loading via internal API routes (`/api`)
- Styled with Tailwind CSS

## Development Plann
This section lists the current vision for the development of this application including planned changes or improvements, it is not exhaustive and may change as the project progresses, the full roadmap and interation plans an also be found in the linked project. Some of these planned features are ambitious and this is a hobby project, therefor nothing listed here is guarenteed unless significant contributions are made or additional time to work on it becomes available.

### Key
Unchecked boxes can mean either incomplete, not started, or in testing, more distinction and further breakdown of objectives are included in the project liked to this repo.
- [ ] Incomplete/In Progress
- [x] Implemented

### Current Development Iteration
#### Version 1.0 
A basic interface for navigating the data.
- [x] Nation/year page rendering
- [ ] Full JSON parsing for nested structured data
- [ ] Section filtering with tabbed interface
- [ ] Componentized structure for reusability
- [ ] Fully mobile-responsive layout

### Vision for Future Interations
#### Version 2.0
Increased dynamic functionality and improvements on modular scalability.
- Increased code modularity to facilitate scalability
- Add dynamic search / dropdown nation selector
- Improved mobile formatting and print layout
- Support for future data schema upgrades

#### Version 3.0
More Dynamic Content via Diversfying 
- Data schema upgrades
- Alternative guides for same nation but via different historical routes
- Additional Types of non-specific to nation Guides (i.e battle plans)
- Admin Control panel for on-site JSON uploads 

#### Version 4.0
Advanced improvements
- Flexibily for rendering for alternative sections that may be unique per nation
- Transition to database (SQL) or hybrid JSON/DB architecture
- Implement user login comments for questions and community advice or suggest feedback
- Include guides for popular game modifications

#### Version 5.0
Project Endgame and Final Version
- Integrate OpenAI API to allow admins to generate strategies using the web application itself
- Users can use the AI API to submit custom guides for approval
- Expand to cover other games

## Folder Structure 
**Note:** Some of the files in the /components directory are still being built and tested.

When cloned, the repository should resemble the current directory layout (as of version 1.0).

### Directory Layout
<details>
<summary><strong>components/</strong></summary>

```
├── NavBar.jsx
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

## Get involved
Users are welcome to contribute or use as a template for their own projects, however anyone wishing to make comitted contributions and colaborate is welcome to do so by contacting me. 
(Discord Server and reach-out socials coming Soon)

## License
This project uses the MIT License, please see LICENSE.MD
