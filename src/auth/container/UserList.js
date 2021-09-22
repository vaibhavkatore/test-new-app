import React, { Component } from 'react'
import UserFilterMarkup from '../components/UserFilter'
import JobList from '../components/JobList'

import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../modules/actions'
import { message } from 'antd';
import { withRouter } from 'react-router-dom';

class UserList extends Component{
    constructor(props) {
        super(props)
        this.state={
        }
    }
componentDidMount(){
  
        const handleError=()=>{
            message.error("unable to fetch")
        }
    
        const handleSuccess=(body)=>{
            console.log(body,">>>>>>>");
        }
        this.props.actions.getUser(handleSuccess,handleError)
  
}

    render(){
        const { userlist } = this.props
        console.log(userlist,"userlistuserlist");
        return(
            <>
            <UserFilterMarkup
            isLoading={this.props.isLoading}
            userlist={userlist}
            />
            <JobList
            
            />
            </>
            
        )
    }
}
const mapStateToProps = (state) => {
	return {
        isUserLoggedIn: state.auth.isUserLoggedIn,
        isLoading:state.auth.isLoading,
        userlist:state.auth.userlist

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