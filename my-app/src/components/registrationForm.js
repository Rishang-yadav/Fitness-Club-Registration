import React, {useState,setState} from 'react';
import './style.css'
import { getDatabase } from "firebase/database"
import {base} from '../firebase'
import {ref,push,child,update} from "firebase/database";
function RegistrationForm() {
    
    const [Name, setFirstName] = useState(null);
    const [email, setEmail] = useState(null);
    const [PhoneNumber,setPassword] = useState(null);
    const [Address,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setFirstName(value);
        }
       
        if(id === "email"){
            setEmail(value);
        }
        if(id === "PhoneNumber"){
            setPassword(value);
        }
        if(id === "Address"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () =>{
        let obj = {
                Name : Name,
                email:email,
                PhoneNumber:PhoneNumber,
                Address:Address
                
            }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }
    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="Name"> Name </label>
                    <input className="form__input" type="text" value={Name} onChange = {(e) => handleInputChange(e)} id="Name" placeholder=" Name"/>
                </div>
               
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="PhoneNumber">
                    <label className="form__label" for="PhoneNumber">PhoneNumber </label>
                    <input className="form__input" type="PhoneNumber"  id="PhoneNumber" value={PhoneNumber} onChange = {(e) => handleInputChange(e)} placeholder="PhoneNumber"/>
                </div>
                <div className="Address">
                    <label className="form__label" for="">Address </label>
                    <input className="form__input" type="Address" id="Address" value={Address} onChange = {(e) => handleInputChange(e)} placeholder="Address"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">add member</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm
export const database = getDatabase();