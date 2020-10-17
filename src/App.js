import React,{useState} from 'react';
import './App.css';
import Particles from "react-tsparticles";
import Nav from './component/Nav/Nav.js';
import Icon from './component/Icon/Icon.js';


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

  return (
    <div onClick={(event) => {if (event.target.className === "tsparticles-canvas-el")
                                setProActive(false)
                              }}
    >

      <Particles 
         id="tsparticles"
         options={costumParticles}
      />

      <Nav isProActive={isProActive} setProActive={setProActive}/>  
      <Icon/>


    </div>
  );
}

export default App;
