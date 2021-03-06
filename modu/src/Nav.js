import logo from './logok.png';
import loginitem from'./login.png';
import React,{Component} from "react";
import{Navbar,NavbarBrand,NavbarToggler,Nav,NavItem, NavLink} from "reactstrap";
import{FiMenu,Fix} from 'react-icons/fi';
import './Nav.css';
// import './fonts/font.css';

class Navi extends Component{
    constructor(props){
        super(props);
        this.state={
            NaviState : false,
            NaviStage0 : false,
            NaviStage1 : false,
            NaviStage2 : false,
            NaviStage3 : false,
            NaviStage4 : false,
            NaviStage5 : false,
            NaviStage5 : false,
        }
    }
    
    toggle = () =>{
        this.setState({
            NaviState : !this.state.NaviState
        });
    }
    maintoggle0 = () =>{
        this.setState({
            NaviStage0 : !this.state.NaviStage0
        });
    }
   
    maintoggle1 = () =>{
        this.setState({
            NaviStage1 : !this.state.NaviStage1
        }); 
    }
    maintoggle2 = () =>{
        this.setState({
            NaviStage2 : !this.state.NaviStage2
            });
        }
    maintoggle3 = () =>{
        this.setState({
            NaviStage3 : !this.state.NaviStage3
            });              
    }
    maintoggle4 = () =>{
        this.setState({
            NaviStage4 : !this.state.NaviStage4
            });              
    }
    maintoggle5 = () =>{
        this.setState({
            NaviStage5 : !this.state.NaviStage5
            });              
    }
    maintoggle6 = () =>{
        this.setState({
            NaviStage6 : !this.state.NaviStage6
            });              
    }


    render(){
        return(
            <navbody id="navibody position-relative">
            {/* <Navbar> */}
                <NavbarBrand tag="h1" className='modulogo position-relative'>
                <h1><a href='/'><img src={logo} style={{width:100}} /></a></h1>
                </NavbarBrand>
                {/* <NavbarToggler> */}
                <button data-state={this.state.NaviState} onClick={this.toggle} id='navToggler' className='navbar-toggler d-block position-absolute left-0 top-0'></button>
                {/* </NavbarToggler> */}
                <login id="login1" className="position-absolute top-0 end-0" >
                        <a href='https://www.modetour.com/Member/Info/Login/Member_Login.aspx?MLoc=1201' target="_blank"><img src={loginitem} art=""/></a>
                        </login>
                <Nav data-open={this.state.NaviState} className="d-none" id="gnb">
                    <NavItem>
                        <NavLink href="#about" className='main' data-state={this.state.NaviSTage0} onClick={this.maintoggle0} id='addtoggler0'>???????????????
                            <ul className='wrap' data-open={this.state.NaviStage0} className="d-none" id="gnb1">
                            <li><a href='/'>??????</a></li>
                            <li><a href='/'>??????</a></li>
                            </ul>
                        </NavLink>
                        <NavLink href="#about" className='main' data-state={this.state.NaviSTage1} onClick={this.maintoggle1} id='addtoggler1'>????????????
                             <ul className='wrap' data-open={this.state.NaviStage1} className="d-none" id="gnb2">
                             <li><a href='/'>?????????</a></li>
                             <li><a href='/'>??????</a></li>
                             <li><a href='/'>??????</a></li>
                             <li><a href='/'>????????????</a></li>
                             <li><a href='/'>??????</a></li>
                             <li><a href='/'>??????</a></li>
                             <li><a href='/'>??????/?????????</a></li>
                             </ul>
                        </NavLink>
                        <NavLink href="#about" className='main' data-state={this.state.NaviSTage2} onClick={this.maintoggle2} id='addtoggler2'>????????????
                            <ul className='wrap' data-open={this.state.NaviStage2} className="d-none" id="gnb3">
                             <li><a href='/'>?????????</a></li>
                             <li><a href='/'>??????</a></li>
                             <li><a href='/'>??????</a></li>
                             <li><a href='/'>????????????</a></li>
                             <li><a href='/'>??????</a></li>
                             <li><a href='/'>??????</a></li>
                             <li><a href='/'>??????/?????????</a></li>
                             </ul>
                        </NavLink>
                        <NavLink href="#about" className='main' data-state={this.state.NaviSTage3} onClick={this.maintoggle3} id='addtoggler3'>EVENT
                            <ul className='wrap' data-open={this.state.NaviStage3} className="d-none" id="gnb4">
                            <li><a href='/'>?????? ?????????</a></li>
                            <li><a href='/'>????????? ?????????</a></li>
                            </ul>
                        </NavLink>
                        <NavLink href="#about" className='main' data-state={this.state.NaviSTage4} onClick={this.maintoggle4} id='addtoggler4'>?????????
                            <ul className='wrap' data-open={this.state.NaviStage4} className="d-none" id="gnb5">
                            <li><a href='/'>????????? ??????</a></li>
                            </ul>
                        </NavLink>
                        <NavLink href="#about" className='main' data-state={this.state.NaviSTage5} onClick={this.maintoggle5} id='addtoggler5'>????????????
                            <ul className='wrap' data-open={this.state.NaviStage5} className="d-none" id="gnb6">
                            <li><a href='/'>QnA</a></li>
                            <li><a href='/'>1:1??????</a></li>
                            </ul>
                        </NavLink>
                        <NavLink href="#about" className='main' data-state={this.state.NaviSTage6} onClick={this.maintoggle6} id='addtoggler6'>?????????
                            <ul className='wrap' data-open={this.state.NaviStage6} className="d-none" id="gnb7">
                            <li><a href='/'>????????????</a></li>
                            <li><a href='/'>????????????</a></li>
                            <li><a href='/'>????????????????????????</a></li>
                            </ul>
                        </NavLink>
                    </NavItem>
                   
                </Nav>
            {/* </Navbar> */}
            </navbody>
        )}
}
export default Navi;

