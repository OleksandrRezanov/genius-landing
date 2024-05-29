import '../styles/blocks/Info.scss';
import { PrimaryButton } from './PrimaryButton';
import topSpeakers from '../img/top-speakers.png';

export const Info = () => (
  <section className='info'>
    <div className='info__container'>
      <ul className='info__list'>
        <li className='info__list-item info__list-item--calendar'>30 квітня</li>
        <li className='info__list-item info__list-item--world'>online</li>
        <li className='info__list-item info__list-item--flag'>3-й потік</li>
        <li className='info__list-item info__list-item--clock'>3 місяці</li>
      </ul>

      <div className='info__title-container'>
        <h1 className='info__title--highlighted'>
          <div className='info__title'>AI</div> спеціаліст
        </h1>

        <p className='info__subtitle'>
          Для новачків з
          <span className='info__subtitle--bold'> 0 до повного опанування професії </span>
          та результату
        </p>
      </div>

      <p className='info__raiting'>4.89 із 5 (на основі 1501 оцінок)</p>

      <p className='info__description'>
        <span className='info__description--bold'>Опануйте трендовий<br />напрямок, збільште</span> ефективність у своїй роботі та почніть заробляти набагато більше за допомогою штучного інтелекту
      </p>
      <div className='info__button'>
        <PrimaryButton title='Записатися на курс' type='purple' />
      </div>
      <p className='info__seats'>Залишилось 5 місць із 25</p>
    </div>

    <div className='info__wrapper'>
      <div className='info__speakers'>
        <p className='info__label'>ТОП<br />спікери</p>
        <img className='info__images' alt='Top speakers' src={topSpeakers}></img>
      </div>
    </div>
  </section>
);