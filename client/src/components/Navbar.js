import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import "./Navbar.css"

const Navbar = () => {

    const [click,setClick]=useState(false);
    const [color,setColor]=useState(false);
    const handleClick=()=>setClick(!click);
    const changeColor=async()=>{
        if(window.screenY>=100)setColor(true);
        else setColor(false);
    }
    useEffect(async()=>{
        changeColor();
    },[]);

    return (
      <div className={color ? 'header header-bg':'header'}>
          <Link to='/'>
              <h1>Healthcare App</h1>
          </Link>

          <ul className={click ? 'nav-menu active' :'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/patient'>Patient Dashboard</Link>
            </li>
            <li>
                <Link to='/doctor'>Doctor Dashboard</Link>
            </li>
          </ul>

          <div className="clickSection" onClick={handleClick}>
              {click ? (
                <FaTimes size={20} style={{color:'white'}}/>
                ) : (
                    <FaBars size={20} style={{color:'white'}} />
                )

              }
          </div>

      </div>
    )
}

export default Navbar