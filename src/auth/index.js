import React from "react";
import Auth from "./container/Auth";
import Register from "./container/Register";
import UserList from "./container/UserList";



export default [
	{
		path: "/login",
		exact: true,
		component: () =>  <Auth/>
	},
	{
		path: "/register",
		exact: true,
		component: () =>  <Register/>
	},
	{
		path: "/userlist",
		exact: true,
		component: () =>  <UserList/>
	}
];
