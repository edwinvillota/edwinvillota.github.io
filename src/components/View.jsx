import React from 'react';
import '../assets/styles/components/view.scss';

const View = ({ children }) => (
  <div className='view__main'>
    { children }
  </div>
)

export default View;