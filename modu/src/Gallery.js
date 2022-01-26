import React, { Component } from "react";
import './Gallery.css';
import Listthumb from "./Listthumb";
class Gallery1 extends Component{
    

    render(){
        return(
            <section id={this.props.propid} className="" > 
                <div className="d-md-flex flex-row text-md-center">
                        <ul className="d-flex">
                            <Listthumb col='col-md-4 col-12' colimg='33.jpg' imgsrcfolder={this.props.propfolder}></Listthumb>
                            <Listthumb col='col-md-4 col-12' colimg='22.jpg' imgsrcfolder={this.props.propfolder}></Listthumb>
                            <Listthumb col='col-md-4 col-12' colimg='11.jpg' imgsrcfolder={this.props.propfolder}></Listthumb>
                        </ul>
                </div>
            
            </section>

        );
        
    }
}
export default Gallery1;
