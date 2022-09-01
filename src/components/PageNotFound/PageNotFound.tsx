import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>Oops!</div>
      <div className={styles.message}>Page Not Found</div>
      <div className={styles.button}>
        <Link to="/">Go To Homepage</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
