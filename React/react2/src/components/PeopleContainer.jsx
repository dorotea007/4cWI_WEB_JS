import React, { useEffect, useState } from "react";
import CardPeople from './CardPeople';

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => { // useState merkt sich Daten über mehrere Aufrufe hinweg
    fetch("https://67c08172b9d02a9f224a0b60.mockapi.io/person").then(
      (res) => res.json()).then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      })
  }, []);

  const filterPeople = (filter) =>{
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered);
  }

  return (
    <div className="">
      <div className="fixed top-0 border mb- bg-white w-full h-28 p-8">
        <input 
          className="p-2 bg-white" 
          type="text"
          placeholder="Search" 
          onChange={(el)=>{
            console.log(el.target.value);
            filterPeople(el.target.value);
        }} 
        />
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32">
        {filteredPeople.map(person => {
          return <CardPeople 
          name={person.name} 
          imageUri={person.avatar} 
          title={person.jobtitle}/>
        })}
      </div>
    </div>
  );
}

