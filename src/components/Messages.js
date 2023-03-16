import React from "react";

const Messages = () => {
  console.log("Message component rendered");
  return (
    <div className="container">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sender</th>
            <th scope="col">Receiver</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul</td>
            <td>Rajat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
