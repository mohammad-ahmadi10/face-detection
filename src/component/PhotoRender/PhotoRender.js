import  React,{useEffect} from 'react';
import "./PhotoRender.css";

const PhotoRender = ({photoUrl, boxes}) =>{
        useEffect(() =>{

            document.getElementById("imgUrl").src = photoUrl;
            const imageWrapper = document.getElementById("img-wrapper");
            for (var i = 0; i < boxes.length ; i++) {

                imageWrapper.innerHTML += `<div class="bound_box"
                                                        style=
                                                        "
                                                            left:    ${boxes[i].left}px; 
                                                            right:   ${boxes[i].right}px;
                                                            top:     ${boxes[i].top}px; 
                                                            bottom:  ${boxes[i].bottom}px;
                                                        ">
                                                    </div>`;
            }

        });       

    return (
            <div id="container">   
                <div className="detection-section">
                    <div className="face-wrapper">
                        <div id="img-wrapper">
                            <img id="imgUrl" 
                                src={photoUrl} 
                                alt=""
                            />
                        </div>
                    </div>
                </div>      
            </div>
        
    ) 

    
}


export default PhotoRender;