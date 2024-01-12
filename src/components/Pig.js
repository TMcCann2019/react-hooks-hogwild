import React from "react";

function Pig(props) {

    return (
        <div className="ui eight wide column pigTile">
            <img className="maxPigTile" src={props.image} alt={props.name}/>
            <div className="Pig-name">{props.name}</div>
            <div className="Pig-specialty">{props.specialty}</div>
            <div className="Pig-greased">{props.greased ? "V Greasy" : "Squeky Clean"}</div>
            <div className="Pig-weight">{props.weight}</div>
            <div className="Pig-highest-medal-achieved">{props["highest medal achieved"]}</div>
        </div>
    );
}

export default Pig;