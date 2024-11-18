import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

const user = {
  name: "Liza",
  city: "New York",
  color: "firebrick",
  bio: "A passionate web developer",
  links: {
    github: "https://github.com/liza",
    linkedin: "https://linkedin.com/in/liza"
  }
};

const App = () => {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} />
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
};

export default App;
