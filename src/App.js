import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import useRouter from './useRouter';

// Views
import NotFound from './views/NotFound';
import Home from './views/Home';
import Certifications from './views/Certifications';
import NavMenu from './components/NavMenu'

const App = () => {

  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-20%, 0, 0)' },
  })

  return (
    <>
      <NavMenu/>
      {transitions.map(({ item: location, props, key }) => 
        <animated.div key={key} style={props}>
          <Switch location={location}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/certifications' component={Certifications}/>
                <Route component={NotFound}/>
            </Switch>
        </animated.div>
      )}
    </>
  )

}

export default App;
