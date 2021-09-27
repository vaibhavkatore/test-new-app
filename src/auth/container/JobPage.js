import React, { Component } from 'react'
import JobPageMarkup from '../components/inner-components/JobPage'

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../modules/actions'
import { message } from 'antd';
import { withRouter } from 'react-router-dom';

class JobPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        const { match:{params} } = this.props
        console.log(params,"paramsparams");

        const handleError = () => {
            message.error("unable to fetch")
        }

        const handleSuccess = (body) => {
            console.log(body, ">>>>>>>");
        }
        this.props.actions.getJobDetail(params.id,handleSuccess, handleError)

    }

    render() {
        const { jobList } = this.props;
        return (
            <JobPageMarkup
                isLoading={this.props.isLoading}
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
)(JobPage));