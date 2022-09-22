
import React,{useState} from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import {nav} from "../../data/BodyItem"
// import { BrowserRouter as Router, Link} from 'react-router-dom';
// import Login from '../../login/Login'


const Header = () => {
  const [navlist, setnavlist]= useState(false)
  return (
    <> 
<header>
    <div className="container flex">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="nav">
          <ul className={navlist ? "small": "flex"}>
            {nav.map((list,index)=>(
              <li key={index}>
                <Link to= {list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="button flex">
            <h4>
        <span>2</span>My list
            </h4>
            {/* <a href='/login'> */}
            <Link to ='/login'>
            <button className="btn1"> 
              <i className="fa fa-sign-out"></i> Sign In
            </button>
            </Link>
            {/* </a> */}
        </div>
        
         <div className="toggle">
          <button onClick={()=>setnavlist(!navlist) }>
              {navlist?<i class="fa fa-times"></i>:<i className="fa fa-bars"></i>}
          </button>
        </div> 
    </div>
</header>

    </>
  )
}

export default Header
