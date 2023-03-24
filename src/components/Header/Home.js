import React from 'react';
import './HeaderStyle.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

function Home() {

    const dispatch = useDispatch()
    const resetCards = () => {
        dispatch({type: "RESET"})
    }

    return (
        <div>
            <Link to='/'>
                <div onClick={()=>resetCards()} className='home'>Menu</div>
            </Link>
        </div>
    )
        ;
}

export default Home;
