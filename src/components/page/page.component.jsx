import React from 'react';

import './page.styles.css';

const Page = ({title}) => (
  <section className={'page container'}>
    <h2>{title}</h2>
    <p>Coming soon...</p>
  </section>
);

export default Page;