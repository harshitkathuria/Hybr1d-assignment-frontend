import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import styles from "./NewsDetail.module.scss";
import Comments from "components/Comments/Comments";
import OpenLink from "assets/OpenLink.svg";

const NewsDetail = () => {
  const [newsData, setNewsData] = useState<any>({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/items/${id}`)
      .then(res => res.json())
      .then(data => setNewsData(data));
  }, []);

  return newsData ? (
    <div>
      <div className={styles.card}>
        <div className={styles.row}>
          <div className={styles.title}>
            <h3>{newsData.title}</h3>
          </div>
          <div className={styles.image}>
            <a href={newsData.url} target="_blank">
              <img src={OpenLink} alt="OpenLink" />
            </a>
          </div>
        </div>
        <div className={styles.cardBody}>
          <p>
            {moment(newsData.created_at).format("DD MMM YYYY")}, By{" "}
            <span className={styles.author}>{newsData.author}</span>
          </p>
          <div className={styles.tags}>
            {newsData.points && (
              <div className={styles.tag}>{newsData.points} points</div>
            )}
            {newsData.num_comments && (
              <div className={styles.tag}>{newsData.num_comments} comments</div>
            )}
          </div>
          <div className={styles.comments_wrapper}>
            <p className={styles.title}>
              Comments - {newsData.children?.length}
            </p>
            <div className={styles.comments}>
              <Comments comments={newsData.children} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default NewsDetail;
