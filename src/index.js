import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import rootReducer from "./store/reducers";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/common";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
