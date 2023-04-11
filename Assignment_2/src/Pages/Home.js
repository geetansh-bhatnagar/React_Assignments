import './style.css';
import React from "react";
import { Link } from 'react-router-dom';
function Home(){
    return(
        <>
            <section className="banner" id="banner">

                <div className="content">
                    <span>upto 50% off</span>
                    <h3>Nike Jordan 1 Retro High</h3>
                    <p>Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture. This Retro High OG version goes all in with premium leather, comfortable cushioning and classic design details.</p>
                    <Link to="/Products" className="btn">shop now</Link>
                </div>

                <div className="image">
                    <img src="./jordan.jpg" alt=""/>
                </div>

            </section>
           {/*slider for products*/}
            <div className="slider">
                <div className="item"><a href=""><img alt="logo" src="./n1.jpeg"/></a></div>
                <div className="item"><a href=""><img alt="logo" src="./n2.jpeg"/></a></div>
                <div className="item"><a href=""><img alt="logo" src="./n3.jpeg"/></a></div>
                <div className="item"><a href=""><img alt="logo" src="./n4.jpeg"/></a></div>
                <div className="item"><a href=""><img alt="logo" src="./n5.jpeg"/></a></div>
                <div className="item"><a href=""><img alt="logo" src="./n6.jpeg"/></a></div>
                <div className="item"><a href=""><img alt="logo" src="./n7.jpeg"/></a></div>
                <div className="item"><a href=""><img alt="logo" src="./n8.jpeg"/></a></div>
                <div className="item"><a href=""><img alt="logo" src="./n9.jpeg"/></a></div>
                <div className="item"><a href=""><img alt="logo" src="./n10.jpeg"/></a></div>
            </div>

            <section className="service">

                <div className="box">
                    <img src="./freedelivery.jpg" alt=""/>

                </div>

                <div className="box">
                    <img src="./return.jpg" alt=""/>
                    <p>10 days return</p>
                </div>

                <div className="box">
                    <img src="./247.jpg" alt=""/>
                    <p>24/7 support</p>
                </div>

            </section>
            <section className="reviews" id="reviews">

                <h1 className="heading"> clients <span>reviews</span></h1>

                <div className="swiper reviews-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide slide">
                            <h3>I show speed</h3>
                            <img src="./pic-1.png" alt=""/>

                            <p>I recently bought these Nike shoes and they've quickly become my go-to pair. They're perfect for everyday wear, and they're also great for playing sports. They offer great support and comfort.</p>


                        </div>

                        <div className="swiper-slide slide">
                            <h3>M bappe</h3>
                            <img src="./pic-2.png" alt=""/>

                            <p>I've been a fan of Nike shoes for years, and these ones did not disappoint. They fit perfectly and are great for running and working out. Plus, they look really cool.</p>


                        </div>

                        <div className="swiper-slide slide">
                            <h3>Cillian Murphy</h3>
                            <img src="./pic-3.png" alt=""/>

                            <p>These Nike shoes are amazing! They're so comfortable and stylish. I wear them all the time and I get compliments on them wherever I go.</p>


                        </div>



                    </div>

                </div>

            </section>


        </>

    );
}
export default Home;