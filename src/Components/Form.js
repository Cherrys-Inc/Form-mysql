import axios from 'axios';
import React,{useState} from 'react';
import DatePicker from 'react-date-picker'
import { useNavigate } from 'react-router-dom';
import { FilePicker } from 'evergreen-ui';
import "./form.css"
const Form = () => {
     const [userData,setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        dob: new Date(),
        course: "",
        feedback: "",
        gender: "",
        agree: false,
        error: {firstname: "",
            email: "",
            mobile: "",
            dob: "",
            course: "",
            gender: "",
            agree: ""
    }






    })
    const [file,setFile] = useState("");
    const navigate = useNavigate();
    const [errorState,setErrorState] = useState(false)
    function validate()
    {
    let error = false
    if( userData.firstname === ""){
        error=true
        userData.error.firstname="Name field is required"
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userData.email === "" || reg.test(userData.email) === false) {
      userData.error.email = "Email Field is required ";
    }
    if (userData.mobile === "")
    
        error=true
        userData.error.mobile="Mobile field is required"
    }
    if (userData.gender === "")
    {
        error=true
        userData.error.gender="Please select a gender"
    }
    if (userData.course === "")
    {
        error=true
        userData.error.course="Please select a course"
    }
    if (userData.agree === "")
    {
        error=true
        userData.error.gender="Please agree the terms to continue"
    }
    if(error)
    {
        setErrorState(true)
    }
    else{
        setErrorState(false)
    }

    const sendData =(e)=>{
        validate()
        if(!errorState)
        {
        const obj ={
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "mobile":mobile,
            "dob":dob,
            "gender":gender,
            "course":course,
            "feedback":feedback,
            "agree":agree,
            "file":file
        }
        
        axios.post('http://localhost:5000/add', obj)
           .then(
    
        
           navigate("/display/"+email)
           );
    } 
        
    }
  
    return (
        <div className="form">
            <h1>Fill your details </h1>
          <form className="form-body" onSubmit={sendData}> 
              <div className="username">
                  <label className="form__label" >First Name <span className="mandatory">*</span> </label>

                  <input className="form__input" type="text" onChange={e => setUserData({...userData, firstname: e.target.value}) } placeholder="First Name"/>
              </div>
              <span className="text-danger">{userData.error.firstname}</span>
              <div className="lastname">
                  <label className="form__label" >Last Name </label>
                  <input  type="text" name="" onClick={e => setUserData({...userData, lastname: e.target.value})}  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" >Email <span className="mandatory"> *</span> </label>
                  <input  type="email" onChange={e => setUserData({...userData, email: e.target.value})} className="form__input" placeholder="Email"/>
              </div>
              <span className="text-danger">{userData.error.email}</span>
              <div className="mobile">
                  <label className="form__label" >Mobile Number <span className="mandatory"> * </span> </label>
                  <input className="form__input" type="text"  onChange={e => setUserData({...userData, mobile: e.target.value})} placeholder="Mobile NUmber"/>
              </div>
              <span className="text-danger">{userData.error.mobile}</span>
              <div className="date">
              <label className="form__label" >Date of Birth <span className="mandatory"> * </span></label>
                <DatePicker dateFormat="MM/dd/yyyy"   onChange={setUserData({...userData, dob: setDob})} value={dob} />
              </div>
              <span className="text-danger">{this.state.nameError}</span>
              <div className='gender'  >
              Select your gender: <span className="mandatory"> * </span>
             <div className="gen-sel">
                <input type="radio" id="gen-male" name="gen-ans" onChange={e => setUserData({...userData, gender: e.target.value})} value="Male" />Male
                <input type="radio" id="gen-female" name="gen-ans" onChange={e=> setUserData({...userData, gender: e.target.value})} value="Female" />Female
            </div>
            <span className="text-danger">{userData.error.gender}</span>
            <label>
                Select course: <span className="mandatory"> * </span>
                <select value={course} onChange={e=>setUserData({...userData, course: e.target.value})}>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Computer Science">Computer Science</option>
                </select>
            </label>
            <span className="text-danger">{userData.error.course}</span>
            <div>
            Enter your suggestions:
            <textarea value={feedback} onChange={e => setUserData({...userData, feedback: e.target.value})} />
            </div>
            <div>
                <label>Upload your photo</label>
                <FilePicker
                width={200}
                placeholder="Select your file"
                onChange={e => setFile(e.target.value)}
                />
            </div>

            <div className='terms'>
              I acknowledge all the informations given above are correct 
              <span className="mandatory">*</span>
             <div className="ack">
                <input type="checkbox" id="terms" checked={agree}
          onChange={e => setUserData({...userData, email: e.target.value}) } name="terms-ans" value="Agree" />Agree
            </div>
            <span className="text-danger">{userData.error.agree}</span>
            </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn" >Submit Details</button>
          </div>
      </form> 
      </div> 
      
    );
}



export default Form;
