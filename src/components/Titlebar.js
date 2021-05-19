import React from 'react';

class Titlebar extends React.Component{
    render(){
        return(
            <div>
            <table className="titleBar">
                    <tbody>
                        <tr>
                        <td>
                            <img alt="icon" width="75" src="hipIcon.svg"/>
                        </td>
                        <td width="8"/>
                        <td>
                            <h1>How Hip Am I?</h1>
                        </td>
                        </tr>
                    </tbody>
                    </table>
        </div>
        );
    }

};

export default Titlebar;