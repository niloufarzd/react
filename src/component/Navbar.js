import React from 'react';
import ProtoTypes  from 'prop-types';

  const Navbar= ({icon,title})=> {
     
        return (
            <div className="Navbar">
                <h1>
                 <i className={icon}>{title}</i> 
                </h1>
            </div>
        )
    }
Navbar.defaultProps=
{
    title:'github finder',
    icon:'fab fa-github'
}
Navbar.Prototypes={
    title:ProtoTypes.string.isRequired,
    icon:ProtoTypes.string.isRequired

};

export default Navbar;
