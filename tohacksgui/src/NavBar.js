import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import LinkedAccounts from "./LinkedAccounts"
import Applications from "./Applications"
let NavBar = () => {
    return (
        <Router>
            {/* <div class = "container"> */}
            <div class="container">
                <nav>
                    <ul class="NavBar">
                        <li class="NavBarItem"><Link to="/">Profile</Link></li>
                        <li class="NavBarItem"><Link to="/LinkedAccounts">Linked Accounts</Link></li>
                        <li class="NavBarItem"><Link to="/Applications">Application</Link></li>
                    </ul>
                </nav>
                <div class="Rendered">
                    <Route path="/" exact render={
                        () => {
                            return (<h1>Homepage</h1>)
                        }
                    } />
                    <Route path="/LinkedAccounts" exact render={
                        () => {
                            return (<LinkedAccounts />)
                        }
                    } />
                    <Route path="/Applications" exact render={
                        () => {
                            return (<Applications />)
                        }

                    }
                    />
                </div>
            </div>
            {/* </div> */}
        </Router>
    )
}
export default NavBar
