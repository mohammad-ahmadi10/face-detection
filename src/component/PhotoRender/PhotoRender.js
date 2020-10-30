/* eslint-disable jsx-a11y/alt-text */
import  React,{useEffect} from 'react';
import "./PhotoRender.css";


const PhotoRender = ({photoUrl, boxes}) =>{


        useEffect(() =>{

            let image = document.getElementById("imgUrl");
            image.src = photoUrl;

            let container = document.getElementById("img-wrapper");
            for (var i = 0; i < boxes.length ; i++) {

                container.innerHTML += `<div class="bound_box"
                                    style=
                                    "
                                        left:    ${boxes[i].left}px; 
                                        right:   ${boxes[i].right}px;
                                        top:     ${boxes[i].top}px; 
                                        bottom:  ${boxes[i].bottom}px;
                                    "
                                    ></div>`;
            }

            
        });


    return (
            <div id="container">   
                <div className="detection-section">
                    <div className="face-wrapper">
                        <div id="img-wrapper">
                            <img id="imgUrl" 
                                src={photoUrl} 
                            />
                        </div>
                        
                    </div>
                    
                    <div className="face-crop-wrapper"></div>
                </div>      
               
            </div>
        
    ) 

    
}


export default PhotoRender;