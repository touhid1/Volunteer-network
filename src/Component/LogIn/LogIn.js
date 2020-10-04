import React, { useState } from 'react';
import './LogIn.css';
import logo from '../../logos/Group 1329.png';
import {Link, useHistory, useLocation} from "react-router-dom";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import * as firebase from 'firebase/app';
import { useContext } from 'react';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const LogIn = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    }) 

    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            } 
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div className = 'logIn'>
            <img src={logo} alt="logo" className="logo"/>
            <div className="logInForm">
                <div className="logInMethod">
                    <h3>Login With</h3>
                    <Link to="/register">
                        <button onClick={handleGoogleSignIn} className ='logInBtn'> <i class="fab fa-google"></i> <span>Continue with Google</span></button>
                    </Link>
                    <p className ='createAccountBtn'>Don't have an account? <Link to="/register">Creat an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;