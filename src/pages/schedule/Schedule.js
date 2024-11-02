import Header from "../../components/Header/Header";
import './schedule.css'
import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export


export default function Schedule() {
    return (
        <div className="Schedule">


<div className="container">
      <div className="heading"> schedule a visit </div>
      <form action="" className="form" onSubmit={Schedule}>


      <input
          required  
          className="input"
          type="name"
          name="name"
          id="name"
          placeholder="Full Name"
        />

        <input
          required  
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
        />
        <input
          required
          className="input"
          type="number"
          name="number"
          id="number"
          placeholder="Your Number"
        />

<input
          required
          className="input"
          type="date"
          name="date"
          id="date"
          placeholder="chose your date"
        />
        
        <input className="login-button" type="submit" value="Sign In" />
      </form>
        
     
    </div>






            
           
             
        

        </div>
        
        
    )
}