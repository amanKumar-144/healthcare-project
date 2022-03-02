import React from 'react'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import Footer from '../components/Footer'
const Home = (props) => {
  return (
    <div>
        <h3>Hello Aman</h3>
        <Navbar />
        <Video 
          name={props.name} 
          account={props.account} 
          owner={props.owner} 
          createPatient={props.createPatient} 
          createDoctor={props.createDoctor}
        />
        <Footer />
    </div>
  )
}

export default Home