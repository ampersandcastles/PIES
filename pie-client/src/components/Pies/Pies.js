import React, { useState, useEffect } from "react";
import "./Pies.css";
import DisplayPies from "./Pie/Pie";

const Pies = (props) => {
  const [pies, setPies] = useState([]);

  const fetchPies = () => {
    let url = "http://localhost:3030/pies/";

    fetch(url, {
      method: "GET",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: props.sessionToken,
      }),
    })
      .then((res) => res.json())
      .then((json) => setPies(json));
  };

  useEffect(() => {
    fetchPies();
  }, []);

  const pie = [
    {
      nameOfPie: "pumpkin",
      baseOfPie: "pumpkin puree",
      crust: "pastry",
      timeToBake: 50,
      servings: 8,
      rating: 4,
    },
    {
      nameOfPie: "apple",
      baseOfPie: "candied apples",
      crust: "pastry",
      timeToBake: 40,
      servings: 4,
      rating: 3,
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name of Pie</th>
            <th>Base of Pie</th>
            <th>Crust</th>
            <th>Bake Time</th>
            <th>Servings</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <DisplayPies pie={pies} />
        </tbody>
      </table>
    </div>
  );
};

export default Pies;
