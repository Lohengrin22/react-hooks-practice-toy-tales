import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys,handleLike, handleDelete}) {
  const toyArray = toys.map((toy)=>{
   return <ToyCard 
    key={toy.id}
    toy={toy}
    handleDelete={handleDelete}
    handleLike={handleLike}
    />
  })
  return (
    <div id="toy-collection">{toyArray}</div>
  );
}

export default ToyContainer;
