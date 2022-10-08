import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title='Home'>
      <section className={styles.content}>
        <div className={styles.card}>
        <h1>Selamat Memperingati</h1>
        <h2>Maulid</h2>
        <h3>Nabi Muhammad SAW</h3>
        <p>| 12 Rabiul Awal 1444 Hijriah |</p>
        <p>8 Oktober 2022</p>
        <p>اَللَّهُمَّ صَلِّ عَلٰى سَيِّدِنَا مُحَمَّدٍ وَعَلٰى اٰلِ سَيِّدِنَا مُحَمَّدٍ</p>
        <q>Mari kita perbanayak Sholawat untuk Nabi Muhammad SAW agar mendapatkan Rahmat dan Barokah dari Allah SWT serta mendapatkan syafaat dari rasulullah di hari akhir kelak.</q>
        <p>Follow me <a href="https://instagram.com/fit.tra_" target="_blank">@fit.tra_</a></p>
        </div>
      </section>
    </Layout>
  );
}
