import axios from "axios";
import React, { useEffect, useState } from "react";
import { bUrl } from "../../constant";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSpecificUser = () => {
  let [fullName, setFullName] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  let params = useParams();
  let id = params.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(fullName)
    let data = {
      fullName: fullName,
      dob: dob,
      gender: gender,
    };

    try {
      let result = await axios({
        url: `${bUrl}/web-users/${id}`,
        method: "patch",
        data: data,
        headers:{
                  "Authorization":`Bearer ${token}`,
                }
      });

      navigate(`/admin/${id}` );
     
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  let genderOption = [
    {
      value: "male", //item.value
      label: "Male", //item.label
    },
    {
      value: "female",
      label: "Female",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  const getAdminUser = async()=>{
    try {
      let result = await axios({
        url:`${bUrl}/web-users/${id}`,
        method:"get",
        headers:{
          "Authorization":`Bearer ${token}`,
        }
      })
      setFullName(result.data.result.fullName)
      setGender(result.data.result.gender)
      setDob(result.data.result.dob)
      // console.log(result);
      // setUser(result.data.result)
    } catch (error) {
      
    }
  }
  
  useEffect(()=>{
    getAdminUser();
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            id="fullname"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="dob">Dob:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          {genderOption.map((item, i) => {
            return (
              <div key={i}>
                <label htmlFor={item.value}>{item.label}</label>
                <input
                  type="radio"
                  value={item.value}
                  id={item.value}
                  checked={gender === item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default UpdateSpecificUser;
