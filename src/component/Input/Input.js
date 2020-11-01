import React,{Component} from 'react';
import "./Input.css";
import ImageUploader from 'react-images-upload';
import firebase from "./firebase";


  // eslint-disable-next-line no-useless-escape
const regEx = new RegExp(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/);
  
const UploaderStyle = {width:"60%",
                        height:"100%",
                        minWidth:"200px",
                        margin:"0", 
                        borderRadius: "30px", 
                        flexDirection:"row", 
                        justifyContent:"center", 
                        backgroundImage:"linear-gradient(to bottom,#ED872D 2%,#C32148 98%)", 
                        boxShadow: "0px 0px 20px 10px rgba(194, 179, 43, 0.293)",
                    }

class Input extends Component {

    constructor(props){
        super(props);
        this.state = {pic : null};
    }
   
    
    onDrop = (picture) =>{

        if(/^.+\.(([pP][dD][fF])|([pP][gG]))$/.test(picture)){
            console.log("bad File");
            return;
        }
        else{
            this.setState({
                pic: picture
            })
            this.uploadImage(picture);
        }
    }

    changeImageOnInputChange = ()=>{
        const urlInput = document.getElementById("urlInput");
        let chooseAndUploadBtn = document.getElementsByClassName("chooseFileButton")[0]; 

        //visibility the Button by entering value 
        if(regEx.test(urlInput.value)){
            this.props.showGoButton("26%", "translate(-40%, 0)", "visible", "1","1");
            chooseAndUploadBtn.classList.add("deaktive-image-uploader");
        }else{
            this.props.showGoButton("22%", "translate(0, 0)", "hidden", "0","-1");
            if(chooseAndUploadBtn.classList.contains("deaktive-image-uploader")){
                chooseAndUploadBtn.classList.remove("deaktive-image-uploader");
            }
        }

    }

    uploadImage = (picture) =>{
        if(typeof picture.value === 'undefined')return;
        let bucetName = "images";
        let pictures = picture[0];
        let storageRef = firebase.storage().ref(`${bucetName}/${pictures.name}`);
        let uploadTask = storageRef.put(pictures);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
            () =>{
                // eslint-disable-next-line no-unused-vars
                let donwloadURL = uploadTask.snapshot.donwloadURL;
                
            }); 
        
            
        let putButtonWrapper = document.querySelector("#button-put-container");
        
        if (putButtonWrapper.classList.contains("deaktive-put-putton")) {
            putButtonWrapper.classList.remove("deaktive-put-putton");
          }
       // putButton.classList.add("aktive-put-putton");

        
        
    }

    putURL = () => {
        setTimeout(()=>{
            let storageRef = firebase.storage().ref();
            let pic = this.state.pic[0];
            storageRef.child('images/' + pic.name);
            storageRef.child('images/' + pic.name).getDownloadURL().then(url => {
                let inputText = document.getElementById("urlInput");
                inputText.innerHTML = "";
                inputText.innerHTML = url;
                inputText.value = url;
                this.props.setInputValue(url);
                this.changeImageOnInputChange();
            });
        }, 500);
        let putButtonWrapper = document.querySelector("#button-put-container");
        putButtonWrapper.classList.add("deaktive-put-putton");
        
    };
   

    



    render() {
    
        const onInputChange = (event) =>{
            const {value} = event.target;
            this.props.setInputValue(value);
            this.changeImageOnInputChange();
        }

       

        return (
            <div className="container">
                <div id="inputs-wrapper">               
                    <div className="input-container"> 
                        <input type="text" 
                               id="urlInput" 
                               name="fname" 
                               placeholder="enter your URL"
                               onChange={onInputChange}
                        />
                        <input id="button" 
                                type="button" 
                                value="Go" 
                                onClick={this.props.onSumit}
                        />
                    </div>
                 {/* ImageUploader */}
                <div id="imageUploader-wrapper">
                    <ImageUploader
                                className="uploader"
                                withIcon={true}
                                fileContainerStyle={UploaderStyle}
                                buttonText="choose & Upload"
                                onChange={this.onDrop}
                                withLabel= {false}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                                singleImage=  {true}
                                buttonStyles={{fontFamily:"Arial"}}
                                errorClass= "unsoportedFile"
                    />
                </div>
               
                    {/* End ImageUploader */}
                    <div id="button-put-container" className="deaktive-put-putton">
                            <label>
                                <p><span>Uploaded Successfully!</span>Put the URL, Click on Button GO</p>
                            </label>
                            <input id="put-button" 
                                   className="" 
                                   value="put" 
                                   type="button" 
                                   onClick={this.putURL}/>
                    </div>
                </div>
            </div>
           
            
        )

    }
   

}


export default Input;