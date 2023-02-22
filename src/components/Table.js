import React from "react";

const Table = (props) => {
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Message</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{props.name}</td>
          <td>{props.message}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
