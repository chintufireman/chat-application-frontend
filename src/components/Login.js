import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate()

  let [data, setData] = useState({
    email: "",
    password: "",
  });

  let onHandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const { email,password } = data;
    const response = await fetch(
      "http://192.168.1.9:9191/api/v1/user-handle/login",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({
          email:email,
          password:password
        })
      }
    );
    let json = await response.json()
    if(json!=null){
      console.log(json.name);
      localStorage.setItem("name",json.name);
      localStorage.setItem("email",json.email);
      navigate("/chat")
    }
  };
  return (
    <form>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            User Id
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onHandleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={onHandleChange}
            className="form-control"
            id="password"
            name="password"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
