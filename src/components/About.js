import React from 'react';
import { Link } from "react-router-dom"


class About extends React.Component{
    render(){
        return(
        <div>
            About:
            <div className = "Faq">
                Ah. I see you are not satisfied with the TL;DR. Well that's okay. Here's how it REALLY works:
                <div>
                    <p>- How Hip Am I looks at your last 50 most recently played songs on spotify.</p>
                    <p>- Each song is ranked from 1-100 based on popularity, with 100 being the most popular.</p>
                    <p>- The popularity is calculated by algorithm and is based, in the most part,
                        on the total number of plays the track has had and how recent those plays are.</p>
                    <p>- Generally speaking, songs that are being played a lot now will have a higher popularity 
                        than songs that were played a lot in the past.</p>
                    <p>- Duplicate tracks (e.g. the same track from a single and an album) are rated independently.</p>
                </div>
            </div>
            <div>
                <Link className="btn2 btn2--How"to='/'>
                    Back to Home
                </Link>
            </div>
        </div>
        );
    }
};

export default About;