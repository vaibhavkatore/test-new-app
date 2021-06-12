import React, { Component } from 'react'
import AuthMarkup from '../components/AuthMarkup'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import actions from '../modules/actions'
import { message } from 'antd';
import { withRouter } from 'react-router-dom';

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeInput = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    onLogin = () => {
        const { email, password } = this.state
        const data = {
            email: email,
            password: password
        }
        const handleSuccess = () => {
            message.success("login success")
            this.props.history.push('/userlist')
        }
        const handleFailure = () => {
            message.error("login failed")
        }
        this.props.actions.login(handleSuccess, handleFailure, data)
    }
    render() {
        const { email, password } = this.state
        console.log(this.props, ">>>>>>>>>>")
        return (
            <AuthMarkup
                email={email}
                password={password}
                onChangeInput={this.onChangeInput}
                onLogin={this.onLogin}
                isLoading={this.props.isLoading}
                router = {this.props.history}
    
            />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.auth.isUserLoggedIn,
        isLoading: state.auth.isLoading

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
)(Auth));