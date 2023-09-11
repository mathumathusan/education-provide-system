import "./Signup.css";
import React, { useState } from "react";
import Validation from "../../models/Validation";
import { useNavigate ,Link} from 'react-router-dom'

export default function Signup() {



  const [values , setValues]=useState({
    firstname:"",
    lastname:"",
    subject:"",
    address:"",
    qualification:"",
    verification:"",
    email:"",
    phoneno:"",
    password:"",
    experience:""
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
    <div className="Signup">
      <h3 className="h3s">Volunteer Registration</h3>
      <form action="" onSubmit={handleValidation}>
        <div className="formside">
          <div className="formright">
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="Enter your first name" className="forminput" name="firstname" onChange={handleInput}/>
            {errors.firstname && <p style={{color:"red"}}>{errors.firstname}</p>}
          </div>
          
          <div className="formleft">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Enter your Last name"  className="forminput" name="lastname" onChange={handleInput}/>
            {errors.lastname && <p style={{color:"red"}}>{errors.lastname}</p>}
          </div>
          
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="subject">Subject Name</label>
            <input type="text" placeholder="Maths" className="forminput" name="subject" onChange={handleInput}/>
            {errors.subject && <p style={{color:"red"}}>{errors.subject}</p>}
          </div>
          <div className="formleft">
            <label htmlFor="address">Address</label>
            <input type="text" placeholder="Wijewardena Mawatha Colombo 10" className="forminput" name="address" onChange={handleInput}/>
            {errors.address && <p style={{color:"red"}}>{errors.address}</p>}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="qualification">Qualification</label>
            <input type="text" placeholder="Graduate of  Sabaragamuwa University" className="forminput" name="qualification" onChange={handleInput}/>
            {errors.qualification && <p style={{color:"red"}}>{errors.qualification}</p>}
          </div>
          <div className="formleft">
            <label htmlFor="verification">Verificationm Document</label>
            <input type="text" placeholder="Enter your Last name" className="forminput" name="verification" onChange={handleInput}/>
            {errors.verification && <p style={{color:"red"}}>{errors.verification}</p>}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="thananchan24@gmail.com" className="forminput"  name="email" onChange={handleInput}/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
          </div>
          <div className="formleft">
            <label htmlFor="phoneno">Phone Number</label>
            <input type="text" placeholder="0776756780"  className="forminput" name="phoneno" onChange={handleInput}/>
            {errors.phoneno && <p style={{color:"red"}}>{errors.phoneno}</p>}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your first name" className="forminput" name="password" onChange={handleInput}/>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
          </div>
          <div className="formleft">
            <label htmlFor="password">Confirm Your Password</label>
            <input type="password" placeholder="Enter your Last name" className="forminput" name="password" onChange={handleInput} />
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
          </div>
        </div>
        <div className="formside">
          <div className="formright">
          <label htmlFor="">Gender</label>
        <div className="d-flex ">
          <div className="inputradio">
            <input type="radio" id="male" value={"male"} name="gender"  className="form-check-input radioinput"/>
            <label htmlFor="">male</label>
          </div>
          <div className="inputradio">
            <input type="radio" id="female" value={"female"} name="gender"   className="form-check-input radioinput"/>
            <label htmlFor="">female</label>
          </div>
        </div>
          </div>
          <div className="formleft">
            <label htmlFor="experience">How many years of experience do you have?</label>
            <input type="text" placeholder="Enter your Last name"  className="forminput" name="experience" onChange={handleInput}/>
            {errors.experience && <p style={{color:"red"}}>{errors.experience}</p>}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center cus">
      <p className="texths">By clicking the signup button, you agree to our Terms and condition and policy privacy,</p>
      <h3 className="texths">Already have an account? <a style={{color:"#1877F2"}}  className="texths" href=""> Login here</a></h3>
    
      <button className="button">Register</button>
      </div>
      </form>
      
     
    </div>
  );
}
