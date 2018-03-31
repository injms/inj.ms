import React from 'react';
import Link from 'gatsby-link';

import IntroCard from '../components/IntroCard'

const NotFoundPage = () => (
  <IntroCard title="Oh no - page not found">
    <p>Not to worry - <Link to="/">back to the homepage</Link></p>
  </IntroCard>
)

export default NotFoundPage
