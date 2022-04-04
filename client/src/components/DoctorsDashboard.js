import React from 'react'
import "./DoctorsDashboard.css"
import doctorAccountDummyData from './doctorAccountDummyData';


const DoctorsDashboard = () => {

    return (
      <div>
          {
              doctorAccountDummyData.map((doctorData,key)=>{
                return (
                    <div className='card' key={key}>
                        <h3>--- Doctor Dashboard ---</h3>
                        <p className='btc'>DoctorName : {doctorData.name}</p>
                        <p className='btc'>MobileNumber : {doctorData.mobile}</p>
                        <p className='btc'>Gender : {doctorData.gender}</p>
                        <p className='btc'>EmailId : {doctorData.emailId}</p>
                        <p className='btc'>Age : {doctorData.age}</p>
                        <img 
                            src={doctorData.photoUrl}
                            alt="Doctor Image"
                        />
                        {
                            doctorData.Specialization.map((val,key)=>{
                                return (
                                <div className='card' key={key}>
                                    <p className='btc'>HospitalName : {val.hospitalName}</p>
                                    <p className='btc'>DepartmentName : {val.department}</p>
                                </div>
                                )
                            })
                        }
                    </div>
                )
              })
          }
      </div>
    )
}

export default DoctorsDashboard