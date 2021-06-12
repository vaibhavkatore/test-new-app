import React from 'react';
import './AuthMarkup.scss'
import { Input, Button ,Spin} from 'antd';
const AuthMarkup = (props)=>{
    const {onChangeInput,email,password,onLogin,isLoading, router} = props
    return(
        <div className="auth-container">
            <div className="inner-container">
            <Spin spinning={isLoading}>

                <div className="form-container">
            <h1>Login</h1>
            <Input placeholder="Email" className="input-text" name="email" value={email} type="email" onChange={(e)=> onChangeInput("email", e.target.value)} />
            <Input placeholder="Password"  className="input-text" name="password" value={password} type="password" onChange={(e)=> onChangeInput("password", e.target.value)} />
            <Button type="primary" onClick={()=> onLogin()} >Login</Button>
            <h4 onClick={()=>router.push('/register')}>Regiter here!</h4>

            </div>
            </Spin>
            </div>
        </div>
    )
}

export default AuthMarkup