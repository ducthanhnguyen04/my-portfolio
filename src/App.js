import React, { useState, useEffect } from 'react';
import './styles/main.scss';

// Import Custom Components
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import ExperienceSection from './components/ExperienceSection';
import BlogSection from './components/BlogSection';
import ConnectSection from './components/ConnectSection';
import BlogDetails from './components/BlogDetails';
import Footer from './components/Footer';

function App() {
  // Routing: 'home' | 'blog'
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#blog/minh-la-ai') {
      return 'blog';
    }
    return 'home';
  });

  // Theme: 'light' | 'dark' | 'system'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'; // Dark mode default as in screenshot
  });

  // State for show copy URL toast
  const [showToast, setShowToast] = useState(false);

  // Sync route with browser hash for manual link shareability
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#blog/minh-la-ai') {
        setRoute('blog');
      } else {
        setRoute('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set hash on route state change
  const navigateTo = (newRoute) => {
    if (newRoute === 'blog') {
      window.location.hash = '#blog/minh-la-ai';
    } else {
      window.location.hash = '';
    }
    setRoute(newRoute);
    window.scrollTo(0, 0);
  };

  // Handle Theme switching & applying dark mode classes
  useEffect(() => {
    const rootClass = document.body.classList;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      if (theme === 'dark') {
        rootClass.add('dark-mode');
      } else if (theme === 'light') {
        rootClass.remove('dark-mode');
      } else if (theme === 'system') {
        if (mediaQuery.matches) {
          rootClass.add('dark-mode');
        } else {
          rootClass.remove('dark-mode');
        }
      }
    };

    applyTheme();
    localStorage.setItem('theme', theme);

    // Watch for system preference changes when system mode is selected
    const handleMediaChange = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [theme]);

  // Copy URL action
  const handleCopyUrl = () => {
    const currentUrl = window.location.href.split('#')[0] + '#blog/minh-la-ai';
    navigator.clipboard.writeText(currentUrl).then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    });
  };

  return (
    <div className="portfolio-app">
      <div className="portfolio-container">
        {route === 'home' ? (
          /* HOME PAGE */
          <>
            <Hero />
            <ProductsSection />
            <ExperienceSection />
            <BlogSection onNavigate={navigateTo} />
            <ConnectSection />
          </>
        ) : (
          /* BLOG DETAILS PAGE */
          <BlogDetails onNavigate={navigateTo} onCopyUrl={handleCopyUrl} />
        )}

        {/* Footer Section */}
        <Footer theme={theme} onThemeChange={setTheme} />

        {/* Copy Toast Notification */}
        <div className={`copy-toast ${showToast ? 'show' : ''}`}>
          Đã sao chép liên kết!
        </div>
      </div>
    </div>
  );
}

export default App;
