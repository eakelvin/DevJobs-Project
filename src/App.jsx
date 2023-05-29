import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import JobDetails from './Pages/JobDetails'
import ErrorPage from './Pages/ErrorPage';


function App() {

  return (
    <>
      <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/jobdetails/:jobid' element={<JobDetails />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
      </Router>
    </>
  )
}

export default App

