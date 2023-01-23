import { useState } from 'react';
import './logolist.css'

const LogoList = () => {
  
  const [activeLogo, setActiveLogo] = useState(0)

  const handleBtnPlus = () => {
    if (activeLogo < 3) {
      const newActive = activeLogo + 1
      setActiveLogo(newActive)
    }else {
      setActiveLogo(0)
    }
  }

  const handleBtnMinus = () => {
    if (activeLogo > 0) {
      const newActive = activeLogo - 1
      setActiveLogo(newActive)
    }else {
      setActiveLogo(3)
    }
  }

  return (
    <ul className='logos-container'>
      <button onClick={handleBtnMinus} className='btn'><i className="fa-solid fa-arrow-left"></i></button>
      <li className={`logo__li ${activeLogo == 0 && 'active'}`}><img src='/logo.png' alt='logo' /></li>
      <li className={`logo__li ${activeLogo == 1 && 'active'}`}><img src='/logo.png' alt='logo' /></li>
      <li className={`logo__li ${activeLogo == 2 && 'active'}`}><img src='/logo.png' alt='logo' /></li>
      <li className={`logo__li ${activeLogo == 3 && 'active'}`}><img src='/logo.png' alt='logo' /></li>
      <button onClick={handleBtnPlus} className='btn'><i className="fa-solid fa-arrow-right"></i></button>
    </ul>
  )
}

export default LogoList;
