import React from "react"
import NavBar from "./NavBar"
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
class App extends React.Component{
    render(){
    return(
        <Router>
            <NavBar/>
        <div className = "App">
        </div>
        </Router>)
    }
}

export default App