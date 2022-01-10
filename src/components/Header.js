import React from "react";
import logo from '../images/logo.svg';

function Header() {

  return(
    <div>
      <div className="navbar">
        <a href="/"><img alt="Calabasas Speech logo" id="logo"src={logo}></img></a>
        <ul >
          <li>
              <a href="/">Home</a>
          </li>
          <li>
              <a href="#developer">About the Developer</a>
          </li>
          <li className="button" > 
              <a href="https://calabasas-speech-react.vercel.app/">Website</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;