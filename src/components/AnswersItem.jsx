import { useState } from 'react';
import '../styles/blocks/AnswersItem.scss';
import classNames from 'classnames';

export const AnswersItem = ({ question, answer }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <div className='answers-item'>
        <div
          className={classNames(
            'answers-item__icon',
            { 'answers-item__selected': selected },
          )} 
          onClick={() => setSelected(!selected)}
        />

        <p className='answers-item__title'>{question}</p>
      </div>

      {selected && <p className='answers-item__answer'>{answer}</p>}
    </div>
  );
};
