import React, { useState } from 'react';
import View from '../components/View.jsx';
import { animated, useSpring } from 'react-spring';

// Style
import '../assets/styles/views/certificates.scss';

// Components
import CertCard from '../components/CertCard';

// Data
import Certificates from '../utils/data/certifications';

const CertificationsView = () => {

  const [lightBox, setLightBox] = useState(false);
  const [certVisible, setCertVisible] = useState(null);

  const handleOpenLightBox = (cert) => {
    if (!lightBox) {
      window.onscroll = () => { window.scrollTo(0, 0)};
      setLightBox(true);
      setCertVisible(cert)
    } else {
      window.onscroll = null;
      setLightBox(false);
      setCertVisible(null);
    }
  }

  const props = useSpring({
    x: lightBox ? 1 : 0,
  })

  return (
    <View>
      <animated.div 
        className='certifications__lightBox'
        style={{
          transform: props.x
            .interpolate({
              range: [0, .5, .8, 1],
              output: [0, .5, 1.1, 1]
            })
            .interpolate(x => `scale(${x})`),
          opacity: props.x
        }}
        onClick={() => setLightBox(false)}
      >
        {
          certVisible && (<img src={require(certVisible)} alt='Certificado'/>)
        }
      </animated.div>
      <div className='certifications__main--wrapper'>
        <div className="certifications__header--wrapper">
          <h1 className='certifications__header'>Certifications</h1>
        </div>
        <div className='grid__wrapper'>
          {
            Certificates.map((c, i) => 
              <CertCard {...c} key={i} handleOpenLightBox={handleOpenLightBox}/>
            )
          }
        </div>
      </div>
    </View>
  )
}

export default CertificationsView;