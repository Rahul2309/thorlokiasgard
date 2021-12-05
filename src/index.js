import React from "react";
import ReactDOM from "react-dom";
import "./static/style.css"
import "./static/main.css"
import "./static/chunck.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div class="app">
      <TopHeader />
      <Header />
      <Home/>
      <Footer/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
