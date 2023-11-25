export const fetchNews = async (topic) => {
  const response = await fetch(`
  https://newsapi.org/v2/everything?q=${topic}&from=2023-10-31npm run dev&sortBy=publishedAt&apiKey=139dba5bd1764ca6b0c42ea84fcf9499`);
  const data = await response.json();
  return data.articles;
};
