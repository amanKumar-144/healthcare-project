import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import PatientsDashboard from '../components/PatientsDashboard'

const PatientDashboard = (props) => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Patient Dashboard View" text="View Patient Details"/>
        <PatientsDashboard />
        <Footer />
    </div>
  )
}

export default PatientDashboard