// all routing parts are here

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesConstant } from './AppRoutesConstants'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import PortfolioPage from '../pages/PortfolioPage'
import ContactPage from '../pages/ContactPage'
import WebDesignPage from '../pages/WebDesignPage'
import WebDevelopmentPage from '../pages/WebDevelopmentPage'
import AppDesignPage from '../pages/AppDesignPage'
import AppDevelopmentPage from '../pages/AppDevelopmentPage'
import UiUxPage from '../pages/UiUxPage'
import GraphicsDesignPage from '../pages/GraphicsDesignPage'
import ContentCreationPage from '../pages/ContentCreationPage'

export const AppRoutes = () => {
    return (
        <>
           <BrowserRouter>
    <Routes>
        {/* Public Routing */}
        <Route path={routesConstant.Home.path} element={<HomePage />} />
        <Route path={routesConstant.About.path} element={<AboutPage />} />
        <Route path={routesConstant.Portfolio.path} element={<PortfolioPage />} />
        <Route path={routesConstant.Contact.path} element={<ContactPage />} />
        <Route path={routesConstant.WebDesign.path} element={<WebDesignPage />} />
        <Route path={routesConstant.WebDevelopment.path} element={<WebDevelopmentPage />} />
        <Route path={routesConstant.AppDesign.path} element={<AppDesignPage />} />
        <Route path={routesConstant.AppDevelopment.path} element={<AppDevelopmentPage />} />
        <Route path={routesConstant.Ui_Ux_Design.path} element={<UiUxPage />} />
        <Route path={routesConstant.GraphicDesign.path} element={<GraphicsDesignPage />} />
        <Route path={routesConstant.ContentCreation.path} element={<ContentCreationPage />} />


    </Routes>
</BrowserRouter>

        </>
    )
}
