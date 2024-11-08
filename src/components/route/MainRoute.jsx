import React, { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AdminRegister from "../WebUsers/AdminRegister";
import AdminVerify from "../WebUsers/AdminVerify";
import AdminLogin from "../WebUsers/AdminLogin";
import AdminProfile from "../WebUsers/AdminProfile";
import AdminLogOut from "../WebUsers/AdminLogOut";
import AdminUpdateProfile from "../WebUsers/AdminUpdateProfile";
import AdminUpdatePassword from "../WebUsers/AdminUpdatePassword";
import AdminForgotPassword from "../WebUsers/AdminForgotPassword";
import AdminResetPassword from "../WebUsers/AdminResetPassword";
import ReadAllUser from "../WebUsers/ReadAllUser";
import ReadSpecificUser from "../WebUsers/ReadSpecificUser";
import UpdateSpecificUser from "../WebUsers/UpdateSpecificUser";
import { GlobalVariableContext } from "../../App";
import MainNavlink from "../MainNavlink/MainNavlink";

const MainRoute = () => {
  let { token, setToken } = useContext(GlobalVariableContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet></Outlet>}>
          <Route
            path="verify-email"
            element={<AdminVerify></AdminVerify>}
          ></Route>

          <Route
            path="reset-password"
            element={<AdminResetPassword></AdminResetPassword>}
          ></Route>
        </Route>

        <Route
          path="admin"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          {token ? (
            <>
              <Route index element={<div>This is admin dashboard</div>}></Route>

              <Route
                path="update-password"
                element={<AdminUpdatePassword></AdminUpdatePassword>}
              ></Route>

              <Route
                path="profile-update"
                element={<AdminUpdateProfile></AdminUpdateProfile>}
              ></Route>

              <Route
                path="logout"
                element={<AdminLogOut></AdminLogOut>}
              ></Route>

              <Route
                path="my-profile"
                element={<AdminProfile></AdminProfile>}
              ></Route>

              <Route
                path="update"
                element={
                  <div>
                    <Outlet></Outlet>
                  </div>
                }
              >
                <Route
                  path=":id"
                  element={<UpdateSpecificUser></UpdateSpecificUser>}
                ></Route>
              </Route>

              <Route
                path="read-all-user"
                element={<ReadAllUser></ReadAllUser>}
              ></Route>

              <Route
                path=":id"
                element={<ReadSpecificUser></ReadSpecificUser>}
              ></Route>

              <Route
                path="logout"
                element={<AdminLogOut></AdminLogOut>}
              ></Route>
            </>
          ) : null}

          <Route path="login" element={<AdminLogin></AdminLogin>}></Route>
          <Route
            path="register"
            element={<AdminRegister></AdminRegister>}
          ></Route>

          <Route
            path="forgot-password"
            element={<AdminForgotPassword></AdminForgotPassword>}
          ></Route>

          <Route path="*" element={<div>404 page not found</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;

// import React, { useContext } from "react";
// import { Outlet, Route, Routes, Navigate } from "react-router-dom";
// import AdminRegister from "../WebUsers/AdminRegister";
// import AdminVerify from "../WebUsers/AdminVerify";
// import AdminLogin from "../WebUsers/AdminLogin";
// import AdminProfile from "../WebUsers/AdminProfile";
// import AdminLogOut from "../WebUsers/AdminLogOut";
// import AdminUpdateProfile from "../WebUsers/AdminUpdateProfile";
// import AdminUpdatePassword from "../WebUsers/AdminUpdatePassword";
// import AdminForgotPassword from "../WebUsers/AdminForgotPassword";
// import AdminResetPassword from "../WebUsers/AdminResetPassword";
// import ReadAllUser from "../WebUsers/ReadAllUser";
// import ReadSpecificUser from "../WebUsers/ReadSpecificUser";
// import UpdateSpecificUser from "../WebUsers/UpdateSpecificUser";
// import { GlobalVariableContext } from "../../App";

// const MainRoute = () => {
//   let { token } = useContext(GlobalVariableContext);

//   return (
//     <div>
//       <Routes>
//         {/* Root Route */}
//         <Route path="/" element={<Outlet />} />

//         {/* Public Routes */}
//         <Route path="verify-email" element={<AdminVerify />} />
//         <Route path="reset-password" element={<AdminResetPassword />} />
//         <Route path="admin/register" element={<AdminRegister />} />
//         <Route path="admin/forgot-password" element={<AdminForgotPassword />} />

//         {/* Admin Route */}
//         <Route
//           path="admin"
//           element={
//             token ? <Outlet /> : <Navigate to="/admin/login" replace />
//           }
//         >
//           {/* Protected Admin Routes */}
//           <Route path="update-password" element={<AdminUpdatePassword />} />
//           <Route path="my-profile" element={<AdminProfile />} />
//           <Route path="profile-update" element={<AdminUpdateProfile />} />
//           <Route path="read-all-user" element={<ReadAllUser />} />
//           <Route path=":id" element={<ReadSpecificUser />} />
//           <Route path="update/:id" element={<UpdateSpecificUser />} />
//           <Route path="logout" element={<AdminLogOut />} />

//           {/* Admin Dashboard */}
//           <Route index element={<div>This is admin dashboard</div>} />
//         </Route>

//         {/* Admin Login */}
//         <Route path="admin/login" element={<AdminLogin />} />

//         {/* Catch-all route for 404 */}
//         <Route path="*" element={<div>404 Page Not Found</div>} />
//       </Routes>
//     </div>
//   );
// };

// export default MainRoute;
