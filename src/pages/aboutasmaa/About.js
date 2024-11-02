import Header from "../../components/Header/Header"
import React from "react"
import "./About.css"
import imaagA from '../../assets/9fd1295e27204bac92f1cbe20e1de6e5.jpg'
import imag22 from  '../../assets/icon hand.png'
import imag23 from  '../../assets/icon light.png'
import imag24 from  '../../assets/icon stock.png'






// eslint-disable-next-line import/no-anonymous-default-export
export default function About() {
  return (

    <div>

      <div>
        <span className="aboyt-us"> About Us </span>

      </div>
      
      <div>
        <span className="aboyt-us2"> Whay Heaven Residency ! </span>

      </div>



      
    
    <div className="img-container">
      <div className="imag22">
        <img src={imag23} className="imag23"></img>

      </div>
      <div className="imag23">
      <img src={imag22} className="imag22"></img>

      </div>
      <div className="imag24">
      <img src={imag24} className="imag24"></img>

      </div>

      

      
   
      
       
    </div>



    <div className="about1-container">
   
      <div class="about1">
        

        
      <span className="about2">Our Vision</span>
      <span className="about3">"
      To be the most trusted and innovative real estate company, creating value and enhancing lifestyles for our clients, partners, and communities. We aspire to set the industry standard for sustainable,"</span>
      <span className="about3">" We aspire to set a new standard in residential living—where every detail is crafted to inspire well-being, nurture connections, and create a lasting sense of belonging."</span>

 
      
       </div>



       <div class="about1">
        
      <span className="about2">Our Values</span>
      <span className="about3">
      1-Quality: We commit to the highest standards in every aspect of our community.
      </span>
      <span>2-Sustainability: We incorporate eco-friendly practices and prioritize energy-efficient designs.</span>
      <span>3-Community: We strive to foster connections, creating a true neighborhood within our walls.</span>

      
       </div>


        <div class="about1">
          <img className="About-img"></img>
      <span className="about2">Our Story</span>
      <span className="about3">The Journey of Heaven Residency</span>
      <span className="about3">Founded in 2015,  Heaven Residency began with a dream to build more than just homes—we wanted to create a community. Our founders, [Founder Names], believed that a home should be a place of peace, security, and connection.</span>
 

      
      
       </div>

       
    </div>
    </div>
  

  )
}