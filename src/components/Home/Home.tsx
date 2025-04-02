import React from 'react'

const Home = () => {
  {/*A komponens megírásához szükséges css osztályokat a home.css-ben találod.*/ }

  {/*A kép több másik képből tevődik össze ezeket egy tömbben találod a data mappában.*/ }

  {/*A kép hátterében egy alakzat van.*/ }

  {/*A gomb mutasson az about részre */ }
  return (
    <div className='home'>
      <h1 className='home__title'>COLD COFFEE</h1>
      <p className='home__description'>Find delicious hot and cold coffees with the
        best varieties, calm the pleasure and enjoy
        a good coffee, order now.
      </p>

      <button className='button' value={"Learn More"} />
    </div>
  )
}


export default Home
