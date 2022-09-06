import React from 'react';
import { Footer, Navbar, SigninForm } from '../Components';

export default function Signin() {
  return (
    <>
      <Navbar user={true} />
      <SigninForm />
      <Footer />
    </>
  );
}
