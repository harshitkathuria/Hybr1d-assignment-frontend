import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import HNLogo from "assets/HNLogo.webp";
import styles from "./Header.module.scss";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigation = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigation({
      pathname: "/",
      search: "?query=" + search?.trim()
    });
    setSearch("");
  };

  return (
    <nav className={styles.header}>
      <div className={styles.header_wrapper}>
        <Link to="/" className={styles.logo}>
          <img src={HNLogo} alt="Logo" />
        </Link>
        <div className={styles.form_wrapper}>
          <form onSubmit={onSubmit}>
            <input
              required
              type="text"
              id="search"
              name="search"
              placeholder="Search HackerNews"
              onChange={e => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
