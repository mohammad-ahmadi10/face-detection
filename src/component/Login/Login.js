import React from 'react';

import './Login.css';
import 'bootstrap';
import { IconContext } from "react-icons";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";




const Login = () =>{
    return (
           <div className="sign-page">
                <div className="container-fluid">
                    
                        <div className="container-login">
                            <div className="title-container">
                                <h3>Log in To Your Account</h3>
                            </div>
                            <form action="" method="" className="login-form"> 
                                                            
                                    <div className="margin-b">
                                        <label htmlFor="email">EMAIL</label>
                                        <div className="inputs-section">
                                            <IconContext.Provider value={{ size:'1.9rem', className: 'react-icons' }}>
                                                <MdEmail/>
                                            </IconContext.Provider>
                                            <input name="email" className="form-control login-inputs" type="email" placeholder="example@gmail.com"/>             
                                        </div>
                                    </div>            
                                
                                
                                    <div className="margin-b">
                                        <label htmlFor="password">PASSWORD</label>
                                        <div className="inputs-section">
                                            <IconContext.Provider value={{ size:'1.9rem', className: 'react-icons' }}>
                                                <RiLockPasswordFill/>
                                            </IconContext.Provider>
                                            <input name="password" className="form-control reigster-inputs" type="password" placeholder="************"/>  
                                            <i class="fa fa-eye-slash" aria-hidden="true"></i>             
                                        </div>
                                        
                                    </div>            

                                    <div className="forget-password-container">
                                        <a href="#">forget password?</a>
                                    </div>

                                    <div className="margin"></div>
                                    <hr/>
                                    <div className="btn-container">
                                        <div className="btn-section">
                                        <button className="btn btn-default regbutton">Login</button>
                                        </div>
                                        <div >
                                            <p>Don't have a account ?    <a href="">Sign up</a></p>         
                                        </div>          
                                    </div>    
                            </form>
                        </div>
                </div>
            </div>
            
        
        
        
        )


}

export default Login;