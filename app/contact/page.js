import Head from 'next/head'
import styles from '../Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with Gaming Hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
          We value your feedback and inquiries. Please use the form below to get in touch with us.
        </p>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  )
}
