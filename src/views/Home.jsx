import React from 'react';

// Styles
import '../assets/styles/views/home.scss'
import colors from '../assets/themes/colors.scss';
// Components
import View from '../components/View';
import Separator from '../components/Separator';
import { GithubOutlined, TwitterOutlined, MailOutlined } from '@ant-design/icons';

const HomeView = () => (
  <View>
    <section className='section__one'>
      <div className="title__wrapper">
        <h1 className='title'>
          Edwin Villota
        </h1>
      </div>
      <p className='section__one--descr'>
        A Javascript Fullstack developer.
      </p>
      <div className="social__bar--wrapper">
        <a href="https://www.github.com/edwinvillota">
          <GithubOutlined className='social__bar--icon'/>
        </a>
        <a href="https://www.twitter.com/@edwinvillota43">
          <TwitterOutlined className='social__bar--icon'/>
        </a>
        <a href="mailto:edwinvillota@hotmail.com">
          <MailOutlined className='social__bar--icon'/>
        </a>
      </div>
    </section>
    <Separator color1={colors.orange} color2={colors.darkOrange}/>
    <section className='section__two'>
      <h1 className='section__two--title'>
        About Me.
      </h1>
      <p className="section__two--descr">
        Hello, I'm Edwin. <br/> <br/>

        I'm a passionate about technology 
        and the software development. 
        I always lookin for learn new skill and
        use them in mi work. Work in software is
        my dream living doing what I love sounds good.
      </p>
    </section>
    <footer>
      <p> Made with Love <span role='img' aria-label="Love">❤️</span></p>
    </footer>
  </View>
)

export default HomeView;