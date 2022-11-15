import React, { useEffect, useState } from 'react';

import { BsFillMoonFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';

const DarkModeToggle = () => {

  const [theme, setTheme] = useState('light');

  const handleTheme = () => (setTheme(theme === "light" ? "dark" : "light"))

  useEffect(() => {
    if(theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme])

  
    return (
    <i onClick={handleTheme}>
      {
        theme === 'light' ? <BsFillMoonFill />
        :
        <FiSun />
      }
      
    </i>
    );
  
}

export default DarkModeToggle;