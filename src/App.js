import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Senators from './Senators'

const Home = () => (
    <div>
        <h3>Welcome, please select a link above to see this out of date list of senators that sell their souls for lobbyist money.</h3>
    </div>
)



const Republicans = () => (
    <div>
        <h5><Senators match="party/Republican"/></h5>
    </div>
)
const Democrats = () => (
    <div>
        <h5><Senators match="party/Democrat"/></h5>
    </div>
)
const Independents = () => (
    <div>
        <h5><Senators match="party/Independent"/></h5>
    </div>
)
const Males = () => (
    <div>
        <h5><Senators match="gender/male"/></h5>
    </div>
)
const Females = () => (
    <div>
        <h5><Senators match="gender/female"/></h5>
    </div>
)

const showMeTheMoneyerrSenators = () => (
    <Router>
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/party/Republican'>Republican Senators</Link></li>
                <li><Link to='/party/Democrat'>Democrat Senators</Link></li>
                <li><Link to='/party/Independent'>Independent Senators</Link></li>
                <li><Link to='/gender/male'>Male Senators</Link></li>
                <li><Link to='/gender/female'>Female Senators</Link></li>
            </ul>
            <hr/>
            <Route exact path='/' component={Home}/>
            <Route path='/party/Republican' component={Republicans}/>
            <Route path='/party/Democrat' component={Democrats}/>
            <Route path='/party/Independent' component={Independents}/>
            <Route path='/gender/male' component={Males}/>
            <Route path='/gender/female' component={Females}/>
        </div>
    </Router>
);

export default showMeTheMoneyerrSenators;
