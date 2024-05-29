import '../styles/blocks/Programm.scss';

export const Programm = () => (
  <section className="programm">
    <div className="programm__left">
      <h2 className="programm__title">Чому конкретно ви навчитеся?</h2>
      <p className="programm__subtitle">Дивіться повну програму курсу</p>
    </div>

    <div className="programm__right">
      <p className="programm__info">
        <span className='bold'>Ви отримаєте</span> структуровані знання, тотальну практику та досвід найкращих спікерів у своєму напрямку.
      </p>

      <div className="programm__description">
        <div className="programm__description-item">
          <p className="programm__description-value">3</p>
          <p className="programm__description-subject">місяці</p>
        </div>

        <div className="programm__description-item">
          <p className="programm__description-value">23</p>
          <p className="programm__description-subject">модуля</p>
        </div>

        <div className="programm__description-item">
          <p className="programm__description-value">92</p>
          <p className="programm__description-subject">теми</p>
        </div>
      </div>
    </div>
  </section>
);
