import { useEffect, useState } from "react";
import { stompClient } from "./ChatBox";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

const ShowChatBox = () => {
  let [data, setData] = useState({
    name: "",
    message: "",
  });
  let navigate = useNavigate();

  let sendMessage = async (e) => {
    e.preventDefault();
    let msg = document.getElementById("message").value;
    let jsonOb = {
      name: localStorage.getItem("name"),
      content: msg,
    };
    stompClient.subscribe("/topic/return-to", (response) => {
      showMessage(JSON.parse(response.body));
    });
    stompClient.send("/app/chatTo", {}, JSON.stringify(jsonOb));
  };

  let showMessage = (message) => {
    let { name, content } = message;
  setData({ name: name, message: content });
  };

  useEffect(() => {
    console.log(data+"from useEffect");
  }, [data.name,data.message,data]);


  let handleLogout=()=>{
    localStorage.removeItem("name");
    if (stompClient!=null) {
      stompClient.disconnect()
      console.log(stompClient);
      navigate("/")
     }
  }

  return (
    <div className="container mt-4">
      <div className="input-group">
        <textarea
          className="form-control"
          aria-label="With textarea"
          id="message"
        ></textarea>
        <button
          className="btn btn-outline-primary"
          type="button"
          id="send"
          name="send"
          onClick={sendMessage}
        >
          Send
        </button>
        <button
          className="btn btn-outline-primary mx-1"
          type="button"
          id="logout"
          name="logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <Table name={data.name} message={data.message} />
   
    </div>
  );
};

export default ShowChatBox;
