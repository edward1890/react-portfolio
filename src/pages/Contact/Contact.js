import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import "./Contact.css";

class Contact extends Component {
    render(){
        return (
            <div className="container">
        
            <div className="row">
            
                <div className="col-sm-3 col-md-12 red">
                <Link className="home text-right" to="/">Home</Link>
                
                <h1 className="hello text-right">About Me.</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 col-md-12 white">
               <p className="bio">I build creative and beautiful websites. I am based in Denver, the fastest growing tech city in the nation.</p>
                </div>
            </div>
         </div>
        );
    }

}

export default Contact;