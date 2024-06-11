import "./AboutMe.css";
import { Link, Outlet } from "react-router-dom";

function AboutMe() {
  return (
    <div className="about">
      <p>I&apos;m a simple person. I see Emojis, I write reviews.</p>
      <ul className="links">
        <li>
          <Link to="my-story">My Story</Link>
        </li>
        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="contact">My Contact Info</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutMe;
