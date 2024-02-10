import React, { Suspense } from 'react'
import './App.css'
import { NavigationBar } from './common/navigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpinnerComp from './common/spinnerComp';
import { FeedbackComponent } from './common/feedbackComponent';
import { FooterComp } from './common/footerComponent';
import HomePage from './pages/Homepage';
import AboutUs from './pages/about';
import GoogleMaps from './components/googleMaps';
import SmallDescription from './common/smallDescription';
import Blogs from './pages/blogs';


function App() {
  return <>
        <main className='relative w-full h-fit bg-gray-50 scroll-smooth'>
        <BrowserRouter>
          <NavigationBar />
          <Suspense fallback={<SpinnerComp/>}>
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={
                  <Suspense fallback={<SpinnerComp/>}>
                    <AboutUs />
                  </Suspense>
                }/>
                <Route path='/blogs' element={<Suspense fallback={<SpinnerComp />}> 
                  <Blogs/>
                </Suspense>}/>
              </Routes>
          </Suspense>
          <GoogleMaps />
          <SmallDescription />
          <FooterComp />
        </BrowserRouter>
        </main>
      
        
      
    </>
}

export default App;
