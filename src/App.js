import React from 'react';
import './App.css';
import Particles from "react-tsparticles";


const costumParticles = {
        
              fpsLimit: 60,
              interactivity:{
                detectsOn: "canvas",
                events:{
                  onClick:{
                    enable: true,
                    mode: "push"
                  },
                  onHover:{
                    enable: true,
                    mode: ["grab", "repulse"]
                  },
                  resize: true
                },
                modes:{
                  repulse:{
                    distance: 100,
                    duration: 2,
                    opacity: 0.8,
                    size: 10
                  },
                  push:{
                    quantity: 4
                  },
                  grap:{
                    distance: 100
                  }
                  
                }
              },
              particles:{
                color:{
                  value: "#ffffffff"
                },
                links:{
                  color: "#ffffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1
                },
                collisions:{
                  enable: true
                },
                move:{
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2
                },
                number:{
                  density:{
                  },
                  value: 300
                },
                opacity:{
                  value: 0.5
                },
                shape:{
                  type: "circle"
                },
                size:{
                  random: true,
                  value:3
                }
              },
              detectRetina: true
          
}



function App() {
  return (
    <div>
      <Particles
         id="tsparticles"
         options={
            costumParticles
         }
      />
      
      <div className="btn-div">
        <button onClick={() => console.log("cliekd")}>hier</button>
      </div>


    </div>
  );
}

export default App;
