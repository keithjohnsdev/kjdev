import "../styles/Header.scss"
import { useState, useEffect } from 'react';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to handle the header collapse/expand
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setIsCollapsed(false);
      }
      else if (currentScrollY > prevScrollY && !isCollapsed) {
        setIsCollapsed(true); // Scrolling down, collapse the header
      } else if (currentScrollY < prevScrollY && isCollapsed) {
        setIsCollapsed(false); // Scrolling up, expand the header
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCollapsed, prevScrollY]);

  return (
    <header className={`header ${isCollapsed ? 'collapsed' : ''}`}>
      <div className={`logo ${isHovered ? 'expanded' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <h1>&#123;</h1>
        <div className="logo-middle">
          <h1>{ isHovered ? "keithjohns: dev" : "kj"}</h1>
        </div>
        <h1>&#125;</h1>
      </div>
    </header>
  );
};

export default Header;