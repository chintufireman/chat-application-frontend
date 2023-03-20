import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { stompClient } from "./Login";

const Messages = () => {
  let { state } = useLocation();

  let [message, setMessage] = useState([]);
  
  useEffect(() => {
    console.log(state);
    localStorage.setItem("name2", state.data.name);
    localStorage.setItem("email2", state.data.email);
  }, [state]);

  let sendMessage = async (e) => {
    e.preventDefault();

    let msg = document.getElementById("msg").value;
    let jsonOb = {
      name: localStorage.getItem("name"),
      content: msg,
    };

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

  let showMessage = (msg) => {
    setMessage([...message, msg]);
  };

  console.log("Message component rendered");
  return (
    <>
      <div className="container">
        <table className="table table-dark table-borderless align-middle">
          <thead>
            <tr className="align-middle">
              <th className="" scope="col">
                Sender
              </th>
              <th scope="col">Receiver</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{localStorage.getItem("name")}</td>
              <td>{state.data.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container">
        <table className="table table-light table-borderless">
          <tbody>
            {message.map((message, index) => (
              <tr key={index}>
                <td>{message.name}</td>
                <td>{message.content}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="container input-group mb-3 messages-container">
          <input
            type="text"
            className="form-control"
            placeholder="Say Hi"
            aria-label="Message to receiver"
            aria-describedby="button-addon2"
            id="msg"
            name="msg"
          />
          <button
            className="btn btn-success"
            type="button"
            id="sendMsg"
            name="sendMsg"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Messages;
