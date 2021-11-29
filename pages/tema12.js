//Tema 12: isomofismo

//For next imports
import Head from 'next/head'
import Image from 'next/image'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema12.module.css'


//Vars, functions and consts
function laTemp(text) {
    return `$${text}$`
}
function LaTemp(text) {
    return `$$${text}$$`
}


let expr2 = "$\\mathbb{K}$"
let expr3 = "$$dim_{\\mathbb{K}} U = dim_{\\mathbb{K}} V $$"
let expr4 = "$T: M_2(\\mathbb{R}) \\rightarrow \\mathbb{R}^4$"
let expr5 = "$$ T \\begin{pmatrix} a & b\\\\ c & d \\end{pmatrix} = (a , b, c, d)$$"
let expr6 = "$M_2(\\mathbb{R}) \\cong \\mathbb{R}^4$"
let expr7 = "$$ Ker(T) = \\left\\{ \\begin{pmatrix} a & b\\\\ c & d \\end{pmatrix} \\in M_2(\\mathbb{R}): T \\begin{pmatrix} a & b\\\\ c & d \\end{pmatrix} = (0,0,0,0) \\right\\} $$"
let expr8 = "$$(a,b,c,d) = (0,0,0,0) \\Rightarrow a=b=c=d$$"
let expr9 = "$$ \\therefore Ker(T) = \\left\\{ \\begin{pmatrix} 0 & 0\\\\ 0 & 0 \\end{pmatrix} \\right\\} \\Rightarrow T \\text{ es inyectiva.}$$"
let expr10 = "$T: \\mathbb{R}^n \\rightarrow \\mathscr{P}_{n-1}(\\mathbb{R}) $ dada por $T(x_1, x_2, ..., x_n) = x_1 + x_2t + ... + x_n t^{n-1}$"
let expr11 = "$T: M_{m x n} \\rightarrow \\mathbb{R}^mn$ que asocia a cada matriz $A = (a_{ij})$ de $M_{mxn}$ o el siguiente elemento de $\\mathbb{R}^n$"
let expr12 = "$$(a_{11}, ..., a_{1n}, ..., a_{m1}, ..., a_{mn})$$"
let expr13 = "$\\mathbb{R}^3$"
let expr14 = "$$Ker(T) = \\left\\{ (x,y,z) \\in \\mathbb{R}^3 : T(x,y,z) = (0,0,0) \\right\\}\\\\ T(x,y,z) = (0,0,0) \\\\ (x-y, x-z, z-y) = (0,0,0) \\\\ \\left\\{\\begin{matrix} x-y=0 \\\\ x-z=0\\\\ z-y=0 \\end{matrix}\\right. \\\\ \\Rightarrow \\begin{pmatrix} 1 & -1 & 0\\\\ 1 & 0 & -1 \\\\ 0 & -1 & 1 \\end{pmatrix} \\begin{pmatrix} x\\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 0\\\\ 0 \\\\ 0 \\end{pmatrix} \\\\ \\Rightarrow \\text{Sist. Homogéneo con infinitas soluciones, } det(A) = 0$$"
let expr15 = "$$\\Rightarrow y=x, z=x \\Rightarrow Ker(T) = \\left\\{ (x,x,x) : x \\in \\mathbb{R} \\right\\} \\\\ \\Rightarrow Ker(T) = [(1,1,1)] \\neq \\left\\{ (0,0,0) \\right\\} \\\\ \\Rightarrow T \\text{ no es inyectiva, por lo tanto no es automorfismo}$$"

let expr16 = "$F: U \\rightarrow V$"
let expr17 = "$v \\in V, \\exists ! u_{v} \\in U$"
let expr18 = "$F(u_{v}) = v$"
let expr19 = "$G: V \\rightarrow U$"
let expr20 = "$$ G(v) = u_{v}$$"
let expr21 = "$$ F o G = Id_{V} \\text{ y } G o F = Id_{U} $$"
let expr22 = "$F^{-1} : V \\rightarrow U$"
let expr23 = "$\\mathbb{K}$"
let expr24 = "$n \\geq 1 \\text{ y } T: U \\rightarrow V$"
let expr25 = "$\\mathbb{K} ^ {n}$"
let expr26 = "$F: \\mathbb{R}^3  \\rightarrow \\mathbb{R}^3 \\text{, con } F(x,y,z) = (x-3y-2z, y-4z, -z)$"
let expr27 = "$B = \\left \\{ (1,0,0), (0,1,0), (0,0,1) \\right \\}$"
let expr28 = "$$ F(1,0,0) = (1,0,0) \\\\ F(0,1,0) = (-3,1,0) \\\\ F(0,0,1) = (-2,-4,-1) $$"

let expr29 = "$$ [F]_{B} = \\begin{bmatrix} 1 & -3 & -2\\\\  0 & 1 & -4\\\\  0 & 0 & 1 \\end{bmatrix}$$"
let expr30 = "$[F^{-1}]_{B} = [F]_{B} ^{-1}$"

const tema12 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 12</title>
            </Head>
            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">

                {/* AQUI VA SU CONTENIDO */}
                <h1 className={`pb-4 `+ styles.mainTitle}>Isomorfismos</h1>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Como se ha visto en capítulos anteriores las transformaciones lineales son funciones que operan en dos espaciones vectoriales. En este capítulo estudiaremos las trasformaciones lineales biyectivas para analizar qué condiciones deben cumplir para ser identificados.
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

                
                <p className={`leading-relaxed ` + styles.parrafo}>
                    <Latex>Sean $U$ y $V$ dos espacios vectoriales sobre</Latex> <Latex>{expr2}</Latex>
                </p>
                <ul className={`leading-relaxed ml-6 ` + styles.parrafo}>
                    <li><span className="italic">i. </span>Sea <Latex>$T: U \rightarrow V$</Latex> una transformación lineal. Si <Latex>$T$</Latex> es biyectiva (inyectiva y sobreyectiva) entonces decimos <Latex>$T$</Latex> es un isomorfismo.</li>

                    <li><span className="italic">ii. </span>Si existe un isomorfismo <Latex>$T: U \rightarrow V$</Latex> , entonces diremos que <Latex>$U$ y $V$</Latex> son espacios vectoriales isomorfos y denotaremos <Latex>$U \cong V$</Latex>.</li>
                </ul>

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
                    Sean <Latex>$U$</Latex> y <Latex>$V$</Latex> dos espacios vectoriales sobre <Latex>{expr2}</Latex>. Si <Latex>$U$</Latex> y <Latex>$V$</Latex> son espacios vectoriales isomorfos entonces:
                    
                    <Latex>{expr3}</Latex>

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
                    Consideremos <Latex>{expr4}</Latex> la transformación lineal definiida por:

                    <Latex>{expr5}</Latex>
                    
                    La cual es inyectiva y sobreyectiva. En efecto:
                </p>

                <ul>
                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">1. </span> T es inyectiva:

                            <Latex>{expr7}</Latex>
                            <Latex>{expr8}</Latex>
                            <Latex>{expr9}</Latex>
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
                
                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Ejercicios"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 2:</h3>
                </div>

                
                <ul>
                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">1. </span> <Latex>$T: U \rightarrow U$ dada por $T(u)=u$</Latex>
                        </p>

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            La transformación identidad es un isomorfismo.
                        </p>
                    </li>
                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">2. </span> <Latex>{expr10}</Latex>
                        </p>

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            La transformación lineal es un isomorfismo.
                        </p>
                    </li>

                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">3. </span> <Latex>{expr11}</Latex>
                            <Latex>{expr12}</Latex>
                        </p>

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            La transformación lineal es un isomorfismo.
                        </p>
                    </li>
                </ul>
                
                <div className={`flex flex-row `}>
                    <Image 
                        src="/nota_icon.png"
                        alt="Nota"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Nota:</h3>
                </div>

                
                <p className={`leading-relaxed ` + styles.parrafo}>
                    <Latex>Sea $T: U \rightarrow V$ un isomorfismo. Si $U=V$, entonces diremos que $T$ es un</Latex> <b>automorfismo</b>.
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Ejercicios"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 3:</h3>
                </div>
                
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Verifique que <Latex>$T(x,y,z) = (x-y, x-z, z-y)$ es un automorfismo de </Latex> <Latex>{expr13}</Latex>
                </p>
                <div className="ml-8 leading-relaxed">
                    <h4 className={` `+styles.solTitle}>Solución: </h4>
                    <ul>
                        <li>
                            <p className={`leading-relaxed ` + styles.parrafo}>
                                <span className="italic">i. </span> <Latex>¿$T$ es inyectiva?</Latex> 
                            </p>
                            <p className={`leading-relaxed ` + styles.parrafo}>
                                <Latex>{expr14}</Latex>
                                <Latex>{expr15}</Latex>
                            </p>
                        </li>
                    </ul>
                </div>

                <h2 className={`` + styles.submainTitle}>Transformaciones inversas</h2>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición:</h3>
                </div>

                <p className={`leading-relaxed ` + styles.parrafo}>
                    Sea <Latex>{expr16}</Latex> una función biyectiva. En particular, para cada <Latex>{expr17}</Latex> tal que <Latex>{expr18}</Latex>. Con esto podemos definir <Latex>{expr19}</Latex> por:

                    <Latex>{expr20}</Latex>

                    Aquí:

                    <Latex>{expr21}</Latex>

                    Llamaremos a <Latex>$G$</Latex> función inversa de <Latex>$F$</Latex>.
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
                    La inversa de una transformación lineal biyectiva es una transformación lineal también.
                </p>
                
                <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Notación:</h3>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Denotemos la inversa de <Latex>{expr16}</Latex> por <Latex>{expr22}</Latex>.
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
                    Sean <Latex>$U$</Latex> y <Latex>$V$</Latex> dos espacios vectoriales sobre <Latex>{expr23}</Latex> con la misma dimensión finita <Latex>{expr24}</Latex> una transformación lineal. Entonces las siguientes afirmaciones son equivalentes:

                </p>

                <div className={`ml-6 `}>
                    <p className={`leading-relaxed ` + styles.parrafo}>
                        A) T es un isomorfismo.
                    </p>
                    <p className={`leading-relaxed ` + styles.parrafo}>
                        B) T es inyectiva.
                    </p>
                    <p className={`leading-relaxed ` + styles.parrafo}>
                        C) T es sobreyectiva.
                    </p>
                </div>

                <p className={`leading-relaxed ` + styles.parrafo}>
                    Dos espacios vectoriales con la misma dimensión finita son isomorfos.
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
                    Todo <Latex>{expr23}</Latex>-espacio vectorial (espacio vectorial sobre <Latex>{expr23}</Latex>) de dimensión <Latex>$n \geq 1$</Latex> es isomorfo a <Latex>{expr25}</Latex>.
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Ejercicios"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 4:</h3>
                </div>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Muestre que la transformación lineal <Latex>{expr26}</Latex> es invertible y determine su transformación inversa.
                </p>

                <div className="ml-8 leading-relaxed">
                    <h4 className={` `+styles.solTitle}>Solución: </h4>
                    <ul>
                        <li>
                            <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">i. </span> Para determinar que la transformación es invertible podemos usar la característica de que son isomorfos, esto debido a que <Latex>$dim U = dim V$</Latex> lo que significa que es biyectiva, <span className="font-bold">por ende invertible</span>.
                            </p>
                        </li>
                        <li>
                            <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic">ii. </span> Para determinar la transformación inversa primero hallaremos la matriz de la transformación con base canónica <Latex>{expr27}</Latex>.
                            
                            <Latex>{expr28}</Latex>
                            <Latex>{expr29}</Latex>
                            
                            Podemos hacer uso de la propiedad de <Latex>{expr30}</Latex>. Es por ello que determinamos: 
                            
                            <Latex>{LaTemp('[F]_{B} ^{-1} = \\begin{bmatrix} 0 & 3 & 14\\\\  0 & 1 & 4\\\\  0 & 0 & 1 \\end{bmatrix}')}</Latex>

                            Así sabemos que en términos del isomorfismo <Latex>{laTemp('F^{-1}')}</Latex> la base canónica <Latex>{laTemp('B')}</Latex> se puede expresar como:

                            <Latex>{LaTemp('F^{-1} (1,0,0) = (1,0,0) \\\\ F^{-1} (0,1,0) = (3,1,0)\\\\ F^{-1} (0,0,1) = (14,4,1)')}</Latex>

                            Es así que cualquier <Latex>{laTemp('(x,y,z) \\in \\mathbb{R}^3')}</Latex> puede ser expresado como:

                            <Latex>{LaTemp('(x,y,z) = x(1,0,0) + y(0,1,0) + z(0,0,1)')}</Latex>

                            <Latex>{LaTemp('F^{-1}(x,y,z) = xF^{-1}(1,0,0) + yF^{-1}(0,1,0) + zF^{-1}(0,0,1)')}</Latex>

                            <Latex>{LaTemp('F^{-1}(x,y,z) = x(1,0,0) + y(3,1,0) + z(14,4,1)')}</Latex>

                            <Latex>{LaTemp(' \\therefore F^{-1}(x,y,z) = (x+3y+14z, y+4z, z)')}</Latex>

                            </p>
                        </li>
                    </ul>
                </div>

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
                        El presente recurso geogebra nos permite visualizar la forma de desempeño de un isomorfismo. En el primer panel podemos ver un espacio vectorial de dimensión tres, mientras que en la otra se alcanza a ver una transformación de los puntos a una de dimensión dos.
                    </p>

                    <iframe scrolling="no" title="Isomorfismos" src="https://www.geogebra.org/material/iframe/id/phdhwdnf/width/1040/height/1135/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="1040px" height="1135px"> </iframe>

                    <div className={`` + styles.caption}>
                        Recurso Goegebra que ejemplifica el desempeño de dos espacios vectoriales con un punto por medio de un isomorfismo donde se tiene que es inyectiva y sobreyectiva. Fuente: Adaptado de <a className={styles.link} href="https://www.geogebra.org/m/q4w9cetk">Elielzer Nuayed</a>.
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
                        [3] Zani, S. L. (n.d.). Álgebra Linear. ICMC - USP.
                    </li>
                </ul>

                

            </div>
        </Layout>        
    );
}

export default tema12;