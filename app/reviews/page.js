import Head from 'next/head'
import styles from '../Home.module.css'

const reviews = [
  {
    title: 'Elden Ring',
    imageUrl: 'https://th.bing.com/th?id=OIP.Rjn-15ym_UPBBQ787rYgFwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    description: 'Elden Ring is an exciting action-adventure game that takes you on an epic journey through fantastical worlds. The game boasts stunning graphics and fluid gameplay mechanics, making it a must-play for fans of the genre. The storyline is compelling, and the character development keeps you engaged throughout. The combat system is intuitive and rewarding, offering a perfect balance of challenge and satisfaction. Highly recommended for anyone looking for an immersive gaming experience.',
    rating: '4.5/5'
  },
  {
    title: 'GTA 6',
    imageUrl: 'https://th.bing.com/th?id=OIP.7qgbnevgiocq14APOYez_AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    description: 'GTA 6 delivers a captivating story and an immersive open-world experience. The game world is vast and filled with diverse environments, each more breathtaking than the last. Players will find themselves lost in exploration, uncovering hidden secrets and completing side quests that enrich the main storyline. The character customization options are extensive, allowing players to tailor their experience to their liking. A must-play for RPG enthusiasts.',
    rating: '4.0/5'
  },
  {
    title: 'Minecraft',
    imageUrl: 'https://th.bing.com/th?id=OIP.r99VwMgSDSzjRFcKg2QZJwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    description: 'Minecraft offers a mix of strategic gameplay and fast-paced action. While the game shines in its multiplayer modes, providing endless hours of competitive fun, the single-player campaign falls short in terms of depth and engagement. The graphics are decent, but not groundbreaking, and the sound design is immersive, adding to the overall experience. Despite its flaws, the game is worth playing for its innovative mechanics and replayability in the multiplayer modes.',
    rating: '3.0/5'
  }
]

export default function Reviews() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Game Reviews</title>
        <meta name="description" content="Read detailed game reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Game Reviews</h1>
        <p className={styles.description}>
          Explore our latest reviews on popular games. We provide detailed insights and ratings to help you choose your next game.
        </p>
        <div className={styles.reviewGrid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <img src={review.imageUrl} alt={review.title} className={styles.reviewImage} />
              <h2 className={styles.reviewTitle}>{review.title}</h2>
              <p className={styles.reviewDescription}>{review.description}</p>
              <p className={styles.reviewRating}>Rating: {review.rating}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
