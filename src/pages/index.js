import React from "react"
import Head from '../components/head';
import Layout from '../components/layout';
import indexStyles from './index.module.scss';
import developerImg from './images/developer.png';
import { Button } from 'antd';

//homepage sections
import About from '../components/homeSections/about'; 
import Testimonials from '../components/homeSections/testimonials'; 
import Portfolio from '../components/homeSections/portfolio'; 
import ContactMe from '../components/homeSections/contactMe'; 

const IndexPage = () => {
  return (
    <Layout isHome={true}>
      <div>
          <img src={developerImg} alt="developer" className={indexStyles.developerImg}/>
            <Head title="Home"/>
            <div className={indexStyles.heroContent}>
              <div className={indexStyles.heroText}>
                <h1 className={indexStyles.heroTitle}>Hello</h1>
                <p className={indexStyles.heroInfo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquam voluptates ipsam earum accusantium explicabo sunt asperiores tenetur modi obcaecati eaque ipsum maiores placeat, vero commodi facilis impedit labore veritatis!</p>
                <Button className={indexStyles.button} shape="round">Read More</Button>
              </div>
            </div>
      </div>
      <About />
      <Portfolio />
      <Testimonials />
      <ContactMe />
    </Layout>
  )
  }
export default IndexPage;