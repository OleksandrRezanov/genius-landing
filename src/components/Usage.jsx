import { usageData } from "../variables/usageData";
import { UsageItem } from "./UsageItem";

import '../styles/blocks/Usage.scss';

export const Usage = () => (
  <section className="usage">
    <h2 className="usage__title">
      Як можна<span className="usage__title--highlighted"> використовувати АІ</span>?
    </h2>

    <p className="usage__subtitle">
      Штучний інтелект поступово входить в онлайн професії, змінюючи підходи і підвищуючи ефективність в різних сферах. Поговоримо про те, як ШІ перетворює онлайн професії, такі як SMM-менеджер, веб-дизайнер і програміст.
    </p>

    <div className="usage__wrapper">
      {usageData.map(dataItem => (
        <UsageItem
          key={dataItem.title}
          title={dataItem.title}
          body={dataItem.body}
          backgroundImage={dataItem.backgroundImage}
        />
      ))}
    </div>

    <p className="usage__conclusion">
    Усі ці професії отримують <span className="usage__conclusion--bold"> переваги від росту штучного інтелекту, включаючи підвищену продуктивність, точність та можливість реалізації більш складних завдань. </span> Штучний інтелект стає надійним помічником у світі онлайн професій, розширюючи можливості фахівців і покращуючи якість їх роботи.
    </p>
  </section>
);
