import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import Header from "./components/Header";
import GPAList from "./components/GpaList";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Header />
        <GPAList />
      </Template>
    </>
  );
}

export default App;
