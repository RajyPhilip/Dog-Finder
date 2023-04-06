import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Homepage = () => {
  return (
    <div>
    <header id="header">
      <h1 id="main-title">The More you Love . The More they Love   </h1>
    </header>
    <main>
      <section id="products">
        <div id="description">
          <h2 className="section-title">Beloved Paws!</h2>
          <p>Love everyone from "Heart" not by "Breed" .</p>
        </div>
        <div id="product-catalogue">
          <img className="catal-img" src="https://cdn.pixabay.com/photo/2015/09/09/19/41/cat-932846_960_720.jpg" alt="Cat Toy" />
          <img className="catal-img" src="https://cdn.pixabay.com/photo/2020/01/09/12/23/dog-4752630_960_720.jpg" alt="Dog Toy" />
          <img className="catal-img" src="https://cdn.pixabay.com/photo/2015/09/05/00/43/dog-923610_960_720.jpg" alt="Dog Toy" />
          <img className="catal-img" src="https://cdn.pixabay.com/photo/2018/07/21/09/17/cat-3552143_960_720.jpg" alt="Cat Toy" />
          <img className="catal-img" src="https://cdn.pixabay.com/photo/2019/06/10/18/45/welsh-corgi-pembroke-4264957_960_720.jpg" alt="Dog Toy" />
          <img className="catal-img" src="https://cdn.pixabay.com/photo/2014/10/14/09/03/terrier-487963_960_720.jpg" alt="Dog Toy" />
        </div>
      </section>
    </main>
  </div>
  )
}

export default Homepage
