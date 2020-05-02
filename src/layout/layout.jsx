import React from 'react';

// Style
import '../assets/styles/layouts/layout.scss'

// Components
import NavMenu from '../components/NavMenu';

const Layout = ({children}) => (
  <div className='layout__main--wrapper'>
    <NavMenu />
    <div className="layout__content--wrapper">
      { children }
    </div>
  </div>
)

export default Layout;