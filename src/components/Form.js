import React from "react";

const Form = () => {
  let handleSubmit=()=>{
    
  }
  return (
    <form>
      <div className="container">
        <div className="mb-3">
          <label for="email" className="form-label">
            User Id
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />  
        </div>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
          />
        </div>


        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
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
