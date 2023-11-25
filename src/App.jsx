import React from "react";
import Navbar from "./components/Navbar";
import TrendingNews from "./components/TrendingNews";
import NewsContainer from "./components/NewsContainer";
import WeatherCard from "./components/WeatherCard";
import { NewsProvider } from "./context/news/NewsContext";
import { QuoteProvider } from "./context/quote/quoteContext";

const App = () => {
  return (
    <NewsProvider>
      <Navbar />
      <QuoteProvider>
        <TrendingNews />
      </QuoteProvider>
      <div className="container">
        <div className="row">
          <WeatherCard />
          <div className="col-md-8 row">
            <NewsContainer />
          </div>
        </div>
      </div>
    </NewsProvider>
  );
};

export default App;
