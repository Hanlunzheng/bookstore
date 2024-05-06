import React from "react";
import { Link } from "react-router-dom";

import Bookstore from "../assets/bookstore.png";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Weclome to Aaron Fang BookStore</h1>
            <h2>
              Find your dream book in{" "}
              <span className="purple">Aaron BookStore</span>
            </h2>
            <Link to="/books">
              <button className="btn">Browse books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img
              src={Bookstore}
              alt=""
              style={{ width: "300px", height: "auto" }}
            />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
