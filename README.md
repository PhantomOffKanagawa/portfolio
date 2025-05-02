# 🎉 Harrison Surma Portfolio

[![Status](https://img.shields.io/badge/Status-Active-green?style=for-the-badge&logo=github)](https://github.com/PhantomOffKanagawa/portfolio)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://phantomoffkanagawa.github.io/portfolio/)
[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-blue?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/PhantomOffKanagawa/portfolio/actions)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/PhantomOffKanagawa/portfolio/actions)
[![Chakra UI](https://img.shields.io/badge/Chakra%20UI-brightgreen?style=for-the-badge&logo=chakraui&logoColor=white)](https://chakra-ui.com/docs/getting-started)
[![Node.js](https://img.shields.io/badge/Node.js-brightgreen?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download/)
[![React](https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/docs/getting-started.html)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)


> **A modern, responsive portfolio website built with React and TypeScript**

A personal portfolio website showcasing my skills, projects, and experience as a software developer and Computer Science student, featuring a clean interface with light/dark mode and responsive design.

## ✨ Features

- 📄 **Configuration Based** - Everything is generated from variable values making updates effortless
- 🎯 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🚀 **Light/Dark Mode** - Toggle between light and dark themes
- 🎬 **Automatic Deployment** - Github Actions handle double checking pull requests and deployment
- 🔧 **Project Showcase** - Display featured projects with links to live demos and repositories
- 💡 **Contact Information** - Easy ways to get in touch

## 🚨 Important Information

This portfolio is continuously being updated with new projects and improvements. The site is built with React and TypeScript using the Chakra UI component library for a clean, modern interface.

## 🛠️ Installation

```bash
# Clone this repository
git clone https://github.com/PhantomOffKanagawa/portfolio.git
cd portfolio

# Install dependencies
npm install
```

## 🔧 Configuration

The project uses `craco` (Create React App Configuration Override) to customize the webpack configuration without ejecting. The configuration is defined in `craco.config.js` \\

Information for the project is stored in `src/utils/homepage-values.ts` and can be modified to suit your needs. Everything is built to be fast and easy to update.


## 📝 Usage

### 🚀 Running the Application

To run the portfolio in development mode:

```bash
npm start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### ⚡ Building and Deployment

The portfolio is set up to be deployed to GitHub Pages using GitHub Actions:

```bash
# Build the site locally
npm run build

# Deploy to GitHub Pages manually (if needed)
npm run deploy
```

The site is automatically deployed through GitHub Actions when changes are pushed to the main branch. The workflow is defined in `.github/workflows/deploy.yml`.

## 🚑 Troubleshooting

- **Build issues**: If you encounter build issues, make sure you have the correct version of Node.js installed.
- **Missing dependencies**: Run `npm install` to ensure all dependencies are properly installed.
- **Path aliases not working**: Check both the `craco.config.js` and `tsconfig.json` files to ensure path aliases are configured correctly.

## 📊 Requirements

- Node.js >= 20.x
- npm >= 11.x
- TypeScript >= 4.9
- Dependencies:
  - React 18
  - Chakra UI 3.2
  - React Router DOM 6.28
  - Framer Motion
  - Lucide React (for icons)

## 📱 Project Structure

```
portfolio/
├── public/              # Static files
├── src/                 # Source code
│   ├── components/      # UI components
│   │   └── ui/          # Base UI components
│   ├── contexts/        # React contexts
│   ├── pages/           # Page components
│   └── utils/           # Utility functions
├── .github/workflows/   # GitHub Actions CI/CD
├── craco.config.js      # Webpack configuration
└── tsconfig.json        # TypeScript configuration
```

## 📜 Next Steps
- Add functionality for Skills which are also categories to take you to that category of projects
- Refactor to Next.js with more interesting format
- Localize data for resume and projects for easier updates

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to improve the project.

---

Made with ❤️ by Harrison Surma
