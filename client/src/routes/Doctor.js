import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Doctors from '../components/Doctors'
const Doctor = (props) => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Doctor View" text="View Doctor's details"/>
        <Doctors 
          patientCount={props.patientCount}
          doctorCount={props.doctorCount}
          nomineeCount={props.nomineeCount}
          account={props.account}

          patientMap={props.patientMap}
          doctorMap={props.doctorMap}
          patientToDoc={props.patientToDoc}
          nomineeToPatient={props.nomineeToPatient}

          requestConsent={props.requestConsent}
        />
        <Footer />
    </div>
  )
}

export default Doctor