import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async (e) => {
      const response = await fetch(
        process.env.REACT_APP_HOST+"/api/v1/user-handle/sent-messages/" +
          localStorage.getItem("email"),
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const json = await response.json();
      setUserData(json);
      console.log(userData);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const searchUser = async () => {
    let username = document.getElementById("username").value;

    const response = await fetch(
      process.env.REACT_APP_HOST+"/api/v1/user-handle/find-user/" + username,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const json = await response.json();
    setUserData(prevState=>[...prevState,json]);
  };

  return (
    <div className="container my-4">
      <div className="list-group ">
        {userData.map((user) => (
          // u can pass props to navigating link by providing props in "to" object
          <Link
            key={user.id}
            to="/message"
            state={{ data: user }}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center list-group-item-dark"
            aria-current="true"
          >
            {user.email}
          </Link>
        ))}
      </div>
      <dic className="container">
        <div className="row justify-content-start mt-4">
          <div className="col-6 col-md-4">
            <div className="chat-box chat-box--user input-group mb-3">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="login"
                name="login"
                onClick={searchUser}
              >
                Search User
              </button>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter Name here"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
        </div>
      </dic>
    </div>
  );
};

export default Users;
