import React from 'react';
import './HeaderStyle.css'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import SignIn from "./SignIn";
import Home from "./Home";

function Header() {
    return (
        <div className='headerBox'>
            <h1 className='logo'><span className='logoCDL'>CDL</span>PRACTICE<span className='headerIcon'><TaskAltIcon/></span>
            </h1>
            <div className='header-home-signIn'>
                <Home />
                <SignIn />
            </div>
        </div>
    );
}

export default Header;
