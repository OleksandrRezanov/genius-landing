import '../styles/blocks/Payment.scss';

export const Payment = () => (
  <section className='payment'>
    <div className='payment__titles-wrapper'>
      <h2 className='payment__title'>
        <span className='highlighted'>Розстрочка<br />без переплат</span><br />від Genius.Space
      </h2>

      <p className='payment__subtitle'>
        Почніть навчатися вже зараз, а оплату вносьте частинами. Комфортний формат розстрочки:
        <span className='highlighted'> від 2 до 6 місяців*</span>
      </p>
    </div>

    <div className='payment__offer'>
      <div className='payment__offer-card'>
        <p className='payment__offer-title'>Пропозиція<br /> діє до:</p>
        <p className='payment__offer-day'>18</p>
        <p className='payment__offer-title'>квітня</p>
      </div>
    </div>

    <div>
      <p className='payment__label'>Як сплатити частинами?</p>
      <ul className='payment__steps'>
        <li className='payment__step'>
          Просто переходьте до оплати
        </li>

        <li className='payment__step payment__step--icons'>
          Вибирайте зручний формат розстрочки від:
        </li>

        <li className='payment__step'>
          І зробіть платіж буквально в один клік
        </li>
      </ul>
    </div>
  </section>
);
