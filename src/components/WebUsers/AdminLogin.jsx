import axios from "axios";
import React, { useContext, useState } from "react";
import { bUrl } from "../../constant";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GlobalVariableContext } from "../../App";

const AdminLogin = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let global = useContext(GlobalVariableContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(fullName)
    let data = {
      email: email,
      password: password,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/login`,
        method: "post",
        data: data,
      });
      //only clear value when you stay on the same page also with toast
      // setEmail("");
      // setPassword("");

      let token = result.data.token;
      localStorage.setItem("token", token);
      global.setToken(token);

      navigate("/admin");
      // console.log(result)
      // toast.success("Login Successfully");
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
        style={{cursor:"pointer", }}
        type="submit">Login</button>
        <div
        onClick={(e)=>{
          navigate("/admin/forgot-password")
        }}
        style={{cursor:"pointer", color:"blue"}}
        >Forgot Password</div>
      </div>
    </form>
  );
};

export default AdminLogin;



//login
/* 
make api
hit api (gives token)
save token to local storage
navigate to /admin page
*/

//profile
/* 
My profile
  profilelink => /admin/my-profile
  route => /admin/my-profile => AdminProfile
  AdminProfile component
    hit api on page load (useEffect)
    token => get token from local storage

*/

/* 
Logout

link => /admin/logout
route => /admin/logout => AdminLogout
AdminLogout component
  delete token from local storage
  navigate to /
*/

/* 
Update Profile
  email*,password*,role*
  make update profile button on my profile when clicked change link to   admin/profile-update
  route => admin/profile-update => UpdateProfile
    make a form
    button=> Update (hit api)
    for data populate => get myProfile api on page load and set data in form field
*/

/* 
Update Password
 link => admin/update-password
 route => admin/update-password => AdminUpdatePassword
 AdminUpdatePassword component
  make a form for oldPassword, newPassword
  button=> Update (hit api)
  success=> logout (remove token from local storage)
  redirect to login page
*/

/* 
Forgot Password
  forgot password (button) click ("/admin/forgot-password")
  component ("/admin/forgot-password") AdminForgotPassword

  AdminForgotPassword
    email

*/

/* 
RESET PASSWORD
  Route /reset-password AdminResetPassword
  AdminResetPassword
    form=> password
    redirect to /admin/login
*/

/* 
Read all user => admin, superadmin
read specifi user => admin, superadmin
delete user=> superadmin
update user  => admin , superadmin

*/

/* 
login (if login) show
myProfile
update-password
logout  
update-profile
read-all-user


logout
show login
show register
*/