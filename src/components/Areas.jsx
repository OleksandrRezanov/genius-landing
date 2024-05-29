import '../styles/blocks/Areas.scss';
import { AreasItem } from "./AreasItem";
import { areasData } from "../variables/areasData";

export const Areas = () => (
  <section className="areas">
    <h2 className="areas__title">
      <span className="areas__title--highlighted">В якій сфері</span> можна застосовувати Штучний інтелект?
    </h2>

    <p className="areas__subtitle">
      Штучний інтелект корисний та потрібний для різних сфер і категорій людей. Ось декілька прикладів:
    </p>

    <div className="areas__wrapper">
      {areasData.map(dataItem => (
        <AreasItem
          key={dataItem.title}
          title={dataItem.title}
          body={dataItem.body}
          backgroundImage={dataItem.backgroundImage}
        />
      ))}
    </div>

    <p className="areas__conclusion">
      Отже, штучний інтелект може бути корисним практично для кожної галузі та для всіх, хто прагне
      <span className="areas__conclusion--bold"> оптимізувати процеси, підвищити продуктивність та отримати більше можливостей </span>у різних сферах життя і бізнесу.
    </p>
  </section>
);
