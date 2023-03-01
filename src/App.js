import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes } from "react-router";
import "./App.css";
import ChatBox from "./components/ChatBox";
import Form from "./components/Form";
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
            <Route exact path="/login" element={<Form />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
