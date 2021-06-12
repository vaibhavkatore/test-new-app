import React, { Component } from 'react'
import RegisterMarkup from '../components/RegisterMarkup'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../modules/actions'
import { message } from 'antd';
import { withRouter } from 'react-router-dom';


class Register extends Component{
    constructor(props) {
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            userName:'',
            confPassword:'',
            email:'',
            password:''
        }
    }

    onChangeInput = (name,value)=>{
        this.setState({
            [name]:value
        })
    }
    onSignup=()=>{
        const {firstName,lastName,userName,confPassword, email, password } = this.state
        const data={
            "first_name": firstName,
            "last_name": lastName,
            "email":email,
            "role": "4",
            "username": userName,
            "password": password,
            "password_confirmation": confPassword
        }
const handleSuccess=()=>{
    message.success("Signup success,Please login to continue")
    this.props.history.push('/login')
}
const handleError=()=>{
    message.error("Signup failed")
}
        this.props.actions.signUp(handleSuccess, handleError, data)
    }
    render(){
        const {firstName,lastName,userName,confPassword, email, password } = this.state

        return(
            <RegisterMarkup
            email={email}
            password={password}
            firstName={firstName}
            lastName={lastName}
            userName={userName}
            confPassword={confPassword}
            onChangeInput={this.onChangeInput}
            onSignup={this.onSignup}
            isLoading={this.props.isLoading}
            router = {this.props.history}
            />
        )
    }
}
const mapStateToProps = (state) => {
	return {
        isUserLoggedIn: state.auth.isUserLoggedIn,
        isLoading:state.auth.isLoading
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
)(Register));