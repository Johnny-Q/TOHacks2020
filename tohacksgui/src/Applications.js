import React from 'react'
import {ipcRenderer} from 'electron'


class Applications extends React.Component{
    constructor(props){
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    handleOnClick(){
        console.log('handleOnClick')
        ipcRenderer.send("yeet", "ping");
    }
    render(){
        return(<div><button onClick = {this.handleOnClick}>send info</button>
            <h1 class = "Header">Applications</h1></div>)
    }
}
export default Applications