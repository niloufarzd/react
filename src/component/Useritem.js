import React from 'react'
import PropTypes from 'prop-types';

const  Useritem =({user: {login,html_url,avatar_url}}) => {
  
        return (
            <div className="card text-center">
            <img src={avatar_url} alt="" className="roundimage"  style={{width:'80px'}}></img>
            <h3>{login}</h3>
            <a href={html_url} className="btn btn-dark btn-sm my-1">more</a>
            </div>

            );
    };

Useritem.propTypes={
    user:PropTypes.string.isRequired
};
export default Useritem;