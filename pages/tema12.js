//Tema 12: isomofismo

//For next imports
import Head from 'next/head'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema12.module.css'


//Vars, functions and consts
let expr2 = "$\\mathbb{K}$"
let expr3 = "$$dim_{\\mathbb{K}} U = dim_{\\mathbb{K}} V $$"
let expr4 = "$T: M_2(\\mathbb{R}) \\rightarrow \\mathbb{R}^4$"
let expr5 = "$$ T \\begin{pmatrix} a & b\\\\ c & d \\end{pmatrix} = (a , b, c, d)$$"
let expr6 = "$M_2(\\mathbb{R}) \\cong \\mathbb{R}^4$"

const tema12 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 12</title>
            </Head>
            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl">

                {/* AQUI VA SU CONTENIDO */}
                <h1 className={`pb-4 `+ styles.mainTitle}>Isomorfismos</h1>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Como se ha visto en capítulos anteriores las transformaciones lineales son funciones que operan en dos espaciones vectoriales. En este capítulo estudiaremos las trasformaciones lineales biyectivas para analizar qué condiciones deben cumplir para ser identificados.
                </p>

                <h3 className={`pb-4 `+ styles.defTitle}>Definición:</h3>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    <Latex>Sean $U$ y $V$ dos espacios vectoriales sobre</Latex> <Latex>{expr2}</Latex>
                </p>
                <ul className={`leading-relaxed ml-6 ` + styles.parrafo}>
                    <li><span className="italic">i. </span>Sea <Latex>$T: U \rightarrow V$</Latex> una transformación lineal. Si <Latex>$T$</Latex> es biyectiva (inyectiva y sobreyectiva) entonces decimos <Latex>$T$</Latex> es un isomorfismo.</li>

                    <li><span className="italic">ii. </span>Si existe un isomorfismo <Latex>$T: U \rightarrow V$</Latex> , entonces diremos que <Latex>$U$ y $V$</Latex> son espacios vectoriales isomorfos y denotaremos <Latex>$U \cong V$</Latex>.</li>
                </ul>

                <h3 className={`pb-4 leading-relaxed `+ styles.defTitle}>Observación:</h3>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sean <Latex>$U$</Latex> y <Latex>$V$</Latex> dos espacios vectoriales sobre <Latex>{expr2}</Latex>. Si <Latex>$U$</Latex> y <Latex>$V$</Latex> son espacios vectoriales isomorfos entonces:
                    
                    <Latex>{expr3}</Latex>

                </p>

                <h3 className={`pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 1:</h3>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Consideremos <Latex>{expr4}</Latex> la transformación lineal definiida por:

                    <Latex>{expr5}</Latex>
                    
                    La cual es inyectiva y sobreyectiva. En efecto:
                </p>

                <ul>
                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">1. </span> T es inyectiva:
                        </p>
                    </li>
                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">2. </span> T es sobreyectiva por la forma en la que está definida.
                        </p>
                    </li>
                </ul>

                <p className={`leading-relaxed ` + styles.parrafo}>
                    De <Latex>$(i)$ y $(ii)$ se tiene que $T$ es un isomorfismo</Latex>. Así <Latex>{expr6}</Latex> 
                </p>

            </div>
        </Layout>        
    );
}

export default tema12;