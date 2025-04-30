import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Project from "./pages/Project";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "@contexts/ThemeContext";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllProjects from "pages/AllProjects";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const RoutedPage = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project/:projectName" element={<Project />} />
      <Route path="/projects" element={<AllProjects />} />
      {/* <Route path="/resume" element={<Resume />} /> */}
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
        <BrowserRouter>
          <ThemedApp />
        </BrowserRouter>
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
