import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { bUrl } from '../../constant';
import { useNavigate, useParams } from 'react-router-dom';

const ReadSpecificUser = () => {
  let token = localStorage.getItem("token");
  let[user, setUser] = useState({});
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  const getReadSpecificUser = async()=>{
    try {
      let result = await axios({
        url:`${bUrl}/web-users/${id}`,
        method:"get",
        headers:{
          "Authorization":`Bearer ${token}`,
        }
      })
      // console.log(result);
      setUser(result.data.result)
    } catch (error) {
      
    }
  }
  
  useEffect(()=>{
    getReadSpecificUser();
  },[])
  return (
    <div style={{border:"1px solid black", margin:"10px", backgroundColor:"black", color:"bisque"}}>
      <p>Full Name: {user.fullName}</p>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
      <p>Date of birth: {new Date(user.dob).toLocaleString()}</p>
      <p>Role: {user.role}</p>
    </div>
  )
}

export default ReadSpecificUser
