import './Contact.css';
import React from 'react'
import axios from 'axios';
function Contact() {

    const [formStatus, setFormStatus] = React.useState('Send')

    const validateName = (name) => {
        // Regex to validate name
        const regex = /^[a-zA-Z\s]*$/;
        return regex.test(name);
    }

    const validateEmail = (email) => {
        // Regex to validate email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submitting...');

        const formData = new FormData(e.target);

        // Get name and email from form data
        const name = formData.get('name');
        const email = formData.get('email');

        // Validate name and email
        if (!validateName(name)) {
            setFormStatus('Invalid name');
            return;
        }
        if (!validateEmail(email)) {
            setFormStatus('Invalid email');
            return;
        }

        axios.post('http://localhost/React_JS/Assignment_2/php/form.php', formData)
            .then((response) => {
                if (response.status === 200) {
                    setFormStatus('Submitted');
                } else {
                    setFormStatus('Error');
                }
            })
            .catch((error) => {
                console.error(error);
                setFormStatus('Error');
            });

        axios.post('http://localhost/React_JS/Assignment_2/php/sendEmail.php', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

    };
    return(
        <>
        <section className="contact_us">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1" style={{ marginTop: "-60px" }}>
                        <div className="contact_inner">
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="contact_form_inner">
                                        <div className="contact_field">
                                            <h3>Contact Us</h3>
                                            <p>Feel Free to contact us any time. We will get back to you as soon as we
                                                can!.</p>
                                            <form onSubmit={onSubmit}>
                                            <input type="text" className="form-control form-group" name="name" placeholder="Name"/>
                                            <input type="email" className="form-control form-group" name="email" placeholder="Email"/>
                                                <textarea className="form-control form-group" name="message" placeholder="Message"></textarea>

                                                <button className="contact_form_submit">{formStatus}</button>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="right_conatct_social_icon d-flex align-items-end">
                                        <div className="socil_item_inner d-flex">
                                            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_sec" style={{ color: "antiquewhite" }}>
                                <h4>Contact Info</h4>
                                <div className="d-flex info_single align-items-center">
                                    <i className="fas fa-headset"></i>
                                    <span>1-800-344-6453</span>
                                </div>
                                <div className="d-flex info_single align-items-center">
                                    <i className="fas fa-envelope-open-text"></i>
                                    <span>https://www.nike.com/retail/s/nike-vegas-mall</span>
                                </div>
                                <div className="d-flex info_single align-items-center">
                                    <i className="fas fa-map-marked-alt"></i>
                                    <span>F 132 -133, 1st Floor, Plot No 6
                                        Vegas Mall Dwarka, Sector 14 (North)
                                        Delhi, Delhi, 110078, IN</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <section className="map_sec">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="map_inner">
                        <h4>Find Us on Google Map</h4>
                        <div className="map_bind">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                frameBorder="0"
                                style={{
                                    border: '0',
                                    allowFullScreen: '',
                                    ariaHidden: 'false',
                                    tabIndex: '0'
                                }}
                            ></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
    );
}
export default Contact;