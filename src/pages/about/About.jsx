import React from "react";
import "./About.css";
function About() {
    return (
        <div>
            <div className="container-md bg-dark border border-light mt-3 rounded">
                <header className="bg-light d-flex p-lg-2 rounded">
                    <img src="/logo.png" width="100px" className="rounded" />
                    <span className="topic-About-us">About us</span>
                </header>
            </div>
            <main className="container-md bg-dark border border-light mt-1 rounded p-3 justify-content-center">
              <img src="/introduce.jpg" width="800px" className="about-img border border-5 border-dark"/>
            </main>
        </div>
    );
}

export default About;
