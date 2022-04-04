import React from 'react'
import {Link} from 'react-router-dom';
import './Video.css'
import healthcareVideo from "../assets/healthcareVideo.mp4"
const Video = (props) => {
  return (
        <div className='hero'>
            {/*<video autoPlay loop muted id='video'>
                <source src={healthcareVideo} type='video/mp4'/>
            </video>*/}

            <div className='content'>
                <h1>Consent Management System</h1>
                <p>BLockchain powered app</p>
                <div>
                    <Link to='/patient'>
                        <button className='btn'
                            onClick={(event)=>{
                                console.log("Patient Button Clicked");
                                props.createPatient("123");
                            }}>
                            Register Patient
                        </button>
                    </Link>

                    <Link to='/doctor'>
                    <button className='btn btn-light'
                        onClick={(event)=>{
                            console.log("Doctor Button Clicked");
                            props.createDoctor("123");
                        }}>
                            Register Doctor
                        </button>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default Video