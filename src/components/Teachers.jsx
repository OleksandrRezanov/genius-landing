import '../styles/blocks/Teachers.scss';

export const Teachers = () => (
  <section className="teachers">
    <h2 className="teachers__title">
      Хто проводить <span className="highlighted">навчання?</span>
    </h2>

    <p className="teachers__subtitle">
      Якщо і вчитися – то лише у найкращих! Наші експерти – <span className="highlighted">ТОП на ринку IT</span> та будуть передавати вам свій досвід та знання протягом <span className="highlighted">3 місяців</span>
    </p>

    <div className="teachers__wrapper">
      <div className="teachers__card teachers__card--borys">
        <p className="teachers__name">Борис Дрожак</p>

        <p className="teachers__experience highlighted">
          Director of engineering and Principal SWE в мультимільярдній AI компанії
        </p>

        <p className="teachers__description">
          Власник ресторанного бізнесу в Україні
        </p>
      </div>

      <div className="teachers__card teachers__card--uliana">
        <p className="teachers__name">Уляна Литвин</p>

        <p className="teachers__experience highlighted">
          8 років досвіду у сфері маркетингу в соціальних мережах
        </p>

        <p className="teachers__description">
          CEO TM Grofa
        </p>
      </div>

      <div className="teachers__card teachers__card--violetta">
        <p className="teachers__name">Віолетта Лозюк</p>

        <p className="teachers__experience highlighted">
          Засновниця Global Scale
        </p>

        <p className="teachers__description">
          Співзасновниця Ukrainian Business Way
        </p>
      </div>
    </div>
  </section>
);
