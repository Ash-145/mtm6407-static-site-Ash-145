import Head from 'next/head'
import styles from '../Home.module.css'

const newsArticles = [
  {
    title: 'Breaking News: Major Game Release Announced!',
    imageUrl: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
    excerpt: 'A highly anticipated game has just been announced. Read on to find out more about this exciting development.',
    link: '#'
  },
  {
    title: 'New Update for Popular Game Released',
    imageUrl: 'https://images.pexels.com/photos/2728255/pexels-photo-2728255.jpeg?auto=compress&cs=tinysrgb&w=600',
    excerpt: 'The popular game has received a significant update with new features and improvements.',
    link: '#'
  },
  {
    title: 'Top 10 Games to Look Forward to This Year',
    imageUrl: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=600',
    excerpt: 'We’ve compiled a list of the top 10 upcoming games that you should be excited about.',
    link: '#'
  }
]

export default function News() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gaming News</title>
        <meta name="description" content="Stay updated with the latest gaming news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gaming News</h1>
        <p className={styles.description}>
          Stay updated with the latest news in the gaming world. We bring you the most important updates and articles.
        </p>
        <div className={styles.newsGrid}>
          {newsArticles.map((article, index) => (
            <a key={index} href={article.link} className={styles.newsCard}>
              <img src={article.imageUrl} alt={article.title} className={styles.newsImage} />
              <h2 className={styles.newsTitle}>{article.title}</h2>
              <p className={styles.newsExcerpt}>{article.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
