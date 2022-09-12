import { React } from "react";
import "./Player-ATK.css";
import useAsk from "./useAsk";

function PlayerATK() {
    let { answerTitle, saveItem, number,turn, seconds, itemsAsk, playerhp, enemyhp  } = useAsk(); // Answer: function
    // let { playerhp, enemyhp } = useAsk(); // HP: Feature

    return (
        <div className="">
            <article className="d-flex justify-content-between">
                <div className="col-md-2 text-center pt-4 bg-primary justify-content-center ">
                    <div className="">
                        <h2>Player</h2>

                        <h1>{`HP ${playerhp}/6`}</h1>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src="/StandStill.png" style={{ width: "100%" }} />
                </div>
                <div className="col-md-2 row-cols-auto text-center pt-4 bg-danger justify-content-center">
                    <div className="">
                        <h2>Enemy</h2>

                        <h1>{`HP ${enemyhp}/8`}</h1>
                    </div>
                </div>
            </article>
            <div className="character" id="Role-style">
                <div
                    style={{
                        position: "absolute",
                        top: "8rem",
                        left: "47%",
                        color: "#D2FF3B",
                    }}
                >
                    {turn}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "1rem",
                        left: "47%",
                    }}
                >
                    {`${seconds} SEC`}
                </div>
            </div>
            <footer
                className="d-flex bg-success p-2 col-sm-16 "
                style={{ marginTop: "-19px"}}
            >
                <div className="col-md-6 text-center">
                    <h3
                        className="mt-2"
                        style={{
                            fontFamily: "Fira Sans Condensed, sans-serif",
                        }}
                    >
                        Question
                    </h3>

                    <h2
                        style={{
                            fontFamily: "Fira Sans Condensed, sans-serif",
                        }}
                    >
                        {itemsAsk?.ask}
                    </h2>
                </div>
                <div
                    className="col-md-6 d-flex justify-content-center"
                    style={{ verticalAlign: "center" }}
                >
                    <form onClick={(e) => saveItem(e)}>
                        <label className="h2 mt-4 mr-3">Answer</label>
                        <input
                            className="bar-style mt4 mx-2"
                            type="text"
                            // name="Answer"
                            placeholder="Enter your Answer"
                            style={{ maxHeight: "60px" }}
                            onChange={answerTitle}
                            value={number}
                        />
                        <button
                            className="btn btn-warning mt-0 ml-3 submit-font submit-button"
                            style={{ maxHeight: "60px", width: "150px" }}
                            // onClick={(e) => saveItem(e)}
                        >
                            <b>SUBMIT</b>
                        </button>
                    </form>
                </div>
            </footer>
        </div>
    );
}
export default PlayerATK;