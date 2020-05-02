import React from 'react';
import { CheckOutlined } from '@ant-design/icons';

const CertSkill = ({ skill }) => (
  <div className="skill__wrapper">
    <CheckOutlined className='skill__icon'/>
    <span className='skill__name'>{skill}</span>
  </div>
)

export default CertSkill;