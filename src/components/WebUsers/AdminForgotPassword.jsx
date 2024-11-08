import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { bUrl } from "../../constant";


const AdminForgotPassword = () => {
  let [email, setEmail] = useState(""); 
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(fullName)
    let data = {
      email: email,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/forgot-password`,
        method: "post",
        data: data,
        
      });
      
      setEmail("");
      toast.success("Link has been sent to your email address to reset your password.");
      // console.log(result)

    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  

 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <button type="submit">Forgot Password</button>
      </div>
    </form>
  );
};

export default AdminForgotPassword;


