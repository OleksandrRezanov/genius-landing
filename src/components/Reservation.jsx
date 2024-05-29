import '../styles/blocks/Reservation.scss';
import { ReservationForm } from './ReservationForm';

export const Reservation = () => (
  <section className='reservation'>
    <div className='reservation__description'>
      <ul className='reservation__list'>
        <li className='reservation__list-item reservation__list-item--calendar'>30 квітня</li>
        <li className='reservation__list-item reservation__list-item--world'>online</li>
        <li className='reservation__list-item reservation__list-item--flag'>3-й потік</li>
        <li className='reservation__list-item reservation__list-item--clock'>3 місяці</li>
      </ul>

      <h2 className='reservation__title'>
        <span className='reservation__title--large'>AI</span><br />
        <span className='reservation__title--large purple'>спеціаліст</span>
        <br />
        <span className='reservation__title--small'>
          з 0 до повного опанування професії та результату $
        </span>
      </h2>

      <p className='reservation__subtitle'>
        Щоб першим забронювати участь та
        <span className='purple'> підключитися до лімітованої групи на кращих умовах</span>
        , заповніть форму
      </p>

      <p className='reservation__label'>До підвищення цін залишилося:</p>

      <div className='reservation__time'>
        <div className='reservation__time-container'>
          <p className='reservation__time-value'>03</p>
          <p className='reservation__time-unit'>Дні</p>
        </div>

        <div className='reservation__time-container'>
          <p className='reservation__time-value'>06</p>
          <p className='reservation__time-unit'>Годин</p>
        </div>

        <div className='reservation__time-container'>
          <p className='reservation__time-value'>03</p>
          <p className='reservation__time-unit'>Хвилин</p>
        </div>

        <div className='reservation__time-container'>
          <p className='reservation__time-value'>15</p>
          <p className='reservation__time-unit'>Секунд</p>
        </div>
      </div>
    </div>

    <div>
      <ReservationForm />
    </div>
  </section>
); 
