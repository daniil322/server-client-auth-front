/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import userRegister from "views/UserRegister/UserRegister";
// core components/views for RTL layout
import UserLogin from "views/UserLogin/UserLogin";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: LibraryBooks,
    component: UserLogin,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: LibraryBooks,
    component: userRegister,
    layout: "/admin",
  },
  {
    path: "/llll",
    name: "Logout",
    icon: LibraryBooks,
    component: UserLogin,
    layout: "/admin",
  },
];

export default dashboardRoutes;
