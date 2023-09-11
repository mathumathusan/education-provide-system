import React, { useState } from "react";
import "./login.css";
import { Icon } from "@iconify/react";
import Validation from "../../models/Validation";
import { useNavigate ,Link} from 'react-router-dom'


export default function Login() {

const [values , setValues]=useState({
            username:"",
            password:""
})

const[errors,setErrors]=useState({})

function handleInput(event){
  const newObj = {...values,[event.target.name]:event.target.value}
  setValues(newObj)
}

function handleValidation(event){
  event.preventDefault();
setErrors(Validation(values))

}
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left-side background image */}
        <div className="col-md-4 leftsideLogin d-flex flex-column align-items-start justify-content-end ">
          <span className="text-white fs-2 text-center mb-4 fw-bold">
            Join us as a volunteer and make a difference in the lives of
            students
          </span>
        </div>

        {/* Right-side form */}
        <div className="col-md-8 rightsideLogin ">
          <h2 className="h2">Login</h2>
          <form onSubmit={handleValidation}>
            <div className="mb-3 d-flex  justify-content-center align-items-center customs">
              <div className="form-check custom">
                <input
                  type="radio"
                  className="form-check-input "
                  id="admin"
                  name="role"
                  value="admin"
                />
                <label className="form-check-label " htmlFor="admin">
                  Admin
                </label>
              </div>
              <div className="form-check custom ">
                <input
                  type="radio"
                  className="form-check-input"
                  id="volunteer"
                  name="role"
                  value="volunteer"
                />
                <label className="form-check-label" htmlFor="volunteer">
                  Volunteer
                </label>
              </div>
            </div>

            {/* <!-- Input field for 'username' label --> */}
            <label htmlFor="username" className="labelUsername">
              Username
            </label>
            <div className="d-flex  flex-column align-items-center justify-content-center  box1">
              <div className="d-flex  align-items-center justify-content-center  ">
                <Icon icon="mdi:user-outline" className="icon" />
                <input
                  type="text"
                  name="username"
                  className="inputs"
                  id="username"
                  placeholder="Your Username"
                  onChange={handleInput}
                />
              
              </div>
              {errors.username && <p style={{color:"red"}}>{errors.username}</p>}
            </div>

            {/* <!-- Password input field for 'password' label --> */}
            
            <label htmlFor="password" className="labelPassword" >
              password
            </label>
            <label htmlFor="password" className="labelForgot" style={{ color: "#1877F2" }}>
              forgot
            </label>
           
            <div className="d-flex  flex-column align-items-center justify-content-center  box1">
              <div className="d-flex  align-items-center justify-content-center  ">
                <Icon icon="material-symbols:lock-outline" className="icon" />
                <input
                  type="password"
                  className="inputs"
                  name="password"
                  id="username"
                  placeholder="Your password"
                  onChange={handleInput}
                />
                
                <Icon icon="formkit:hidden" className="hidden" />
              </div>
              {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            </div>

            <div className="form-check d-flex align-items-center justify-content-center box2">
              <input type="checkbox" className="form-check-input" />
              <label className="label-checkBox" htmlFor="myCheckbox">
                Remember username
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-center  m-4">
            <button type="submit" className="btn btn-primary buttons">
              Login
            </button>
            </div> 
          </form>

  <p>or login with</p>
         
          <div className="d-flex justify-content-center align-items-center ">
            <Icon icon="logos:facebook" className="icons" />
            <Icon icon="devicon:google"  className="icons" />
            <Icon icon="skill-icons:instagram"  className="icons"/>
          </div>
          <div className="d-flex  justify-content-center align-items-center m-2">
            <span>Don’t have an account? </span>
            <Link to={'/signup'}> <a className="button" style={{ color: "#1877F2" }}>Register now</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
