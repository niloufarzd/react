import React from 'react'
import Useritem from './Useritem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
const  Users =({users,loading})=> {
    if(loading){
        return <Spinner></Spinner>

        
    }
    else{

        return (
            <div className="userStyle">
                {users.map(u=>(
                    <Useritem key={u.id} user={u}></Useritem>
                ))
                }
            </div>
        
        );
    }
    

     
}
Users.prototype={
    users:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired
}

export default Users;
