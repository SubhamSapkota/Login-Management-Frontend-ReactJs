import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ReadAllUser = () => {
  let [users, setUsers] = useState([]);
  let token = localStorage.getItem("token");
  let navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      let result = await axios({
        url: `${bUrl}/web-users`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
      setUsers(result.data.result);
      toast.success("Read All User Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      {users.map((item, i) => {
        return (
          <div
            key={item._id}
            style={{
              border: "1px solid black",
              margin: "10px",
              backgroundColor: "red",
              color: "cyan",
            }}
          >
            <p>Name: {item.fullName}</p>
            <p>Email: {item.email}</p>
            <p>Gender: {item.gender}</p>
            <p>DOB: {new Date(item.dob).toLocaleString()}</p>

            <button
              onClick={() => {
                navigate(`/admin/${item._id}`);
              }}
              style={{ marginRight: "20px", cursor: "pointer" }}
            >
              View
            </button>

            <button
              onClick={(e) => {
                navigate(`/admin/update/${item._id}`);
              }}
              style={{ marginRight: "20px", cursor: "pointer" }}
            >
              Edit
            </button>

            <button
              onClick={async(e) => {
                let result = await axios({
                  url:`${bUrl}/web-users/${item._id}`,
                  method:"delete",
                  headers:{
                    Authorization:`Bearer ${token}`
                  }
                })
                getAllUsers();
              }}
              style={{ marginRight: "20px", cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllUser;
