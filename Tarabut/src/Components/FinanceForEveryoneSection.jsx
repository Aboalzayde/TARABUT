import React, { useEffect, useState, useRef } from "react";
import "./FinanceForEveryoneSection.css";
import { useCountUpOnView } from '../Hooks/useCountUpOnView'; // Adjust path as needed

function FinanceForEveryoneSection() {
    const [count1, ref1] = useCountUpOnView(27);
  const [count2, ref2] = useCountUpOnView(50);
  const [count3, ref3] = useCountUpOnView(46);

  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const totalSlides = 3;

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % totalSlides);
      }, 10000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const goToSlide = (index) => {
    setSlideIndex((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => goToSlide(slideIndex + 1);
  const prevSlide = () => goToSlide(slideIndex - 1);

  return (
    <div className="background2">
      <div className="Wrapper-containers">
        <div className="container1">
          <p className="SectionOpening">Enabling Access Where & When It's Needed Most</p>
          <span className="insightSpan">
We believe the future of finance is connected, embedded, and built for everyone, not just the few. By connecting real-time data and embedding finance into everyday moments, we unlock smarter ways to access credit, move money, and build financial resilience. 

          </span>
          <div className="three-columns-wrapper">
            <div className="column-item">
              <p className="TargetName1">For Individuals</p>
              <span className="span1">Faster decisions, fairer access, and personalised support</span>
            </div>
            <div className="column-item">
              <p className="TargetName1">For Businesses</p>
              <span className="span2">New growth paths, seamless infrastructure, and instant capital where it matters most
              </span>
            </div>
            <div className="column-item">
              <p className="TargetName3">For Institutions</p>
              <span className="span3">Deeper insights, better compliance, and the ability to serve more customers more meaningfully</span>
            </div>
          </div>

          <div className="Numbers-columns-wrapper">
        <div className="column-Number" ref={ref1}>
          <p className="TargetNumber1">{count1}m+</p>
              <span className="spanNumber1">Accessible accounts</span>
            </div>
        <div className="column-Number" ref={ref2}>
          <p className="TargetNumber2">{count2}+</p>
              <span className="spanNumber2">Fintechs and businesses supported</span>
            </div>
        <div className="column-Number" ref={ref3}>
          <p className="TargetNumber3">{count3}+</p>
              <span className="spanNumber3">Banks and financial institutions connected</span>
            </div>
          </div>

          <button className="WhoWeServe">
            <span className="spanButton1">Who We Serve</span>
          </button>
        </div>

        <div className="container2">
          <button className="arrow left" onClick={prevSlide}>‹</button>

          <div className="SlideShowContainer">
            <div 
              className="slides-wrapper" 
              style={{ 
                transform: `translateX(-${slideIndex * 100}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              <div className="slide">
                <img className="slide-logo" src="../../public/QARAR.png" alt="QARAR" />
                <div className="slide-text-block">
                  <span className="slide-text">This partnership marks a significant milestone...</span>
                  <div className="slide-person">
                    <p>Zaid Kamhawi</p>
                    <span>CEO</span>
                  </div>
                </div>
              </div>
              <div className="slide">
                <img className="slide-logo" src="../../public/VISA.png" alt="VISA" />
                <div className="slide-text-block">
                  <span className="slide-text">By partnering with Tarabut and integrating our global payments network...</span>
                  <div className="slide-person">
                    <p>Otto Williams</p>
                    <span>SVP Head of Product, Partnership and Digital Solutions</span>
                  </div>
                </div>
              </div>
              <div className="slide">
                <img className="slide-logo" src="../../public/ALINMA.png" alt="ALINMA" />
                <div className="slide-text-block">
                  <span className="slide-text">Tarabut has played a vital role in helping Alinma Bank successfully...</span>
                  <div className="slide-person">
                    <p>Abdulmajeed Alessa</p>
                    <span>Open Banking Lead</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="slide-controls">
              <button className="pause-toggle" onClick={() => setIsPaused(!isPaused)}>
                {isPaused ? "▶" : "⏸"}
              </button>
              <div className="bullets">
                {[...Array(totalSlides)].map((_, i) => (
                  <span
                    key={i}
                    className={`bullet ${i === slideIndex ? "active" : ""}`}
                    onClick={() => goToSlide(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>›</button>
        </div>
      </div>
    </div>
  );
}

export default FinanceForEveryoneSection;