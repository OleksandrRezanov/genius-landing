import { useState } from "react";
import classNames from "classnames";
import { PrimaryButton } from "./PrimaryButton";
import '../styles/blocks/Modules.scss';
import { modulesList } from "../variables/modulesList";

export const Modules = () => {
  const [selectedModule, setSelectedModule] = useState(1);

  return (
    <section className="modules">
      <div className="modules__list">
        {modulesList.map(({ moduleNumber, title }) => (
          <div key={moduleNumber}>
            <div
              className={classNames(
                "modules__wrapper",
                { "modules__selected": selectedModule === moduleNumber },
              )}
              onClick={() => setSelectedModule(moduleNumber)}
            >
              <div className="modules__number">{moduleNumber}</div>

              <p className="modules__list-item">
                {title}
              </p>
            </div>

            {selectedModule === moduleNumber && (
              <div className="modules__description--mobile">
                <h3 className="modules__title">
                  Модуль №{selectedModule}. {modulesList[selectedModule - 1].title}
                </h3>

                <ul className="modules__topics">
                  <li className="modules__topic">Технологічна грамотність LLM</li>
                  <li className="modules__topic">Наслідки для бізнесу</li>
                  <li className="modules__topic">Приклади використання людьми з різних сфер</li>
                  <li className="modules__topic">Best practices</li>
                </ul>

                <div className="modules__result">
                  <p className="modules__result-title">В результаті:</p>
                  <p>
                    На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024
                  </p>
                </div>

                <div className="modules__button-container">
                  <PrimaryButton title='Записатися на курс' type='purple' />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="modules__description">
        <h3 className="modules__title">
          Модуль №{selectedModule}. {modulesList[selectedModule - 1].title}
        </h3>

        <ul className="modules__topics">
          <li className="modules__topic">Технологічна грамотність LLM</li>
          <li className="modules__topic">Наслідки для бізнесу</li>
          <li className="modules__topic">Приклади використання людьми з різних сфер</li>
          <li className="modules__topic">Best practices</li>
        </ul>

        <div className="modules__result">
          <p className="modules__result-title">В результаті:</p>
          <p>
            На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024
          </p>
        </div>

        <div className="modules__button-container">
          <PrimaryButton title='Записатися на курс' type='purple' />
        </div>
      </div>
    </section>
  );
};
