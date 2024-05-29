import './App.scss';
import { Advantages } from './components/Advantages';
import { Answers } from './components/Answers';
import { Areas } from './components/Areas';
import { Audience } from './components/Audience';
import { Customers } from './components/Customers';
import { Education } from './components/Education';
import { Employment } from './components/Employment';
import { Expectations } from './components/Expectations';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { Knowledge } from './components/Knowledge';
import { Modules } from './components/Modules';
import { Payment } from './components/Payment';
import { Programm } from './components/Programm';
import { Reservation } from './components/Reservation';
import { Result } from './components/Result';
import { Reviews } from './components/Reviews';
import { Teachers } from './components/Teachers';
import { Usage } from './components/Usage';

function App() {
  return (
    <div className='app'>
      <header className='content-wrapper'>
        <Header />
      </header>

      <main>
        <div className='app__info'>
          <div className='content-wrapper'>
            <Info />
          </div>
        </div>

        <div className='app__advantages'>
          <div className='content-wrapper'>
            <Advantages />
          </div>
        </div>

        <div className='app__knowledge'>
          <div className='content-wrapper'>
            <Knowledge />
          </div>
        </div>

        <div className='app__areas'>
          <div className='content-wrapper'>
            <Areas />
          </div>
        </div>

        <div className='app__audience'>
          <div className='content-wrapper'>
            <Audience />
          </div>
        </div>

        <div className='app__teachers'>
          <div className='content-wrapper'>
            <Teachers />
          </div>
        </div>

        <div className='app__programm'>
          <div className='content-wrapper'>
            <Programm />
          </div>
        </div>

        <div className='app__modules'>
          <div className='content-wrapper'>
            <Modules />
          </div>
        </div>

        <div className='app__expectations'>
          <div className='content-wrapper'>
            <Expectations />
          </div>
        </div>

        <div className='app__result'>
          <div className='content-wrapper'>
            <Result />
          </div>
        </div>

        <div className='app__education'>
          <div className='content-wrapper'>
            <Education />
          </div>
        </div>

        <div className='app__usage'>
          <div className='content-wrapper'>
            <Usage />
          </div>
        </div>

        <div className='app__employment'>
          <div className='content-wrapper'>
            <Employment />
          </div>
        </div>

        <div className='app__customers'>
          <div className='content-wrapper'>
            <Customers />
          </div>
        </div>

        <div className='app__payment'>
          <div className='content-wrapper'>
            <Payment />
          </div>
        </div>

        <div className='app__reservation'>
          <div className='content-wrapper'>
            <Reservation />
          </div>
        </div>

        <div className='app__reviews'>
          <div className='content-wrapper'>
            <Reviews />
          </div>
        </div>

        <div className='app__answers'>
          <div className='content-wrapper'>
            <Answers />
          </div>
        </div>
      </main>

      <div className='app__footer'>
        <div className='content-wrapper'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
