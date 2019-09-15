import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const NotFound = () => (
  <Layout>
    <Head title="Not Found"/>
    <h1>Page not found!!</h1>
    <p>
      <Link to="/">Head Home</Link>
    </p>
  </Layout>
)

export default NotFound;