import React from "react"
import Head from '../components/head';
<<<<<<< HEAD
<<<<<<< HEAD
import Layout from '../components/layout';
import indexStyles from './index.module.scss';
import developerImg from './images/developer.png';
import { Button } from 'antd';
import { Link } from 'gatsby'

//homepage sections
import About from '../components/homeSections/about'; 
import Testimonials from '../components/homeSections/testimonials'; 
import Portfolio from '../components/homeSections/portfolio'; 
import ContactMe from '../components/homeSections/contactMe'; 
=======
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

=======
>>>>>>> parent of 0e35797... Added Carousel Sample to homepage
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <Head title="Home"/>
    <h1>Hello</h1>
    <h2>This is my home page.</h2>
  </Layout>
)
>>>>>>> 0e357970c5fa0c16a50ed07e8cd872982cc30cd9

const IndexPage = () => {
  return (
    <Layout isHome={true}>
      <div>
          <img src={developerImg} alt="developer" className={indexStyles.developerImg}/>
            <Head title="Home"/>
            <div className={indexStyles.heroContent}>
              <div className={indexStyles.heroText}>
                <h1 className={indexStyles.heroTitle}>Hi There</h1>
                <p className={indexStyles.heroInfo}>Welcome to me website. I am a JavaScript Developer with intensive focus on building web apps in ReactJS</p>
                <Button className={indexStyles.button} shape="round">
                  <Link to="/#About">
                    Read More About Me
                  </Link>
                </Button>
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