import React, { useState, useEffect, useRef } from "react";
import "./ProductsSection.css";

function ProductsSection() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const totalGroups = 5;
  const timerRef = useRef(null);

  // Auto-advance slides
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentGroup(prev => (prev + 1) % totalGroups);
      }, 10000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  // Handle group navigation
  const goToGroup = (groupIndex) => {
    setCurrentGroup(groupIndex);
  };

  // Handle arrow navigation
  const nextGroup = () => goToGroup((currentGroup + 1) % totalGroups);
  const prevGroup = () => goToGroup((currentGroup - 1 + totalGroups) % totalGroups);

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="Wrapper-container">
        {/* ───── Section heading ───── */}
        <div className="SectionHeaderBackground">
          <h1 className="SectionHeader">All the products you need</h1>
        </div>

        {/* ───── Product panels ───── */}
        <div className="SectionPannels">
          <div className="PannelsContainer">
            {/* Panel 1 – BaaS */}
            <div className="Pannel Pannel1">
              <div className="imageDiv">
                <svg viewBox="0 0 24 24" height="24" width="24" aria-label="hidden" xmlns="http://www.w3.org/2000/svg"><path d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z"></path></svg>
              </div>
              <h3 className="PannelTitle">BaaS</h3>
              <span className="PannelText">
                Build trusted, compliant open finance infrastructure – fast. 
                Go further with premium APIs that unlock value beyond regulatory standards. 
              </span>
              <button className="PannelButton">Learn more</button>
            </div>

            {/* Panel 2 – Data */}
            <div className="Pannel Pannel2">
              <div className="imageDiv">
                <svg viewBox="0 0 544 512" height="544" width="512" aria-label="hidden" xmlns="http://www.w3.org/2000/svg"><path d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>
              </div>
              <h3 className="PannelTitle">Data</h3>
              <span className="PannelText">
                Turn financial data into real-time insights. 
                Drive revenue by reaching users at the right time with the right solutions.
              </span>
              <button className="PannelButton">Learn more</button>
            </div>

            {/* Panel 3 – Embedded Finance */}
            <div className="Pannel Pannel3">
              <div className="imageDiv">
                <svg viewBox="0 0 512 512" height="512" width="512" aria-label="hidden" xmlns="http://www.w3.org/2000/svg"><path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>              </div>
              <h3 className="PannelTitle">Embedded Finance</h3>
              <span className="PannelText">
                Embed financing into everyday moments. Improve customer
                experiences and boost revenue through broader distribution.
              </span>
              <button className="PannelButton">Learn more</button>
            </div>

            {/* Panel 4 – Payments */}
            <div className="Pannel Pannel4">
              <div className="imageDiv">
                <svg viewBox="0 0 320 512" height="320" width="512" aria-label="hidden" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>              </div>
              <h3 className="PannelTitle">Payments</h3>
              <span className="PannelText">
                Enable fast, secure, account-to-account payments. Remove costly
                middlemen and boost efficiency with real-time transactions.
              </span>
              <button className="PannelButton">Learn more</button>
            </div>
          </div>
        </div>

        {/* ───── Collaboration slider area ───── */}
        <div className="SectionCollaborations">
          <div className="CollaborationsContainer">
            <div className="HeadingContainer">
              <h2 className="CollaborationHeading">TRUSTED TO DRIVE IMPACT</h2>
            </div>

            <div className="SlideShowCollaborations">
              <button className="Arrow ArrowLeft" onClick={prevGroup}>‹</button>

              <div className="CollaborationsGroups">
                <div className="GroupsContainer"    style={{
                    transform: `translateX(-${currentGroup * 100}%)`,
                    width: `${totalGroups * 100}%`,
                    transition: "transform 0.8s ease-in-out"
                  }}>
                  <div className="CollaborationsGroup1">
                    <img src="../../public/visa.png" alt="VISA" />
                    <img src="../../public/DIFC.png" alt="DIFC" />
                    <img src="../../public/QARAR.png" alt="QARAR" />
                    <img src="../../public/SAB.png" alt="SAB" />
                  </div>

                  <div className="CollaborationsGroup2">
                    <img src="../../public/NBB.png" alt="NBB" />
                    <img src="../../public/Ila.png" alt="Ila" />
                    <img src="../../public/BANK ALJAZIRA.png" alt="Bank Aljazira" />
                    <img src="../../public/ALINMA.png" alt="ALINMA" />
                  </div>

                  <div className="CollaborationsGroup3">
                    <img src="../../public/Tamam.png" alt="TAMAM" />
                    <img src="../../public/benefit.png" alt="benefit" />
                    <img src="../../public/Money Loop.png" alt="MoneyLoop" />
                    <img src="../../public/Tamkeen.png" alt="Tamkeen" />
                  </div>

                  <div className="CollaborationsGroup4">
                    <img src="../../public/BankAlbilad.png" alt="Bank Albilad" />
                    <img src="../../public/BAHRAIN.png" alt="BAHRAIN" />
                    <img src="../../public/Eazypay.png" alt="eazyPay" />
                    <img src="../../public/MUHIDE.png" alt="Muhide" />
                  </div>

                  <div className="CollaborationsGroup5">
                    <img src="../../public/ARIB.png" alt="ARIB" />
                    <img src="../../public/BDB.png" alt="BDB" />
                    <img src="../../public/BAHRAIN FIN TECH BAY.png" alt="BAHRAIN FIN TECH BAY" />
                    <img src="../../public/HAKBAH.png" alt="HAKBAH" />
                  </div>
                </div>
              </div>

              <button className="Arrow ArrowRight" onClick={nextGroup}>›</button>
            </div>

            <div className="CollabBullets">
              <button className="PlayPauseButton" onClick={togglePlayPause}>
                {isPlaying ? "⏸" : "▶"}
              </button>
              <span className={`Bullet ${currentGroup === 0 ? "active" : ""}`} onClick={() => goToGroup(0)} />
              <span className={`Bullet ${currentGroup === 1 ? "active" : ""}`} onClick={() => goToGroup(1)} />
              <span className={`Bullet ${currentGroup === 2 ? "active" : ""}`} onClick={() => goToGroup(2)} />
              <span className={`Bullet ${currentGroup === 3 ? "active" : ""}`} onClick={() => goToGroup(3)} />
              <span className={`Bullet ${currentGroup === 4 ? "active" : ""}`} onClick={() => goToGroup(4)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsSection;