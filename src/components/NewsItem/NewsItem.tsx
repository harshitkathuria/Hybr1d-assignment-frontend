import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import styles from "./NewsItem.module.scss";

interface NewsItemProps {
  data: any;
}

const NewsItem = (props: NewsItemProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h3>{props.data.title}</h3>
      </div>
      <div className={styles.cardBody}>
        <p>
          {moment(props.data.created_at).format("DD MMM YYYY")}, By{" "}
          <span className={styles.author}>{props.data.author}</span>
        </p>
        <div className={styles.tags}>
          {props.data.points && (
            <div className={styles.tag}>{props.data.points} points</div>
          )}
          {props.data.num_comments && (
            <div className={styles.tag}>{props.data.num_comments} comments</div>
          )}
        </div>
      </div>
      <div className={styles.cardFooter}>
        <Link className={styles.btn} to={"news/" + props.data.objectID}>
          View
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
