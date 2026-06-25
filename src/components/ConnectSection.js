import React from 'react';

function ConnectSection() {
  return (
    <section className="section">
      <h2 className="section-title">Connect</h2>
      <div className="connect-container">
        <p className="connect-container-text">
          Liên hệ mình ở <a href="mailto:itstamhn@gmail.com">ndt.ducthanh04@gmail.com</a>
        </p>
        <div className="connect-container-links">
          <a href="https://www.facebook.com/nguyen.duc.thanh.0810/" target="_blank" rel="noopener noreferrer" className="connect-pill">
            Facebook ↗
          </a>
          <a href="https://www.linkedin.com/in/thanh-nguy%E1%BB%85n-02912b401/" target="_blank" rel="noopener noreferrer" className="connect-pill">
            LinkedIn ↗
          </a>
          <a href="https://www.instagram.com/_thahnd_/" target="_blank" rel="noopener noreferrer" className="connect-pill">
            Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConnectSection;
