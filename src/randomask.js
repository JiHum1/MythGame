
export const RandomAsk = () => {
    // max = length of askGame
    // min = 0 [follow Index of Object]
    const max = askGame.length - 1
    const min = 0
    return askGame[Math.floor(Math.random() * (max - min + 1)) + min];
}
        
const askGame = [
    { id: 1, ask: "21 - 30", ans: -9 },
    { id: 2, ask: "1 + 2", ans: 3 },
    { id: 3, ask: "5 + 5", ans: 10 },
    { id: 4, ask: "3 x 3", ans: 9 },
    { id: 5, ask: "9 / 3", ans: 3 },
    { id: 6, ask: "20 - 20", ans: 0 },
    { id: 7, ask: "500 + 1,000", ans: 1500 },
    { id: 8, ask: "30 / 6", ans: 5 },
    { id: 9, ask: "45 / 9", ans: 5 },
    { id: 10, ask: "5 + 22", ans: 27 },
    { id: 11, ask: "40 + 20", ans: 60 },
    { id: 12, ask: "55 + 65", ans: 120 },
    { id: 13, ask: "70 / 10", ans: 7 },
    { id: 14, ask: "500 / 10", ans: 50 },
    { id: 15, ask: "120 + 300", ans: 420 }
];