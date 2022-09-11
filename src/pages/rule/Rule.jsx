import React from "react";
import { Link } from "react-router-dom";
import "./Rule.css";

function Rules() {
    return (
        <div>
            <div className="container-md bg-dark border border-light mt-3 rounded">
                <header className="bg-light d-flex">
                    <img src="/logo.png" width="100px" />
                    <span className="topic-rule">Rules of Myth Game</span>
                </header>

                <div class="d-flex align-items-start mt-3 m-3">
                    <div
                        class="nav flex-column nav-pills mb-3 mr-3 bg-light rounded p-1"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <button
                            class="nav-link active"
                            id="Rule-1"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            Rule 1
                        </button>
                        <button
                            class="nav-link"
                            id="Rule-2"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                        >
                            Rule 2
                        </button>
                        <button
                            class="nav-link"
                            id="Rule-3"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-messages"
                            aria-selected="false"
                        >
                            Rule 3
                        </button>
                        <button
                            class="nav-link"
                            id="Rule-4"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            Rule 4
                        </button>
                    </div>
                    <div class="tab-content pt-5 p-4" id="v-pills-tabContent">
                        <div
                            class="tab-pane fade show active font-rule-size"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="Rule-1"
                            tabindex="0"
                        >
                            Don't use Calculator.
                        </div>
                        <div
                            class="tab-pane fade font-rule-size"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="Rule-2"
                            tabindex="0"
                        >
                            Don't write{" "}
                            <span
                                className="rounded"
                                style={{ background: "#FFCD00" }}
                            >
                                <span style={{ color: "#AF0000" }}>
                                    &ensp;,&ensp;
                                </span>
                            </span>{" "}
                            since 4 digits.
                        </div>
                        <div
                            class="tab-pane fade font-rule-size"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="Rule-3"
                            tabindex="0"
                        >
                            Must write to answer all Question.
                        </div>
                        <div
                            class="tab-pane fade font-rule-size"
                            id="v-pills-settings"
                            role="tabpanel"
                            aria-labelledby="Rule-4"
                            tabindex="0"
                        >
                            Good luck Have fun!
                        </div>
                    </div>
                </div>
            </div>
            <footer className="container bg-dark border border-dark p-3 rounded">
                <div
                    className="btn-group btn-group-lg"
                    role="group"
                    aria-label="Large button group"
                >
                    <Link to="/Tutorial">
                        <button type="button" className="btn btn-outline-teel">
                            Go to Tutorial
                        </button>
                    </Link>
                    <Link to="/">
                        <button type="button" className="btn btn-outline-red">
                            Quit
                        </button>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

export default Rules;
