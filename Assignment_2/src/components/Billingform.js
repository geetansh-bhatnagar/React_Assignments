import React from 'react';
import '../components/billing.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import { useState } from 'react';
function Billing() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // const firstName = document.getElementById('firstName').value;
        // const lastName = document.getElementById('lastName').value;
        // const city = document.getElementById('city').value;
        // const zip = document.getElementById('zip').value;
        // const address = document.getElementById('address').value;
        // const email = document.getElementById('email').value;


        alert("Billing Address Added Sucessfully ")
        // prevent form submission if any required field is empty
        window.location.href = "/Payment";
    };

    return (

        <>
            <h1 id="billinform">Billing Form</h1>
            <div className="mx-auto gradient-custom mt-5" style={{ maxWidth: '800px', height: '450px' , marginBottom: '50px',    boxShadow: '0px 5px 30px  #212121' }}>

                <MDBRow className="pt-3 mx-3">
                    <MDBCol md="3">
                        <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
                            <MDBIcon fas icon="shipping-fast text-white" size="3x" />
                            <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
                            <p className="white-text">You are 30 seconds away from compleating your order!</p>
                        </div>
                        <div className="text-center">
                            <Link to='/Cart'>
                                <MDBBtn color="white" rounded className="back-button">Go back</MDBBtn></Link>
                        </div>
                    </MDBCol>
                    <MDBCol md="9" className="justify-content-center">
                        <MDBCard className="card-custom pb-4">
                            <MDBCardBody className="mt-0 mx-5">
                                <div className="text-center mb-3 pb-2 mt-3">
                                    <MDBTypography tag="h4" style={{ color: '#495057' }} >Delivery Details</MDBTypography>
                                </div>

                                <form className="mb-0" onSubmit={handleSubmit}>
                                    <MDBRow className="mb-4">
                                        <MDBCol>
                                            <MDBInput label='First name' type='text' required/>
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label='Last name' type='text' required />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="mb-4">
                                        <MDBCol>
                                            <MDBInput label='City' type='text' required />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label='Zip' type='number' required />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow className="mb-4">
                                        <MDBCol>
                                            <MDBInput label='Address' type='text' required />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput label='Email' type='email' required />
                                        </MDBCol>
                                    </MDBRow>

                                    <div className="float-end">
                                            <MDBBtn  rounded >Place order</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </>
    );
}
export default Billing;