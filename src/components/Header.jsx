import { useEffect, useState } from 'react';
import '../styles/blocks/Header.scss';
import logo from '../img/logo.svg';
import burgerIcon from '../img/icons/menu-burger-icon.svg';
import closeIcon from '../img/icons/close-icon.png';
import { PrimaryButton } from './PrimaryButton';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <div className='header'>
      <img src={logo} alt='Genius Space logo' />

      <ul className={`header__menu ${isMenuOpen ? 'header__menu--open' : ''}`}>
        <li className='header__menu-item'>Спікери</li>
        <li className='header__menu-item'>Програма</li>
        <li className='header__menu-item'>Відгуки</li>
        <li className='header__menu-item'>FAQ</li>
      </ul>

      <div className='header__button'>
        { !isMenuOpen && <PrimaryButton title='Записатися' type='header' /> }
      </div>

      <div
        className='header__burger'
        style={{
          backgroundImage: `url(${isMenuOpen ? closeIcon : burgerIcon})`,
        }}
        onClick={toggleMenu} />
    </div>
  );
};
