import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import News from "components/News/News";
import Footer from "components/Footer/Footer";

function App() {
  return (
    <div className="layout">
      <Header />
      <News />
      <Footer />
    </div>
  );
}

export default App;
