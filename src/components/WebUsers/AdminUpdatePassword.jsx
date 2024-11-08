import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";


const AdminUpdatePassword = () => {
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState(""); 
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(fullName)
    let data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/update-password`,
        method: "patch",
        data: data,
        headers:{
          "Authorization":`Bearer ${token}`,
        }
      });
      
     
      localStorage.removeItem("token");
        navigate("/admin/login");

    
      // console.log(result)

      toast.success("Password updated successfully.");

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  

 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        
        <div>
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            id="OldPassword"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default AdminUpdatePassword;

