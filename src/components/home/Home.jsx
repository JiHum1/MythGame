import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div>
            <form>
                <fieldset className="window-select">
                    <legend className="legend-font">Mode</legend>
                    <Link to="/SinglePlayer">
                        <button className="home-Button btn-home btn-1" >
                            SinglePlayer
                        </button>
                    </Link>
                    <Link to="/Rules">
                        <button className="home-Button btn-home btn-1" >
                            Rules
                        </button>
                    </Link>
                </fieldset>
            </form>
        </div>
    );
}

export default Home;
