import axios from "axios";
import React, { useState } from "react";
import { bUrl } from "../../constant";
import { toast } from "react-toastify";

const AdminRegister = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDob] = useState("");
  let [gender, setGender] = useState("male");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(fullName)
    let data = {
      fullName: fullName,
      email: email,
      password: password,
      dob: dob,
      gender: gender,
    };

    data = {
      ...data,
      role: "admin",
    };
    try {
      let result = await axios({
        url: `${bUrl}/web-users`,
        method: "post",
        data: data,
      });
      setFullName("");
      setEmail("");
      setPassword("");
      setDob("");
      setGender("male");

      toast.success("Link has been sent to your email address. Please click on the link to verify your account.");
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
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default AdminRegister;
