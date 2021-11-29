import Head from 'next/head'
import Image from 'next/image'
import hypatiaImg from '../public/hypatia.png'
import profileImg from '../public/template.jpg'
import Layout from '../components/layout'
import styles from './Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hypatia /Home</title>
      </Head>
      <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">
        <div className="container mx-auto text-center">
          <Image
            src={hypatiaImg}
            width={300}
            height={300}
            className={``}
          />
        </div>

        <h1 className={`leading-relaxed text-center `+styles.aboutTitle}>Sobre Hypatia</h1>

        <p className={`leading-loose text-justify `+styles.parrafo}>
          <b className={styles.spanContent}>Hypatia</b> es un proyecto de desarrollo web que propone una plataforma educativa informativa sobre el contenido temático del curso de <b className={styles.spanContent}>Matemática Aplicada a la Computación</b> del Plan Curricular de la Carrera de Ciencia de la Computación en la Universidad Nacional de San Aagustín de Arequipa.
        </p>

        <h1 className={`leading-relaxed text-center `+styles.aboutTitle}>Sobre los contribuidores</h1>

        <div className="container grid grid-cols-2 text-center">
          <div className="col-start-1 col-span-1 flex flex-col">
            <div className={`mb-10 block `+styles.profileImg}>
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="rounded-full"
              />

              <p>Joel Cristian Perca Quispe</p>
              <p>@reqhiem</p>
              <p>jperca@unsa.edu.pe</p>

            </div>
            <div className={`mb-10 block `+styles.profileImg}>
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="rounded-full"
              />

              <p>Luis Alberto CCalluchi Lopez</p>
              <p>@cheems-dev</p>
              <p>lcalluchi@unsa.edu.pe</p>

            </div>

            <div className={`mb-10 block `+styles.profileImg}>
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="rounded-full"
              />

              <p>Luis Angel Moroco Ramos</p>
              <p>@LuisMorocco</p>
              <p>lmorocco@unsa.edu.pe</p>

            </div>
          </div>
          <div className="col-start-2 col-span-1">
          <div className={`mb-10 `+styles.profileImg}>
            <Image
              src={profileImg}
              width={100}
              height={100}
              className="rounded-full"
            />

            <p>Elizabeth Yasmin Huanca Parqui</p>
            <p>@ElizabethYasmin</p>
            <p>ehuancap@unsa.edu.pe</p>

          </div>
          <div className={styles.profileImg}>
            <Image
              src={profileImg}
              width={100}
              height={100}
              className="rounded-full"
            />

            <p>Angela Solage Sucso Choque</p>
            <p>@AngelaSucso</p>
            <p>asucso@unsa.edu.pe</p>

          </div>
            <div className={`mb-10 block `+styles.profileImg}>
              <Image
                src={profileImg}
                width={100}
                height={100}
                className="rounded-full"
              />

              <p>Imanol Brayan Moscoso Apaza</p>
              <p>@ImaMos01</p>
              <p>imoscosoa@unsa.edu.pe</p>

            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
