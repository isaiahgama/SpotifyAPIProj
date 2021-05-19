import React from "react";
import { WindupChildren } from "windups";
import { Pause } from "windups";


// Make a new component
class Faq extends React.Component {
    render(){
    return (
        <WindupChildren>
            {"Welcome to How Hip am I!"}
            <Pause ms = {800}/>
            <div>
                <span style={{ color: "#1ed760"}}>{"How does it work?"}</span>
            </div>
            <Pause ms = {800}/>
            {"By the magic of computers of course!"}
            <Pause ms = {800}/>
            {"..."}
            <div>
                <span style={{ color: "#1ed760" }}>{"JK! Ha Ha Ha"}</span>
            </div>
            <Pause ms = {500}/>
            {"TL;DR: The average popularity of your 50 most recent spotify listens."}
          </WindupChildren>
        );
    }
};

export default Faq;