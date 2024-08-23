import React from 'react'
import "./Footer2.css";

function Footer2() {
  return (
    <>
        <div class="box10">
            <div class="container5"> 
                <div class="have">
                    <h2 class="we">Have a question? We are here to help!</h2>
                    <p>if you have any question for us, feel free to reach out to us on the details given below.</p>
                    <div class="cantant">
                        <div class="call">
                           <div class="phone"><i class="fa-solid fa-phone"></i></div>
                            <p>Call Now<b class="num">8249517924</b></p>
                        </div>  
                        
                        <div class="phone1">
                            <div class="phone"><i class="fa-solid fa-envelope"></i></div>
                             <p>Email<b class="email">info@hellograduates.in</b></p>
                         </div>
                    </div>
                </div> 
                
                <div className="image8">
                    <img src='image/image8.jpg'></img>
                </div>
            </div>
        </div>


        <div class="footer">
            copyright @ hello graduate 2024
        </div>
    
    </>
  )
}

export default Footer2