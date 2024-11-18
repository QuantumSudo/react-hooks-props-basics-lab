import React from "react";

const About = ({ bio }) => {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
    </div>
  );
};

export default About;
