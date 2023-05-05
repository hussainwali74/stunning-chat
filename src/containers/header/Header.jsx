import React from "react";

import "./Header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Smart Chat with AI</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nulla
          ratione eum repudiandae velit, earum esse corporis assumenda animi
          perferendis molestias asperiores, quos omnis dignissimos ullam error
          pariatur doloribus obcaecati!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
