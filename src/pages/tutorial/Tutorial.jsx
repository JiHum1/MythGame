import React from "react";
import { Link } from "react-router-dom";
import "./Tutorial.css";

function Tutorial() {
    return (
        <div>
            <div className="container bg-dark mt-3 rounded-2 col-8">
                <header className="bg-light d-flex p-lg-2 rounded">
                    <img src="/logo.png" width="100px" className="rounded" />
                    <span className="topic-tutorial">
                        Tutorial of Myth Game
                    </span>
                </header>
            </div>
            <div className="container bg-dark mt-sm-1 rounded-2 p-2" style={{height:"100rem"}}>
                <section className="card p-2 d-inline-block" style={{ width: "50rem" }}>
                    <h2 className="" style={{ color: "black" }}>
                        1. Learn About Mathematic.
                    </h2>
                    <Link to="/Learn more">
                        <button className="learn-button">Learn More</button>
                    </Link>
                </section>
                <section className="card p-2 d-inline-block" style={{ width: "50rem" }}>
                    <h2 className="" style={{ color: "black" }}>
                        2. How to get to the game
                    </h2>
                    <img src="..." alt="..." />
                </section>
                <section className="card p-2 d-inline-block" style={{ width: "50rem" }}>
                    <h2 className="" style={{ color: "black" }}>
                        3. How to Play
                    </h2>
                    <img src="..." alt="..." />
                </section>
                <section className="card p-2 d-inline-block" style={{ width: "50rem" }}>
                    <h2 className="" style={{ color: "black" }}>
                        4. How to Win or Lose
                    </h2>
                    <img src="..." alt="..." />
                </section>
                {/* <div class="row sticky-row ">
                    <div class="col-4">
                        <div id="list-example" class="list-group">
                            <a
                                class="list-group-item list-group-item-action "
                                href="#list-item-1"
                            >
                                Item 1
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                href="#list-item-2"
                            >
                                Item 2
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                href="#list-item-3"
                            >
                                Item 3
                            </a>
                            <a
                                class="list-group-item list-group-item-action"
                                href="#list-item-4"
                            >
                                Item 4
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Tutorial;
