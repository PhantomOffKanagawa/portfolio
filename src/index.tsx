import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Project from "./pages/Project";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "@contexts/ThemeContext";

import { Routes, Route, HashRouter } from "react-router-dom";
import AllProjects from "pages/AllProjects";
import CategoryProjects from "pages/CategoryProjects";
import NotFound from "pages/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const RoutedPage = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/project/:projectName" element={<Project />} /> */}
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/category/:categoryName" element={<CategoryProjects />} />
      {/* <Route path="/resume" element={<Resume />} /> */}
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// TODO: This themeing seems unideal, though is minimally intrusive when writing code
const ThemedApp = () => {
  const { appearance } = useTheme();
  return (
    <Theme appearance={appearance} colorPalette={"teal"}>
      <RoutedPage />
    </Theme>
  );
};

const AppWrapper = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider>
        <HashRouter>
          <ThemedApp />
        </HashRouter>
      </ThemeProvider>
    </ChakraProvider>
  );
};

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();