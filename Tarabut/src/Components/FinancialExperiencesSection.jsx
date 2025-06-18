import React from 'react'
import "./FinancialExperiencesSection.css"
function FinancialExperiencesSection() {
    return (
    <>
    <div className='Background'>
        <div className='paragraphs-container'>
        <h1 className='headder'>Enhancing financial experiences</h1>
            <div className='Advantiges-container'>
            <div className='paragraph'>
                <p className='paragraph-text'>
                    Unmatched connectivity
                </p>
                <span className='span-text'>
                    Access the region’s broadest open finance network-seamlessly and securely.
                    Tap into new markets, make data-driven decisions, and unlock growth opportunities..
                </span>
            </div>

            <div className='paragraph'>
                <p className='paragraph-text'>
                    Built for scale and security
                </p>
                <span className='span-text'>
                    Experience the highest level of security. Trusted by
                    leading banks, financial institutions and the region’s
                    regulators, with enterprise-grade infrastructure.
                </span>
            </div>

            <div className='paragraph'>
                <p className='paragraph-text'>
                    Expert-led. Impact driven.
                </p>
                <span className='span-text'>
                    Leverage our team's expertise and commitment to
                    success. More than technology, we bring insight,
                    partnership and results.
                </span>
            </div>
            </div>
        </div>

        <div className='Wrap-Container'>
            <div className='image-Container'>
                <img className='image-Togother' src="../../public/FINANCE EXPERIENCES.png" alt="" />
            </div>
            <div className='Togother-Container'>
                <p className='image-Headder'>Together. For better.</p>
                <p className='Description'>We go beyond the traditional. At Tarabut, we believe in building strong,
                        collaborative partnerships that create lasting value. Whether you’re
                        launching a new product, navigating regulatory change, or scaling across
                        markets, we work alongside you every step of the way. What you can expect:
                </p>

                <div className='ps-container'>
                <h2 className='expectation'>Tailored solutions</h2>
                <span className='expectation-span'>Designed around your goals, not just our products.</span>
                </div>

                <div className='ps-container'>
                <h2 className='expectation'>Industry expertise</h2>
                <span className='expectation-span'>Regional insight, regulatory fluency, and deep product knowledge.</span>
                </div>

                <div className='ps-container'>
                </div>
                <h2 className='expectation'>Ongoing support</h2>
                <span className='expectation-span'>A dedicated team that shows up, solves problems, and scales with you.</span>
                    
                <button className='expectation-button'>
                    <span className='expectation-button-text'>
                        Let's talk
                        </span>
                    </button>
                </div>
        </div>
        <div className='Cards-Container'>
            <div className='Card'>
                <div className='card-image-container'>
                    <img className='Card-image' src="../../public/MUHIDE & TARABUT.png" alt="" />
                </div>

                <div className='Description-container'>
                    <div className='info-card1'>
                        <p className='info-text'>MUHIDE and Tarabut Partner to Streamline SME Financing Through Embedded Finance</p>
                        <span className='info-date'>10 Mar 2025</span>
                    </div>
                    <button className='card-button'>
                        <span className='card-button-text'>
                            Read more
                        </span> 
                    </button>
            </div>
            </div>

            <div className='Card'>
                <div className='card-image-container'>
                    <img className='Card-image' src="../../public/American Express & TARABUT.png" alt="" />
                </div>
                <div className='Description-container'>
                    <div className='info-card2'>
                        <p className='info-text'>American Express Saudi Arabia and Tarabut Pioneer First-of-its-Kind Open Banking Experience to Expand Credit Access</p>
                        <p className='info-date'>23 Apr 2025</p>
                    </div>
                    <button className='card-button'>
                        <span className='card-button-text'>
                            Read more
                        </span>
                    </button>
            </div>
            </div>

            <div className='Card'>
                <div className='card-image-container'>
                    <img className='Card-image' src="../../public/SMART FINANCE.png" alt="" />
                </div>
                <div className='Description-container'>
                    <div className='info-card3'>
                        <p className='info-text'>From Open Finance to Smart Finance: Why Real-Time Decisioning is the Future</p>
                        <p className='info-date'>06 Apr 2025</p>
                    </div>
                    <button className='card-button'>
                        <span className='card-button-text'>
                            Read more
                        </span>
                    </button>
            </div>
            </div>
        
        </div>

        </div>

    </>
    )
}

export default FinancialExperiencesSection