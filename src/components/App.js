import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then((r) => r.json())
    .then(setToys)

  }, [])

 function onHandleDelete(deletedToy){
  fetch(`http://localhost:3001/toys/${deletedToy.id}`, {
    method: "DELETE",
    headers: {"Content-type": 'application/json'},
    })
    .then((r) => r.json())

    const updatedToys = toys.filter((toy)=> toy.id !== deletedToy.id)
    setToys(updatedToys)
   
 }
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(toy){
    setToys([...toys,toy ])
  }
  
  function onHandleLike(likedToy){
    

    fetch(`http://localhost:3001/toys/${likedToy.id}`, {
      method: "PATCH",
      headers: {"Content-type": 'application/json'},
      body: JSON.stringify({likes: (likedToy.likes + 1)})
      })
      

    }



  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleLike={onHandleLike} handleDelete={onHandleDelete} toys={toys}/>
    </>
  );
}

export default App;
