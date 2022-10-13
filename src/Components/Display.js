import React,{useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./display.css"

const Display = (props) => {
    const [state,setState] = useState("")
    const navigate = useNavigate();
    
    const params = useParams()
    
    useEffect(() => {
        axios.get('http://localhost:5000/display/'+params.em)
        .then(response => {
            setState(response.data);
            
        })
        .catch(function (error){
            
        })
    }, [0])
    return (
    <div className='display-data'>
        
        Your details: <br></br>
        
        First Name: {state.firstName}<br></br>
    
        Last Name: {state.lastName}<br></br>
        Mobile: {state.mobile}<br></br>
        Email: {state.email}<br></br>
        Course selected: {state.course}<br></br>
        Dob: {state.dob}<br></br>
        <button onClick={() => {navigate('/profile')}}>Back</button>
        


           
            

    </div>);
}

export default Display;
