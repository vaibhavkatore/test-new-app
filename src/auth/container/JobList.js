import React, { Component } from 'react'
import JobListMarkup from '../components/JobListMarkup'

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../modules/actions'
import { message } from 'antd';
import { withRouter } from 'react-router-dom';

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {

        const handleError = () => {
            message.error("unable to fetch")
        }

        const handleSuccess = (body) => {
            console.log(body, ">>>>>>>");
        }
        this.props.actions.getJobs(handleSuccess, handleError)

    }

    render() {
        const { jobList } = this.props;
        return (
            <JobListMarkup
                isLoading={this.props.isLoading}
                jobList={jobList}
            />

        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.auth.isLoading,
        jobList: state.auth.jobList

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList));