import "./Programs.css"
import program_1  from "/assets/program-1.jpg"
import program_2  from "/assets/program-2.jpg"
import program_3  from "/assets/program-3.jpg"
import program_icon_1 from "/assets/program-icon-1.png"
import program_icon_2 from "/assets/program-icon-2.png"
import program_icon_3 from "/assets/program-icon-3.png"
const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p><b>Mengaji</b></p>
                <p><center> Siswa diberikan pembelajaran untuk mengaji dan menghafal Juz 30 dari Al-Qur'an.</center></p>

            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p><b>Sholat</b></p>
                <p><center>Siswa didorong untuk rutin melaksanakan sholat wajib dan sunnah.</center></p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p><b>Akademik</b></p>
                <p><center>Siswa mempelajari materi pelajaran melalui pendekatan teoritis dan praktis.</center></p>
            </div>
        </div>
    </div>
  )
}

export default Programs