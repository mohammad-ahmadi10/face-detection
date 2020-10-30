import React,{Component} from 'react';
import "./Input.css";
import ImageUploader from 'react-images-upload';
 

const UploaderStyle = {width:"50%",
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
        this.state = {pic : ""};
        this.onDrop = this.onDrop.bind(this);
        
    }
    
    onDrop(picture){
        this.setState({
            pic: picture
        })
        console.log(picture[0]);
        this.props.setInputValue(picture[0].name);
        
    }

    render() {
        const onInputChange = (event) =>{
            const button = document.getElementById("button");
            const {value} = event.target;
            
            //visibility the Button by entering value
            if(value.length > 0){
                button.style.right= "26%";
                button.style.transform = "translate(-40%, 0)";
                button.style.visibility = "visible";
                button.style.opacity = "1";
                button.style.zIndex= "1";
               
            }else{
                button.style.transform = "translate(0, 0)";
                button.style.visibility = "hidden";
                button.style.opacity = "0";
                button.style.zIndex= "-1";
            }
            
            this.props.setInputValue(value);
        }

        return (
            <div class="container">
                <div id="inputs-wrapper">               
                    <div className="input-container"> 
                        <input type="text" 
                               id="urlInput" 
                               name="fname" 
                               placeholder="enter your URL"
                               onChange={onInputChange}
                        />
                        <input id="button" type="button" value="Go"/>
                    </div>
                 {/* ImageUploader */}

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
                 />
                    {/* End ImageUploader */}
                </div>
            </div>
           
            
        )

    }
   

}


export default Input;