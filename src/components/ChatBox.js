import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import { useNavigate } from "react-router-dom";

export let stompClient = null;
 

const ChatBox = () => {
  let navigate = useNavigate();

  let loginHandle = (event) => {
    event.preventDefault();
    localStorage.setItem("name", document.getElementById("loginName").value);
    connect();
   navigate("/chat");
  };

  let connect = () => {
    let socket = new SockJS("http://192.168.1.9:9191/server1");
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      console.log("Connected: to chatApp " + frame);
    });
  };

  


  return (
    <>
      <div className="container">
        <div className="row justify-content-start mt-4">
          <div className="col-6 col-md-4">
            <div className="chat-box chat-box--user input-group mb-3">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="login"
                name="login"
                onClick={loginHandle}
              >
                Button
              </button>
              <input
                type="text"
                id="loginName"
                className="form-control"
                placeholder="Enter Name here"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;