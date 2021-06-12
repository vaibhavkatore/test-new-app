import React, { Component } from 'react'
import UserListMarkup from '../components/UserListMarkup'
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
    if(!this.props.isUserLoggedIn){
    this.props.history.push('/login')

    }else{
        const token = JSON.parse(localStorage.getItem("test_user")).data.api_token  
        const handleError=()=>{
            message.error("unable to fetch")
        }
    
        const handleSuccess=(body)=>{
            console.log(body,">>>>>>>");
        }
        this.props.actions.getUser(handleSuccess,handleError,token)
    }

  
}

onLogout=()=>{
    this.props.history.push('/login')
    localStorage.removeItem('test_user')
}
    render(){
        const { userlist } = this.props
        return(
            <UserListMarkup
            isLoading={this.props.isLoading}
            userlist={userlist}
            onLogout={this.onLogout}
            />
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