import React from 'react';
import profile from "../Nav/person-icon.png";
import "./ProfileCard.css";

const ProfileCard = ({isProActive}) =>{
    
    if(isProActive === true){
        return(
            <div className="profileCard">
                <div>
                <img src={profile}
                     alt="profile icon"                      
                />
                </div>
                <div className="info">
                    <h3 className="username">Mohammad</h3>
                    <h3 className="manage">Manage your Profile</h3>
                    <h4 className="email">Muhammadahmadi363@gmail.com</h4>
                    <h4 className="signOut">Sign Out</h4>
                </div>
            </div>
        )
    }
    else return(<div></div>)
}


export default ProfileCard;

