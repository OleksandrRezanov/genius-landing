import '../styles/blocks/Footer.scss';
import logo from '../img/logo.svg';

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__main'>
      <div className='footer__info'>
        <img className='footer__logo' src={logo} alt='Genius Space logo' />

        <p className='footer__adress'>
          ТОВ "КОНСАЛТИНГ СИНДИКАТ",<br />
          ЄДРПОУ: 42182763, Адреса: 02000,<br />
          м. Київ, вул. Паньківська, 14.
        </p>

        <div className='footer__social'>
          <div className='footer__social-icon footer__social-icon--fb' />
          <div className='footer__social-icon footer__social-icon--you-tube' />
          <div className='footer__social-icon footer__social-icon--telegram' />
          <div className='footer__social-icon footer__social-icon--instagram' />
          <div className='footer__social-icon footer__social-icon--tik-tok' />
          <div className='footer__social-icon footer__social-icon--linkedin' />
        </div>
      </div>

      <div className='footer__about'>
        <p className='footer__about-title'>Про Genius.Space</p>

        <div className='footer__about-wrapper'>
          <div className='footer__about-container'>
            <p className='footer__about-item'>Головна</p>
            <p className='footer__about-item'>Найближчі заходи</p>
            <p className='footer__about-item'>Блог</p>
            <p className='footer__about-item'>Наші програми навчання</p>
          </div>

          <div className='footer__about-container'>
            <p className='footer__about-item'>Відгуки</p>
            <p className='footer__about-item'>Про нас</p>
            <p className='footer__about-item'>Мапа сайту</p>
            <p className='footer__about-item'>Логотипи</p>
          </div>
        </div>
      </div>

      <div className='footer__contacts'>
        <p className='footer__contacts-title'>Контакти</p>
        <p className='footer__contacts-item footer__contacts-item--telegram'>genius_support_bot</p>
        <p className='footer__contacts-item footer__contacts-item--email'>info@genius.space</p>
      </div>
    </div>

    <div className='footer__license'>
      <p className='footer__license-item footer__license-item--first'>© 2013 - 2024 Genius.Space Всі права захищені</p>
      <p className='footer__license-item'>Умови надання послуг</p>
      <p className='footer__license-item'>Політика конфіденційності</p>
      <p className='footer__license-item'>Умови повернення</p>
      <p className='footer__license-item'>Умови передзамовлення послуг</p>
      <p className='footer__license-item'>Постачальник послуг</p>
      <p className='footer__license-item'>Попередження</p>
    </div>
  </footer>
);
