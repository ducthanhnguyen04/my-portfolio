import React from 'react';

function ExperienceSection() {
  return (
    <section className="section">
      <h2 className="section-title">Kinh nghiệm làm việc</h2>
      <div className="experience-list">
        <div className="experience-card">
          <div className="experience-card-main">
            <span className="experience-card-role">Làm tự do</span>
          </div>
          <span className="experience-card-time">Tháng 11 năm 2025 - Bây giờ</span>
        </div>

        <div className="experience-card">
          <div className="experience-card-main">
            <span className="experience-card-role">Backend Developer</span>
            <span className="experience-card-company">SmartCom English</span>
          </div>
          <span className="experience-card-time">Tháng 2 năm 2025 - Tháng 8 năm 2025</span>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
