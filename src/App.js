import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GenerePage from "./pages/GenerePage";
import PopularPage from "./pages/PopularPage";
import TopRatedPage from "./pages/TopRatedPage";
import TrendingPage from "./pages/TrendingPage";
import Footer from "./components/Footer";
import GenereItems from "./components/GenereItems";
import MoviePage from "./pages/MoviePage";
import SearchItems from "./components/SearchItems";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/genere" element={<GenerePage />} />
        <Route path="/genere/:id" element={<GenereItems />} />
        <Route path="/popular" element={<PopularPage />} />
        <Route path="/top" element={<TopRatedPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/search/:name" element={<SearchItems />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
