import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "components/News/News";
import Footer from "components/Footer/Footer";
import NewsDetail from "components/NewsDetail/NewsDetail";
import "./App.scss";

function App() {
  return (
    <div className="layout">
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="news/:id" element={<NewsDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
