import React from "react"
import { Link } from "react-router-dom"

class How extends React.Component {
    render(){
        return(
            <div>
                <Link className="btn2 btn2--how"to='/about'>
                    How It Works
                </Link>
            </div>
        );
    }
}

export default How;
