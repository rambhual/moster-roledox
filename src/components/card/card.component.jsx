import React from "react";
import "./card.style.css";
const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${
          props.monster.id
        }?set_set3/bgset_bg1/3.14159?size=500x500`}
        alt={props.monster.id}
      />
      <h2 className="text-center">{props.monster.name}</h2>
      <p className="text-center">{props.monster.email}</p>
    </div>
  );
};

export default Card;
