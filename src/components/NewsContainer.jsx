import React, { useContext, useEffect } from "react";
import NewsCard from "./NewsCard";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsAction";

const NewsContainer = () => {
  const { allNews, dispatch } = useContext(NewsContext);

  const getNews = async () => {
    const data = await fetchNews("Indore");
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  if (allNews.length === 0) {
    return <h1 className="text-center">Loading...</h1>;
  }

  return (
    <div className="my-2 col-md-12 col-sm-12">
      {allNews.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </div>
  );
};

export default NewsContainer;
