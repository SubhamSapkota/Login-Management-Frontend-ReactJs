import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { bUrl } from '../../constant';

const AdminVerify = () => {

  let [query]= useSearchParams();
  let token = query.get("token");

  let navigate = useNavigate();
    const verifyEmail = async()=>{
      try {
      let result =  await axios({
        url: `${bUrl}/web-users/verify-email`,
        method:"patch",
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      // console.log("admin email verified")
      navigate("/admin/login")
  } catch (error) {
    
  }
  }
  useEffect(()=>{
    verifyEmail();
  },[])

  return (
    <div>
      Admin verify
    </div>
  )
}

export default AdminVerify
