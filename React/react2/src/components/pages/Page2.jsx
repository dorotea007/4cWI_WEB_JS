import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Page2() {
  const location = useLocation();
  const person = location.state.person;
  console.log(person);
  console.log(location); 

  return (
    <div>
      <h1>Page 2xxs</h1>
      <div>Hello {person.firstname}</div>

      <Link to="/" className="hover:cursor-pointer">
        Page1
      </Link>
    </div>
  );
}
