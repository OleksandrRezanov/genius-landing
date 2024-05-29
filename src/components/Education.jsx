import '../styles/blocks/Education.scss';

export const Education = () => (
  <section className='education'>
    <h2 className='education__title'>
      Як проходить<span className='education__highlighted'> навчання?</span>
    </h2>

    <div className='education__stages'>
      <div className='education__card education__card--practice'>
        <p className='education__card-title'>Теорія + практика</p>

        <p className='education__card-description'>
          Ви дивитеся заздалегідь підготовлені відеоуроки та отримуєте практичні завдання, засновані на матеріалі уроку, та шаблони їх виконання.
        </p>
      </div>

      <div className='education__card education__card--home-work'>
        <p className='education__card-title'>Д/З + тестування</p>

        <p className='education__card-description'>
          Протягом усього курсу за вами закріплений ментор та куратор, які перевіряють ваші домашні завдання, дають зворотній зв'язок та відповідають на запитання.
        </p>
      </div>

      <div className='education__card education__card--sessions'>
        <p className='education__card-title'>Живі Q&A-сесії</p>

        <p className='education__card-description'>
          Спікери курсу проводять сесії “Питання-відповідь” в онлайн-форматі, де ви можете поставити запитання та отримати розгорнуті відповіді у реальному часі.
        </p>
      </div>

      <div className='education__card education__card--diploma'>
        <p className='education__card-title'>Диплом</p>

        <p className='education__card-description'>
          Після закінчення навчання ви проходите додаткове тестування та отримуєте диплом, який підтверджує, що ви – професійний графічний дизайнер.
        </p>
      </div>
    </div>
  </section>
);
