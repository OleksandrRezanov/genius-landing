import '../styles/blocks/Customers.scss';
import sumsung from '../img/icons/Customers/logo-samsung.jpg';
import onePlusOne from '../img/icons/Customers/logo-one-plus-one.jpg';
import mono from '../img/icons/Customers/logo-mono.jpg';
import ictv from '../img/icons/Customers/logo-ictv.jpg';
import senseBank from '../img/icons/Customers/logo-sense-bank.jpg';
import wix from '../img/icons/Customers/logo-wix.jpg';

export const Customers = () => (
  <section className='customers'>
    <h2 className='customers__title'>Наші навчальні програми проходять</h2>
    <p className='customers__subtitle'>власники, керівники та співробітники провідних компаній</p>
    <div className='customers__images'>
      <img className='customers__image' src={sumsung} alt='Samsung'/>
      <img className='customers__image' src={onePlusOne} alt='One Plus One'/>
      <img className='customers__image' src={mono} alt='Mono'/>
      <img className='customers__image' src={ictv} alt='ICTV'/>
      <img className='customers__image' src={senseBank} alt='Sense Bank'/>
      <img className='customers__image' src={wix} alt='WIX'/>
    </div>
  </section>
);
