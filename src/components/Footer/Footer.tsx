import React from "react";
import styles from "./Footer.module.scss";
import GithubLogo from "assets/GithubLogo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div>&copy; Copyright 2022</div>
        <div>Made with ❤️ by Harshit Kathuria</div>
        <div className={styles.icons}>
          <a
            href="https://github.com/harshitkathuria/Hybr1d-assignment-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubLogo} alt="GithubLogo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
