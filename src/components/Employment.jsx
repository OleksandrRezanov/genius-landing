import '../styles/blocks/Employment.scss';

export const Employment = () => (
  <section className='employment'>
    <div className='employment__wrapper'>
      <h2 className='employment__title'>
        Ми допомагаємо з<span className='employment__highlighted'> працевлаштуванням</span>
      </h2>

      <p className='employment__info employment__info--diploma'>
        Ви отримуєте
        <span className='bold'> завірений диплом від Genius.Space</span>
        , це збільшить ваші шанси на
        <span className='bold'> успішне працевлаштування</span>
      </p>

      <p className='employment__info employment__info--qr'>
        Кожен диплом має
        <span className='bold'> QR код</span>
        , роботодавець може його відсканувати та переконатися у справжності диплома. А також проаналізувати вашу
        <span className='bold'> статистику навчання:</span>
        <br />
        <span className='employment__info--grey'>(скільки уроків пройдено, годин прослухано тощо)</span>
      </p>

      <p className='employment__info employment__info--access'>
        Усі студенти матимуть доступ до
        <span className='bold'> закритого курсу з працевлаштування "Genius Talents"</span>
        . Ви навчитеся продавати себе на всіх етапах відбору до топових ІТ-компаній, дізнаєтесь як правильно
        <span className='bold'> підготуватися до співбесіди </span>
        та отримати роботу мрії
      </p>
    </div>
  </section>
);
