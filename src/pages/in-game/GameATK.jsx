import React from "react";
import "./Game.css";
import PlayerATK from "./Attacker/Player-ATK";
import'./assets/StandStill.png' 


const GameATK = () => {
    return (
        <div className="body">
            {/* <article className="middle-box">
                <div className="d-flex justify-content-between">
                    <div className="col-md-2 text-center">Player1</div>
                    <div className="col-md-8"><img src="/StandStill.png" style={{width:"100%"}}/></div>
                    <div className="col-md-2 text-center">Enemy1</div>
                </div>
            </article> */}
        {/* asdadpijwpkljwslkjs */}
            <PlayerATK />
        </div>
    );
};

export default GameATK;
