import React from "react"
import { authEndpoint, clientId, redirectUri, scope } from "../config";

class Login extends React.Component {
    render(){
        return(
            <div>
                <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&show_dialog=true`}
                >
                Login to Spotify
                </a>
            </div>
        );
    }
}

export default Login;
