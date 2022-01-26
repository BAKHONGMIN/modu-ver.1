import React, { Component } from "react";
import './Instagram.css';
import Instaimg from "./Instaimg";
class Instagram extends Component{
    

    render(){
        return(
            <section id={this.props.propid} className="container-lg mt-8 main" > 
                <div className="d-md-flex flex-row text-md-center">
                        <li>
                         <p><h1 className="">{this.props.propid}</h1></p>
                         <p><h4 className="">{this.props.proptitle}</h4></p>
                         </li>
                        <ul className="flex-grow-1 row m-0">
                            <Instaimg col='col-md-4 col-12' colimg='1.png' imgsrcfolder={this.props.propfolder}></Instaimg>
                            <Instaimg col='col-md-4 col-12' colimg='2.png' imgsrcfolder={this.props.propfolder}></Instaimg>
                            <Instaimg col='col-md-4 col-12' colimg='3.png' imgsrcfolder={this.props.propfolder}></Instaimg>
                            <Instaimg col='col-md-4 col-12' colimg='4.png' imgsrcfolder={this.props.propfolder}></Instaimg>
                            <Instaimg col='col-md-4 col-12' colimg='5.png' imgsrcfolder={this.props.propfolder}></Instaimg>
                            <Instaimg col='col-md-4 col-12' colimg='6.png' imgsrcfolder={this.props.propfolder}></Instaimg>
                        </ul>
                </div>
            
            </section>

        );
        
    }
}
export default Instagram;
