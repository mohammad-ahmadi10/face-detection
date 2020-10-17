/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import profile from "./person-icon.png";
import ProfileCard from "../ProfileCard/ProfileCard.js";

import './Nav.css';





const Nav = ({isProActive, setProActive}) =>{
     function onClickImg() {
        setProActive(!isProActive);
    }


    
    return (
        <div>
            <div id="divSideNav" className="sideNav">
                <a href="#" id="home">Home</a>
                <a href="#" id="about">About</a>
                <a href="#" id="contact">Contact</a>
            </div>
            <div className="proIcon">
                <h3>Mohammad</h3>
                <img src={profile}
                     alt="profile icon" 
                     onClick={onClickImg}
                />
            </div>
            <ProfileCard isProActive={isProActive}/>
        </div>
    )
    
}



export default Nav;