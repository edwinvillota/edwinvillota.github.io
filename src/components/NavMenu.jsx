import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { animated, useSpring, useTrail } from 'react-spring';

// Styles
import '../assets/styles/components/navmenu.scss'

// Icons
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'

const NavMenu = () => {
  
  const [open, setOpen] = useState(false);
  const [links] = useState([
    {name: 'Home', to: '/'},
    {name: 'Certifications', to: '/certifications'},
    {name: 'Projects', to: '/projects'}
  ])

  const spring = useSpring({
    x: open ? 1 : 0
  })

  const trail = useTrail(links.length, {
    transform: open ? 'translateX(0%)' : 'translateX(-100%)',
    delay: 100
  })

  return (
    <div className='navmenu__wrapper'>
      <animated.div 
        className='navmenu__icon--wrapper'
        style={{
          transform: spring.x
            .interpolate({
              range: [0, 0.5, 0.8, 1],
              output: [1, 0, 1.1, 1]
            })
            .interpolate(x => `scale(${x})`)
        }}
        onClick={() => setOpen(!open)}
      >
        {
          open 
          ? (<CloseOutlined className='navmenu__icon'/>)
          : (<MenuOutlined className='navmenu__icon'/>)
        }
      </animated.div>
      <span className='navmenu__name'>Edwin Villota</span>
      <animated.div className='navmenu__menu--wrapper' style={{
        transform: spring.x
        .interpolate({
          range: [0, 1],
          output: [100, 0]
        })
        .interpolate(x => `translateX(-${x}%)`)
      }}>
        <div className="navmenu__link--list">
          {
            trail.map((props, i) => 
              <animated.div style={props} key={i} className='navmenu__link--wrapper'>
                <NavLink
                  className='navmenu__link'
                  to={links[i].to}
                  onClick={() => setOpen(false)}
                  >
                  {links[i].name}
                </NavLink>
              </animated.div>
            )
          }
        </div>
      </animated.div>
    </div>
  )
}

export default NavMenu;