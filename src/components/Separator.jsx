import React from 'react';

// Style
import '../assets/styles/components/separator.scss'

const Separator = ({ color1, color2 }) => (
  <div className='section__separator'>
    <svg 
      className='separator__svg'
      width='100%'
      height='300'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
      fill={color1}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'>
        <path d="M 100 100 V 10 L 0 100" />
        <path 
          d="M 30 73 L 100 18 V 10 Z" 
          fill={color2}
          strokeWidth="0"
          />
    </svg>
  </div>
)

export default Separator;