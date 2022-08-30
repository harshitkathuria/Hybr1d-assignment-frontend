import React from "react";
import Logo from "assets/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.header_wrapper}>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.form_wrapper}>
          <form>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search HackerNews"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
