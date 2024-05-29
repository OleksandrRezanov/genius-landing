import { PrimaryButton } from "./PrimaryButton";
import '../styles/blocks/Reviews.scss';

export const Reviews = () => (
  <section className='reviews'>
    <h2 className='reviews__title'>
      <span className='reviews__title--highlighted'>Що говорять студенти </span>
      про навчання у Genius.Space
    </h2>

    <div className='reviews__slider' />

    <div className='reviews__dots' />

    <div className='reviews__button'>
      <PrimaryButton title='Стати AI-спеціалістом' type='purple' />
    </div>
  </section>
);
