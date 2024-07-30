import Head from 'next/head'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gaming Hub</title>
        <meta name="description" content="Welcome to the Gaming Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Gaming Hub!</a>
        </h1>

        <p className={styles.description}>
          Discover the latest in gaming news, in-depth reviews, and more. Explore our site for comprehensive content tailored for gaming enthusiasts.
        </p>

        <div className={styles.grid}>
          <a href="/news" className={styles.card}>
            <h2>News &rarr;</h2>
            <p>Find the latest gaming news and updates from around the world.</p>
          </a>

          <a href="/reviews" className={styles.card}>
            <h2>Reviews &rarr;</h2>
            <p>Read detailed reviews on the newest games, with insights and ratings.</p>
          </a>

          <a href="/about" className={styles.card}>
            <h2>About Us &rarr;</h2>
            <p>Learn more about our mission and the team behind Gaming Hub.</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h2>Contact Us &rarr;</h2>
            <p>Get in touch with us for any inquiries or feedback.</p>
          </a>
        </div>
      </main>
    </div>
  )
}
