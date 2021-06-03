import React, { useState } from "react";
import "./Auth.css";
const Auth = (props) => {
  console.log(props);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const title = () => {
    return login ? "Login" : "Signup";
    //if login is true, retutn Login. If login is false, return Signup
  };
  const loginToggle = (event) => {
    //Takes in an event so we can stop the page from reloading on form submission
    event.preventDefault();
    setLogin(!login);
    //set login to the opposite of its current value
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   let reqBody = login
  //     ? {
  //         email: email,
  //         password: password,
  //       }
  //     : {
  //         firstName: firstName,
  //         lastName: lastName,
  //         email: email,
  //         password: password,
  //       };

  //   let url = login
  //     ? "http://localhost:3030/user/login"
  //     : "http://localhost:3030/user/register";

  //   fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(reqBody),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => props.updateLocalStorage(json.token))
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    let reqBody = login
      ? {
          email: email,
          password: password,
        }
      : {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        };
    let url = login
      ? "http://localhost:3030/user/login"
      : "http://localhost:3030/user/register";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((json) => props.updateLocalStorage(json.token))
      .catch((err) => console.log(err));
  };

  const signupFields = () =>
    !login ? (
      <div>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <br />
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    ) : null;
  //If login is false, we want to show the additional fields. If login is true, show nothing(null)
  return (
    <div>
      <form>
        <h1>{title()}</h1>
        <br />
        {signupFields()}
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(console.log(e), e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={loginToggle}>Login/Signup Toggle</button>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit User Data
        </button>
      </form>
    </div>
  );
};
/*
-if we take out onChage handler, the value is locked because the value is an empty string
-the onChange handler takes in an anonymous function that will set the state of our variables to what we type in the input
Two-way-binding: This is essentially  a circuit. The data comes in and changes the state variable via setEmail/setPassword, and the state variable is tied to the input field via th evalue attribute.
*/
export default Auth;
