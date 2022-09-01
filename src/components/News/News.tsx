import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NewsItem from "components/NewsItem/NewsItem";
import styles from "./News.module.scss";
import Loader from "components/Loader/Loader";

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
      .then(res => res.json())
      .then(data => {
        setData(data.hits);
        setLoading(false);
      });
  }, [query]);

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      {!query ? (
        <div className={styles.error}>No Data to Show</div>
      ) : (
        <div className={styles.news}>
          {data.length > 0
            ? data.map((item, index) => <NewsItem data={item} key={index} />)
            : "No data to show"}
        </div>
      )}
    </div>
  );
};

export default News;
