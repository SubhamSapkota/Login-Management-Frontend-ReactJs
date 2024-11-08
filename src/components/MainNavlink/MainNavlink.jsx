import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalVariableContext } from '../../App'

const MainNavlink = () => {
 let global = useContext(GlobalVariableContext)
  return (
    <div>


      <NavLink to="/admin/register" style={{marginRight:"20px"}}>Admin Register</NavLink>

      

      {
        global.token?(<>

        <NavLink to="/admin/my-profile" style={{marginRight:"20px"}}>My Profile</NavLink>

        <NavLink to="/admin/update-password" style={{marginRight:"20px"}}>Update Password</NavLink>

        <NavLink to="/admin/read-all-user" style={{marginRight:"20px"}}>Read All User</NavLink>

        <NavLink to="/admin/logout" style={{marginRight:"20px"}}>Logout</NavLink>
       
        </>):<><NavLink to="/admin/login" style={{marginRight:"20px"}}>Admin Login</NavLink>
        </>
      }
      

     </div>
      

      
  )
}

export default MainNavlink
