import '../styles/blocks/Result.scss';

export const Result = () => (
  <section className='result'>
    <h2 className='result__title'>Ми разом = <span className='highlighted'>100% результат</span></h2>

    <p className='result__subtitle'>
      Ми точно зробимо разом з вами <span className='highlighted'>крутий результат</span>, якщо вам близькі <span className='highlighted'>наші принципи</span>
    </p>

    <div className='result__statistic' />

    <div className='result__container'>
      <div className='result__wrapper'>
        <div className='result__percent result__percent--50'>50%</div>
        <p className='result__item'>Практика</p>
      </div>

      <div className='result__wrapper'>
        <div className='result__percent result__percent--30'>30%</div>
        <p className='result__item'>Теорія, живі воркшопи та сесії</p>
      </div>

      <div className='result__wrapper'>
        <div className='result__percent result__percent--20'>20%</div>
        <p className='result__item'>Зворотній зв’язок</p>
      </div>
    </div>
  </section>
);
