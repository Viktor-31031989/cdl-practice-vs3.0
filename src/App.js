import React from 'react';
import Header from "./components/Header/Header";
import './AppStyle.css'
import CarouselCardsMain from "./components/Cards/CarouselCardsMain";
import {Route, Routes} from "react-router";
import GeneralKnowledge from "./components/Quiz/GeneralKnowledge";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<CarouselCardsMain />}/>
                <Route path='/Quiz/GeneralKnowledge.js' element={<GeneralKnowledge />}/>
            </Routes>
        </div>
    );
}

export default App;
