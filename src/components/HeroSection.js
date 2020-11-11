import React from 'react';

const HeroSection = () => {
    return (  
        <section className="hero">
            <div className="hero-section container">
                <div className ="hero-content">
                    <h2>COVID19 Live Tracker</h2>
                    <p>
                        The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December 2019, the outbreak was later recognized as a pandemic by the World Health Organization (WHO) on 11 March 2020.
                    </p>
                </div>
                <img src="imgs/emo.svg" alt="virus" />
            </div>
        </section>
    );
}
 
export default HeroSection;