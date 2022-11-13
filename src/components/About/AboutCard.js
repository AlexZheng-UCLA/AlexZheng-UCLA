import React from "react";
import Card from "react-bootstrap/Card";
import { MdComputer } from "react-icons/md";
import {GiPokerHand} from "react-icons/gi";
import {GiFootprint} from "react-icons/gi";
import {GrRobot} from "react-icons/gr";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a first-year master's student majoring in Computer Engineering at UCLA. I received my BEng in Automation & Robotics at Zhejiang University, China.<br/>
            <br/>
            I have rich experience in machine learning, planning and control of robots, software development.<br/>
            <br/>
            Apart from my technical abilities, I minored in Innovation and Entrepreneurship and have confidence in my leadership and communication skills.<br/>
            <br/>
            And here are some things I would like to do in my spare time:
          </p>
          <ul>
            <li className="about-activity">
              <GrRobot /> Learning newest tech -- AI, web3, robots
            </li>
            <li className="about-activity">
              <MdComputer /> Doing cool machine learning project
            </li>
            <li className="about-activity">
              <GiPokerHand /> Playing piano & boardgames 
            </li>
            <li className="about-activity">
              <GiFootprint /> Exploring the city -- who doesnt like LA
            </li>
          </ul>

          <p style={{ textAlign: "justify"}}>
            <br/>
            <span className="italic">"We are meant to make a difference to the world!"</span>
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
