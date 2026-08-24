import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">

          <p>WELCOME TO OUR STORE</p>

          <h1>
            Shop Smart.
            <br />
            Live Better.
          </h1>

          <p>
            Discover the latest products at the best prices.
          </p>

          <Link to="/products">
            <button>Shop Now</button>
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;