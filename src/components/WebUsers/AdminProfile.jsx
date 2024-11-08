import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { bUrl } from '../../constant';
import { useNavigate } from 'react-router-dom';

const AdminProfile = () => {
  let token = localStorage.getItem("token");
  let[profile, setProfile] = useState({});
  let navigate = useNavigate();

  const getAdminProfile = async()=>{
    try {
      let result = await axios({
        url:`${bUrl}/web-users/my-profile`,
        method:"get",
        headers:{
          "Authorization":`Bearer ${token}`,
        }
      })
      // console.log(result);
      setProfile(result.data.result)
    } catch (error) {
      
    }
  }
  
  useEffect(()=>{
    getAdminProfile();
  },[])
  return (
    <div>
      <p>Full Name: {profile.fullName}</p>
      <p>Gender: {profile.gender}</p>
      <p>Email: {profile.email}</p>
      <p>Date of birth: {new Date(profile.dob).toLocaleString()}</p>
      <p>Role: {profile.role}</p>
      <button onClick={(e)=>{
        navigate("/admin/profile-update")
      }}>Update Profile</button>
    </div>
  )
}

export default AdminProfile
