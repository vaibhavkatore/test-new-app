import React from 'react';
import { Input, Button, Spin, Card, Row, Col, TreeSelect, Tag } from 'antd';
import { HomeOutlined, PushpinOutlined } from '@ant-design/icons';
import './JobsList.scss'
const { Search } = Input;
const UserListMarkup = (props) => {
    const { heading, jobList, isLoading } = props;
    return (
        <div className="job-list-container-outer">
            <h1>{heading}</h1>
        <Spin spinning={isLoading}>
            {jobList && jobList.length ? jobList.map(job => {

                return (<Row className="job-list-container">
                    <Col md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{ textAlign: 'left' }}>
                        <h2>{job.title}</h2>
                        <p><HomeOutlined /> {job.company} &emsp;<PushpinOutlined />{job.location.city}&emsp; <Tag style={{ color: '#000000', fontWeight: '600' }} color="#d3d7e7">Full Time</Tag></p>
                    </Col>
                    <Col md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{ textAlign: 'right' }}>
                        <Button className="apply-button">Apply</Button>
                        <Button className="view-button">View</Button>
                    </Col>
                </Row>)
            })
                : ''
            }
            </Spin>

        </div>

    )
}

export default UserListMarkup
