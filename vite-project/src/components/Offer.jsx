import React from "react";
import "./Offer.css";

const OfferPage = () => {
  return (
    <div className="offer-container">
      <header className="offer-header">
        <h1>Exclusive Offers at Apna Swad!</h1>
        <p>Delicious homemade meals at unbeatable prices</p>
      </header>
      <section className="offer-list">
        <div className="offer-card">
          <h2>Flat 20% Off</h2>
          <p>Get 20% off on your first order. Use code: WELCOME20</p>
        </div>
        <div className="offer-card">
          <h2>Buy 1 Get 1 Free</h2>
          <p>Order any two meals and get the second one absolutely free!</p>
        </div>
        <div className="offer-card">
          <h2>Free Delivery</h2>
          <p>Enjoy free delivery on orders above ₹299.</p>
        </div>
      </section>
      <footer className="offer-footer">
        <p>Hurry! Offers valid for a limited time only.</p>
      </footer>
    </div>
  );
};

export default OfferPage;