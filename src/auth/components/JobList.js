import React from 'react';
import { Input, Button, Spin, Card, Row, Col, TreeSelect, Tag } from 'antd';
import { HomeOutlined, PushpinOutlined  } from '@ant-design/icons';
import './JobsList.scss'
const { Search } = Input;
const UserListMarkup = (props) => {
    return (
        <div className="job-list-container-outer">
            <h1>Quality Assuance</h1>

        <Row className="job-list-container">
            <Col  md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{textAlign:'left'}}>
                <h2>Quality assuance analysis</h2>
                <p><HomeOutlined /> Quality assuance&emsp;<PushpinOutlined /> verna, hoa&emsp; <Tag color="default">Full Time</Tag></p>
            </Col>
            <Col  md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{textAlign:'right'}}>
                <Button className="apply-button">Apply</Button>
                <Button className="view-button">View</Button>
            </Col>
        </Row>
        <Row className="job-list-container">
            <Col  md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{textAlign:'left'}}>
                <h2>Quality assuance analysis</h2>
                <p><HomeOutlined /> Quality assuance&emsp;<PushpinOutlined /> verna, hoa&emsp; <Tag color="default">Full Time</Tag></p>
            </Col>
            <Col  md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{textAlign:'right'}}>
                <Button className="apply-button">Apply</Button>
                <Button className="view-button">View</Button>
            </Col>
        </Row>


        <h1>Quality Assuance</h1>

<Row className="job-list-container">
    <Col  md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{textAlign:'left'}}>
        <h2>Quality assuance analysis</h2>
        <p><HomeOutlined /> Quality assuance&emsp;<PushpinOutlined /> verna, hoa&emsp; <Tag color="default">Full Time</Tag></p>
    </Col>
    <Col  md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{textAlign:'right'}}>
        <Button className="apply-button">Apply</Button>
        <Button className="view-button">View</Button>
    </Col>
</Row>
<Row className="job-list-container">
    <Col  md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{textAlign:'left'}}>
        <h2>Quality assuance analysis</h2>
        <p><HomeOutlined /> Quality assuance&emsp;<PushpinOutlined /> verna, hoa&emsp; <Tag color="default">Full Time</Tag></p>
    </Col>
    <Col  md={{ span: 12 }} xs={{ span: 24 }} lg={{ span: 12 }} sm={{ span: 24 }} style={{textAlign:'right'}}>
        <Button className="apply-button">Apply</Button>
        <Button className="view-button">View</Button>
    </Col>
</Row>
        </div>

    )
}

export default UserListMarkup
