import { ExpectationsItem } from "./ExpectationsItem";
import '../styles/blocks/Expectations.scss';
import { expectationsData } from "../variables/expectationsData";

export const Expectations = () => (
  <section className="expectations">
    <h2 className="expectations__title">Що чекає на вас на курсі</h2>

    <div className="expectations__container">
      {expectationsData.map(({ title, body, backgroundImage }) => (
        <ExpectationsItem
          key={title}
          title={title}
          body={body}
          backgroundImage={backgroundImage}
        />
      ))}
    </div>
  </section>
);
