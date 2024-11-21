import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, defaultSystem, Theme } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "@contexts/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


// TODO: This themeing seems unideal, though is minimally intrusive when writing code
const ThemedApp = () => {
  const { appearance } = useTheme();
  return (
    <Theme appearance={appearance} colorPalette={"teal"}>
      <App />
    </Theme>
  );
};

const AppWrapper = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </ChakraProvider>
  );
};

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
