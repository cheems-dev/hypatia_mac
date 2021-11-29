// Concepto de T.L.

//For next imports
//For katex imports
import 'katex/dist/katex.min.css'
import Head from 'next/head'
import Image from 'next/image'
import Latex from 'react-latex-next'
//Own imports
import Layout from '../components/layout'
import styles from './tema09.module.css'

function latexTemplate(text) {
  return `$${text}$`
}

const tema09 = () => {
  return (
    <Layout>
      <Head>
        <title>Hypatia - Transformaciones lineales</title>
      </Head>
      <div className={styles.container}>
        <h1 className={`pb-4 ` + styles.mainTitle}>
          Descompocisión del valor singular
        </h1>
        <p className={`leading-relaxed ` + styles.parrafo}>
          Quizás el método de descomposición matricial más conocido y
          ampliamente utilizado es la descomposición de valores singulares o
          SVD. Todas las matrices tienen una SVD, lo que las hace más estables
          que otros métodos, como la descomposición propia . Como tal, a menudo
          se utiliza en una amplia gama de aplicaciones, incluida la compresión,
          eliminación de ruido y reducción de datos.
        </p>

        <div className={`flex flex-row `}>
          <Image
            src='/definition_icon.png'
            alt='Observacion'
            width={60}
            height={60}
          />
          <h3 className={`mt-4 pb-4 leading-relaxed ` + styles.defTitle}>
            Definición:
          </h3>
        </div>
        <p className={`leading-relaxed ` + styles.parrafo}>
          es un método de descomposición de matrices para reducir una matriz a
          sus partes constituyentes para simplificar ciertos cálculos de
          matrices posteriores.
        </p>
        <Latex>{latexTemplate('$A = U.\\sigma.V^{T}$')}</Latex>

        <p className={`leading-relaxed ` + styles.parrafo}>
          Donde <Latex>$A$</Latex> es la matriz <Latex>$mxn$</Latex> real que
          deseamos descomponer, <Latex>$U$</Latex> es una matriz{' '}
          <Latex>$mxn$</Latex>, <Latex>$\sigma$</Latex> (a menudo representada
          por la letra griega mayúscula Sigma) es una matriz diagonal
          <Latex>$mxn$</Latex> y <Latex>{latexTemplate('V^{T}')}</Latex> es la
          transpuesta de una matriz <Latex>$mxn$</Latex> donde{' '}
          <Latex>$T$</Latex> es un superíndice.
        </p>

        <div className={`flex flex-row `}>
          <Image
            src='/nota_icon.png'
            alt='Observacion'
            width={60}
            height={60}
          />
          <h3 className={`mt-4 pb-4 leading-relaxed ` + styles.defTitle}>
            Nota 1:
          </h3>
        </div>
        <p className={`leading-relaxed ` + styles.parrafo}>
          Los valores diagonales en la matriz <Latex>$\sigma$</Latex> se conocen
          como los valores singulares de la matriz original <Latex>$A$</Latex>.
          Las columnas de la matriz <Latex>$U$</Latex> se denominan vectores
          singulares izquierdos de <Latex>$A$</Latex>, y las columnas de{' '}
          <Latex>$V$</Latex> se denominan vectores singulares derechos de{' '}
          <Latex>$A$</Latex>.
        </p>

        <div className={`flex flex-row `}>
          <Image
            src='/nota_icon.png'
            alt='Observacion'
            width={60}
            height={60}
          />
          <h3 className={`mt-4 pb-4 leading-relaxed ` + styles.defTitle}>
            Nota 2:
          </h3>
        </div>
        <p className={`leading-relaxed ` + styles.parrafo}>
          Cada matriz rectangular tiene una descomposición de valor singular,
          aunque las matrices resultantes pueden contener números complejos y
          las limitaciones de la aritmética de punto flotante pueden hacer que
          algunas matrices no se descompongan claramente.
        </p>

        <div className={`flex flex-row `}>
          <Image
            src='/ejercicioresuelto_icon.png'
            alt='Observacion'
            width={60}
            height={60}
          />
          <h3 className={`mt-4 pb-4 leading-relaxed ` + styles.defTitle}>
            Calcular la SVD:
          </h3>
        </div>
        <p className={`leading-relaxed ` + styles.parrafo}>
          En este caso, utilizaremos librerías en Python para calcular la{' '}
          <Latex>$SVD$</Latex> de una matriz. La <Latex>$SVD$</Latex> se puede
          calcular llamando a la función <Latex>$.svd()$</Latex>. La función
          toma una matriz y devuelve los elementos <Latex>$U$</Latex>,{' '}
          <Latex>$\sigma$</Latex> y <Latex>{latexTemplate('V^{T}')}</Latex>. La
          matriz diagonal Sigma se devuelve como un vector de valores
          singulares. La matriz <Latex>$V$</Latex> se devuelve en forma
          transpuesta, por ejemplo, <Latex>$VT$</Latex>
        </p>

        <div className={`flex flex-row `}>
          <Image
            src='/code_icon.png'
            alt='Observacion'
            width={60}
            height={60}
          />
          <h3 className={`mt-4 pb-4 leading-relaxed ` + styles.defTitle}>
            SVD en Python:
          </h3>
        </div>
        <div className='container mx-auto text-center'>
          <iframe
            width='100%'
            height='500px'
            embed='true'
            src='https://replit.com/@LuisDavaria/Tema-17?embed=true'
          ></iframe>
        </div>

        <div className={`flex flex-row `}>
          <Image
            src='/geogebra_icon.png'
            alt='Observacion'
            width={60}
            height={60}
          />
          <h3 className={`mt-4 pb-4 leading-relaxed ` + styles.defTitle}>
            {' '}
            Recurso 1:
          </h3>
        </div>
        <p className={`leading-relaxed ` + styles.parrafo}>
          Este recurso fue contruido en Geogebra e ilustra el uso de SVD para
          calcular la matriz de rotación para una rotación de cuerpo rígido
        </p>
        <div className='container mx-auto m-6 rounded-md text-gray-500 text-xl'>
          <iframe
            scrolling='no'
            title='Transformaciones lineales'
            src='https://www.geogebra.org/material/iframe/id/LkQ7UiCt/width/844/height/703/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false'
            width='844px'
            height='703px'
          >
            {' '}
          </iframe>
        </div>
      </div>
    </Layout>
  )
}

export default tema09
