import React from 'react';
import { Input, Button, Spin, Card, Row, Col, TreeSelect, Tag } from 'antd';
import { HomeOutlined, PushpinOutlined } from '@ant-design/icons';
import './JobPage.scss'
const { Search } = Input;
const UserListMarkup = (props) => {
    const { jobList, isLoading } = props;
    return (
        <div className="job-page-container">
            <h3>Developer department at technorix</h3>

            <h1>React js- developer / Sr. developer</h1>
            <p><HomeOutlined /> Devlopment &emsp;<PushpinOutlined />Verna , Goa&emsp; <Tag style={{ color: '#000000', fontWeight: '600' }} color="#d3d7e7">Full Time</Tag></p>
            <Button className="apply-button">Apply</Button>
            <hr/>
            <h2>Looking for React / Angular Experts.</h2>
            <p>
            You must understand the ins and outs of React, with an obsession for code quality. We want someone that is proud and obsessive in delivering quality products. Get-it-done attitude as an independent thinker who enjoys creating solutions in a collaborative environment. 
            </p>
            <h2>Requirements :</h2>
            <ul>
                <li>
                <strong>1+ year of React JS Experience</strong>
                </li>
                <li>
                Understand inheritance in Javascript and object-oriented and functional programming concepts
                </li>
                <li>
                Extensive experience with <strong>ReactJS </strong>
                </li>
                <li>
                Expertise with HTML5 and CSS3 • Comfortable translating complex visual designs into clean and modular HTML markup and CSS 
                </li>
                <li>
                Know how to work with version control systems.
                </li>
                <li>
                Bachelors degree in Computer Science or related technical field. 
                </li>
            </ul>
            <h2>Bonus Points if:</h2>
            <ul>
                <li>
                You have an advanced degree (e.g. M.Tech) in Computer Science or a related technical field.
                </li>
                <li>
                Knowledge of LESS/SASS, Bootstrap, PureCSS 
                </li>
                <li>
                Understanding of memory management in JavaScript. 
                </li>
                <li>
                Experience with Webpack, Typescript, ASP.NET, NodeJS 
OTHER JOB OPENINGS 
                </li>

                </ul>



        </div>

    )
}

export default UserListMarkup
