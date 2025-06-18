import React from 'react'
import "./CallToAction.css"

function CallToAction() {
  return (
    <>
     <div className="ActionsPannels">
          <div className="ActionPannelsContainer">
            {/* Panel 1 – BaaS */}
            <div className="ActionPannel1">
              <div className="imageDiv">
                <span>💳</span>
              </div>
              <h3 className="ActionPannelTitle">Talk to us </h3>
              <span className="ActionPannelText">
                Want to partner with us, learn more, or just say hello?
              </span>

              <div className='Buttons-Container'>
              <button className="PannelButton1">
                <span className='PannelButton1Text'>
                    Get in touch
                </span>
              </button>
              <button className="PannelButton2">
                <span className='PannelButton2Text'>
                    Join the team
                </span>
              </button>
              </div>

            </div>

            {/* Panel 2 – Data */}
            <div className="ActionPannel2">
              <div className="imageDiv">
                <span>🔗</span>
              </div>
              <h3 className="ActionPannelTitle">Start building</h3>
              <span className="ActionPannelText">
               Create an account to explore our APIs. 
              </span>
              
              <div className='Buttons-Container'>  
              <button className="PannelButton3">
                <span className='PannelButton3Text'>
                    Sign up
                </span>
              </button>
              <button className="PannelButton4">
                 <span className='PannelButton4Text'>
                    Read our docs
                </span>
              </button>
              </div>

            </div>
            </div>
            </div>
    
    </>
  )
}

export default CallToAction