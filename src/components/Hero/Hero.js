import React from "react";
import './Hero.css'
import Logo from '../../assets/part.png'
import myImage from '../../assets/خريطة 1.png'
import Image1 from '../../assets/ww.png'
import Image2 from '../../assets/home99.png'
import CountUp from "react-countup";
import { Link } from 'react-router-dom';





const Hero = () => {
    return (
      <div className="hero"> 
        <div className="left-h"> 

          
           <div className="dream-containar">
            <div>
              <span className="dream1">Buy Your dream </span>
              <span className="dream2">                 real estate</span>

            </div>
           
        

           </div>


    <div className="figures">
            <div>
            <span ><h1><CountUp start={0} end={49} duration={7} delay={0}/>%</h1></span>
            <span>Our sales 2015</span>

            </div>
            <div>
            <span ><h1><CountUp start={0} end={66} duration={7} delay={0}/>%</h1></span>
            <span>Our sales 2019</span>

            </div>
            <div>
              <span ><h1><CountUp start={0} end={80} duration={7 } delay={0}/>%</h1></span>
              <span>Our sales2024</span>
           

            </div>
          <div className="hero-buttons">
             <Link to="/schedule">

             <button className="btn">schedule a visit !</button>
             </Link>

          </div>

           </div>




    



    <div class="card">
       <div class="card-details">
         <p class="text-title"> villa A 
         <p class="text-title">
         </p>
         </p>
         <p class="text-body">Total Area: 200 m/sq Building Area: 188 m/sq
</p>       
<p class="text-body">4 Bedrooms/ 3 Bathrooms
</p>


       </div>
        <button class="card-button">More info</button>
        </div>


        <p class="text-map">10  X  20  METER  </p>



        <div className="home-map">
               <img src={myImage} alt="" className="home-map"/>

            </div>


          





            <div class="card">
       <div class="card-details">
         <p class="text-title"> villa B
         <p class="text-title">
         </p>
         </p>
         <p class="text-body">Approximate Total Area: 200 m/sq
Building Area: 155 m/sq
</p>       
<p class="text-body">3 Bedrooms/ 2 Bathrooms

</p>


       </div>
        <button class="card-button">More info</button>
        </div>


        <p class="text-map">10  X  20  METER  </p>



        <div className="home-map">
               <img src={myImage} alt="" className="home-map"/>

            </div>


        <div className="image-grid">

          


          </div>    

    

           




         
     

     
      </div>
        <div className="right-h">

           <div className="homeees">
               <img src={Logo} alt="" className="homess"/>
            </div>

            <div className="Image1">
               <img src={Image2} alt="" className="Image1"/>
            </div>

            <div className="Image2">
               <img src={Image1} alt="" className="Image2"/>
            </div>

        


          
          </div>
          


          

       </div>





       






    )
}
export default Hero