import React from 'react';
import blogCoverImg from '../assets/jieshao.JPG';

function BlogDetails({ onNavigate, onCopyUrl }) {
  return (
    <div className="blog-details">
      <div className="blog-details-header">
        <button onClick={() => onNavigate('home')} className="back-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Quay lại
        </button>

        <button onClick={onCopyUrl} className="copy-url-btn">
          <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          Copy URL
        </button>
      </div>

      <div className="blog-details-cover-container">
        <img src={blogCoverImg} alt="Cover" />
        <div className="blog-details-caption" onClick={() => onNavigate('home')}>thanhnd</div>
      </div>

      <article className="blog-details-content">
        <h1>Xin chào mọi người mình là Đức Thanh</h1>

        <p>
          Mình sinh ngày 08/10/2004. Hiện mình đang là sinh viên ngành Computer Science tại Đài Loan.
        </p>

        <p>
          Mình không đẹp trai không giỏi giang, nên mình biết mình phải cố gắng học hỏi, theo đuổi con đường mình đã chọn, con đường này rất khắc nghiệt phải cố gắng nhiều hơn nữa
        </p>

        <p>
          Mình tạo ra trang này để lưu trữ thông tin của mình cũng như các dự án mình đã làm được, cùng với một số giải thưởng mình đã đạt được trong vài năm đi học của mình.
        </p>

        <p>
          Mình mong rằng trong tương lai mình sẽ học hỏi được nhiều điều mới mẻ hơn, mình sẽ phát triển hơn và có thể làm được những điều mình mong muốn, và cũng mong rằng có người đồng hành cùng mình trong chặng đường sắp tới, mình biết điều này thật khó nhưng nó là điều mong ước của mình, chẳng ai thu phí ước mơ mà.
        </p>
        <p>
          Cảm ơn mọi người đã đọc.
        </p>
      </article>
    </div>
  );
}

export default BlogDetails;
