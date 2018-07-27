import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Projects.css";

class Projects extends Component {
    render(){
        return (
            <div className="container">
        
        <div className="row">
        
            <div className="col-sm-3 col-md-12 red">
            <Link className="home text-right" to="/">Home</Link>
            
            <h1 className="hello text-right">Projects.</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 col-md-12 white">
            <div className="row">
                <a href="https://www.previewmyname.com/" className="link text-center">Preview My Name</a>
            </div>
            <div className="row">
                <a href="https://edward1890.github.io/trainscheduler/" className="link text-center">Train Scheduler</a>
            </div>
            <div className="row">
                <a href="https://tranquil-atoll-80899.herokuapp.com/" className="link text-center">Colorado Courts App</a>
            </div>
            <div className="row">
                <a href=" https://edward1890.github.io/Project-1/" className="link text-center">Local Show</a>
            </div>
          
            </div>
        </div>
     </div>
        );
    }

}

export default Projects;