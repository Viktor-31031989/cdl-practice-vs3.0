import React from 'react';
import Header from "./components/Header/Header";
import './AppStyle.css'
import CarouselCardsMain from "./components/Cards/CarouselCardsMain";
import {Route, Routes} from "react-router";
import QuizLogic from "./components/Quiz/QuizLogic";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<CarouselCardsMain />}/>
                <Route path='/Quiz/QuizLogic.js' element={<QuizLogic />}/>
            </Routes>
        </div>
    );
}

export default App;
