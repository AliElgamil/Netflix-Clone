import React from 'react';
import { Jumbotron, Accordions, Header, Navbar, Footer } from '../Components';
function Home({ user }) {
  return (
    <>
      <Navbar user={user} />
      <Header />
      <Jumbotron />
      <Accordions />
      <Footer />
    </>
  );
}

export default Home;
