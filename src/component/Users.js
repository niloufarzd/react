import React, { Component } from 'react'
import Useritem from './Useritem';

export class Users extends Component {
    
    
    render() {
    
        return (
            <div className="userStyle">
                {this.props.users.map(u=>(
                    <Useritem key={u.id} user={u}></Useritem>
                ))
                }
            </div>
        );
    } 
}


export default Users;
