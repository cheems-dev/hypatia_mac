// Tema 16

//For next imports
import Head from 'next/head'
import Image from 'next/image'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema16.module.css';


//Vars, functions and consts
let expr1 = "$A \\in \\R^{n \\times n}$";
let expr2 = "$A = O \\Lambda O^T \\text{ o } \\Lambda = O^T A O$";
let expr3 = "$(O^{-1}=O^T)$";
let expr4 = "$$\\begin{align*} T: \\R^2 & \\to \\R^2  \\\\ (x,y) & \\to T(x,y)=(2x+2y,2x+5y) \\\\ \\end{align*}$$";
let expr5 = "$A=[T]_{\\beta}^{\\beta}$";
let expr6="$$ A= \\begin{pmatrix}  2 & 2 \\\\ 2 &  5 \\\\ \\end{pmatrix}$$";
let expr7="$$p(\\lambda)=det(A-\\lambda I)=(2-\\lambda)(5-\\lambda)-4 = \\lambda-7\\lambda+6$$";
let expr7_1 = "$A=[T]_{\\gamma}^{\\gamma} = \\Lambda = diag(\\lambda_1,\\lambda_2)$";
let expr7_2 = "$v_1=(-2,1) \\text{ y } v_2=(1,2)$";
let expr7_3 = "$\\gamma = {v1,v2}$";
let expr7_4 = "$\\gamma^* = {v1,v2}$";
let expr7_5="$$X_1=\\frac{1}{\\sqrt{5}} \\begin{pmatrix}  -2 \\\\ 1 \\\\ \\end{pmatrix}"+
" \\text{ y } X_2 =\\frac{1}{\\sqrt{5}} \\begin{pmatrix}  1 \\\\ 2 \\\\ \\end{pmatrix} $$";
let expr7_6 = "$$A = O \\Lambda O^T \\text{ o } \\Lambda = O^T A O$$";

let expr7_7="$$O=\\frac{1}{\\sqrt{5}} \\begin{pmatrix}  -2 & 1 \\\\ 1 & 2 \\\\ \\end{pmatrix}"+
" \\text{ y } \\Lambda =\\begin{pmatrix}  1 & 0 \\\\ 0 & 6 \\\\ \\end{pmatrix} $$";

let expr8="$T \\in \\mathscr{L}(U)$";
let expr8_1="$a_{i,j}=a_{ji},\\forall i,j$";
let expr8_2="$A \\in M_n(\\mathbb{C})$";
let expr8_3="$[T]_b=(a_{ij})_{i,j}$";
const exp9 = "$$<T(u),v> = <u,T^*(v)>, \\forall u,v \\epsilon V$$"
const exp9_1 = "$\\epsilon$"
const exp9_2 = "$\\Bbbk$"
const exp9_3 = "$\\rightarrow$"
const exp9_4 = "$(\\Bbbk=\\mathbb{R} o \\mathbb{C})$"

const exp9_5 = "$$\\begin{align*} T (1,0,0)&=(1,0,0) \\\\ T(0,1,0)&= (2,0,1)\\\\ T(0,0,1)&= (0,i,i) \\end{align*} \\rightarrow [T]_B=\\begin{pmatrix} 1&2&0 \\\\ 0& 0 & i\\\\ 0& 1 & -i \\end{pmatrix}$$"
const exp9_6 = "$$[T^]_B = [T]^T_B = \\begin{pmatrix} 1& 0 & 0 \\\\ 2& 0 & 1\\\\ 0& -i & i\\end{pmatrix} \\rightarrow T^(x,y,z)=\\begin{pmatrix} 1 & 0 & 0 \\\\ 2 & 0 & 1\\\\ 0 & -i & i\\end{pmatrix}\\begin{pmatrix} x\\\\ y\\\\ z\\end{pmatrix}$$"
const exp9_7 = "$$T^*(x,y,z) = (x,2x+z,-iy + iz)$$"

const exp9_8 = "$<T(u),v> = <u,T(v)>, \\forall u,v$"

const exp9_9 = "$\\mathbb{C}$"
const exp9_10 = "$\\mathbb{R}$"

let expr10="$\\mathbb{C}^3$";
let expr11="$B=[(1,0,0),(0,1,0),(0,0,1)]$"
const tema16 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 16</title>
            </Head>
            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">

                {/* AQUI VA SU CONTENIDO */}
                
                <h1 className={`pb-4 `+ styles.mainTitle}>Matrices simétricas Diagonalización ortogonal</h1>
                
                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Diagonalización de operadores hermitianos</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>$T$</Latex> <Latex>{exp9_1}</Latex> <Latex>$L(V)$</Latex>, donde <Latex>$V$</Latex> es un espacio vectorial sobre <Latex>{exp9_2}</Latex> <Latex>{exp9_4}</Latex> con producyo interno.
                    Diremos que <Latex>$T$</Latex> posee un adjunto si existe un operador <Latex>$T^*$</Latex> e <Latex>$L(V)$</Latex> tal que

                    <Latex>{exp9}</Latex>

                    Diremos en este caso que <Latex>$T^*$</Latex> es el adjunto de <Latex>$T$</Latex>.
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/proposicion_icon.png"
                        alt="Proposición"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Observación</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                Cuando el espacio vectorial <Latex>$V$</Latex> tiene dimensión finita, cualquier operadr <Latex>$T$</Latex> <Latex>{exp9_1}</Latex> <Latex>$L(V)$</Latex> admite adjunto <Latex>$T^*$</Latex> 
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/proposicion_icon.png"
                        alt="Proposición"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Teorema</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                Cuando el espacio vectorial <Latex>$V$</Latex> tiene dimensión finita, cualquier operadr <Latex>$T$</Latex> <Latex>{exp9_1}</Latex> <Latex>$L(V)$</Latex> admite adjunto <Latex>$T^*$</Latex> 
                <Latex>$[T^*]_B = [T]^T_B$</Latex>
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
                    Consideremos <Latex>{expr10}</Latex> con el producto interno usual y sea <Latex>$T:C^3$</Latex> <Latex>{exp9_3}</Latex> <Latex>$C^3$</Latex> dado por
                    <Latex>$$T(x,y,z) = (x+2y, iz, y-iz)$$</Latex>
                </p>
                <div className="ml-8 leading-relaxed">
                    <h4 h4 className={` `+styles.solTitle}>solución:</h4>
                    <p className={`leading-relaxed ` + styles.parrafo}>
                    Si <Latex>$B$</Latex> fuera la base canónica de <Latex>{expr10}</Latex> <Latex>{exp9_3}</Latex>

                    <Latex>{exp9_5}</Latex>

                    Como <Latex>{expr11}</Latex>B es ortonormal <Latex>{exp9_3}</Latex> 

                    <Latex>{exp9_6}</Latex>
                    <Latex>{exp9_7}</Latex>
                    </p>
                </div>

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
                Sea <Latex>$T$</Latex> <Latex>{exp9_1}</Latex> <Latex>$L(V)$</Latex>, donde <Latex>$V$</Latex> es un <Latex>{exp9_2}</Latex>-espacio vectorial con producto interno. Decimos que <Latex>$T$</Latex> es auto-adjunto si <Latex>$T$</Latex> admite adjunto <Latex>$T^$</Latex> y <Latex>$T^ = T$</Latex> (<Latex>{exp9_8}</Latex> <Latex>{exp9_1}</Latex> <Latex>$V$</Latex>)
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
                <p className={`leading-relaxed `+styles.parrafo}>
                Sea <Latex>$V$</Latex> un <Latex>{exp9_2}</Latex>-espacio vectorial con producto interno y dimensión finita, y <Latex>$T$</Latex> <Latex>{exp9_1}</Latex> <Latex>$L(V)$</Latex>. Las siguientes afirmaciones son equivalentes:
                a) <Latex>$T$</Latex> es auto-adjunto
                b) <Latex>$[T]^T_B = [T]_B$</Latex> para toda base ortonormal <Latex>$B$</Latex> de <Latex>$V$</Latex>
                c) Existe una base ortonormal <Latex>$V$</Latex> de <Latex>$V$</Latex> tal que <Latex>$[T]^T_B = [T]_B$</Latex>
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
                    Una matriz <Latex>{expr1}</Latex> es diagonalizable ortogonalmente si existe 
                    una matriz ortogonal <Latex>$O$</Latex> tal que <Latex>{expr2}</Latex> donde <Latex>{expr3}</Latex><br/>
                    Las unicas matrices que pueden diagonalizarse ortogonalmente son las matrices simétricas debido a que la transpuesta de su matriz es igual a la inversa.
                </p>
                
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
                    Sean <Latex>$V$</Latex> un espacio vectorial de dimensión finita y <Latex>$B$</Latex> una base ortonormal de <Latex>$V$</Latex>. si <Latex>{expr8_3}</Latex> entonces <Latex>{expr8}</Latex> es un
                    operador lineal auto adjunto y si <Latex>{expr8_1}</Latex>. En particular los elementos de la diagonal de <Latex>$[T]_B$</Latex> sin números reales.

                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/corolario_icon.png"
                        alt="Teorema"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Teorema:</h3>
                </div>

                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>$V$</Latex> un espacio vectorial complejo de dimensión finita con producto interno y <Latex>{expr8}</Latex> hermitiano. Entonces
                    <Latex>$T$</Latex> es un operador diagonalizable. 
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
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>{expr8_2}</Latex> una matriz hermitiana. Entonces, <Latex>$A$</Latex> es una matriz diagonalizable, es decir,
                    <Latex>$A$</Latex> es unitariamente semejante a una matriz diagonal.
                </p>

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
                    Considere el espacio vectorial real <Latex>$\R^2$</Latex> y <Latex>$T$</Latex> el operador lineal dado por
                    <Latex>{expr4}</Latex>
                    Muestra que <Latex>$T$</Latex> es un operador lineal diagonalizable.
                </p>

                <div className="ml-8 leading-relaxed">
                    <h4 h4 className={` `+styles.solTitle}>solución:</h4>
                    <p className={`leading-relaxed ` + styles.parrafo}>
                       Sea <Latex>$\beta$</Latex> una base canonica de <Latex>$\R^2$</Latex>. tenemos que una matriz <Latex>{expr5}</Latex> es dada por.
                       <Latex>{expr6}</Latex>
                       por lo tanto, el polinomio caracteristico del operador <Latex>$T$</Latex> es dado por:
                       <Latex>{expr7}</Latex>
                       así ,<Latex>$\lambda_1 = 1$</Latex> y <Latex>$\lambda_2 = 6$</Latex> son los autovalores del operador <Latex>$T$</Latex>. Como los
                       los autovalores son distintos, podemos garantizar que existe una base de autovectores <Latex>$\gamma$</Latex> para <Latex>$\R^2$</Latex> de modo que
                       la matriz <Latex>{expr7_1}</Latex>.<br/>
                       Los autovectores asociados con los autovectores <Latex>$\lambda_1$</Latex> y <Latex>$\lambda_2$</Latex> son <Latex>{expr7_2}</Latex>, respectivamente.
                       Así, tenemos que <Latex>{expr7_3}</Latex> es una base ortogonal de autovectores en el espacio vectorial <Latex>$\R^2$</Latex>. Podemos también obtener
                       una base ortonormal de autovectores <Latex>{expr7_4}</Latex> para <Latex>$\R^2$</Latex>, obetenido a partir de la base ortogonal <Latex>$\gamma$</Latex>. Sabemos que
                       <Latex>{expr7_5}</Latex>
                       Son los autovectores de la matriz <Latex>$A$</Latex> asociados a los autovalores <Latex>$\lambda_1 = 1$</Latex> y <Latex>$\lambda_2 = 6$</Latex>, respectivamente. Podemos observar
                       facilmente que <Latex>$AO=O\Lambda$</Latex>
                       <Latex>{expr7_7}</Latex>
                       de ese modo, la matriz <Latex>{expr5}</Latex> puede ser representado de la siguiente forma:
                       <Latex>{expr7_6}</Latex>
                       note que la matriz <Latex>$OO^T = O^TO = I$</Latex> y realiza la diagonalización de la matriz <Latex>{expr5}</Latex>
                    </p>
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

export default tema16;