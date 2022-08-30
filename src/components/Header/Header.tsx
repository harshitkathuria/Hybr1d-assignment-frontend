import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "assets/logo.svg";
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
        <div>
          <img src={Logo} alt="Logo" />
        </div>
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
