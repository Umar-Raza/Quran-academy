import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Register from '../components/register/Register';
export default function Index() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="registration" element={<Register />} />
            </Routes>
        </>
    )
}
