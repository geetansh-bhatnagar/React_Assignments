import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import './Signup.css'
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export default function Signup() {
    const navigate = useNavigate(); //navigation
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    // const [redirectToView, setRedirectToView] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let newErrors = { ...errors };

        switch (name) {
            case 'fullName':
                newErrors.fullName =
                    value.length < 5
                        ? 'Full Name must be at least 5 characters long!'
                        : '';
                break;
            case 'email':
                newErrors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                newErrors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        setErrors(newErrors);
        switch (name) {
            case 'fullName':
                setFullName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
            alert("Fill Entries Properly")
        }
        createUserWithEmailAndPassword(auth , email, password)
            .then((userCredential) => {
                console.log(userCredential);
                if(validateForm(errors)) {
                    alert("Signup sucessfully")
                    navigate("/Login");
                }
            })
            .catch((error) => {

                alert(error.message);
            });
    }
        return (
            <div className='wrapper1'>
                <div className='form-wrapper1'>
                    <h2>Create Account</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='fullName'>
                            <label htmlFor="fullName">Full Name</label>
                            <input type='text' name='fullName' id="full_name" placeholder="Enter your Name" onChange={handleChange} noValidate required />
                            {errors.fullName.length > 0 &&
                                <span className='error'>{errors.fullName}</span>}
                        </div>
                        <div className='email'>
                            <label htmlFor="email">Email</label>
                            <input type='email' name='email'   placeholder="Enter your email"
                                  onChange={handleChange} noValidate required/>
                            {errors.email.length > 0 &&
                                <span className='error'>{errors.email}</span>}
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type='password' name='password'  id="password" placeholder="Enter your password" onChange={handleChange} noValidate required/>
                            {errors.password.length > 0 &&
                                <span className='error'>{errors.password}</span>}
                        </div>
                        <div className='submit'>
                             <button >Create</button>
                        </div>
                    </form>
                    <p>
                        Already have an account?{" "}
                        <span>
              <Link to="/Login">Login</Link>
            </span>
                    </p>
                </div>
            </div>
        );
    }


