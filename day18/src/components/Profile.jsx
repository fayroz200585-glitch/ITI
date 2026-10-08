import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function UserName(props) {
  return (
    <div>
      <p>My Name: {props.name}</p>
      <p>My Nickname: Rosy</p>
    </div>
  );
}

function Profile() {

  const [count, setCount] = useState(0);
const [name, setName] = useState("Fayroz");
  useEffect(() => {
    console.log("Profile mounted");

    return () => {
      console.log("Profile unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);
   
  useEffect(() => {
  console.log("Component updated");
   });
  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <Link to="/">back</Link>
      <h1>My Profile</h1>
      <p>Count: {count}</p>
       <p>Name: {name}</p>
       <UserName name={name} />
      <button onClick={increase}>Increase</button>
      <Link to="/profile/details">My Details</Link>
      <Outlet />
    </div>
  );
}

export default Profile;