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
                <span>💳</span>
              </div>
              <h3 className="PannelTitle">BaaS</h3>
              <span className="PannelText">
                Build trusted, compliant open-finance infrastructure – fast. Go
                further with premium APIs that unlock value beyond regulatory
                standards.
              </span>
              <button className="PannelButton">Learn more</button>
            </div>

            {/* Panel 2 – Data */}
            <div className="Pannel Pannel2">
              <div className="imageDiv">
                <span>🔗</span>
              </div>
              <h3 className="PannelTitle">Data</h3>
              <span className="PannelText">
                Turn financial data into real-time insights. Drive revenue by
                reaching users at the right time with the right solutions.
              </span>
              <button className="PannelButton">Learn more</button>
            </div>

            {/* Panel 3 – Embedded Finance */}
            <div className="Pannel Pannel3">
              <div className="imageDiv">
                <span>📊</span>
              </div>
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
                <span>💡</span>
              </div>
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
              <span className={`bullet ${currentGroup === 0 ? "active" : ""}`} onClick={() => goToGroup(0)} />
              <span className={`bullet ${currentGroup === 1 ? "active" : ""}`} onClick={() => goToGroup(1)} />
              <span className={`bullet ${currentGroup === 2 ? "active" : ""}`} onClick={() => goToGroup(2)} />
              <span className={`bullet ${currentGroup === 3 ? "active" : ""}`} onClick={() => goToGroup(3)} />
              <span className={`bullet ${currentGroup === 4 ? "active" : ""}`} onClick={() => goToGroup(4)} />
              <button className="PlayPauseButton" onClick={togglePlayPause}>
                {isPlaying ? "⏸" : "▶"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsSection;