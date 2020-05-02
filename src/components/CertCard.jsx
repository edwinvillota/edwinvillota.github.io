import React from 'react';

// Styles 
import '../assets/styles/components/certcard.scss';

// Components
import CertSkill from './CertSkill';
import { FileDoneOutlined, ArrowRightOutlined } from '@ant-design/icons';

const CertCard = ({ title, school, year, skills, cert, handleOpenLightBox }) => {

  return (
    <div className='cert__card--wrapper'>
      <h3 className='cert__card--title'>
        {title}
      </h3>
      <h4 className="cert__card--school">
        {school}
      </h4>
      <span className="cert__card--year">
        {year}
      </span>
      <h4 className="skills__title">
        Acquired Skills
      </h4>
      <div className="skills__grid">
        {
          skills.map((s, i) => 
            <CertSkill skill={s} key={i} />
          )
        }
        <button type='button' className='cert__button' onClick={() => handleOpenLightBox(cert)}>
          <FileDoneOutlined className='cert__button--icon'/>
          <span className='cert__button--text'>Open</span>
          <ArrowRightOutlined className='cert__icon--arrow'/>
        </button>
      </div>
    </div>
  )
}

export default CertCard