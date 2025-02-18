import React, { useState } from "react";
import "./appDownload.css";
import mobileImage from "../assets/mobileImage.png";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";

const AppDownload = () => {
  const [selectedOption, setSelectedOption] = useState("email");
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="app-download-container">
      <div className="app-download-wrapper">
        {/* Left Side: Mobile Image */}
        <div className="app-download-image-container">
          <img src={mobileImage} alt="Mobile Screens" className="app-download-image" />
        </div>

        {/* Right Side: Content */}
        <div className="app-download-content">
          <h1 className="app-download-title">Get the ApnaSwad app</h1>
          <p className="app-download-description">
            We will send you a link, open it on your phone to download the app.
          </p>

          {/* Radio Buttons */}
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="contact"
                value="email"
                checked={selectedOption === "email"}
                onChange={() => setSelectedOption("email")}
              />
              <span>Email</span>
            </label>

            <label className="radio-label">
              <input
                type="radio"
                name="contact"
                value="phone"
                checked={selectedOption === "phone"}
                onChange={() => setSelectedOption("phone")}
              />
              <span>Phone</span>
            </label>
          </div>

          {/* Input & Button */}
          <div className="app-download-form">
            <input
              type="text"
              placeholder={selectedOption === "email" ? "Enter your email" : "Enter your phone"}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="app-download-input"
            />
            <button className="app-download-button">Share App Link</button>
          </div>

          {/* Download Links */}
          <p className="app-download-description">Download app from</p>
          <div className="app-download-links">
            <img src={googlePlay} alt="Google Play" />
            <img src={appStore} alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
