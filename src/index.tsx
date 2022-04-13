import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "assets/styles/globalStyles";
import theme from "assets/styles/theme";

const queryClient = new QueryClient();
const container = document.getElementById("root") as Element;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
            <App />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
