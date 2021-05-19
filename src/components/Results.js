import React from 'react'

class Results extends React.Component{

    render(){
        return(
            <div className = "Results">
                So, how hip ARE you?
                <div>
                    Based on the following 50 songs...
                    <div>
                        You are {this.props.total/50}% hip!
                    </div>
                </div>
            </div>
        );
    }
};

export default Results;