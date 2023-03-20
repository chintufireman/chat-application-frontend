import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { stompClient } from "./Login";
import Users from "./Users";

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

    // stompClient.subscribe("/topic/return-to", (response) => {
    //   showMessage(JSON.parse(response.body));
    // });
    let name1 = localStorage.getItem("email");
    let name2 = localStorage.getItem("email2");
    let chatUrl;
    
    if (name1.localeCompare(name2) < 0) {
      chatUrl = "/chatroom/" + name1 + "-" + name2;
    } else {
      chatUrl = "/chatroom/" + name2 + "-" + name1;
    }

    stompClient.subscribe(chatUrl, (response) => {
      showMessage(JSON.parse(response.body));
    });

    stompClient.send(
      "/app/private/" + name1 + "/" + name2,
      {},
      JSON.stringify(jsonOb)
    );
  };

  let showMessage = (message) => {
    let { name, content } = message;
    setData({ name: name, message: content });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("name2");
    if (stompClient != null) {
      stompClient.disconnect();
      console.log(stompClient);
      navigate("/");
    }
  };

  const fetchData = async () => {
    const response = await fetch(
      "http://192.168.1.9:9191/api/v1/user-handle/users",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const json = await response.json();
    console.log(json);
  };

  return (
    <Users sendMessage={sendMessage}></Users>
  );
};

export default ShowChatBox;
