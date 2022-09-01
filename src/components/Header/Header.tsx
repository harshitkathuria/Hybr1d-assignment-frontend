import React, { useEffect, useRef } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import HNLogo from "assets/HNLogo.webp";
import styles from "./Header.module.scss";

const Header = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query && ref.current) {
      ref.current.value = query;
    }
  }, [query]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigation({
      pathname: "/",
      search: "?query=" + ref.current?.value?.trim()
    });
    ref.current?.blur();
  };

  return (
    <nav className={styles.header}>
      <div className={styles.header_wrapper}>
        <Link
          to="/"
          className={styles.logo}
          onClick={() => {
            if (ref.current) ref.current.value = "";
          }}
        >
          <img src={HNLogo} alt="Logo" />
        </Link>
        <div className={styles.form_wrapper}>
          <form onSubmit={onSubmit}>
            <input
              ref={ref}
              required
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
