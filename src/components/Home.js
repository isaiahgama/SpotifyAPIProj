import React from 'react';
import Login from "./Login";
import Faq from "./Faq";
import How from "./How";

class Home extends React.Component{
    render(){
        return(
        <div>
                    <Faq className = 'Faq'>
                    </Faq>
                    <Login></Login>
                    <How/>
        </div>
        );
    }
};

export default Home;