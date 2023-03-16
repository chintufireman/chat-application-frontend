import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async (e) => {
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
      setUserData(json);
      console.log(userData);
    };
    fetchData();
  }, []);

  return (
    <div className="container my-4">
      <div className="list-group">
        {userData.map((user) => (
          <Link
            key={user.id}
            to="/message"
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center "
            aria-current="true"
          >
            {user.email}
            <span className="badge bg-primary rounded-pill ms-5">14</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
