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
let expr6="$$ A= \\begin{bmatrix}  2 & 2 \\\\ 2 &  5 \\\\ \\end{bmatrix}$$";
let expr7="$$p(\\lambda)=det(A-\\lambda I)=(2-\\lambda)(5-\\lambda)-4 = \\lambda-7\\lambda+6$$";
let expr7_1 = "$A=[T]_{\\gamma}^{\\gamma} = \\Lambda = diag(\\lambda_1,\\lambda_2)$";
let expr7_2 = "$v_1=(-2,1) \\text{ y } v_2=(1,2)$";
let expr7_3 = "$\\gamma = {v1,v2}$";
let expr7_4 = "$\\gamma^* = {v1,v2}$";
let expr7_5="$$X_1=\\frac{1}{\\sqrt{5}} \\begin{bmatrix}  -2 \\\\ 1 \\\\ \\end{bmatrix}"+
" \\text{ y } X_2 =frac{1}{\\sqrt{5}} \\begin{bmatrix}  1 \\\\ 2 \\\\ \\end{bmatrix} $$";
let expr7_6 = "$$A = O \\Lambda O^T \\text{ o } \\Lambda = O^T A O$$";

let expr7_7="$$O=\\frac{1}{\\sqrt{5}} \\begin{bmatrix}  -2 & 1 \\\\ 1 & 2 \\\\ \\end{bmatrix}"+
" \\text{ y } \\Lambda =\\begin{bmatrix}  1 & 0 \\\\ 0 & 6 \\\\ \\end{bmatrix} $$";

let expr5_2="$[T]_{B}$";


let expr6_1="$T(x,y,z) = (x+y,x-1)$";
let expr6_2="$$\\begin{align*} T(1,0,0)=(1+0,1-0) &= (1,1)=1(1,0)+1(0,1) \\\\ T(0,1,0) = (0+1,0-0) &= (1,0) = 1(1,0)+0(0,1) \\\\"+
            "T(0,0,1) = (0+0,0-1) &= (0,-1) = 0(1,0)-1(0,1) \\\\ \\end{align*}$$";
let expr6_3="$$ [T]_{B,G}= \\begin{bmatrix}  1 & 1 & 0 \\\\" +
"1 &  0 & -1 \\\\ \\end{bmatrix}$$";



let expr9="$T: \\mathcal{P_2}(\\R) \\to \\R^3$";
let expr9_1="$ [T]_{B,G}= \\begin{bmatrix}  1 & 1 & 2 \\\\" +
"1 &  -1 & -0 \\\\ -1 & 1 & 2 \\\\ \\end{bmatrix}$";
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
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición:</h3>
                </div>

                <p className={`leading-relaxed `+styles.parrafo}>
                    Una matriz <Latex>{expr1}</Latex> es diagonalizable ortogonalmente si existe 
                    una matriz ortogonal <Latex>$O$</Latex> tal que <Latex>{expr2}</Latex> donde <Latex>{expr3}</Latex><br/>
                    Las unicas matrices que pueden diagonalizarse ortogonalmente son las matrices simétricas debido a que la transpuesta de su matriz es igual a la inversa.
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