import React from "react";
import hogs from "../porkers_data";
import Pig from "./Pig";

function PigContainer() {
    return (
        <div className="ui three stackable cards">
            {hogs.map(hog => (
                <Pig key={hog.name} {...hog} />
            ))}
        </div>
    );
}

export default PigContainer