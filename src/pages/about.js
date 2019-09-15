import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/layout';

const AboutPage = () => (
  <Layout>
    <Head title="About"/>
    <h1>About Page</h1>
    <p>This is some info about me</p>
    <Link to="/contact">Contact Me</Link>
  </Layout>
)

export default AboutPage;