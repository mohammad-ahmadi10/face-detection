import React,{useState, useEffect } from 'react';
import './App.css';
import Particles from "react-tsparticles";
import Nav from './component/Nav/Nav.js';
import Icon from './component/Icon/Icon.js';
import InfoRank from './component/InfoRank/InfoRank.js';
import Input from './component/Input/Input.js';
import PhotoRender from './component/PhotoRender/PhotoRender.js';
import Register from './component/Register/Register.js';
import Login from './component/Login/Login.js';

import Clarifai from 'clarifai';



const app = new Clarifai.App({
 apiKey: 'fdd9b1e218cc4b83bbb16bce6a76b8dc'
});



const colors = ["#fff",
                "#FFD700", 
                "#D2691E",
                "#48D1CC",
                "#4682B4",
                "#DA70D6",
                "#663399",
                "#778899"
              ]

const costumParticles = {
        
              fpsLimit: 25,
              interactivity:{
                detectsOn: "canvas",
                events:{
                  onClick:{
                    enable: true,
                    mode: "push"
                  },
                  onHover:{
                    enable: true,
                    mode: ["repulse"]
                  },
                  resize: true
                },
                modes:{
                  repulse:{
                    distance: 100,
                    duration: 2,
                    opacity: 0.8,
                    size: 100,
                    
                  },
                  push:{
                    quantity: 2
                  },
                  grap:{
                    distance: 100
                  }
                  
                }
              },
              particles:{
                color:{
                  value: colors
                },
                links:{
                  color: {
                    value: colors[0]
                  },
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1
                },
                collisions:{
                  enable: true
                },
                move:{
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: true,
                  speed: 4,
                },
                number:{
                  value: 50
                },
                opacity: {
                  value: 0.52,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 4,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 12,
                    size_min: 0.1,
                    sync: true
                  }
                }
              },
              detectRetina: true
          
}


function App() {

  const [isProActive, setProActive] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [boxes , SetBoxes] = useState([]);
  const [isImageDetected, setIsImageDetected] = useState(false);

  let url = inputValue;
  let numOfFaces = 0;


  const calculateCorners = (data) =>{
    const img = document.getElementById("imgUrl");
    const width = Number( img.width);
    const height = Number(img.height);
    let faces = [];

        for(let i=0; i < numOfFaces; i++){
             let clarifaiFace =  data.outputs[0].data.regions[i].region_info.bounding_box;
          
             let box = {
              left: (clarifaiFace.left_col * width),
              right: width - clarifaiFace.right_col * width,
              top: clarifaiFace.top_row * height,
              bottom: (height*1.02) - (clarifaiFace.bottom_row * height)
              };
             faces.push(box);          
        }
      return faces;
    }
  

  const onSumit =  () =>{
    let boxes = document.getElementsByClassName("bound_box");
    console.log(boxes);
    for(let i=0; i < boxes.length; i++){
      boxes[i].remove();
    }

    setTimeout(()=>{
      setPhotoUrl("");
      setPhotoUrl(url);
      app.models.predict("d02b4508df58432fbb84e800597b8959", {url}).then(
      function(response) {
      // do something with11 response
      numOfFaces =  response.outputs[0].data.regions.length;
      SetBoxes(calculateCorners(response));
      },
      function(err) {
        console.log(err);
      }
      )
    }, 300);
   
    
    document.getElementById("urlInput").value = "";
    document.getElementsByClassName("chooseFileButton")[0].classList.remove("deaktive-image-uploader");
    showGoButton("22%", "translate(0, 0)", "hidden", "0","-1");
    setIsImageDetected(true);
    setTimeout( async () => setIsImageDetected(false), 50);
  
  }

  const showGoButton = (right, translate, visibility, opacity, zIndex) =>{
    const button = document.getElementById("button");
    button.style.right= right;
    button.style.transform = translate;
    button.style.visibility = visibility;
    button.style.opacity = opacity;
    button.style.zIndex= zIndex;
  }

  useEffect(() =>{
    let boxes = document.querySelectorAll(".bound_box");
    boxes.forEach(box => {
      box.remove();
    });
  }, [photoUrl]);





  return (
    <div onClick={(event) => {
                                if (event.target.className === "tsparticles-canvas-el")
                                setProActive(false) 
                             
                                }} >

      <Particles 
         id="tsparticles"
         options={costumParticles}
      />

      <Nav isProActive={isProActive} setProActive={setProActive}/>  
      <PhotoRender photoUrl={photoUrl} boxes={boxes} isImageDetected={isImageDetected}/>     
      <Input onSumit={onSumit}  setInputValue={setInputValue} showGoButton={showGoButton}/>   
      <InfoRank/>
      <Icon/>
      <Register/>
      <Login/>

    </div>
  );
}
export default App;
