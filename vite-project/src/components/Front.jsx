import React from "react";
import "./Front.css";


const Front = () => {
  return (
    <>
      <div className="front container">
        <div className="front-text">
          <h1>GharKaSwad</h1>
          <h2>Taste of Home, Away from Home</h2>
          <div className="form-container">
            <form>
              <div className="form-group">
                <label for="location">Enter Your Location</label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter Your Location"
                />
              </div>
              <div className="form-group">
                <label for="radius">Enter Your Radius</label>
                <input
                  type="number"
                  id="radius"
                  placeholder="Enter Your Radius"
                />
              </div>
              <button type="submit" className="submit-btn">
                Search for Food
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="offers container">
        <h2 className="title">Packages and Offers</h2>
        <div className="package-row">
          <div className="package"> 
            <h3 className="package-title">Daily</h3>
            <h4>₹29/Day</h4>
            <h1>₹19/Day </h1>
            <button type="submit" className="submit-btn">
                 Know More..
              </button>
          </div>
          <div className="package">
            <h3 className="package-title">Weekly</h3>
            <h4>₹149/week</h4>
            <h1>₹99/Week </h1>
            <button type="submit" className="submit-btn">
                 Know More..
              </button>
          </div>
          <div className="package">
            <h3 className="package-title">Monthly</h3>
            <h4>₹349/Month</h4>
            <h1>₹249/Month </h1>
            <button type="submit" className="submit-btn">
                 Know More..
              </button>
          </div>
          <div className="package">
            <h3 className="package-title">Yearly</h3>
            <h4>₹3499/Year</h4>
            <h1>₹2499/Year </h1>
            <button type="submit" className="submit-btn">
                 Know More..
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;
