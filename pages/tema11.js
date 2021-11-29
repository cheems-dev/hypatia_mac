// Tema 11

//For next imports
import Head from 'next/head'
import Image from 'next/image'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema11.module.css';


//Vars, functions and consts
let expr1 = "$T:U \\to V$"
let expr2 = "$B = \\left\\{u_1, u_2, ..., u_n\\right\\}$";
let expr3 = "$G = \\left\\{v_1, v_2, ..., v_m \\right\\}$";
let expr4 = "$$ \\left\\{\\begin{matrix} T(u_1) = \\alpha_{11}v_1+ \\alpha_{12}v_2+ ...+ \\alpha_{1m}v_m \\\\ T(u_2) = \\alpha_{21}v_1+ \\alpha_{22}v_2+ ...+ \\alpha_{2m}v_m \\\\  \\vdots \\\\ T(u_n) = \\alpha_{n1}v_1 + \\alpha_{n2}v_2+...+ \\alpha_{nm}v_m \\end{matrix} \\right.$$";
let expr5 = "$$ [T]_{B,G}= \\begin{pmatrix}  \\alpha _{11} &  \\alpha _{21} & ... & \\alpha _{n1} \\\\" +
            "\\alpha _{12} &  \\alpha _{22} & ... & \\alpha _{n2} \\\\ & \\vdots \\\\ "+ 
            "\\alpha _{1m} &  \\alpha _{2m} & ... & \\alpha _{nm} \\\\ \\end{pmatrix}$$";
let expr5_1="$[T]_{B,G}$";
let expr5_2="$[T]_{B}$";

let expr6="$T: \\R^3 \\to \\R^2$";
let expr6_1="$T(x,y,z) = (x+y,x-1)$";
let expr6_2="$$\\begin{align*} T(1,0,0)=(1+0,1-0) &= (1,1)=1(1,0)+1(0,1) \\\\ T(0,1,0) = (0+1,0-0) &= (1,0) = 1(1,0)+0(0,1) \\\\"+
            "T(0,0,1) = (0+0,0-1) &= (0,-1) = 0(1,0)-1(0,1) \\\\ \\end{align*}$$";
let expr6_3="$$ [T]_{B,G}= \\begin{pmatrix}  1 & 1 & 0 \\\\" +
"1 &  0 & -1 \\\\ \\end{pmatrix}$$";

let expr7="$T: \\mathcal{P_2}(\\R) \\to \\mathcal{P_2}(\\R)$";
let expr7_1="$T(p(x)) =(x+1)p(x), \\forall p(x) \\in \\mathcal{P_2}(\\R)$";
let expr7_2="$B = \\left\\{1,(x-1),(x-1)^2\\right\\} \\text{ de } \\mathcal{P_2}(\\R) \\text{ y } "+
                "G = \\left\\{1,x,x^2,x^3\\right\\} \\text{ de } \\mathcal{P_3}(\\R)$";
let expr7_3="$$\\begin{align*} T(1) &=(x+1)1 = (x+1)=1+1x+0x^2+1x^3 \\\\ T(x-1) &= (x+1)(x-1) = (x^2-1) = -1+0x+1x^2+0x^3 \\\\"+
"T((x-1)^2) &= (x+1)(x-1)^2 = (x^3-x^2-x+1) = 1-1x-1x^2+1x^3 \\\\ \\end{align*}$$"; 
let expr7_4="$$ [T]_{B,G}= \\begin{pmatrix}  1 & -1 & 1 \\\\ 1 &  0 & -1 \\\\ 0 & 1 &- 1 \\\\ 0 & 0 & 1 \\\\ \\end{pmatrix}$$";

let expr8="$$[T]_{B,G}=0$$";

let expr9="$T: \\mathcal{P_2}(\\R) \\to \\R^3$";
let expr9_1="$ [T]_{B,G}= \\begin{pmatrix}  1 & 1 & 2 \\\\" +
"1 &  -1 & -0 \\\\ -1 & 1 & 2 \\\\ \\end{pmatrix}$";
let expr9_2="$B=\\left\\{1,1+x,1+x^2\\right\\} \\text{ y } G=\\left\\{(1,1,0),(0,1,0),(0,0,1)\\right\\}$";

let expr10="$$\\begin{align*} T(1)=1(1,1,0) + 1(0,1,0) - 1(0,0,1) &= (1,2,-1) \\\\ T(1+x)=1(1,1,0) - 1(0,1,0) + 1(0,0,1) &= (1,0,1) \\\\"+
"T(1+x^2)=2(1,1,0) + 0(0,1,0) + 2(0,0,1) &= (2,2,2) \\\\ \\end{align*}$$";
let expr10_1="$(1), (1+x) \\text{ y } (1+x^2)$";
let expr10_2="$$\\begin{align*} a+bx+cx^2 &= \\alpha (1) + \\beta (1+x) + \\gamma (1+x^2) \\\\ a+bx+cx^2 &= \\alpha + \\beta + \\gamma + \\beta (x) + \\gamma (x^2) \\\\ \\end{align*}$$";
let expr10_3="$$\\left\\{\\begin{matrix} \\alpha =a-b-c \\\\ \\beta =b \\\\ \\gamma =c \\\\ \\end{matrix}\\right.$$";
let expr10_4="$$\\begin{align*} T(a+bx+cx^2) &= \\alpha T(1) + \\beta T(1+x) + \\gamma T(1+x^2) \\\\ T(a+bx+cx^2) &= (a-b-c)T(1)+bT(1+x)+cT(x^2) \\\\" +
"T(a+bx+cx^2) &= (a-b-c)(1,2,-1)+b(1,0,1)+c(2,2,2) \\\\ \\end{align*}$$";
let expr10_5="$$T(a+bx+cx^2) = (a+c,2a-2b,2b+3c-a)$$";

let expr11="$T^{-1}$";
let expr11_1="$$[T^{-1}]_{B,G}=[T]_{B,G}^{-1}$$";
let expr11_2 = "$S:V \\to W$"
let expr11_3="$$[T \\circ S]_{B,C}=[S]_{G,C} [T]_{B,G}$$";

const tema11 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 11</title>
            </Head>
            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">

                {/* AQUI VA SU CONTENIDO */}
                <h1 className={`pb-4 `+ styles.mainTitle}>Matriz de una Transformación Lineal</h1>
                
                <div className={`flex flex-row `}>
                    <Image 
                        src="/nota_icon.png"
                        alt="Introduction"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Introducción:</h3>
                </div>

                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>$U$</Latex> y <Latex>$V$</Latex> espacios vectoriales sobre <Latex>$\Bbbk$</Latex> y su transformación lineal <Latex>{expr1}</Latex>.<br />
                    Además <Latex>{expr2}</Latex> es una base de <Latex>$U$</Latex> con dimensión <Latex>$n$</Latex> y <Latex>{expr3}</Latex> es una base de <Latex>$V$</Latex> con dimensión <Latex>$m$</Latex>.<br />
                    Calculamos la transformación en relación a las bases <Latex>$B$</Latex> y <Latex>$G$</Latex>.<br />
                    <Latex>{expr4}</Latex>
                    Con estas combinaciones podemos encontrar la matriz de la transformación lineal<br />
                    Cuyo resultado es el siguiente:<br />
                    <Latex>{expr5}</Latex>
                    La dimensión de la matriz <Latex>{expr5_1}</Latex> es <Latex>$m \times n$</Latex>
                </p>
                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición:</h3>
                </div>

                <p className={`leading-relaxed `+styles.parrafo}>
                    Una matriz se llama matriz de la transformación lineal <Latex>$T$</Latex> con 
                    relación a las bases <Latex>$B$</Latex> y <Latex>$G$</Latex> y se le denota por <Latex>{expr5_1}</Latex> En 
                    el caso donde  <Latex>$U=V$</Latex> y <Latex>$B=G$</Latex> se usa la notación <Latex>{expr5_2}</Latex>
                </p>
                
                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 1:</h3>
                </div>
                
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Encuentre la matriz de <Latex>{expr6}</Latex> dada por <Latex>{expr6_1}</Latex> con respecto a las bases 
                    canónicas de <Latex>$\R^3$</Latex> y <Latex>$\R^2$</Latex>.
                </p>

                <div className="ml-8 leading-relaxed">
                    <h4 h4 className={` `+styles.solTitle}>solución:</h4>
                    <p className={`leading-relaxed ` + styles.parrafo}>
                        Operamos en la base canonica de <Latex>$\R^3$</Latex>:
                        <Latex>{expr6_2}</Latex>
                        Tenemos:
                        <Latex>{expr6_3}</Latex>
                    </p>
                </div>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 2:</h3>
                </div>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Sea <Latex>{expr7}</Latex> una transformación lineal, dada por:<br />
                    <Latex>{expr7_1}</Latex>. Determine la matriz de <Latex>$T$</Latex> con relación a las bases <Latex>{expr7_2}</Latex> 
                </p>

                <div className="ml-8 leading-relaxed">
                    <h4 h4 className={` `+styles.solTitle}>solución:</h4>
                    <p className={`leading-relaxed ` + styles.parrafo}>
                        Pasamos las imágenes del elemento de la base <Latex>$B$</Latex>, mediante la transformación lineal <Latex>$T$</Latex>.
                        A partir de las combinaciones lineales de los elementos de la base <Latex>$G$</Latex>.<br />
                        <Latex>{expr7_3}</Latex>
                        Tenemos como resultado:
                        <Latex>{expr7_4}</Latex>

                    </p>
                </div>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 3:</h3>
                </div>

                <p className={`leading-relaxed ` + styles.parrafo}>
                    Determine la transformación lineal <Latex>{expr9}</Latex>, tal que<Latex>{expr9_1}</Latex>, donde <Latex>$B$</Latex> y <Latex>$G$</Latex> son 
                    las bases<br /> <Latex>{expr9_2}</Latex>.
                </p>

                <div className="ml-8 leading-relaxed">
                    <h4 h4 className={` `+styles.solTitle}>solución:</h4>
                    <p className={`leading-relaxed ` + styles.parrafo}>
                        Hallar <Latex>$T$</Latex>:
                        <Latex>{expr10}</Latex>
                        Expresamos un polinomio arbitrario <Latex>$a+bx+cx^2$</Latex> y <Latex>$\R^3$</Latex> como una combinacion lineal
                        de <Latex>{expr10_1}</Latex>
                        <Latex>{expr10_2}</Latex>
                        Tenemos:
                        <Latex>{expr10_3}</Latex>
                        Reemplazamos:
                        <Latex>{expr10_4}</Latex>
                        Resultado:
                        <Latex>{expr10_5}</Latex>
                    </p>
                </div>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/corolario_icon.png"
                        alt="Corolario"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Corolario:</h3>
                </div>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Sean <Latex>$U$</Latex> y <Latex>$V$</Latex> espacios vectoriales de dimensión finita con las bases <Latex>$B$</Latex> y <Latex>$G$</Latex> respectivamente.
                    Si el conjunto de todas las transformaciones lineales de <Latex>{expr1}</Latex> son de transformación nula entonces: 
                    <Latex>{expr8}</Latex>
                </p>
                <div className={`flex flex-row `}>
                    <Image 
                        src="/proposicion_icon.png"
                        alt="Proposición"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Proposición:</h3>
                </div>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Sean <Latex>$U$</Latex> y <Latex>$V$</Latex> espacios vectoriales de dimensión finita con las bases <Latex>$B$</Latex> y <Latex>$G$</Latex> respectivamente.
                    Si <Latex>$T$</Latex> pertenece al conjunto de todas las transformaciones lineales de <Latex>{expr1}</Latex> tiene una inversa <Latex>{expr11}</Latex> entonces:
                    <Latex>{expr11_1}</Latex>
                </p>
                <div className={`flex flex-row `}>
                    <Image 
                        src="/proposicion_icon.png"
                        alt="Proposición"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Proposición:</h3>
                </div>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Sean <Latex>$U$</Latex>, <Latex>$V$</Latex> y <Latex>$W$</Latex> espacios vectoriales de dimensión finita con las bases <Latex>$B$</Latex>, <Latex>$G$</Latex> y <Latex>$C$</Latex> respectivamente.
                    Si <Latex>$T$</Latex> pertenece al conjunto de todas las transformaciones lineales de <Latex>{expr1}</Latex> y <Latex>$S$</Latex> pertenece al conjunto de todas las transformaciones 
                    lineales de <Latex>{expr11_2}</Latex>, entonces:
                    <Latex>{expr11_3}</Latex> 
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/recurso_icon.png"
                        alt="Recursos académicos"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Recurso geogebra:</h3>
                </div>

                <div className="container mx-auto m-6 rounded-md text-gray-500">
                <p className={`leading-relaxed ` + styles.parrafo}>
                    En la siguiente hoja dinámica en geogebra se exhibirá la matriz de una transformación lienal representada en una imágen, donde se puede modificar los valores de entrada y salida.
                </p>
                    <iframe scrolling="no" title="TL" src="https://www.geogebra.org/material/iframe/id/czbyp7nt/width/1890/height/880/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="1040pxpx" height="500px"> </iframe>
                </div>
                <div className={`flex flex-row `}>
                    <Image 
                        src="/biblio_icon.png"
                        alt="Bibliografía"
                        width={60}
                        height={60}
                    />
                    <h2 className={`mt-4 ` + styles.submainTitle}>Bibliografía: </h2>
                </div>

                <ul className={`ml-8 pb-8 ` + styles.biblio}>
                    <li>
                        [1] Coelho, F. U. (2001). Curso de Álgebra Linear, Um Vol. 34. Edusp.
                    </li>
                    <li>
                        [2] Ladeira, A. C. (2010). Introdução a Álgebra Linear e Equações Diferenciais. São Carlos - SP
                    </li>
                    <li className="mb-4">
                        [3] Zani, S. L. (n.d.). Álgebra Linear. ICMC - USP.
                    </li>
                </ul>
            </div>
            

        </Layout>        
    );
}

export default tema11;