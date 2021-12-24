import './App.css';
import style from './App.module.css';
import headerImage from './images/image-header-desktop.jpg';

function App() {
  return (
    <main>
      <section>
        <div className={style.card}>
          <div className={style.card__text}> 
            <h1 className={style.card__text__principal}> Get <span className={style.card__text__principal__span}>insights</span> that help your business grow.</h1>
            <p className={style.card__text__secondary}> Discover the benefits of data analytics and make better decisions regarding revenue, 
                customer experience, and overall efficiency. </p>

              <div className={style.card__text__counter}>
                <div className='card__text--counter-item'>
                  <h2> 10K+ </h2>
                  <p className={style.card__text__counter_item_descrip}> Companies </p>
                </div>
                <div className='card__text--counter-item'>
                  <h2> 314 </h2>
                  <p className={style.card__text__counter_item_descrip}> Templates </p>
                </div>
                <div className='card__text--counter-item'>
                  <h2> 12M+ </h2>
                  <p className={style.card__text__counter_item_descrip}> Queries </p>
                </div>
              </div>
          </div>

          <div className={style.card__image}>
            <img src={headerImage} alt='People smilling in a office'/>
            <div className={style.card__image_overlay}></div>
          </div>
       
        </div>
      </section>
    </main>
  );
}

export default App;
