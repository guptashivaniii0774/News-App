import React, { useContext, useState } from "react";
import NewsContext from "../context/news/NewsContext";
import { fetchNews } from "../context/news/NewsAction";

const Navbar = () => {
  const { dispatch } = useContext(NewsContext);

  const [text, setText] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await fetchNews(text);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });

    setText("");
  };

  const handleTopic = async (topic) => {
    const data = await fetchNews(topic);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark shadow-lg">
      <div className="container-fluid">
        <a className="navbar-brand  text-light" href="#">
          KAL-TAK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                onClick={() => handleTopic("Indian Sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                onClick={() => handleTopic("Bollywood")}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                onClick={() => handleTopic("Bharat Business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                onClick={() => handleTopic("Indian Social Media")}
              >
                Social Media
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2 rounded-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-success rounded-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
