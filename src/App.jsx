import { useState } from 'react';

// import components
import Content from './components/Content';
import LeftSidebar from './components/LeftSidebar';
import Navigation from './components/Navigation';
import RightSidebar from './components/RightSidebar';

// import style
import './App.scss';


function App() {
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  return (
    <>
    <Navigation openMenu={toggle} />
    
    <main className="main-container">
        <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Content />
        <RightSidebar />
    </main>
    
    </>
  );
}

export default App
