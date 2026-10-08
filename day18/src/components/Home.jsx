import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my profile</p>

      <NavLink to="/about">About</NavLink>
      <br />
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
}

export default Home;