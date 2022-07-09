import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor: props.mode ==='dark'? 'black':'white'}}>
  <div className="container-fluid mx-5 my-2">
    <Link className="navbar-brand" to="/"><strong>{props.title}</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-a active" aria-current="page" to="/" style={{color : props.mode==='dark'?'white':'black', textDecoration : 'none'}}>Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-a" to="/about" style={{color : props.mode==='dark'?'white':'black', textDecoration : 'none'}}>{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch" style={{color : props.mode==='dark'?'white':'black'}}>
         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
      </div>
    </div>
  </div>
</nav>
  )
}

//used for the data type of which we are passing through Props
Navbar.propTypes = {
    title : PropTypes.string,
    aboutText : PropTypes.string
}

//used for if in case props are not passed
Navbar.defaultProps = {
    title : 'Title Here',
    aboutText : 'About US',
}