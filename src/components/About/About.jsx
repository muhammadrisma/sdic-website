import "./About.css"
import about_img from "../../assets/about.jpg"


const About = ({setPlayerState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
        </div>
        <div className="about-right">
          <h3>Tentang SD Islamic Center</h3>
          <h2>Menjelajahi Jalur untuk Sukses Akademis dan Spiritual</h2>
          <p>Di SD Islamic Center, kami berkomitmen untuk menawarkan pengalaman pendidikan yang luar biasa yang mempersiapkan siswa untuk menghadapi tantangan dunia modern. Dengan komunitas yang beragam, berbagai program akademis, dan fasilitas unggulan, lembaga kami menyediakan lingkungan yang merangsang untuk belajar, penelitian, dan pertumbuhan pribadi.</p>
          <p>Eksplorasi kelas kami, kenali guru-guru kami, dan temukan berbagai peluang yang kami tawarkan. Bergabunglah dengan kami dan menjadi bagian dari perjalanan pendidikan yang melampaui batas-batas konvensional dengan dasar ajaran agama Islam yang kuat dan pengetahuan umum bagi anak-anak.</p>
        </div>
    </div>
  )
}

export default About