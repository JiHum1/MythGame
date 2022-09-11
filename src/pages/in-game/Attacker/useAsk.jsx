import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RandomAsk } from "../../../randomask";
import Swal from "sweetalert2";

const useAsk = () => {
    const navigate = useNavigate();
    // In-Game func with usestate
    const [itemsAsk, setItemsAsk] = useState(); // โจทย์ใหม่
    const [playerhp, setPlayerhp] = useState(6); // เลือดของผู้เล่น
    const [enemyhp, setEnemyhp] = useState(8); // เลือดของศัตรู
    const [turn, setTurn] = useState("Attacker"); // turn or ฝั้งที่เล่น

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
                window.location.reload();
            } else if (result.isDenied) {
                navigate("/");
            }
        });
    };
    const betweenUi = (wl, pho) => {
        Swal.fire({
            title: wl,
            width: 600,
            padding: "3em",
            color: "#2A2A2A",
            imageUrl: pho,
            imageHeight: 300,
            backdrop: `
              rgba(0,0,0,0.5)
              left top
              no-repeat
            `,
        });
    };

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
        if (number == "") return; // หากคำตอบว่าง Not run continue

        // เช็คคำตอบฝั่งโจมตี [Start]
        if (turn === "Attacker") {
            if (number == itemsAsk.ans) {
                setItemsAsk(RandomAsk());
                const prevEnemy = enemyhp - 2;
                setEnemyhp(prevEnemy);
                betweenUi("Correct! : Attacker", "/Player-atked.png");

                if (prevEnemy == 0) {
                    sweetUi("You win!", "success");
                }
            } else {
                setItemsAsk(RandomAsk());
                betweenUi("InCorrect : Attacker", "/Player-missAtked.png");
            }
            setTurn("Defender");
            // เช็คคำตอบฝั่งโจมตี  [End]
        }
        // เช็คคำตอบฝั่งป้องกัน [Start]
        if (turn === "Defender") {
            if (number == itemsAsk.ans) {
                setItemsAsk(RandomAsk());
                const prevPlayer = playerhp - 1;
                betweenUi("Correct! : Defender", "/Enemy-missAtked.png");
                if (prevPlayer == 0) {
                    sweetUi("You Lost :(", "error");
                }
                setPlayerhp(prevPlayer);
            } else {
                const prevPlayer = playerhp - 2;
                setPlayerhp(prevPlayer);
                setItemsAsk(RandomAsk());
                betweenUi("InCorrect : Defender", "/Enemy-atked.png");
                if (prevPlayer == 0) {
                    sweetUi("You Lost :(", "error");
                }
            }
            setTurn("Attacker");
        }
        setNumber("");
    };
    // เช็คคำตอบฝั่งศัตรู [End]
    /*
    รวมกันทั้งหมด ของ หากคำตอบว่าง, เช็คคำตอบฝั่งโจมตี ,
    */
    // ตรวจสอบคำตอบ Function [End]

    return {
        answerTitle,
        saveItem,
        playerhp,
        enemyhp,
        turn,
        seconds,
        itemsAsk,
        number,
    };
};

export default useAsk;
