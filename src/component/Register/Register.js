import React from 'react';

import './Register.css';
import 'bootstrap';
import Tilt from 'react-tilt';
import { IconContext } from "react-icons";
import {GoDiffRenamed} from "react-icons/go";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";


const iconsOptions= {
	reverse:        false,  // reverse the tilt direction
	max:            20,     // max tilt rotation (degrees)
	perspective:    20000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.02,      // 2 = 200%, 1.5 = 150%, etc..
	speed:          20000,    // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	/* easing:         "cubic-bezier(.03,.98,.52,.99)" */   // Easing on enter/exit.
}


const Register = () =>{
    return (
           <div className="sign-page">
                <div className="container-fluid">
                        <Tilt options={iconsOptions} >
                        <div className="container-register">
                            <div className="title-container-register">
                                <h3>Register your Account</h3>
                            </div>
                            <form action="" method="" className="register-form"> 
                                    <div className="margin-b">
                                        <label htmlFor="name">NAME</label>
                                        <div className="inputs-section">
                                            <IconContext.Provider value={{ size:'1.9rem', className: 'react-icons-register' }}>
                                                <GoDiffRenamed/>
                                            </IconContext.Provider>
                                            <input name="name" className="form-control reigster-inputs" type="text"/>
                                        </div>          
                                    </div>            
                            
                                
                                    <div className="margin-b">
                                        <label htmlFor="email">EMAIL</label>
                                        <div className="inputs-section">
                                            <IconContext.Provider value={{ size:'1.9rem', className: 'react-icons-register' }}>
                                                <MdEmail/>
                                            </IconContext.Provider>
                                            <input name="email" className="form-control reigster-inputs" type="email"/>             
                                        </div>
                                    </div>            
                                
                                
                                    <div className="margin-b">
                                        <label htmlFor="password">PASSWORD</label>
                                        <div className="inputs-section">
                                            <IconContext.Provider value={{ size:'1.9rem', className: 'react-icons-register' }}>
                                                <RiLockPasswordFill/>
                                            </IconContext.Provider>
                                            <input name="password" className="form-control reigster-inputs" type="password"/>  
                                            <i class="fa fa-eye-slash" aria-hidden="true"></i>             
                                        </div>
                                        
                                    </div>            

                                    <div>
                                    <label htmlFor="password-again">REPLAY PASSWORD</label>
                                        <div className="inputs-section">
                                            <IconContext.Provider value={{ size:'1.9rem', className: 'react-icons-register' }}>
                                                <RiLockPasswordFill/>
                                            </IconContext.Provider>
                                            <input name="password-again" className="form-control reigster-inputs" type="password"/>  
                                            <i class="fa fa-eye-slash" aria-hidden="true"></i>            
                                        </div>
                                        
                                    </div>            
                                
                                    <hr/>
                                    <label>
                                        <input type="checkbox" name="terms" style={{marginRight:"5px"}}/> 
                                            I agree with the <a href="#">Terms and Conditions</a>.
                                    </label>
                                    <div className="btn-container-register">
                                        <div className="btn-section">
                                        <button className="btn btn-default regbutton">Register</button>
                                        </div>
                                        <div>
                                            <p>Already have a Account  <a>Sign in</a></p>         
                                        </div>          
                                    </div>    
                            </form>
                        </div>
                    </Tilt>
                </div>
            </div>
        
            
        
        
        
        )


}

export default Register;