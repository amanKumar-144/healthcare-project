import React from 'react'
import {Link} from 'react-router-dom'
import "./Doctors.css"
const Doctors = (props) => {
  return (
    <div className='pricing'>
        <div className='card-container'>
          <h1>Available Patients</h1>
          {
            props.patientMap.map((patientSet,key)=>{
              return(
                <div className='card' key={key}>
                  <h3>--- Patient Details ---</h3>
                  <p className='btc'>PatientId : {patientSet.patientId}</p>
                  <p>{patientSet.patientAddress}</p>
                  <Link to='/doctor' className='btn'
                    onClick={(event)=>{
                      console.log("Request Consent Button");
                      let id = -1;
                      props.doctorMap.map((doctorSet,key)=>{
                        console.log(doctorSet.doctorId);
                        console.log(doctorSet.doctorAddress);
                        if(doctorSet.doctorAddress==props.account)
                        {
                          console.log("Match Found");
                          props.requestConsent(patientSet.patientId,doctorSet.doctorId);
                        }
                      })
                    }}

                  >Request Consent</Link>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Doctors