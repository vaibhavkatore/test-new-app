import React from 'react';
import './UserListMarkup.scss'
import { Input, Button ,Spin, Card} from 'antd';
const UserListMarkup = (props)=>{
    const {onLogout} = props
    return(
        <div className="user-container">
                    <Card title="Login Successful" style={{marginTop:22}}>
                      <Button type="primary" onClick={()=>onLogout()}>Logout</Button>
                    </Card>
        </div>
    )
}

export default UserListMarkup