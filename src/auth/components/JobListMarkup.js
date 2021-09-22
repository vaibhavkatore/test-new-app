import React from 'react';
import { Input, Button, Spin, Card, Row, Col, TreeSelect } from 'antd';
import JobsFilters from './inner-components/JobsFilter';
import JobList from './inner-components/JobList'
const { Search } = Input;
const UserFilter = (props) => {
    const { jobList, isLoading } = props
    return (
        <>
            <JobsFilters

            />
            <JobList
                isLoading={isLoading}
                jobList={jobList}
                heading={'Quality Assuance'}
            />
             <JobList
                isLoading={isLoading}
                jobList={jobList}
                heading={'Project Management'}
            />
        </>
    )
}

export default UserFilter