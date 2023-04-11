import App from "../App";

import './about.css';
function About(){
    return(
        <>
        <div className="we-are-block">

            <div id="about-us-section">

                <div className="about-us-image">

                    <img src="jake-weirick-pu-PgXMI30I-unsplash.jpg" width="808" height="458"
                         alt="nikeImage"/>

                </div>

                <div className="about-us-info">

                    <h2>About Nike</h2>

                    <p>NIKE, Inc. designs, develops, markets and sells high quality footwear, apparel, and equipment, accessories and services. Its athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes.</p>

                    <a href="https://www.companieshistory.com/nike/" target="_blank" title="About Us Button">Read More</a>

                </div>

            </div>

            <div id="history-section">

                <div className="history-image">

                    <img src="maxwell-nelson-NGWwHZeHNVE-unsplash.jpg" width="951" height="471"
                         alt="Building Pic"/>

                </div>

                <div className="history-info">

                    <h2>History of nike</h2>

                    <p>It was founded in 1964 as Blue Ribbon Sports by Bill Bowerman, a track-and-field coach at the University of Oregon, and his former student Phil Knight. They opened their first retail outlet in 1966 and launched the Nike brand shoe in 1972. The company was renamed Nike, Inc., in 1978 and went public two years later.</p>

                    <a href="https://www.britannica.com/topic/Nike-Inc" target="_blank" title="History Button">Read More</a>

                </div>

            </div>

        </div>
        </>
    );
}
export default About;