import React from 'react';

function BlogSection({ onNavigate }) {
  return (
    <section className="section">
      <h2 className="section-title">Blog</h2>
      <div
        className="blog-list-item"
        onClick={() => onNavigate('blog')}
      >
        <span className="blog-list-item-title">
          Một chút về bản thân mình
        </span>
        <p className="blog-list-item-desc">
          Post này giới thiệu một chút về bản thân của mình, hy vọng các bạn sẽ hiểu hơn về mình.
        </p>
      </div>
    </section>
  );
}

export default BlogSection;
