import { React, useState, useEffect } from "react";
import { RandomAsk } from "../../../randomask";
import PopUpUi from './PopUpUi'

const useAsk = () => {

    let { sweetUi, betweenUi} = PopUpUi();
    // In-Game func with usestate
    const [itemsAsk, setItemsAsk] = useState(); // โจทย์ใหม่
    const [playerhp, setPlayerhp] = useState(6)
    const [enemyhp, setEnemyhp] = useState(8)
    const [turn, setTurn] = useState("Attacker"); // turn or ฝั้งที่เล่น

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
                if (prevEnemy < 0) {
                    window.location.reload()
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
                if (prevPlayer < 0) {
                    window.location.reload()
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
                if (prevPlayer < 0) {
                    window.location.reload()
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
