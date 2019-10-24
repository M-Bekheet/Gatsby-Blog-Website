import React from "react"
import Head from '../components/head';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Layout from '../components/layout';
const IndexPage = () => (
  <Layout>
    <Head title="Home"/>
    <h1>Hello</h1>
    <h2>This is my home page.</h2>
     <Carousel>
        <div>
        <img alt="slide1" src="White-Clouds.jpg" />
            <p className="legend">White Clouds</p>
        </div>
        <div>
        <img alt="slide2" src="Winter-1.jpg" />
            <p className="legend">Winter</p>
        </div>
        <div>
        <img alt="slide3" src="Woods-1.jpg" />
            <p className="legend">Woods</p>
        </div>
    </Carousel>
  </Layout>
)

export default IndexPage;