import React from 'react';
import './RegisterMarkup.scss'
import { Input, Button,Spin  } from 'antd';
const RegisterMarkup = (props)=>{
    const {onChangeInput,firstName,lastName,userName,confPassword, email, password ,onSignup,isLoading, router} = props
    return(
        <div className="auth-container">
            <div className="inner-container">
                <Spin spinning={isLoading}>
                <div className="form-container">
            <h1>Register</h1>
            <Input placeholder="First name" className="input-text" name="firstName" value={firstName} type="text" onChange={(e)=> onChangeInput("firstName", e.target.value)} />
            <Input placeholder="Last name" className="input-text" name="lastName" value={lastName} type="text" onChange={(e)=> onChangeInput("lastName", e.target.value)} />
            <Input placeholder="Username" className="input-text" name="userName" value={userName} type="text" onChange={(e)=> onChangeInput("userName", e.target.value)} />

            <Input placeholder="Email" className="input-text" name="email" value={email} type="email" onChange={(e)=> onChangeInput("email", e.target.value)} />
            <Input placeholder="Password"  className="input-text" name="password" value={password} type="password" onChange={(e)=> onChangeInput("password", e.target.value)} />
            <Input placeholder="Confirm Password"  className="input-text" name="password" value={confPassword} type="password" onChange={(e)=> onChangeInput("confPassword", e.target.value)} />
            
            <Button type="primary" onClick={()=> onSignup()} >Sign up</Button>
            <h4 onClick={()=>router.push('/login')}>Login here!</h4>
            </div>
            </Spin>
            </div>
        </div>
    )
}

export default RegisterMarkup