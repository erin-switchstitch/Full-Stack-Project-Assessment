import React, { Component , useState , useEvent , useEffect } from "react";
import AddVideo from "./AddVideo";
import SearchVideo from "./SearchVideo";



const styles = {
    transition : 'all 500ms ease-in-out'
}

let dataForParent;


// function testPassback(data){
//     console.log(data)
//     if (data != undefined){
//         dataForParent = data;
//     }
    
// }

export class AddVideoTornAnimation extends React.Component {

    constructor(){
        super();
        // console.log(this.props)
        // this.props.passBackParam(data) 
        // this.testPassback = this.testPassback.bind(this);

        this.state = {
            isOpen : false,
            visibility: 'hidden',
            display: 'none',
            opacity:0,
            width: '100%',
            zIndex: 10,
            background: ''
        };
    }


    passDataToParent(data){
        console.log(data)
        this.props.passBackParam(data)
        return(data)
    }

    

    onScale(){
        if (this.state.isOpen === false){
            console.log("Popout opening")
            this.setState({
                isOpen : true,
                visibility: 'visible',
                display: 'inline',
                opacity:1,
                width: '80vw',
                zIndex: 1000,
                background:'linear-gradient(to left top, transparent 47.75%, red 49.5%, red 50.5%, transparent 52.25%)'
            });
        } else if (this.state.isOpen === true) {
            console.log("Popout closing")
            this.setState({
                isOpen : false,
                visibility: 'hidden',
                display: 'none',
                opacity:0,
                width: '100%',
                zIndex: 10,
                background: ''
            });
        }

    }

    render(){
        return (
        <div>

            <div id="torn_edge_banner" class="torn_container torn_left torn_right">
	            <div></div>
                {/* Target below  with width change */}
	            <div className="banner_span_container"  style={{...styles , width:this.state.width, zIndex : this.state.zIndex}}>
                    <span className="banner_hidden" style={{display:this.state.display}}>
                        <AddVideo passBackParam={(data)=>{
                            this.passDataToParent(data)
                            }}/>
                    </span>
                    {/* <h3>HCRAES</h3> */}
                    <span class="banner_text" onClick={this.onScale.bind(this)} style={{background:this.state.background}}>SEARCH</span>
                </div>
                
            </div>


        </div>

        )
    }
}


export default AddVideoTornAnimation



