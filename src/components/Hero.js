import React, { useState } from 'react';
import avatarImg from '../assets/thanhnguyen.jpg';

function Hero() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, mình là thanhnd!</h1>
          <p className="hero-subtitle">Đây là trang web cá nhân của mình</p>
          <ul className="hero-list">
            <li>Software Developer</li>
            <li>Taiwanese international students</li>
            <li>Effort and perseverance every day</li>
          </ul>
        </div>
        <div className="hero-avatar-wrapper" onClick={() => setIsLightboxOpen(true)}>
          <img src={avatarImg} alt="thanhnd profile avatar" />
        </div>
      </header>

      {isLightboxOpen && (
        <div className="avatar-lightbox" onClick={() => setIsLightboxOpen(false)}>
          <div className="avatar-lightbox-close">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <div className="avatar-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={avatarImg} alt="thanhnd profile avatar full" />
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
