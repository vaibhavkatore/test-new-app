import React from 'react';
import './UserFilter.scss'
import { Input, Button, Spin, Card, Row, Col, TreeSelect } from 'antd';
const { Search } = Input;
const UserFilter = (props) => {
    return (
        <div className="user-container">
            <Row className={"input-field-container"}>
                <Col md={{ span: 24 }} xs={{ span: 24 }} lg={{ span: 24 }} sm={{ span: 24 }} className="user-input-fields">
                    <Search
                        placeholder="Search for job"
                        allowClear
                        enterButton
                    />
                </Col>
                <Col md={{ span: 7 }} xs={{ span: 24 }} lg={{ span: 7 }} sm={{ span: 24 }}>
                    <Input className="user-input-fields" />
                </Col>
                <Col md={{ span: 1 }} xs={{ span: 0 }} lg={{ span: 1 }} sm={{ span: 0 }}>
                </Col>
                <Col md={{ span: 7 }} xs={{ span: 24 }} lg={{ span: 7 }} sm={{ span: 24 }}>
                    <Input className="user-input-fields" />
                </Col>
                <Col md={{ span: 1 }} xs={{ span: 0 }} lg={{ span: 1 }} sm={{ span: 0 }}>
                </Col>
                <Col md={{ span: 8 }} xs={{ span: 24 }} lg={{ span: 8 }} sm={{ span: 24 }}>
                    <Input className="user-input-fields" />
                </Col>
                <Col md={{ span: 24 }} xs={{ span: 24 }} lg={{ span: 24 }} sm={{ span: 24 }}>
                    <TreeSelect
                        dropdownMatchSelectWidth={false}
                        allowClear
                        treeData={
                            [{
                                title: 'Node1',
                                value: '0-0'
                            },
                            {
                                title: 'Node2',
                                value: '0-1'
                            }
                            ]

                        }
                        treeCheckable={true}
                        multiple={true}
                        showSearch={true}
                        maxTagCount={7}
                        className={"user-input-fields treeselect-input"}
                        size={''}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default UserFilter