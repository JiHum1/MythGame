import React from "react";
import "../tutorial/Tutorial.css"
function LearnPage() {
    return (
        <div>
            <div className="container bg-dark mt-3 rounded-2 col-8">
                <header className="bg-light d-flex p-lg-2 rounded">
                    <img src="/logo.png" width="100px" className="rounded" />
                    <span className="topic-tutorial">
                        Learn Info of Myth Game.
                    </span>
                </header>
            </div>
        </div>
    );
}

export default LearnPage;
