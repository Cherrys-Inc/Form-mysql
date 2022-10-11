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
        email:"",
        mobile:"",
        dob:new Date(),
        course:"",
        feedback:"",
        gender:"",
        agree:false
    })
    const [file,setFile]=useState("");
   
    const navigate = useNavigate();
    

    const validateForm =(e)=>{
        e.preventDefault();
       if(firstName === "")
       {
           alert("Please Enter a Valid first Name")
       }
       else if(email === "" )
        {
            alert("Please Enter a Valid Email id")
        }
        else if(mobile === "" || typeof(e.target.value) === Number )
        {
            alert("Please Enter a Valid Mobile Number")
        }
        else if(gender === "")
        {
            alert("please select a gender")
        }
        else if(agree === false)
        {
            alert("Please agree the terms to continue")
        }

        else
        {
        const obj ={
            "firstname":firstName,
            "lastname":lastName,
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
           .then(res => {console.log(res.data)});
    
        
           navigate("/display/"+email)
    } 
        
    }
  
    return (
        <div className="form">
            <h1>Fill your details </h1>
          <form className="form-body" onSubmit={validateForm}> 
              <div className="username">
                  <label className="form__label" >First Name <span className="mandatory">*</span> </label>

                  <input className="form__input" type="text" onChange={e => setUserData({...userData, firstname: e.target.value}) } placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" >Last Name </label>
                  <input  type="text" name="" onClick={e => setUserData({...userData, lastname: e.target.value})}  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" >Email <span className="mandatory"> *</span> </label>
                  <input  type="email" onChange={e => setUserData({...userData, email: e.target.value})} className="form__input" placeholder="Email"/>
              </div>
              <div className="mobile">
                  <label className="form__label" >Mobile Number <span className="mandatory"> * </span> </label>
                  <input className="form__input" type="text"  onChange={e => setUserData({...userData, mobile: e.target.value})} placeholder="Mobile NUmber"/>
              </div>
              <div className="date">
              <label className="form__label" >Date of Birth <span className="mandatory"> * </span></label>
                <DatePicker dateFormat="MM/dd/yyyy"   onChange={setUserData({...userData, dob: setDob})} value={dob} />
              </div>
              <div className='gender'  >
              Select your gender: <span className="mandatory"> * </span>
             <div className="gen-sel">
                <input type="radio" id="gen-male" name="gen-ans" onChange={e => setUserData({...userData, gender: e.target.value})} value="Male" />Male
                <input type="radio" id="gen-female" name="gen-ans" onChange={e=> setUserData({...userData, gender: e.target.value})} value="Female" />Female
            </div>
            <label>
                Select course: <span className="mandatory"> * </span>
                <select value={course} onChange={e=>setUserData({...userData, course: e.target.value})}>
                <option value="Maths">Maths</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Computer Science">Computer Science</option>
                </select>
            </label>
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
