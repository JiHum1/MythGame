import "./App.css";
import Header from "./components/header-lobby/Header";
import Content from "./pages/content/Content";
import GameATK from "./pages/in-game/GameATK";
import About from "./pages/about/About";
import Home from "./components/home/Home";
import Rules from "./pages/rule/Rule";
import Tutorial from "./pages/tutorial/Tutorial";
import LearnPage from "./pages/learnPage/LearnPage"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RandomAsk } from "./randomask";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Rules" element={<Rules />} />
                    <Route path="/SinglePlayer" element={<Content />} />
                    <Route
                        path="/SinglePlayer/Game"
                        element={<GameATK items={RandomAsk} />}
                    />
                    <Route path="/About" element={<About />} />
                    <Route path="/Tutorial" element={<Tutorial />} />
                    <Route path="/Learn more" element={<LearnPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
