import React from 'react';
import { Footer, Navbar, SignupForm } from '../Components';

export default function Signup() {
  return (
    <>
      <Navbar user={true} />
      <SignupForm />
      <Footer />
    </>
  );
}
