import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Komalpreet Kaur </span>
          from <span className="purple"> Brampton, ON, Canada.</span>
          <br />
          <br />
          As far back as I can remember, technology has held me in its
          mesmerizing embrace. The moment I encountered a website or an app, an
          irresistible curiosity bubbled within me. How did these virtual
          wonders come to life? This bewitching question became the cornerstone
          of my fascination, ultimately guiding me toward a lifelong journey
          into the heart of the digital realm.
          <br />
          <br />
          Once I chose this path, I started devouring information on building
          web applications. It took me a few days to determine that JavaScript
          would be the most appropriate solution to my problem. My first step in
          learning JavaScript fundamentals was to learn the basics of HTML and
          CSS. I grasped the basics and created my first functional JavaScript
          application; a Digital Clock. As a result, I was extremely pleased
          with the outcome. Since then, I have become more interested in
          learning JavaScript at a higher level and building applications.
          <br />
          <br />
          As I journey onward, I'm often left in awe of how far I've come. In
          the midst of 2021, I was a novice with a head full of questions about
          computer programming. Today, I stand before you as the architect of
          fully functional front-end applications.
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
