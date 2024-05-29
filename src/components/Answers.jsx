import '../styles/blocks/Answers.scss';
import { AnswersItem } from './AnswersItem';
import { answersData } from '../variables/answersData';

export const Answers = () => (
  <section className='answers'>
    <h2 className='answers__title'>
      Відповіді на
      <span className='answers__title--purple'> поширені запитання</span>
    </h2>

    {answersData.map(({ answer, question }) => (
      <div key={question} className='answers__wrapper'>
        <AnswersItem answer={answer} question={question} />
      </div>
    ))}
  </section>
);
