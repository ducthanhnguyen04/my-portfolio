import React from 'react';
import movieImg from '../assets/xemphim.png';
import dayehImg from '../assets/azela.png';

function ProductsSection() {
  return (
    <section className="section">
      <h2 className="section-title">Sản phẩm</h2>
      <div className="products-grid">
        <a href="https://ndthah.vercel.app/" target="_blank" rel="noopener noreferrer" className="product-card">
          <div className="product-card-image-container">
            <img src={movieImg} alt="Movies App" />
          </div>
          <div className="product-card-info">
            <div className="product-card-name">Movies</div>
            <div className="product-card-desc">Xem phim miễn phí...</div>
          </div>
        </a>

        <a href="https://dayehprojectazale.vercel.app/" target="_blank" rel="noopener noreferrer" className="product-card">
          <div className="product-card-image-container">
            <img src={dayehImg} alt="Dayeh project Azalea App Preview" />
          </div>
          <div className="product-card-info">
            <div className="product-card-name">Dayeh project Azalea</div>
            <div className="product-card-desc">Ứng dụng tìm hiểu về hoa Đỗ Quyên thông qua trò chơi</div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default ProductsSection;
