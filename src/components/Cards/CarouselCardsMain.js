import React from 'react';
import GK from '../images/GENERAL-KNOWLEDGE.png';
import CV from '../images/combination.png';
import AB from '../images/air-brakes.png';
import DE from '../images/double.png';
import HE from '../images/hazerdous.png';
import TE from '../images/tanker.png';
import Carousel from 'react-bootstrap/Carousel';
import './CardsStyle.css'
import { Link } from "react-router-dom";

function CarouselCardsMain() {

    const mainCards = [
        {
            id: 1,
            src: GK,
            altText: 'general knowledge',
            caption: 'FREE',
            link: "../Quiz/GeneralKnowledge.js",
        },
        {
            id: 2,
            src: CV,
            altText: 'commercial',
            caption: 'FREE',
            link: "/"
        },
        {
            id: 3,
            src: AB,
            altText: 'air brakes',
            caption: 'FREE',
            link: "/"
        }
    ];

    const extraCards = [
        {
            id: 4,
            src: DE,
            altText: 'Slide 1',
            caption: '1.99'
        },
        {
            id: 5,
            src: TE,
            altText: 'Slide 2',
            caption: '1.99'
        },
        {
            id: 6,
            src: HE,
            altText: 'Slide 3',
            caption: '1.99'
        }
    ];

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
