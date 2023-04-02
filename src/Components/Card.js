import React from 'react'
import img1 from "../Images/m16.jpg";
import img2 from "../Images/ar15.jpg";
import img3 from "../Images/pistol.jpeg"
import img4 from "../Images/shotgun.jpg";
import img5 from "../Images/ak47.jpg"
import img6 from "../Images/mk46.jpg"
import img7 from "../Images/sr1911.jpg"
import img8  from "../Images/famas.png"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>M16 Assault Riffle</h2>
        <h2>Price : $100</h2>
        <h2>Type : Riffle</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>AR-15</h2>
        <h2>Price : $200</h2>
        <h2>Range : Long </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>pistol</h2>
        <h2>Price : $50</h2>
        <h2>Range : Short</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>shotgun</h2>
        <h2>Price : $75</h2>
        <h2>Range : Short</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>AK-47</h2>
        <h2>Price : $500</h2>
        <h2>Type : Riffle</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>MK46</h2>
        <h2>Price : $200</h2>
        <h2>Range : Long </h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>Sr1911</h2>
        <h2>Price : $20</h2>
        <h2>Type : Pistol</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>Famas</h2>
        <h2>Price : $350</h2>
        <h2>Range : Long</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>

    </div>
    </section>
  )
}
