// Tema 11

//For next imports
import Head from 'next/head'

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
let expr4 = "$$ \\left\\{\\begin{matrix} T(u_1) = \\alpha_{11}v_1+ \\alpha_{21}v_2+ ...+ \\alpha_{m1}v_m \\\\ T(u_2) = \\alpha_{12}v_1+ \\alpha_{22}v_2+ ...+ \\alpha_{m2}v_m \\\\  \\vdots \\\\ T(u_n) = \\alpha_{1n}v_1 + \\alpha_{2n}v_2+...+ \\alpha_{mn}v_m \\end{matrix} \\right.$$";
let expr5 = "$$ [T]_{B,G}= \\begin{bmatrix}  \\alpha _{11} &  \\alpha _{21} & ... & \\alpha _{m1} \\\\" +
            "\\alpha _{12} &  \\alpha _{22} & ... & \\alpha _{m2} \\\\ & \\vdots \\\\ "+ 
            "\\alpha _{1n} &  \\alpha _{2n} & ... & \\alpha _{mn} \\\\ \\end{bmatrix}$$";
let expr5_1="$[T]_{B,G}$";
let expr5_2="$[T]_{B}$";

let expr6="$T: \\R^3 \\to \\R^2$";
let expr6_1="$T(x,y,z) = (x+y,x-1)$";
let expr6_2="$$\\begin{align*} T(1,0,0)=(1+0,1-0) &= (1,1)=1(1,0)+1(0,1) \\\\ T(0,1,0) = (0+1,0-0) &= (1,0) = 1(1,0)+0(0,1) \\\\"+
            "T(0,0,1) = (0+0,0-1) &= (0,-1) = 0(1,0)-1(0,1) \\\\ \\end{align*}$$";
let expr6_3="$$ [T]_{B,G}= \\begin{bmatrix}  1 & 1 & 0 \\\\" +
"1 &  0 & -1 \\\\ \\end{bmatrix}$$";

let expr7="$F: \\mathcal{P_2}(\\R) \\to \\mathcal{P_2}(\\R)$";
let expr7_1="$F(p(x)) =(x+1)p(x), \\forall p(x) \\in \\mathcal{P_2}(\\R)$";
let expr7_2="$B = \\left\\{1,(x-1),(x-1)^2\\right\\} \\text{ de } \\mathcal{P_2}(\\R) \\text{ y } "+
                "G = \\left\\{1,x,x^2,x^3\\right\\} \\text{ de } \\mathcal{P_3}(\\R)$";
let expr7_3="$$\\begin{align*} F(1) &=(x+1)1 = (x+1)=1+1x+0x^2+1x^3 \\\\ F(x-1) &= (x+1)(x-1) = (x^2-1) = -1+0x+1x^2+0x^3 \\\\"+
"F((x-1)^2) &= (x+1)(x-1)^2 = (x^3-x^2-x+1) = 1-1x-1x^2+1x^3 \\\\ \\end{align*}$$"; 

let expr7_4="$$ [F]_{B,G}= \\begin{bmatrix}  1 & -1 & 1 \\\\ 1 &  0 & -1 \\\\ 0 & 1 &- 1 \\\\ 0 & 0 & 1 \\\\ \\end{bmatrix}$$";

let expr8="$F: U \\to V \\text{ y } T: V \\to W$";
let expr8_1="$$G[T \\circ F]_{B,C} = [T]_{G,C} \\cdot [F]_{B,G}$$";
const tema11 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 11</title>
            </Head>
            <div className="container mx-auto m-6 rounded-md shadow-xl">

                {/* AQUI VA SU CONTENIDO */}
                <h1 className={styles.maintittle}>Matriz de una Transformación Lineal</h1>
                <p className={styles.parra}>
                    Sea <Latex>$U$</Latex> y <Latex>$V$</Latex> espacios vectoriales sobre <Latex>$\Bbbk$</Latex> y su transformación lineal <Latex>{expr1}</Latex>.<br />
                    Además <Latex>{expr2}</Latex> es una base de <Latex>$U$</Latex> con dimensión <Latex>$n$</Latex> y <Latex>{expr3}</Latex> es una base de <Latex>$V$</Latex> con dimensión <Latex>$m$</Latex>.<br />
                    Calculamos la transformación en relación a las bases <Latex>$B$</Latex> y <Latex>$G$</Latex>.<br />
                    <Latex>{expr4}</Latex>
                    Con estas combinaciones podemos encontrar la matriz de la transformación lineal<br />
                    Cuyo resultado es el siguiente:<br />
                    <Latex>{expr5}</Latex>
                    La dimensión de la matriz <Latex>{expr5_1}</Latex> es <Latex>$m \times n$</Latex>
                </p>

                <h3 className={styles.subtittle}>Definición:</h3>
                <p className={styles.parra}>
                    Una matriz se llama matriz de la transformación lineal <Latex>$T$</Latex> con 
                    relación a las bases <Latex>$B$</Latex> y <Latex>$G$</Latex> y se le denota por <Latex>{expr5_1}</Latex> En 
                    el caso donde  <Latex>$U=V$</Latex> y <Latex>$B=G$</Latex> se usa la notación <Latex>{expr5_2}</Latex>
                </p>
                

                <h3 className={styles.subtittle}>Ejemplo 1:</h3>
                <p className={styles.parra}>
                    Encuentre la matriz de <Latex>{expr6}</Latex> dada por <Latex>{expr6_1}</Latex> con respecto a las bases 
                    canónicas de <Latex>$\R^3$</Latex> y <Latex>$\R^2$</Latex>.
                </p>
                <h4 className={styles.tittleRes}>resolución:</h4>
                <p className={styles.solu}>
                    Operamos en la base canonica de <Latex>$\R^3$</Latex>:
                    <Latex>{expr6_2}</Latex>
                    Tenemos:
                    <Latex>{expr6_3}</Latex>
                </p>


                <h3 className={styles.subtittle}>Ejemplo 2:</h3>
                <p className={styles.parra}>
                    Sea <Latex>{expr7}</Latex> una transformación lineal, dada por:<br />
                    <Latex>{expr7_1}</Latex>. Determine la matriz de F con relación a las bases <Latex>{expr7_2}</Latex> 
                </p>
                <h4 className={styles.tittleRes}>resolución:</h4>
                <p className={styles.solu}>
                    Pasamos las imágenes del elemento de la base <Latex>$B$</Latex>, mediante la transformación lineal <Latex>$F$</Latex>.
                    A partir de las combinaciones lineales de los elementos de la base <Latex>$G$</Latex>.<br />
                    <Latex>{expr7_3}</Latex>
                    Tenemos como resultado:
                    <Latex>{expr7_4}</Latex>

                </p>

                <h3 className={styles.subtittle}>Teorema:</h3>
                <p className={styles.parra}>
                    Sea <Latex>{expr8}</Latex> dos transformaciones lineales donde <Latex>$U$</Latex>,<Latex>$V$</Latex> y <Latex>$W$</Latex> son
                    espacios vectoriales de dimensiones <Latex>$n$</Latex>,<Latex>$m$</Latex> y <Latex>$r$</Latex> respectivamente.<br />
                    Tenemos las bases <Latex>$B$</Latex>, <Latex>$G$</Latex> y <Latex>$C$</Latex> para <Latex>$U$</Latex>,<Latex>$V$</Latex> y <Latex>$W$</Latex> respectivamente,
                    entonces:<br />
                    <Latex>{expr8_1}</Latex>
                </p>

                <h3 className={styles.subtittle}>Recurso:</h3>
                <p className={styles.parra}>
                    En la siguiente hoja dinámica en geogebra se presentará una representación de la matriz de una transformación lienal.
                </p>
            </div>
            <div className="container mx-auto m-6 rounded-md text-gray-500 text-xl"> 
                <iframe scrolling="no" title="Matrices asociadas a transformaciones lineales" src="https://www.geogebra.org/material/iframe/id/HTFCds6c/width/1341/height/523/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="1341px" height="816px"> </iframe>
            </div>

        </Layout>        
    );
}

export default tema11;