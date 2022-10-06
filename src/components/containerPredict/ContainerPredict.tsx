import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import ToDay from '../toDay/ToDay';
import ByDate from '../byDate/ByDate';
import ByParameters from '../byParameters/ByParameters';


function ContainerPredict() {
    return (

        <div>
            <Routes>
                <Route path="/" element={
                    <ToDay/>
                } />
                <Route path="/bydate" element={
                    <ByDate/>
                } />
                <Route path="/byparameters" element={
                    <ByParameters/>
                } />
            </Routes>
        </div>
    )
}

export default ContainerPredict;