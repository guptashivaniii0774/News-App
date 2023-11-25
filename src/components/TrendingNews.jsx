import React, { useContext, useEffect } from "react";
import { getQuote } from "../context/quote/quoteAction";
import QuoteContext from "../context/quote/quoteContext";

const TrendingNews = () => {
  const { dispatch, quoteData } = useContext(QuoteContext);

  const fetchQuote = async () => {
    const data = await getQuote();

    setTimeout(() => {
      dispatch({
        type: "GET_QUOTE",
        payload: data,
      });
    }, 10000);
  };

  useEffect(() => {
    fetchQuote();
  }, [quoteData]);

  if (!quoteData) {
    return <h1 className="text-center">Loading..</h1>;
  }

  return (
    <>
      <marquee className="h3 my-3">
        {quoteData.content} -{quoteData.author}
      </marquee>
    </>
  );
};

export default TrendingNews;
