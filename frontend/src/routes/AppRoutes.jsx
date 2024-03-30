// all routing parts are here

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesConstant } from './AppRoutesConstants'
import HomePage from '../pages/HomePage'

export const AppRoutes = () => {
    return (
        <>
           <BrowserRouter>
    <Routes>
        {/* Public Routing */}
        <Route path={routesConstant.Landing.path} element={<HomePage />} />
       

    </Routes>
</BrowserRouter>

        </>
    )
}
