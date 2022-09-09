import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Player-ATK.css";
import { RandomAsk } from "../../../randomask";
import Swal from "sweetalert2";

function PlayerATK() {
    const navigate = useNavigate();
    // In-Game func with usestate
    const [itemsAsk, setItemsAsk] = useState(); // โจทย์ใหม่
    const [playerhp, setPlayerhp] = useState(6); // เลือดของผู้เล่น
    const [enemyhp, setEnemyhp] = useState(8); // เลือดของศัตรู
    const [turn, setTurn] = useState("Player Turn"); // turn or ฝั้งที่เล่น

    const sweetUi = (WL, role) => {
        Swal.fire({
            title: WL,
            icon: role,
            showDenyButton: true,
            confirmButtonText: "Continue",
            denyButtonText: "Quit",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.reload()
            } 
            else if (result.isDenied) {
                navigate("/");
            }
        });
    };
    const betweenUi = (wl, pho) => {
        Swal.fire({
            title: wl,
            width: 600,
            padding: '3em',
            color: '#2A2A2A',
            imageUrl: pho,
            imageHeight: 300,
            backdrop: `
              rgba(0,0,0,0.5)
              left top
              no-repeat
            `,
          })
    }

    // CountDownTime [Start]
    const initialSeconds = 90;
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                sweetUi("Time out");
                clearInterval(myInterval);
            }
        }, 1000);
        return () => {
            clearInterval(myInterval);
        };
    });
    // CountDownTime [End]

    // สุ่มโจทย์ใหม่
    useEffect(() => {
        setItemsAsk(RandomAsk());
    }, []);

    // ใส่คำตอบ [Start]
    const [number, setNumber] = useState("");

    const answerTitle = (event) => {
        setNumber(event.target.value);
    };
    // ใส่คำตอบ [End]

    // ตรวจสอบคำตอบ Function [Start]
    const saveItem = (event) => {
        event.preventDefault();
        if (number == "") return // หากคำตอบว่าง Not run continue

        // เช็คคำตอบฝั่งโจมตี [Start]
        if (turn === "Player Turn") {
            if (number == itemsAsk.ans) {
                setItemsAsk(RandomAsk());
                const prevEnemy = enemyhp - 2;
                setEnemyhp(prevEnemy);
                betweenUi("Correct! : PlayerTurn", '/Player-atked.png')
                
                if (prevEnemy == 0) {
                    sweetUi("You win!", 'success');

                }
            } else {
                setItemsAsk(RandomAsk());
                betweenUi("InCorrect : PlayerTurn", '/Player-missAtked.png');
            }
            setTurn("Enemy Turn");
            // เช็คคำตอบฝั่งโจมตี  [End]
        }
        // เช็คคำตอบฝั่งป้องกัน [Start]
        if (turn === "Enemy Turn") {
            if (number == itemsAsk.ans) {
                setItemsAsk(RandomAsk());
                const prevPlayer = playerhp - 1;
                betweenUi("Correct! : EnemyTurn", '/Enemy-missAtked.png')
                if (prevPlayer == 0) {
                    sweetUi("You Lost :(", 'error');
                }
                setPlayerhp(prevPlayer);
            } else {
                const prevPlayer = playerhp - 2;
                setPlayerhp(prevPlayer);
                setItemsAsk(RandomAsk());
                betweenUi("InCorrect : EnemyTurn", '/Enemy-atked.png')
                if (prevPlayer == 0) {
                    sweetUi("You Lost :(", 'error');
                }
            }
            setTurn("Player Turn");
        }
        setNumber("");
    };
    // เช็คคำตอบฝั่งศัตรู [End]
    /* 
    รวมกันทั้งหมด ของ หากคำตอบว่าง, เช็คคำตอบฝั่งโจมตี , 
    */
    // ตรวจสอบคำตอบ Function [End]
    return (
        <div>
            <article className="d-flex justify-content-between">
                <div className="col-md-2 text-center pt-4 bg-primary justify-content-center">
                    <div className="">
                        <h2>Player</h2>

                        <h1>{`HP ${playerhp}/6`}</h1>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src="/StandStill.png" style={{ width: "100%" }} />
                </div>
                <div className="col-md-2 text-center pt-4 bg-danger justify-content-center">
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
                        left: "41%",
                        color: "#D2FF3B"
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
                className="d-flex bg-success"
                style={{ marginTop: "-19px", height:"102px" }}
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
