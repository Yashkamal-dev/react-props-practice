import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-con">
        <img
          src={props["image"]}
          alt="profile picture"
          className="profile-pic"
        />
      </div>
      <div className="info">
        <div className="pre">
          <header>
            <h3 className="name">{props["name"]}</h3>
            <p className="post"> - {props["currentPosition"]}</p>
          </header>
          <div className="skills-about-con">
            <ul className="skills">
              <li>{props["skills"][0]}</li>
              <li>{props["skills"][1]}</li>
            </ul>
            <p className="about">{props["description"]}</p>
          </div>
        </div>
        <div className="btns">
          <button id="more" className="btn">
            More
          </button>
          <button id="book" className="btn">
            Book Lector
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
