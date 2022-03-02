import React from 'react'
import './Footer.css'
import {FaFacebook,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">

            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    <div>
                        <p>26/C, Hosur Rd, Electronics City Phase 1, Electronic City</p>
                        <h4>Bengaluru, Karnataka 560100</h4>
                    </div>
                </div>

                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>+91 9380480882</h4>
                </div>

                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>aman.kumar@iiitb.ac.in</h4>
                </div>
            </div>

            <div className='right'>
                <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>Consent Management System</h4>
                    <p>
                        The Consent Management System should provide
                        functionalities for collection, updation, validation 
                        and delegation of consent by patients on their health
                        records in a distributed setting.
                        <br /><br /><br />
                        The patient is the owner of their health records and 
                        healthcare establishments are the custodian of
                        these health records. These ecosystem components can dynamically 
                        interconnect with each other for health record exchange as part of 
                        provisioning of healthcare services e.g. consultation, surgery to a
                        patient by a healthcare establishment. 
                        <br /><br /><br />
                        Consent is a privacy mechanism to control the operations
                        performed by a custodian on health records of patients as per 
                        the permission given by the owners i.e.
                        patients. As a measure to ensure privacy protection in this distributed 
                        environment, the patient's consent needs to be collected and/or 
                        validated while delivering healthcare services.
                        <br /><br /><br />
                        
                    </p>
                    <div className='social'>
                        <FaFacebook size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                        <FaTwitter size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                        <FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                    </div> 
            </div>
        </div>

    </div>
  )
}

export default Footer