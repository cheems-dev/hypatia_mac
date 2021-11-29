//Tema 12: isomofismo

//For next imports
import Head from 'next/head'
import Image from 'next/image'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema15.module.css'


//Vars, functions and consts
function laTemp(text) {
    return `$${text}$`
}
function LaTemp(text) {
    return `$$${text}$$`
}


const tema15 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 15</title>
            </Head>
            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">

                {/* AQUI VA SU CONTENIDO */}
                <h1 className={`pb-4 `+ styles.mainTitle}>Matrices semejantes y diagonalización</h1>

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
                    Sea <Latex>{laTemp('U')}</Latex> un espacio vectorial de dimensión finita y <Latex>{laTemp('T \\in \\mathscr{L}(U)')}</Latex>. Decimos que <Latex>{laTemp('T')}</Latex> es diagonalizable si existe una base de <Latex>{laTemp('U')}</Latex> formada por autovectores de <Latex>{laTemp('T')}</Latex>.
                </p>

                <p className={`leading-relaxed `+styles.parrafo}>
                    Note que si <Latex>{laTemp('T \\in \\mathscr{L}(U)')}</Latex> es diagonalizable y <Latex>{laTemp('B = \\left \\{ u_{1}, ..., u_{n} \\right \\}')}</Latex> forma una base de de <Latex>{laTemp('U')}</Latex> formada por autovectores de <Latex>{laTemp('T')}</Latex> asociados respectivamente,  a los autovalores <Latex>{laTemp('\\lambda_{1}, ..., \\lambda_{n}')}</Latex>, entonces la matrix de <Latex>{laTemp('T')}</Latex> con relación a esta base es:

                    <Latex>{LaTemp('[T]_{B} = \\begin{pmatrix} \\lambda_{1} & 0 & ... & 0 \\\\ 0 & \\lambda_{2} & ... & 0 \\\\ \\vdots  & \\vdots  & \\ddots  & \\vdots \\\\  0 & 0 & \\cdots  & \\lambda_{n} \\end{pmatrix}')}</Latex>

                    Es decir, <Latex>{laTemp('[T]_{B}')}</Latex> es una matriz diagonal, eso es, una matriz cuadrada <Latex>{laTemp('(a_{ij})')}</Latex> talque <Latex>{laTemp('a_{ij} = 0 \\text{ si } i \\neq j')}</Latex>.
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
                    Sea <Latex>{laTemp('U')}</Latex> un espacio vectorial de dimensión finita y <Latex>{laTemp('T \\in \\mathscr{L}(U)')}</Latex>. Entonces <Latex>{laTemp('T')}</Latex> es diagonalizable si y solamente si existe una base de <Latex>{laTemp('U')}</Latex> con relación a la cual la matriz de <Latex>{laTemp('T')}</Latex> es diagonal.
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
                    Decimos que una matriz <Latex>{laTemp('A \\in M_{n \\times n}')}</Latex> es diagonalizable si y solamente si <Latex>{laTemp('\\exists M \\in M_{n \\times n}')}</Latex> invertible tal que <Latex>{laTemp('M^{-1} A M')}</Latex> es una matriz diagonal.
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
                    Sea <Latex>{laTemp('U')}</Latex> un espacio vectorial de dimensión finita y <Latex>{laTemp('T \\in \\mathscr{L}(U)')}</Latex> y <Latex>{laTemp('C')}</Latex> una base cualquiera de <Latex>{laTemp('U')}</Latex>. Entonces <Latex>{laTemp('T')}</Latex> es diagonalizable si y solamente si <Latex>{laTemp('[T]_{C}')}</Latex> es diagonalizable.
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/observacion_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Observación:</h3>
                </div>

                <p className={`leading-relaxed `+styles.parrafo}>
                    Note que si <Latex>{laTemp('T \\in \\mathscr{L}(U)')}</Latex> es diagonalizable, su polinomio característico es de la forma:
                    <Latex>{LaTemp('P_{T}(\\lambda) = (\\lambda_{1} - \\lambda) ... (\\lambda_{n} - \\lambda)')}</Latex>
                    Donde <Latex>{laTemp('\\lambda_{1}, ..., \\lambda_{n}')}</Latex> son todos autovalores de <Latex>{laTemp('T')}</Latex>.
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
                    Sean <Latex>{laTemp('U')}</Latex> un espacio vectorial de dimensión finita y <Latex>{laTemp('T \\in \\mathscr{L}(U)')}</Latex>. Entonces <Latex>{laTemp('T')}</Latex> es diagonalizable si y solamente si sus autovalores <Latex>{laTemp('\\lambda_{1}, ..., \\lambda_{n}')}</Latex> son tales que:

                    <Latex>{LaTemp('U = V(\\lambda_{1}) \\oplus V(\\lambda_{1}) \\oplus ... \\oplus V(\\lambda_{n})')}</Latex>

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
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>{laTemp('T: \\mathbb{R}^2 \\rightarrow \\mathbb{R}^2')}</Latex>, dada por <Latex>{laTemp('T(x,y) = (y, 4x)')}</Latex>. Encuentre los autovalores de <Latex>{laTemp('T')}</Latex> y sus respectivos subespacios propios y determine si es diagonalizable.
                </p>
                <div className="ml-8 leading-relaxed">
                    <h4 className={` `+styles.solTitle}>Solución: </h4>
                    <p className={`leading-relaxed `+styles.parrafo}>
                        <span className="italic">i. </span> Hallamos la matriz de transformación con respecto a la base canónica  <Latex>{laTemp('B = \\left \\{ (1,0), (0,1) \\right \\}')}</Latex>:

                        <Latex>{LaTemp('T(1,0) = (0,4) = 0(1,0) + 4(0,1) \\\\ T(0,1) = (1,0) = 1(1,0) + 0(0,1) \\\\ \\Rightarrow [T]_{B} = \\begin{bmatrix} 0 & 1\\\\  4 & 0 \\\end{bmatrix}')}</Latex>
                    </p>
                    <p className={`leading-relaxed `+styles.parrafo}>
                        <span className="italic">ii. </span> Luego:
                        <Latex>{LaTemp('P_{T}(\\lambda) = P_{[T]_{B}} (\\lambda) = det([T]_{B} - \\lambda I) = \\begin{vmatrix} -\\lambda & 1\\\\ 4 & -\\lambda \\end{vmatrix} = \\lambda^2 -4')}</Latex>
                    </p>
                    <p className={`leading-relaxed `+styles.parrafo}>
                        <span className="italic">iii. </span> Autovalores:
                        <Latex>{LaTemp('P_{T}(\\lambda) = 0 \\Leftrightarrow \\lambda^2 - 4 = 0 \\Rightarrow (\\lambda -2)(\\lambda+2) = 0 \\\\ \\lambda_{1} = -2 \\text{ , } \\lambda_{2} = 2  ')}</Latex>
                    </p>
                    <p className={`leading-relaxed `+styles.parrafo}>
                        <span className="italic">iv. </span> Autovectores:
                        <Latex>{LaTemp('')}</Latex>
                    </p>
                    <p className={`leading-relaxed ml-4 `+styles.parrafo}>
                        <span className="italic">a. </span> <Latex>{laTemp('\\lambda_{1} = -2 \\Rightarrow ([T]_{B} + 2I)v = 0 \\text{, donde } v = \\binom{x}{y} \\neq \\binom{0}{0}')}</Latex>
                        <Latex>{LaTemp('\\begin{bmatrix} 2 & 1\\\\  4 & 2 \\end{bmatrix} \\begin{bmatrix} x \\\\  y  \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\Rightarrow \\left\\{\\begin{matrix} 2x +y=0\\\\ y = -2x \\end{matrix}\\right. \\\\ \\Rightarrow v = \\begin{pmatrix} x\\ y \\end{pmatrix} = \\begin{pmatrix} x\\\\ -2x \\end{pmatrix} = x\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix} \\\\ V(-2) = [(1,-2)] \\text{, } dim_{\\mathbb{R}} V(-2) = 1')}</Latex>
                    </p>
                    <p className={`leading-relaxed ml-4 `+styles.parrafo}>
                        <span className="italic">b. </span> <Latex>{laTemp('\\lambda_{1} = 2 \\Rightarrow ([T]_{B} - 2I)v = 0 \\text{, donde } v = \\binom{x}{y} \\neq \\binom{0}{0}')}</Latex>
                        <Latex>{LaTemp('\\begin{bmatrix} -2 & 1\\\\  4 & -2 \\end{bmatrix} \\begin{bmatrix} x \\\\  y  \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} \\Rightarrow \\left\\{\\begin{matrix} -2x +y=0\\\\ y = 2x \\end{matrix}\\right. \\\\ \\Rightarrow v = \\begin{pmatrix} x\\ y \\end{pmatrix} = \\begin{pmatrix} x\\\\ 2x \\end{pmatrix} = x\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} \\\\ V(2) = [(1,2)] \\text{, } dim_{\\mathbb{R}} V(2) = 1')}</Latex>
                    </p>
                    <p className={`leading-relaxed `+styles.parrafo}>
                        <span className="italic">v. </span> Aquí observamos que <Latex>{laTemp('\\mathbb{R}^2 = V(-2) \\oplus V(2) \\Rightarrow T')}</Latex> <span className="font-bold">es diagonalizable</span>.
                    </p>
                </div>

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
                    Sean <Latex>{laTemp('U')}</Latex> un espacio vectorial de dimensión finita y <Latex>{laTemp('T \\in \\mathscr{L}(U)')}</Latex>. Entonces <Latex>{laTemp('T')}</Latex> es diagonalizable si ambas condiciones son verificadas:
                </p>
                <p className={`ml-8 leading-relaxed `+styles.parrafo}>
                    1. Para cada autovalor de <Latex>{laTemp('T')}</Latex> las multiplicidades algebraicas y geométricas son iguales.
                </p>
                <p className={`ml-8 leading-relaxed `+styles.parrafo}>
                    2. La suma de las multiplicidades geométricas de todos los autovalores de <Latex>{laTemp('T')}</Latex> coincide con la dimensión de <Latex>{laTemp('U')}</Latex>.
                </p>
                
                <div className={`flex flex-row `}>
                    <Image 
                        src="/corolario_icon.png"
                        alt="Teorema"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Corolario:</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sean <Latex>{laTemp('U')}</Latex> un espacio vectorial de dimensión <Latex>{laTemp('n \\text{ y } T \\in \\mathscr{L}(U)')}</Latex>. Si:
                    <Latex>{LaTemp('P_{T}(\\lambda) = (\\lambda_{1} - \\lambda)...(\\lambda_{n} - \\lambda), ')}</Latex>
                    donde <Latex>{laTemp('\\lambda_{1}, ..., \\lambda_{n} \\in \\mathbb{R}')}</Latex> distintos entre sí entonces <Latex>{laTemp('T')}</Latex> es diagonalizable.
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
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>{laTemp('T: \\mathbb{R}^3 \\rightarrow \\mathbb{R}^3')}</Latex>, dada por <Latex>{laTemp('T(x,y,z) = (x+z, y+z, x+y+2z)')}</Latex>. Verifique si <Latex>{laTemp('T')}</Latex> es diagonalizable.
                </p>
                <div className="ml-8 leading-relaxed">
                    <h4 className={` `+styles.solTitle}>Solución: </h4>
                    <p className={`leading-relaxed `+styles.parrafo}>
                        <span className="italic">i. </span> Hallamos la matriz de transformación con respecto a la base canónica  <Latex>{laTemp('B = \\left \\{ (1,0,0), (0,1,0),(0,0,1) \\right \\}')}</Latex>:

                        <Latex>{LaTemp('T(1,0,0) = (1,0,1) \\\\ T(0,1,0) = (0,1,1) \\\\ T(0,0,1) = (1,1,2) \\\\ \\Rightarrow [T]_{B} = \\begin{bmatrix} 1 & 0 & 1\\\\  0 & 1 & 1 \\\\ 1 & 1 & 2 \\\end{bmatrix}')}</Latex>
                    </p>
                    <p className={`leading-relaxed `+styles.parrafo}>
                        <span className="italic">ii. </span> Luego:
                        <Latex>{LaTemp('P_{T}(\\lambda) = P_{[T]_{B}} (\\lambda) = det([T]_{B} - \\lambda I) \\\\ = \\begin{vmatrix} 1 - \\lambda & 0 & 1\\\\  0 & 1 - \\lambda & 1 \\\\ 1 & 1 & 2 - \\lambda \\\end{vmatrix} \\\\ = (1-\\lambda)((1-\\lambda)(2-\\lambda)-1-1) = 0 \\\\ = (1-\\lambda)(\\lambda^2 - 3\\lambda) = \\lambda(1 - \\lambda)(\\lambda -3) = 0 \\\\ \\therefore \\lambda_{1} = 0, \\lambda_{2} = 1, \\lambda_{3} = 3')}</Latex>
                    </p>
                    <p className={`leading-relaxed `+styles.parrafo}>
                        <span className="italic">iii. </span> Debido a que se tiene tres autovalores reales diferentes por ende <Latex>{laTemp('T')}</Latex> <span className="font-bold">es diagonalizable</span>.
                    </p>
                    
                </div>

                
                <div className="container mx-auto m-6 rounded-md text-gray-500">
                    <p className={`leading-relaxed ` + styles.parrafo}>
                        El presente recurso geogebra nos permite visualizar la forma de desempeño de un isomorfismo. En el primer panel podemos ver un espacio vectorial de dimensión tres, mientras que en la otra se alcanza a ver una transformación de los puntos a una de dimensión dos.
                    </p>

                    {/* <iframe scrolling="no" title="Isomorfismos" src="https://www.geogebra.org/material/iframe/id/phdhwdnf/width/1040/height/1135/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="1040px" height="1135px"> </iframe> */}

                    <div className={`` + styles.caption}>
                        Recurso Goegebra que ejemplifica el desempeño de dos espacios vectoriales con un punto por medio de un isomorfismo donde se tiene que es inyectiva y sobreyectiva. Fuente: Adaptado de <a className={styles.link} href="https://www.geogebra.org/m/q4w9cetk" target="_blank">Elielzer Nuayed</a>.
                    </div>
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
                    <li className="mb-4">
                        [2] Zani, S. L. (n.d.). Álgebra Linear. ICMC - USP.
                    </li>
                </ul>

                

            </div>
        </Layout>        
    );
}

export default tema15;