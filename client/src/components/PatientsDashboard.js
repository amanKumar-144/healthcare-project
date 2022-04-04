import React,{useState} from 'react';
import "./PatientsDashboard.css";
import ehrDummyData from './ehrDummyData';
import patientAccountDummyData from './patientAccountDummyData';
import {Button} from '@material-ui/core';
import ViewEHR from './ViewEHR';
import CloseIcon from '@material-ui/icons/Close';

const PatientsDashboard = () => {
    const [ehr,setEHR] = useState({});
    
    return (
      <div>
          <ViewEHR ehr={ehr} closeEhr={()=>setEHR({})}/>
          {
              patientAccountDummyData.map((patientData,key)=>{
                return (
                    <div className='card' key={key} >
                        <h3>--- Patient Dashboard ---</h3>
                        <p className='btc'>PatientName : {patientData.name}</p>
                        <p className='btc'>MobileNumber : {patientData.mobile}</p>
                        <p className='btc'>Gender : {patientData.gender}</p>
                        <p className='btc'>EmailId : {patientData.emailId}</p>
                        <p className='btc'>Age : {patientData.age}</p>
                        <img 
                            src={patientData.photoUrl}
                            alt="Patient Image"
                        />
                    </div>
                )
              })
          }
          {
            ehrDummyData.map((ehrData,key) => {
                return(
                  <div className='card' key={key}>
                    <h3>--- Patient EHR Details ---</h3>
                    <p className='btc'>EhrId : {ehrData.id}</p>
                    <p className='btc'>DoctorName : {ehrData.doctorName}</p>
                    <p className='btc'>Diagnosis : {ehrData.diagnosis}</p>
                    <p className='btc'>Hospital : {ehrData.hospital}</p>
                    <p className='btc'>Date of Visit : {ehrData.date}</p>
                    <p className='btc'>Consent Expiry : {ehrData.consentExpiry}</p>
                    <p className='btc'>BloodGroup : {ehrData.report.BloodGroup}</p>
                    <p className='btc'>Description : {ehrData.report.Description}</p>
                    <a target="_blank" href={ehrData.report.XRay}>
                      <button id="xrayButton">X-Ray Report</button>
                    </a>

                    <Button className="btn">
                        View EHR
                    </Button>
                  </div>
                )
            })
          }
      </div>
    )
}

export default PatientsDashboard