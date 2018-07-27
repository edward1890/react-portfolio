import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import "./Main.css";

class Main extends Component {
    render(){
        return (
        <div className="container">
        
            <div className="row">
            
                <div className="col-sm-3 col-md-12 red">
                <Link className="contact text-right" to="/contact">Who am I</Link>
                
                <h1 className="hello text-right">Hello.</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 col-md-12 white">
                <Link className="projects text-right" to="/projects">Projects</Link>

                <h1 className="hello text-right">I am Edward.</h1>
                </div>
            </div>
         </div>

        );
    }

}

export default Main;
