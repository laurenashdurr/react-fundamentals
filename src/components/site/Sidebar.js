import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponents/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules';
import State from '../concepts/State';
import Effects from '../concepts/Effects';
import PropsDemo from '../concepts/PropsDemo';
import Hooks from '../concepts/Hooks';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import NytApp from '../apps/nyt-app/NytApp';
import MovieApp from '../apps/the-movie-db/MovieApp';
import Bitcoin from '../apps/bitcoin-api-app/Bitcoin';
import ClassComponentDemo from '../ClassComponentDemo';
import ClassComponentProps from '../concepts/ClassComponentProps';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/resources'>Resources</Link></li>
                    <li><Link to='/functionalcomponent'>Functional Component</Link></li>
                    <li><Link to='/jsxrules'>JSX Rules</Link></li>
                    <li><Link to='/state'>useState</Link></li>
                    <li><Link to='/effects'>Effects</Link></li>
                    <li><Link to='/propsdemo'>Props Demo</Link></li>
                    <li><Link to='/hooks'>Hooks</Link></li>
                    <li><Link to='/timer'>Timers</Link></li>
                    <li><Link to='/nyt-app'>NYT App</Link></li>
                    <li><Link to='/movie-app'>Movie App</Link></li>
                    <li><Link to='/class-components'>Class Components</Link></li>
                    <li><Link to='/class-components-props'>Class Component Props</Link></li>
                    {/* <li><Link to='/bitcoin-app'>Bitcoin App</Link></li> */}
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/resources'><Resources /></Route>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/functionalcoponent'><FunctionalComponentDemo /></Route>
                    <Route exact path='/jsxrules'><JSXRules /></Route>
                    <Route exact path='/state'><State /></Route>
                    <Route exact path='/effects'><Effects /></Route>
                    <Route exact path='/propsdemo'><PropsDemo /></Route>
                    <Route exact path='/hooks'><Hooks /></Route>
                    <Route exact path='/timer'><TimePiecesApp /></Route>
                    <Route exact path='/nyt-app'><NytApp /></Route>
                    <Route exact path='/movie-app'><MovieApp /></Route>
                    <Route exact path='/class-components'><ClassComponentDemo /></Route>
                    <Route exact path='/class-components-props'><ClassComponentProps /></Route>
                    {/* <Route exact path='/bitcoin-app'><Bitcoin/></Route> */}
                </Switch>
            </div>
        </div>
    );
};

export default Sidebar;