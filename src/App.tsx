import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyle from "./styles/globalStyles";
import { theme } from "./styles/theme";

import Routes from "./routes";

import "./styles/global.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />

      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
