import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg text-white bg-danger">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-center">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link  text-center line">Mobile</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link  text-center line">Laptop</a>
            </li>
            <li className="nav-item">
              <a class="nav-link text-center line">Fridge</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-center line">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-center line">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
