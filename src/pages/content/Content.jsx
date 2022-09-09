import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
    return (
        <div>
            <section className="lobby-section">
                <h1 className="start-section">Menu</h1>
                <Link to="/SinglePlayer/Game">
                    <button type="button" className="Button btn-1">
                        Start Game
                    </button>
                </Link>
                <br />
                <Link to="/Tutorial">
                    <button className="Button btn-1">Tutorial</button>
                </Link>
            </section>
        </div>
    );
};

export default Content;
