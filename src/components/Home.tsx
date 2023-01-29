import { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';


function Home() {
  return (
    <div className="container">
    <Header/>
    <Content/>
    <Footer/>
    </div>

  )
}

export default Home;
