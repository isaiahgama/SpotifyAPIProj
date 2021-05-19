import React from "react"

class SongRow extends React.Component {

    render(){
        return(

            <table key = {this.props.song.id}>
                <tbody>
                    <tr>
                        {this.props.i < 10 && 
                            <td><h3>0{this.props.i}.</h3></td>
                        }

                        {this.props.i > 9 && 
                            <td><h3>{this.props.i}.</h3></td>
                        }

                        <td>
                            <img alt = "cover"  width = '100' src = {this.props.song.cover_src}/>
                        </td>
                        <td>
                            <h3>{this.props.song.track.name}</h3>
                            <p>{this.props.song.track.artists[0].name}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
        
    }

};

export default SongRow