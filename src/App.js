import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes } from "react-router";
import "./App.css";
import ChatBox from "./components/ChatBox";
import NavBar from "./components/NavBar";
import ShowChatBox from "./components/ShowChatBox";

function App() {

  return (
    <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ChatBox />} />
            <Route exact path="/chat" element={<ShowChatBox />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
