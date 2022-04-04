import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import DoctorsDashboard from '../components/DoctorsDashboard'

const DoctorDashboard = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Doctor Dashboard View" text="View Doctor Details"/>
        <DoctorsDashboard />
        <Footer />
    </div>
  )
}

export default DoctorDashboard