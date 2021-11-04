import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
