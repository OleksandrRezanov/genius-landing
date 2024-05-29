import '../styles/blocks/Knowledge.scss';

export const Knowledge = () => (
  <section className="knowledge">
    <div className="knowledge__advantages">
      <h2 className="knowledge__title"><span className="knowledge__title--highlighted">Переваги</span> знань</h2>

      <p className="knowledge__item">
        АІ технології надійні, оскільки не допускають помилок, і виконують завдання точно згідно з наданими інструкціями.
      </p>

      <p className="knowledge__item">
        АІ дозволяє обробляти великі обсяги даних та постійно вдосконалювати свої методи.
      </p>
    </div>

    <div className="knowledge__usage">
      <p className="knowledge__subtitle">
        Застосування алгоритмів штучного інтелекту дозволить вам значно зменшити витрати в будь-якій сфері:
      </p>

      <p className="knowledge__preferences knowledge__preferences--time">
        Ви зможете зекономити час завдяки швидкому навчанню і відсутності помилок.
      </p>

      <p className="knowledge__preferences knowledge__preferences--creative">
        Ресурси вашого персоналу можна перерозподілити на більш креативні завдання, які не потребують рутинних дій.
      </p>

      <p className="knowledge__preferences knowledge__preferences--save">
        Ви зможете зекономити гроші завдяки використанню інструментів штучного інтелекту, що суттєво зменшить ваш бюджет.
      </p>
    </div>
  </section>
);
