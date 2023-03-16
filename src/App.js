import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Routes } from "react-router";
import "./App.css";
import Form from "./components/Form";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import ShowChatBox from "./components/ShowChatBox";
import Messages from "./components/Messages";
import Users from "./components/Users";

function App() {
  return (
    <>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/chat" element={<ShowChatBox />} />
            <Route exact path="/signup" element={<Form />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/message" element={<Messages />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
