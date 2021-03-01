import React, {useState} from "react";

function ToyCard({toy, handleDelete, handleLike}) {
  const {name, image, likes} = toy
  const [newLikes, setNewLikes] = useState(likes)

  function handleLikeInHere(toy){
    setNewLikes(newLikes + 1)
    handleLike(toy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{newLikes} Likes </p>
      <button onClick={()=>handleLikeInHere(toy)} className="like-btn">Like {"<3"}</button>
      <button onClick={()=>handleDelete(toy)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
