import Head from 'next/head'
import styles from '../Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about Gaming Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Gaming Hub is dedicated to bringing you the latest and greatest in gaming. Our mission is to provide comprehensive coverage of the gaming world through insightful reviews, breaking news, and engaging content.
        </p>

        <section className={styles.storySection}>
          <h2>Our Story</h2>
          <p>
            Founded in 2024, Gaming Hub started as a small blog and quickly grew into a leading source for gaming news and reviews. Our passion for gaming drives us to deliver the best content to our audience.
          </p>
          <img src="https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Our Story" className={styles.storyImage} />
        </section>

        <section className={styles.valuesSection}>
          <h2>Our Values</h2>
          <ul className={styles.valuesList}>
            <li>Integrity: We are committed to delivering honest and unbiased content.</li>
            <li>Passion: Our love for gaming fuels our dedication to providing high-quality content.</li>
            <li>Community: We believe in fostering a strong and supportive gaming community.</li>
          </ul>
        </section>

        <section className={styles.milestonesSection}>
          <h2>Milestones</h2>
          <div className={styles.milestonesGrid}>
            <div className={styles.milestoneCard}>
              <h3>2024</h3>
              <p>Launched Gaming Hub and published our first game review.</p>
            </div>
            <div className={styles.milestoneCard}>
              <h3>2025</h3>
              <p>Reached 10,000 subscribers and expanded our content to include video reviews.</p>
            </div>
            <div className={styles.milestoneCard}>
              <h3>2026</h3>
              <p>Partnered with major gaming companies to bring exclusive content to our audience.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
