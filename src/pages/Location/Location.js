import React from "react"
import './Location.css'
import imag1 from '../../assets/زها.jpg'
import imag2 from '../../assets/معلق.jpg'
import footer from "../../components/Footer/Footer"
// eslint-disable-next-line import/no-anonymous-default-export
export default function Location() {
    return (
        <div>
            <div className="titel">
                <span>Location & The View</span>
            </div>

            <div className="titel-dicription">
                <span>The 
                Heaven Residency is ideally located to provide both convenience and quality of life. Situated near essential amenities like schools, shopping centers</span>
                  </div>
             <div className="title-discription2">

                <span> and healthcare facilities, residents have everything they need close by, reducing commute times and daily stress. 
                </span>
                </div>   
            <div className="map-container">
                    
                    <div className="view-container">

                        <div class="card1-container">
                        <div class="card1-image">
                            <img src={imag2} className="zoha"/>
                        </div>

                        <div class="card1-content">
                            
                        <div class="heading">
                        From the left side you can see the suspension bridge.                           </div>
                           

                                  </div>

                                  
                                  
                                       </div>
                                       

                                       <div class="card1-container">
                        <div class="card1-image">
                            <img src={imag1} className="zoha"/>
                        </div>
                        <div class="card1-content">
                        <div class="heading">
                        From the right side you will have a view of the Tigris River.
                           </div>
                                  </div>
                                       </div>



                    </div>


                    








                     <div className="map-frame">

                     <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=700&amp;hl=en&amp;q=Baghdad+(Heaven%20Residency)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                          
                     </div>

            </div>




           
        </div>
                
                
    )
}