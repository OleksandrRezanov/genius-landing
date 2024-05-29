import '../styles/blocks/Audience.scss';
import { audienceData } from '../variables/audienceData';
import { AudienceCard } from './AudienceCard';

export const Audience = () => (
  <section className='audience'>
    <h2 className='audience__title'>
      Цей <span className='audience__title--highlighted'>курс точно для тебе</span>, якщо ти:
    </h2>

    <div className='audience__container'>
      {audienceData.map(({ title, description }) => (
        <AudienceCard key={title} title={title} description={description}/>
      ))}
    </div>
  </section>
);
