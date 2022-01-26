import React, { Component } from "react";
import './Instagram.css';

class Instaimg extends  Component{
    constructor(props){
        super(props);
        this.state={
            imgallsrc : './'+this.props.imgsrcfolder+'/'+this.props.colimg,
        }
    }

    render(){
        return(
            <li className={this.props.col}>
                <a href='/'>
                <img src={this.state.imgallsrc} className="img-fluid"/>
                </a>
            </li>
        )
    }
}

export default Instaimg;