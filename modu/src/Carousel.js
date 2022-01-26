import React,{Component} from "react";
import { UncontrolledCarousel} from 'reactstrap';
import './Carousel.css';



const items = [
    {
      src: './img/banner1.jpg',
      altText: 'Slide 1',
      // caption: 'Slide 1',
      // Header: '타이틀1'
    },
    {
      src: './img/banner2.jpg',
      altText: 'Slide 2',
      // caption: 'Slide 2',
      // Header: '타이틀2'
    },
    {
      src: './img/banner3.jpg',
      altText: 'Slide 3',
      // caption: 'Slide 3',
      // Header: '타이틀3'
    }
  ];




class Carousel extends Component{
    constructor(prop){
        super(prop);
        this.state ={
            
         }
    }

        render(){

            
            return (
        <UncontrolledCarousel items={items}></UncontrolledCarousel>
        


                    )
                }
            }

export default Carousel;