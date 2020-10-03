import React, { useState } from 'react';
import './RegisterVolunteer.css'
import logo from '../../logos/Group 1329.png'
import { Alert } from 'react-bootstrap';


const RegisterVolunteer = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        date: '',
        description: '',
        organization: '',
        success: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRegistration = { ...user }
        fetch('http://localhost:5000/addRegistration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(data => {
            user.success = "Registration Successful"
        })

    }

    const handleChange = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    return (
        <div className="RegisterVolunteer">
            <div className="success__alert">
            {
                user.success ? <Alert severity="success"> Registration Successful — check it out!</Alert> : user.success = ""
            }
            </div>

            <img className="logo" src={logo} alt="" />
            <form action="" onSubmit={handleSubmit}>
                <h2> Register as a Volunteer </h2>
                <input type="text" name="name" onChange={handleChange} placeholder="Full Name" id="" required/>

                <input type="text" name="email" onChange={handleChange} placeholder="Username or Email" id="" required/>

                <input type="date" name="date" onChange={handleChange} id="" required/>

                <input type="text" name="description" onChange={handleChange} placeholder="Description" id=""  required/>

                <input type="text" name="organization" onChange={handleChange} placeholder="Organize books at the library." id="" required/>

                <input 
                    style={{ background: "#3F90FC", height: "35px", color: "white", marginTop: "60px", fontSize: "1.2rem" }}
                    type="submit"
                    value="Registration"
                />
            </form>
        </div>
    );
};

export default RegisterVolunteer;