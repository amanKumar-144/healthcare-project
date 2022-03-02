import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Patients from '../components/Patients'
const Patient = (props) => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Patient View" text="View Patient Details"/>
        <Patients 
          patientCount={props.patientCount}
          doctorCount={props.doctorCount}
          nomineeCount={props.nomineeCount}
          account={props.account} 

          patientMap={props.patientMap}
          doctorMap={props.doctorMap}
          patientToDoc={props.patientToDoc}
          nomineeToPatient={props.nomineeToPatient}

          createNominee={props.createNominee} 
          removeNominee={props.removeNominee} 
          createConsent={props.createConsent} 
          revokeConsent={props.revokeConsent}
        />
        <Footer />
    </div>
  )
}

export default Patient