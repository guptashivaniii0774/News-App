import DefaultImage from "../assets/default.png";

const NewsCard = ({ news }) => {
  return (
    <div className="card mb-3 rounded-0 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4 rounded-0 d-flex align-items-center">
          <img
            src={news.urlToImage ? news.urlToImage : DefaultImage}
            className="img-fluid rounded-0"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">{news.author} </small>
            </p>
            <a
              target="_blank"
              href={news.url}
              className="btn btn-success rounded-0 float-end"
            >
              Read Full News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
