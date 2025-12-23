
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-stopzilla-support-usa" element={<Home />} />
        <Route path="/about-stopzilla-live-usa-assistance" element={<About />} />
        <Route path="/services-stopzilla-tech-assistance" element={<Services />} />
        <Route path="/blog-stopzilla-tech-support-tips" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact-stopzilla-support-usa" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
