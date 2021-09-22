import React from "react";
import UserList from "./container/UserList";



export default [
	{
		path: "/",
		exact: true,
		component: () =>  <UserList/>
	}
];
