import React from "react";
import JobList from "./container/JobList";



export default [
	{
		path: "/",
		exact: true,
		component: () =>  <JobList/>
	}
];
