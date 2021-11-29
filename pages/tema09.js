// Concepto de T.L.

//For next imports
import Head from 'next/head'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema09.module.css';


let defk = "$\\mathbb{K}$"

let defTL = "Las transformaciones lineales son las funciones con las que trabajaremos en Algebra Lineal Se trata de funciones entre K-espacios vectoriales que son compatibles con la estructura (es decir, con la operación y la acción) de estos espacios"
let def1 = "$\\mathbb{K} \\left ( \\mathbb{K} = \\mathbb{R} \\ o \\ \\mathbb{C} \\right )$"
let def2 = "$$ i. \\ T(u_1+u_2) = T_{\\left ( u_1 \\right )} + T_{\\left ( u_2 \\right )}; \\forall u_{11} u_{2} \\in U$$"
let def3 = "$$ ii. \\ T\\left ( \\lambda u \\right ) = \\lambda T\\left ( u \\right ); \\forall \\lambda \\in \\mathbb{K} \\ y \\ \\forall u \\in U $$"
let def4 = "$f \\left ( 0_v \\right ) = f \\left ( 0_v + 0_v \\right) = f\\left ( 0_v \\right ) + f \\left ( 0_v \\right)$"
let def5 = "$0_w = f \\left ( 0_v \\right) + \\left ( f \\left (0_v \\right ) + \\left ( -f \\left ( 0_v \\right ) \\right ) \\right ) = f \\left (0_v \\right ) + 0_w = f \\left (0_v \\right )$"
let def6 = "$T\\left ( \\sum_{i = 1}^{n} \\alpha_i u_i\\right ) = \\sum_{i = 1}^{n} \\ \\alpha_i T \\left (u_i \\right ) ; \\ donde \\ \\alpha_i \\in \\mathbb{K} y u_i \\in U \\  para \\ i = 1 ... n$"
let def7 = "$C \\left ( \\left [ a, b \\right ], \\mathbb{R} \\right )$"
let def8 = "$f : \\left [ a, b \\right ] \\rightarrow \\mathbb{R}$"
let def9 = "$T : C \\left ( \\left [ a, b \\right ], \\mathbb{R} \\right ) \\rightarrow \\mathbb{R} f \\rightarrow T \\left (f \\right ) = \\int_{a}^{b} f \\left ( x \\right ) dx $"

let def10 = "$$T \\left ( f + g \\right ) = \\int_{a}^{b} \\left ( f + g \\right )\\left ( x \\right ) dx$$"
let def11 = "$$T \\left ( f + g \\right ) = \\int_{a}^{b} \\left ( f\\left ( x \\right ) + g\\left ( x \\right ) \\right ) dx$$"
let def12 = "$$T \\left ( f + g \\right ) = \\int_{a}^{b} f \\left ( x \\right ) dx + \\int_{a}^{b} g \\left ( x \\right ) dx $$"
let def13 = "$$\\therefore T \\left ( f + g \\right ) = T \\left ( f \\right ) + T \\left ( g \\right )$$"
let def14 = "$$T \\left ( \\lambda f  \\right ) = \\int_{a}^{b} \\left ( \\lambda f \\right ) \\left ( x \\right ) dx = \\int_{a}^{b} \\lambda f \\left ( x \\right ) dx = \\lambda \\int_{a}^{b} f \\left ( x \\right ) dx = \\lambda T \\left ( f \\right )$$"
let def15 = "$$\\forall \\lambda \\in \\mathbb{R}, \\forall f \\in C \\left ( \\left [ a, b \\right ], \\mathbb{R} \\right )$$"
let def16 = "$F:P_2 \\left ( \\mathbb{R} \\right )$"
let def17 = "$F \\left ( p\\left ( t \\right ) \\right ) = t^{2} p^{''}\\left ( t \\right )$"
let def18 = "$$F\\left ( \\left ( p+q \\right ) \\left( t \\right ) \\right ) = t^{2}\\left ( p+q \\right )^{''} \\left ( t \\right ) = t^{2}\\left ( p^{''} \\left ( t \\right ) + q^{''}\\left ( t \\right ) \\right ) = t^{2} p^{''}\\left ( t \\right ) + t^{2}q^{''}\\left ( t \\right )$$"
let def19 = "$$F\\left ( \\left ( p+q \\right ) \\left( t \\right ) \\right ) = F\\left ( p\\left ( t \\right )\\right ) + F\\left ( q\\left ( t \\right ) \\right )$$"
let def20 = "$$\\rightarrow \\forall p, q \\in P_2\\left ( \\mathbb{R} \\right ) $$"
let def21 = "$$F\\left ( \\left ( \\lambda p \\right )\\left ( t \\right ) \\right ) = t^{2}\\left ( \\lambda p \\right )^{''} = t^{2}.\\lambda p^{''}\\left ( t \\right ) = \\lambda \\left ( t^{2}.p^{''}\\left ( t \\right ) \\right ) = \\lambda F\\left ( p\\left ( t \\right ) \\right )$$"
let def22 = "$$\\forall \\lambda \\in \\mathbb{R}, \\forall p \\in P_2\\left ( \\mathbb{R} \\right )$$"


const tema09 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Transformaciones lineales</title>
            </Head>

            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">
            
            <h1 className={`pb-4 `+ styles.mainTitle}>Transformaciones lineales</h1>
                <p className={`leading-relaxed `+styles.parrafo}>{defTL}</p>    
            
            <h3 className={`pb-4 `+ styles.defTitle}>Definición:</h3>
                <ul className={`leading-relaxed ml-6 ` + styles.parrafo}>
                    <li><span className="italic"> </span> <Latex>Sean $U$ y $V$ espacios vectoriales sobre un cuerpo</Latex> <Latex>{def1}</Latex>. Una Función <Latex>$T:U \rightarrow V$</Latex> Es una transformación lineal si :</li>
                    <li><span className="italic"> </span><Latex>{def2}</Latex></li>
                    <li><span className="italic"> </span><Latex>{def3}</Latex></li>
                </ul>
            
            <h3 className={`pb-4 `+ styles.defTitle}>Observación:</h3>
                <ul className={`leading-relaxed ml-6 ` + styles.parrafo}>
                <li><span className="italic"> i. </span> <Latex> La función $T : U \rightarrow V $ es una transformación lineal $\Leftrightarrow T \left ( u_1 + \lambda u_2 \right) = T \left ( u_1 \right) + \lambda T \left ( u_2 \right) ; \forall u_1 , u_2 \in U, \forall \lambda  \in$</Latex> <Latex>{defk}</Latex> </li>
                    <li><span className="italic"> ii.</span> <Latex> $T \left ( 0_u \right) = 0_v$, donde $0_u$ vector nulo en $U$ y $0_v$ es el vector nulo en $V$.</Latex> </li>
                    <li><span className="italic"> iii.  </span> <Latex> $T \left ( -u \right) = -T \left ( u \right) ; \forall u \in U.$ </Latex> </li>
                    <li><span className="italic"> iiii.  </span> <Latex>{def6}</Latex> </li>
                </ul>

                <h3 className={`pb-4 leading-relaxed `+ styles.defTitle}>Ejemplos:</h3>
                <ul>
                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">1. </span> <Latex>$U y V$ son espacios vectoriales sobre $K$</Latex>
                        </p>

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            la funcion nula <Latex>$T : U \rightarrow V$ entonces $u \rightarrow T \left ( u \right) = 0 ; \forall u \in U$  Es una transformación lineal</Latex>
                        </p>
                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            la funcion nula <Latex>La función identidad $Id : U \rightarrow U$ por consiguiente $u \rightarrow Id \left ( u \right) ; \forall u \in U$</Latex>
                        </p>
                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            <Latex>$\therefore$ Es una transformación lineal</Latex>
                        </p>
                    </li>
                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">2. </span> Sea <Latex>{def7}</Latex> <Latex>El espacio vectorial real formado por las funciones continuas </Latex> <Latex>{def8}</Latex> La función:
                        </p> 

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            Tenemos <Latex>{def9}</Latex>
                        </p>

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            Es una transformación lineal en efecto.
                        </p>
                            <ul className={`leading-relaxed ml-6 ` + styles.parrafo}>
                                <li><span className="italic"> </span> <Latex>{def10}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def11}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def12}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def13}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def14}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def15}</Latex> </li>
                            </ul>
                    </li>

                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">3. </span> Sea <Latex>{def16}</Latex> definida por <Latex>{def17}</Latex> ¿Es una transformación lineal?
                        </p>

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            1. Tenemos <Latex>{def18}</Latex> <Latex>{def19}</Latex> <Latex>{def20}</Latex>
                        </p>
                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            2. Después <Latex>{def21}</Latex> <Latex>{def22}</Latex>
                        </p>
                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            <Latex>$\therefore$</Latex>  Es una transformación lineal en efecto.
                        </p>
                    </li>
                </ul>


            </div>
        
        </Layout>        
    );
}

export default tema09;