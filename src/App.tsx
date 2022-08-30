import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "components/News/News";
import Footer from "components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
