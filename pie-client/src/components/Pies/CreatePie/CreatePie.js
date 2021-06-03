import React, { useState } from "react";
import "./CreatePie.css";

const CreatePie = (props) => {
  const [nameOfPie, setNameOfPie] = useState("");
  const [baseOfPie, setBaseOfPie] = useState("");
  const [crust, setCrust] = useState("");
  const [timeToBake, setTimeToBake] = useState(0);
  const [servings, setServings] = useState(0);
  const [ratings, setRatings] = useState(0);

  const postPie = (e) => {
    e.preventDefault();

    let url = "http://localhost:3030/pies/";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        nameOfPie: nameOfPie,
        baseOfPie: baseOfPie,
        crust: crust,
        timeToBake: timeToBake,
        servings: servings,
        ratings: ratings,
      }),
      headers: new Headers({
        "Content-type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        props.setCreatePie(false);
      });
  };

  return (
    <form onSubmit={postPie}>
      <input
        type="text"
        value={nameOfPie}
        placeholder="Name of Pie"
        onChange={(e) => setNameOfPie(e.target.value)}
      />
      <input
        type="text"
        value={baseOfPie}
        placeholder="Base of Pie"
        onChange={(e) => setBaseOfPie(e.target.value)}
      />
      <input
        type="text"
        value={crust}
        placeholder="Crust"
        onChange={(e) => setCrust(e.target.value)}
      />
      <input
        type="text"
        value={timeToBake}
        placeholder="Time to Bake"
        onChange={(e) => setTimeToBake(e.target.value)}
      />
      <input
        type="text"
        value={servings}
        placeholder="Servings"
        onChange={(e) => setServings(e.target.value)}
      />
      <input
        type="text"
        value={ratings}
        placeholder="Rating"
        onChange={(e) => setRatings(e.target.value)}
      />
      <button type="submit">Create the pie!</button>
    </form>
  );
};

export default CreatePie;
