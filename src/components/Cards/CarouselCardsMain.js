import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CardsStyle.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function CarouselCardsMain() {

    const mainCards = useSelector(state => state.main)
    const extraCards = useSelector(state => state.extra)
    const dispatch = useDispatch()
    const clickHandler = (id) => {
        dispatch({type: "SELECTED_CARD", payload: id})
        console.log('clicked')
    }

    return (
        <div className='carousel-container'>
            <h5 className='main-hero-text'>CLASS A REQUIREMENTS KNOWLEDGE</h5>
            <Carousel className='carousel-style'>
                {mainCards.map(item => (
                    <Carousel.Item key={item.id}>
                        <Link to={item.link}>
                            <img
                                className="main-cards"
                                src={item.src}
                                alt={item.altText}
                                onClick={() => clickHandler(item.id)}
                            />
                        </Link>
                        <Carousel.Caption className='caption-text'>

                            <h3>{item.caption}</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <h5 className='main-hero-text'>ENDORSEMENT</h5>
            <Carousel className='carousel-style'>
                {extraCards.map(item => (
                    <Carousel.Item key={item.id}>
                        <img
                            className="main-cards"
                            src={item.src}
                            alt={item.altText}
                        />
                        <Carousel.Caption className='caption-text'>
                            <h3>{item.caption}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselCardsMain;
