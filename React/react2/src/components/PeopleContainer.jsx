import React, { useEffect, useState } from "react";
import CardPeople from './CardPeople';

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://67c08172b9d02a9f224a0b60.mockapi.io/person").then
      ((res) => res.json()).then((data) => {
        setPeople(data);
      })
  }, []);

  return (
    <div>
      <h1>People</h1>
      <button onClick={()=>{setcolor("orange")}}>Change Color</button>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {people.map(person => {
          return <CardPeople name={person.name} imageUri={person.avatar} title={person.jobtitle}/>
        })}
      </div>
    </div>
  );
}
