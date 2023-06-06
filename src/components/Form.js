import React, { useState } from "react";

const Form = () => {

  const[data,setData]=useState({
    email:"",
    name:"",
    password:"",
  })

  let handleSubmit=async (e)=>{
    e.preventDefault();
    /* const[name,email,password]=data 
    this syntax wont work u know why? because u are doing object 
    destructuring and in object destructuring u should destructure in the same
    sequence as us defined that object like [name,email,password] is wrong
    sequence of appearances in useState({
                                      email:"",
                                      name:"",
                                      password:"",
                                    })

    so use const[email,name,password]
    */
    const{name,email,password}=data //and always use {} for object destructuring noob
    const response = await fetch(process.env.REACT_APP_HOST+process.env.REACT_APP_CREATE,{
      method:"POST",
      headers:{
        "Content-type":"application/json",
        "Authorization": "Bearer "+localStorage.getItem("token")
      },
      body:JSON.stringify({
        name:name,
        email:email,
        password:password
      })
    })
    /* if you did not add name in <input> tag then fields won't get populated 
    and empty values will be sent to server which that asshole server will also save
    if u dont add good validations  */

    const json = await response.json();

    if(response.status === 201){
      console.log("Signed up");
      console.log("with these values"+JSON.stringify(json));
    }
    setData({
      email:"",
      name:"",
      password:""
    })
  }

  let handleOnChange=(e)=>{
      setData({...data, [e.target.name]:e.target.value})
  }

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
            onChange={handleOnChange}
            value={data.email}
          />  
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleOnChange}
            value={data.name}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleOnChange}
            value={data.password}
          />
        </div>

        <button type="submit" onClick={handleSubmit}className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
