import React, { Component } from "react";
import './App.css';
import Home from "./components/Home"
import About from "./components/About"
import Titlebar from "./components/Titlebar"
import Results from "./components/Results"
import SongRow from "./components/SongRow"
import hash from "./hash"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import $ from "jquery";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {item:{} , token: null , total:0 , count:0}
  }

  componentDidMount() {
    let _token = hash.access_token;

    if(_token) {
      this.setState({token:  _token});
    }

    this.getJSON(_token);

  }


  getJSON(token) {
    $.ajax({
      url: "https://api.spotify.com/v1/me/player/recently-played?limit=50",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => { 

        const results = data.items;

        results.forEach((song) => {
            this.setState({count: this.state.count + 1})
        })

        // left side of table
        var songRows = [];
        var j = 0;
        for(var i = 0; i < 25; i++){
          const song = results[i];
          //sum popularity
          this.setState({total: this.state.total + song.track.popularity})
          song.cover_src = song.track.album.images[1].url;
          j+=1;
          const songRow = <SongRow key = {j} song = {song} i = {j}/>;
          songRows.push(songRow);
        }
        this.setState({rows: songRows});

        // right side of table
        var songRows2 = [];
        for(i = 25; i < this.state.count; i++){
          const song = results[i];
          //sum popularity
          this.setState({total: this.state.total + song.track.popularity})
          song.cover_src = song.track.album.images[1].url;
          j+=1;
          const songRow = <SongRow key = {j} song = {song} i = {j}/>;
          songRows2.push(songRow);
        }
        this.setState({rows2: songRows2});


      }
    })
  }

  render(){
    return (
      <Router>
        <div className="App">
            <Titlebar/>
              <Switch>
                {/* home page */}
                <Route exact path="/"> 
                  <Home/>
                </Route>
                {/* about page */}
                <Route path="/about">
                  <About/>
                </Route>
                {/* results page */}
                <Route path = "/results">
                  {console.log(this.state.total)}
                  <Results total = {this.state.total}/>
                  <div className = "row">
                      <div className = "column">
                        <div className = "songTable">
                          {this.state.rows}
                        </div>
                      </div>
                      <div className = "column">
                        <div className = "songTable">
                          {this.state.rows2}
                        </div>
                      </div>
                  </div>
                </Route>

              </Switch>
        </div>
      </Router>

    );
    }
};

export default App;
