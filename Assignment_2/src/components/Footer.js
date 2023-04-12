import './footer.css';
function Footer(){
    return(
        <>
        <section className="contact-area" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="contact-content text-center">
                            <a href="#"><img src="nikelogo.jpg" id="fimg" alt="logo"/></a>
                            <p>This website is likely a platform dedicated to showcasing and selling Nike footwear products. Our website likely offers a wide range of Nike shoe styles for men, women, and children, each designed with a focus on quality, style, and performance. You may also provide detailed product descriptions and reviews to help customers make informed purchasing decisions.  </p>
                            <div className="hr"></div>
                            <h6>1120 High street, KC 179050, US.</h6>
                            <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                            <div className="contact-social">
                                <div className="template-demo">
                                    <a href="https://twitter.com/nike" target="_blank">
                                        <button className="btn btn-info" type="button">
                                            <span><i className="fa-brands fa-twitter text-white"></i></span><span className="text-white">Twitter</span>
                                        </button>
                                    </a>
                                    <a href="https://www.facebook.com/nike" target="_blank">
                                        <button className="btn btn-primary" type="button">
                                            <span><i className="fa-brands fa-facebook text-white"></i></span><span className="text-white">Facebook</span>
                                        </button>
                                    </a>
                                    <a href="https://www.instagram.com/nike/" target="_blank">
                                        <button className="btn btn-danger" type="button">
                                            <span><i className="fa-brands fa-instagram text-white"></i></span><span className="text-white">Instagram</span>
                                        </button>
                                    </a>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <footer id="footerpara">
        <p>Copyright &copy; 2019 <img src="nikelogo.jpg" alt="logo"/> All Rights Reserved.</p>
    </footer>
        </>
    );
}
export default Footer;