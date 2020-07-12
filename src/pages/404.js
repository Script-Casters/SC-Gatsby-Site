import React from 'react'
import Layout from '../components/layout'
import {Link} from "gatsby"


const NotFoundPage = () => (
  <Layout>
    <h1>404: NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <button> <Link to="/">Go Home</Link></button>
  </Layout>
);

export default NotFoundPage
