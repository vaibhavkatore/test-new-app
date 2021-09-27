import React from "react";
import JobList from "./container/JobList";
import JobPage from "./container/JobPage";




export default [
	{
		path: "/",
		exact: true,
		component: () =>  <JobList/>
	},
	{
		path: "/jobpage/:id",
		exact: true,
		component: () =>  <JobPage/>
	}
];
