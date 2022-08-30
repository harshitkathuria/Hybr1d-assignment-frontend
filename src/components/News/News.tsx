import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NewsItem from "components/NewsItem/NewsItem";
import styles from "./News.module.scss";

const News = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
      .then(res => res.json())
      .then(data => setData(data.hits));
  }, [query]);

  return (
    <div className={styles.container}>
      {data.length > 0
        ? data.map((item, index) => <NewsItem data={item} key={index} />)
        : "No data to show"}
    </div>
  );
};

export default News;
