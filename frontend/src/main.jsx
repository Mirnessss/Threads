import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"

import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import App from "./App";
import "./index.css";

const styles = {
  global: (props) => {
    return {
      body: {
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("gray.100", "#101010")(props),
      },
    };
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  gray: {
    dark: "#1e1e1e",
    light: "#616161",
  },
};

const theme = extendTheme({ config, styles, colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
