import React from 'react';
import { Card } from 'antd';
import smilyingDeveloper from '../../pages/images/developer2.png';

import aboutStyles from './about.module.scss';

const About = props => {
  return (
    <div id="About" className={aboutStyles.about} >
      <div className={aboutStyles.smilyingDeveloper}>
        <img src={smilyingDeveloper} alt="Developer" />
        <div className={aboutStyles.aboutText}>
          <Card className={aboutStyles.card}>
            <h3 className={aboutStyles.cardTitle}>About<span>Me</span></h3>
            <p>I am a an engineer and a ReactJS developer from Egypt with extensive experience at JavaScript. I have got experience building websites for my freelance clients.</p>
            <p>I enjoy writing and I started publishing what I am writing recently about React and other topics. 
            </p>
            <p>Don't forget to check my blog :)</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default About;