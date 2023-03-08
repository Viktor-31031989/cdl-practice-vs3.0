import React from 'react';
import './HeaderStyle.css'
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <Link to='/'>
                <div className='home'>Menu</div>
            </Link>
        </div>
    )
        ;
}

export default Home;
