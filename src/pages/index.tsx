import Head  from 'next/head'
import styles from '../styles/Home.module.css'
import myVideo from'../assets/video/phdBG.mp4'
import SideContent from '../components/sidecontent/sidecontent'

const vid = [styles.myVideo, styles.myVideoo]

console.log(vid.join(' '))
export default function Home() {
  return (
    <>   
      <Head>
        <title>PHD Representações</title>
      </Head>
      <div>
        <div className={styles.overley}>
          <video
             autoPlay
             muted
             loop
             playsInline
             className={styles.myVideo}
          >
            <source src={myVideo} type="video/mp4"/>
          </video>
        </div>
        <SideContent />
        
      </div>
    </>
  )
}
