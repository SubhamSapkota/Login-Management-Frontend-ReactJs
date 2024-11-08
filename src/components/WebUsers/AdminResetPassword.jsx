import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";


const AdminResetPassword = () => {

  let [password, setPassword] = useState(""); 
  let navigate = useNavigate();
  let [query] = useSearchParams();
  let token = query.get("token");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(fullName)
    let data = {
      password: password,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/reset-password`,
        method: "patch",
        data: data,
        headers:{
          "Authorization":`Bearer ${token}`,
        }
      });
      
        navigate("/admin/login");
      // console.log(result)

      toast.success("Password reset successfully.");

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  

 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

      </div>

      <div>
        <button 
        style={{cursor:"pointer"}}
        type="submit">Reset</button>
      </div>
    </form>
  );
};

export default AdminResetPassword;

