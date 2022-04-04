import React from 'react'
import "./Patients.css"
const Patients = (props) => {
  return (
      <div className='pricing'>
        <div className='card-container'>
          <h1>Available Doctors</h1>
          {
            props.doctorMap.map((doctorSet,key)=>{
              return(
                <div className='card' key={key}>
                  <h3>--- Doctor Details ---</h3>
                  <p className='btc'>DoctorId : {doctorSet.doctorId}</p>
                  <p>{doctorSet.doctorAddress}</p>
                  <p>Hospital Name : {doctorSet.hospitalName}</p>
                  <p>Hospital Id: {doctorSet.hospitalId}</p>
                </div>
              )
            })
          }
        </div>
        
      </div>
  )
}

export default Patients