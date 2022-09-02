import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import NewsItem from "components/NewsItem/NewsItem";
import styles from "./News.module.scss";
import Loader from "components/Loader/Loader";

const News = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const getResults = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      const data = await res.json();
      setData(data.hits);
    } catch (err) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!query) return;
    getResults();
  }, [query]);

  return loading ? (
    <Loader />
  ) : (
    <div style={{ flexGrow: 1 }}>
      <div className={styles.container}>
        {!query || !data.length ? (
          <div className={styles.error}>No Data to Show</div>
        ) : (
          <div className={styles.news}>
            {data.map((item, index) => (
              <NewsItem data={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
