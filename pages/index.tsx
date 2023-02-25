import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog da Raveenita /></title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

        <header className="rav__header">
          <div className="rav__content">
            <a className="rav__logo" href="/">
              <img width="75" src="assets/images/raveenita.png"/>
            </a>
            <h2 className="header__name" itemProp="name"> Blog da Raveenita <strong>/></strong> </h2>
          </div>
        </header>
      </Head>

      <main>
        <section className="rav__posts">
          <div className="rav__content">

            <header className="posts__header">
              <h3 className='header__title'>-> Últimos posts</h3>
            </header>

            <article className="rav__post">
                <h2 className="post__title">>_ 🚀 How travel to the moon without financing</h2>
                <time className="post__publish">-> Sun, Aug 19, 2018</time>
            </article>

            <article className="rav__post">
                <h2 className="post__title">>_ Buddhism for tired developers</h2>
                <time className="post__publish">-> Sun, Aug 19, 2018</time>
            </article>

            <article className="rav__post">
                <h2 className="post__title">>_ I'll be poor 4 ever?</h2>
                <time className="post__publish">-> Sun, Aug 19, 2018</time>
                <div className="rav__tags">
                  <span className="rav__tag">Finanças</span>
                </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="rav__footer">
         <div className="rav__content">
            <p>
              Feito com ❤️ por <a href="https://github.com/raveenita"  target="_blank"><strong>@raveenita</strong> 🏴‍☠️</a>
            </p>
         </div>
      </footer>
    </div>
  )
}

export default Home
