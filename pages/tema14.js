// Tema 14

//For next imports
import Head from 'next/head'
import Image from 'next/image'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema14.module.css';


//Vars, functions and consts
//Vars, functions and consts
function laT(text) {
    return `$${text}$`
}
function LaT(text) {
    return `$$${text}$$`
}


let expr1 = "$ U $" // Example
let expr2 = "$ V $"
let expr3 = "$ \\mathbb{K} $"
let expr4 = "$L(U,V)=\\begin{Bmatrix} T: U \\rightarrow V : T  \\text{ es transformacion lineal}\\end{Bmatrix}  $"
let expr5 = "$  T: \\mathbb{R}^{2} \\rightarrow \\mathbb{R}^{2} $"
let expr6 = "$ T \\in  L(U)$"
let expr7 = "$ u \\in U$"
let expr8 = "$ \\exists  \\lambda  \\in  \\mathbb{K} $"
let expr9 = "$ T(u)= \\lambda  u V $"
let expr10 = "$ Id : U \\rightarrow U $"
let expr11 = "$ Id(u)=u $"




let expr12 = "$ T \\in  \\mathscr{L}(V)$"
let expr13 = "$ U \\subset V$"
let expr14 = "$ T $"
let expr15 = "$ U $"
let expr16 = "$ T (U) \\subset U $"
let expr17 = "$ T_{|U}$"
let expr18 = "$ \\mathscr{L}(U)$"
let expr19 = "$ \\begin{Bmatrix} 0  \\end{Bmatrix}$"
let expr20 = "$\\neq $"
let expr21 = "$ U \\doteq \\begin{bmatrix} u \\end{bmatrix} \\subset  V$"
let expr22 = "$ \\alpha  \\in \\mathbb{R}$"
let expr23 = "$ T(\\alpha u ) \\in  \\left [  u \\right ] $"
let expr24 = "$ \\beta \\in \\mathbb{R}$"
let expr25 = "$ T\\left ( \\alpha u \\right )= \\beta u$"
let expr26 = "$\\alpha \\neq 0$"
let expr27 = "$\\beta \\text{ tal que } T \\left ( u \\right )= \\left ( \\beta /\\alpha \\right )u$"
let expr28 = "$u\\neq 0$"
let expr29 = "$T \\in  \\mathscr{L}(U)$"
let expr30 = "$$"
let expr31 = "$$"



const tema14 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 14</title>
            </Head>
            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">

                {/* AQUI VA SU //in CONTENIDO */}


                <h1 className={`pb-4 `+ styles.mainTitle}>Autovalores y autovectores</h1>
                

                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición de autovalores y autovectores:</h3>
                </div>


                <p className={`leading-relaxed `+styles.parrafo}>
                    Considere un operador lineal  <Latex>{ expr12}</Latex>  y un subespacio <Latex>{ expr13}</Latex> . Si la imagen de <Latex>{expr14}</Latex> en <Latex>{expr15}</Latex> para un subconjunto
                    (en realidad es un subespacio vector) de <Latex>{expr15}</Latex>decimos que <Latex>{expr15}</Latex>
                    es un subespacio invariante de <Latex>{expr14}</Latex>, es decir, <Latex>{expr16}</Latex>. Por lo tanto, la restricción de <Latex>{expr14}</Latex> al subespacio <Latex>{expr15}</Latex>, denotado por <Latex>{expr17}</Latex>, pertenece a <Latex>{expr18}</Latex>. Como veremos en el próximo capítulo, esto hará que sea más fácil
                    a menudo la comprensión de cómo actúa un operador lineal, ya que sin
                    duda, es más sencillo estudiarlo en subespacios de menores dimensiones.

                </p>


                <p className={`leading-relaxed `+styles.parrafo}>
                
                    Es obvio que los subespacios <Latex>{expr19}</Latex> y<Latex>{expr2}</Latex> son invariantes por cualquier <Latex>{expr12}</Latex>. Veamos qué debe suceder para que exista un subespacio.
                    invariante de la dimensión uno. Obviamente, necesitamos <Latex>{expr2}</Latex> <Latex>{expr20}</Latex> <Latex>{expr19}</Latex>. Esto sugiere la siguiente definición:
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición 1 :</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                
                    Sea <Latex>{expr15}</Latex> un espacio vectorial y <Latex>{expr29}</Latex>. 
                    Decimos que un vector <Latex>{laT('u \\in U')}</Latex> distinto de cero es un vector propio de <Latex>{laT('T')}</Latex> si hay <Latex>{laT('\\lambda \\in \\mathbb{R}')}</Latex> tal que <Latex>{laT('T\\left ( u \\right )= \\lambda u')}</Latex>.
                </p>

                {/*Ejemplo 1*/}
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
                    La transformación identidad <Latex>{laT('Id: U \\rightarrow U')}</Latex> definida por <Latex>{laT('Id(u) = u')}</Latex> tiene como autovector (vector propio) a cualesquiera vector no nulo <Latex>{laT('u \\in U')}</Latex> puesto que <Latex>{laT('\\exists 1 \\in \\mathbb{K}')}</Latex> tal que:

                    <Latex>{LaT('Id(u) = u = 1u \\\\ \\Rightarrow Id(u) = 1u')}</Latex>
                </p>


                <div className={`flex flex-row `}>
                    <Image 
                        src="/observacion_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Observación 1:</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Si <Latex>{laT('u\\neq 0')}</Latex> tal que <Latex>{laT('T\\left ( u \\right )= \\lambda u= \\mu u')}</Latex> entonces <Latex>{laT('\\lambda = \\mu ')}</Latex>. De hecho, esta igualdad implica que <Latex>{laT('\\left ( \\lambda -\\mu  \\right )u= 0')}</Latex>, es decir,<Latex>{laT('\\lambda -\\mu = 0')}</Latex> .
                </p>


                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición 2 :</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>{laT('U')}</Latex> un espacio vectorial, <Latex>{laT('T \\in \\mathscr{L}\\left ( U \\right )')}</Latex> y <Latex>{laT('u')}</Latex> un autovector de <Latex>{laT('T')}</Latex>. El número <Latex>{laT('\\lambda')}</Latex> tal que <Latex>{laT('T\\left ( u \\right )= \\lambda u')}</Latex> se llama el autovalor de <Latex>{laT('T')}</Latex> asociado al vector propio <Latex>{laT('u')}</Latex>.

                </p>


                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición 3 :</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>{laT('U')}</Latex> un espacio vectorial, <Latex>{laT('T \\in \\mathscr{L} \\left ( U \\right )')}</Latex> y <Latex>{laT('\\lambda')}</Latex> un autovalor de <Latex>{laT('T')}</Latex>. Sea <Latex>{laT('I:U\\rightarrow U')}</Latex> la identidad. El subespacio vectorial
                    
                    <Latex>{LaT('V\\left ( \\lambda  \\right )=\\left \\{  u \\in U; T\\left ( u \\right )= \\lambda u\\right \\}=  Ker \\left ( T- \\lambda I \\right )')}</Latex>

                    Se llama el subespacio propio del valor propio <Latex>{laT('\\lambda')}</Latex>, o el espacio propio asociado con <Latex>{laT('\\lambda')}</Latex>. Si <Latex>{laT('U')}</Latex> tiene una dimensión finita, diremos que la dimensión de <Latex>{laT('V(\\lambda)')}</Latex> es la multiplicidad geométrica de <Latex>{laT('\\lambda')}</Latex>.
                    </p>
                
                <div className={`flex flex-row `}>
                    <Image 
                        src="/observacion_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Observación 2:</h3>
                </div>

                <p className={`leading-relaxed `+styles.parrafo}>
                    Tenga en cuenta que todo <Latex>{laT('u \\in V\\left ( \\lambda  \\right )')}</Latex>,<Latex>{laT('u\\neq 0')}</Latex> es un vector propio de T asociado con el valor propio <Latex>{laT('\\lambda')}</Latex>.
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/observacion_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Observación 3:</h3>
                </div>
                
                
                <p className={`leading-relaxed `+styles.parrafo}>
                    Observación 9.6 <Latex>{laT('V\\left ( \\lambda  \\right )')}</Latex> es un subespacio invariante por <Latex>{laT('T')}</Latex>, es decir, <Latex>{LaT('T\\left ( V\\left ( \\lambda  \\right ) \\right )\\subset V\\left ( \\lambda  \\right )')}</Latex> Solo tenga en cuenta que si <Latex>{laT('u \\in V\\left ( \\lambda  \\right )')}</Latex> entonces <Latex>{laT('T\\left ( u \\right )= \\lambda u \\in V\\left ( \\lambda  \\right )')}</Latex>.
                </p>

                {/*Ejemplo 2*/}
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
                    Sea <Latex>{laT('T: \\mathbb{R}^2 \\rightarrow \\mathbb{R}^2 ')}</Latex> dada por <Latex>{laT('T(x,y) = (y, 4x)')}</Latex>. Determine los autovalores de <Latex>{laT('T')}</Latex> y los espacios propios asociados con ellos.
                </p>

                <div className="ml-8 leading-relaxed">
                    <h4 className={` `+styles.solTitle}>Solución: </h4>
                    <ul>
                        <li>
                            <p className={`leading-relaxed ` + styles.parrafo}>
                                Para determinar los autovalores de <Latex>{laT('T')}</Latex> supongamos que existe <Latex>{laT('\\left ( x,y \\right )\\neq \\left ( 0,0 \\right )')}</Latex>tal que:
                                <Latex>{laT('T\\left ( x,y \\right )= \\lambda \\left ( x,y \\right )')}</Latex>
                            </p>
                                <Latex>{laT('\\left ( x,4y \\right )= \\lambda \\left ( x,y \\right )\\Rightarrow \\left\\{\\begin{matrix}y & =  & \\lambda x  \\\\ 4x& =  & \\lambda y \\end{matrix}\\right.')}</Latex>


                                <Latex>{laT(' \\Rightarrow \\left\\{\\begin{matrix} -\\lambda x & + & y & = & 0\\\\  4x & - & \\lambda y & = & 0\\end{matrix}\\right.')}</Latex>

                                Sistema homogeneo.

                                <p className={`leading-relaxed ` + styles.parrafo}>
                                <Latex>{laT('\\begin{pmatrix}-\\lambda  & 1\\\\  4 & -\\lambda \\end{pmatrix}')}</Latex>
                                <Latex>{laT('\\begin{pmatrix} x\\\\  y \\end{pmatrix}')}</Latex>=
                                <Latex>{laT('\\begin{pmatrix} 0\\\\  0 \\end{pmatrix}')}</Latex>
                                No posee solucion inicial
                                </p>
                                <p className={`leading-relaxed ` + styles.parrafo}>
                                Es decir <Latex>{laT('det \\begin{pmatrix}-\\lambda  & 1\\\\  4 & -\\lambda \\end{pmatrix}=0')}</Latex>
                                <Latex>{laT('\\lambda ^{2}-4 \\Rightarrow \\left ( \\lambda -2 \\right )\\left ( \\lambda +2 \\right )=0 \\Rightarrow \\lambda _{1}=-2 \\text{ y } \\lambda _{2}=2')}</Latex>
                                </p>
                                <p className={`leading-relaxed ` + styles.parrafo}>
                                Asi <Latex>{laT('\\lambda _{1}=-2 \\text{ y } \\lambda _{2}=2')}</Latex> son los unicos autovalores de T. Luego
                                </p>

                                <p className={`leading-relaxed ` + styles.parrafo}>
                                <Latex>{laT('V\\left ( -2 \\right )= \\left \\{ \\left ( x,y \\right ) \\in \\mathbb{R}^{2} :T\\left ( x,y \\right )=2\\left ( x,y \\right )\\right \\}=\\left \\{ \\left ( x,y \\right ) \\in \\mathbb{R}^{2} : \\left ( y,4x \\right )=\\left ( -2x,-2y \\right )\\right \\}')}</Latex>
                               
                                <Latex>{laT('V\\left ( -2 \\right )= \\left \\{ \\left ( x,y \\right ) \\in \\mathbb{R}^{2} :   y=-2x\\right \\}=\\left \\{ \\left ( x,-2x \\right ):x\\in \\mathbb{R} \\right \\}=\\left [ \\left ( 1,-2 \\right ) \\right ]')}</Latex>
                                </p>
                                <p className={`leading-relaxed ` + styles.parrafo}>
                                Con  <Latex>{laT('dim_{\\mathbb{R}} V(-2)=1')}</Latex>, Ademas 
                                <Latex>{laT('V(2)=\\left \\{ (x,y) \\in \\mathbb{R}^{2}:T(x,y)=2(x,y) \\right \\}')}</Latex>
                                </p>
                                <p className={`leading-relaxed ` + styles.parrafo}>
                                <Latex>{laT('V(2)=\\left \\{ (x,y) \\in \\mathbb{R}^{2}:y=2x \\right \\}=\\left \\{ x(1,2) : x \\in \\mathbb{R} \\right \\}=[(1,2)]')}</Latex>
                                </p>
                                <p className={`leading-relaxed ` + styles.parrafo}>
                                Con  <Latex>{laT('dim_{\\mathbb{R}} V(2)=1')}</Latex>
                                </p>

                        </li>
                    </ul>
                </div>

                {/*Ejemplo 2*/}
                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 3:</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>{laT('T: \\mathbb{R}^3 \\rightarrow \\mathbb{R}^3 ')}</Latex> dada por <Latex>{laT('T(x,y,z) = (x, y, z)')}</Latex>. Determine los autovalores de <Latex>{laT('T')}</Latex> y los espacios propios asociados con ellos y la multiplicidad geométrica de cada autovalor.
                </p>
                <div className="ml-8 leading-relaxed">
                    <h4 className={` `+styles.solTitle}>Solución: </h4>
                    <ul>
                        <li>
                            <p className={`leading-relaxed ` + styles.parrafo}>
                                <span className="italic">i. </span> Vea que si <Latex>{laT('\\lambda')}</Latex> es un autovalor de  <Latex>{laT('T')}</Latex> entonces debe existir un <Latex>{laT('(x,y,z) \\neq (0,0,0)')}</Latex> tal que  <Latex>{laT('T\\left ( x,y,z \\right )= \\lambda \\left ( x,y,z \\right )')}</Latex>, esto es lo mismo a decir que existe un <Latex>{laT('(x,y,z) \\neq (0,0,0)')}</Latex> tal que <Latex>{laT('\\left ( x,y,z \\right )=  \\left ( \\lambda x, \\lambda y, \\lambda z \\right )')}</Latex>, lo que equivale al sistema:

                                <Latex>{LaT('\\left\\{\\begin{matrix} (1-\\lambda)x = 0\\\\  (1-\\lambda)y = 0\\\\  \\lambda z - x = 0 \\end{matrix}\\right.')}</Latex>

                                Que posee una solución no trivial, por que la determinante de la matriz:

                                <Latex>{LaT('\\begin{pmatrix} 1-\\lambda & 0 & 0\\\\  0 & 1-\\lambda & 0 \\\\  -1 & 0  & \\lambda \\end{pmatrix}')}</Latex>

                                es igual a cero. Como la determinante es <Latex>{laT('\\lambda (1-\\lambda)^2')}</Latex> los únicos autovalores de <Latex>{laT('T')}</Latex> son <Latex>{laT('\\lambda_1 = 0')}</Latex> y <Latex>{laT('\\lambda_2 = 1')}</Latex>.

                            </p>
                        </li>

                        <li>
                            <p className={`leading-relaxed ` + styles.parrafo}>
                                <span className="italic">ii. </span> En cuanto a los subespacios propios, tenemos que:

                                <Latex>{LaT('V(0) = \\left \\{ (x,y,z) \\in \\mathbb{R}^3; (x,y,z) = (0,0,0) \\right \\} = [(0,0,1)]')}</Latex>
                                Así la multiplicidad geométrica de <Latex>{laT('\\lambda_1 = 0')}</Latex> es 1.

                                <Latex>{LaT('V(1) = \\left \\{ (x,y,z) \\in \\mathbb{R}^3; (x,y,z) = (x,y,z) \\right \\}  \\\\ =  \\left \\{ (x,y,z) \\in \\mathbb{R}^3; x = z \\right \\} = [(0,1,0), (1,0,1)]')}</Latex>
                                Así la multiplicidad geométrica de <Latex>{laT('\\lambda_2 = 1')}</Latex> es 2.

                            </p>
                        </li>
                    </ul>
                </div>
                

                {/* RECURSO GEOGEBRA*/}
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
                        En esta simulación se pretende que se visualicen geométricamente los autovalores y autovectores de una matriz <Latex>{laT('A')}</Latex>. Para ello, se supone que <Latex>{laT('A')}</Latex> es la matriz asociada en la base canónica a una transformación lineal         <Latex>{expr5}</Latex>. Entonces los autovectores (<Latex>{expr2}</Latex>) son aquellas direcciones tales que T(<Latex>{expr2}</Latex>)=c * <Latex>{expr2}</Latex>(c constante).

                        Es decir las que se mantienen invariantes. 
                        Para ello se anima un vector unitario que recorre todo el círculo unidad, a la vez que su transformado. Entonces, cuando un vector V y su transformado coincidan en la misma "dirección", ese vector es un autovector. 
                        <h2 className={styles.importante} >NOTA:</h2> 
                        La matriz <Latex>{laT('A')}</Latex> puede cambiarse ingresando sus coeficientes en las casillas de control. Luego Actualizar Vistas.
                    </p>

                    <iframe className="" scrolling="no" title="Autovalores y autovectores. " src="https://www.geogebra.org/material/iframe/id/yb9ts3kg/width/1000/height/500/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="900px" height="400px"> </iframe>

                    <div className={`` + styles.caption}>
                        Recurso Geogebra para visualizar los autovectores. Fuente: Tomado de <a className={styles.link} href="https://www.geogebra.org/m/zd2hwtsg" target="_blank">Laura del Río, Viviana Angélica Costa</a>.
                    </div>
                </div>
                

                {/* RECURSOS HERE */}
                <div className={`flex flex-row `}>
                    <Image 
                        src="/recurso_icon.png"
                        alt="Recursos académicos"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Recurso Python:</h3>
                </div>
                
                <div className="container mx-auto m-6 rounded-md text-gray-500">
                    <p className={`leading-relaxed ` + styles.parrafo}>
                        El presente recurso Python nos permite obtener los autovalores y autovectores de una matriz <Latex>{laT('A')}</Latex> de forma más sencilla.
                    </p>

                    <iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@requiemm/eigensystem?embed=true"></iframe>

                    <div className={`` + styles.caption}>
                        Recurso Python para hallar los autovalores y autovectores de una matriz. Fuente: Elaboración propia.
                    </div>
                </div>

                {/* POLINOMIOS CARACTERISTICOS */}
                <h2 className={`` + styles.submainTitle}>Polinomio caracteristico</h2>


                <p className={`leading-relaxed ` + styles.parrafo}>
                              
                    Dado <Latex>{laT('A \\in M_{nxn}')}</Latex> definimos el polinomio característico
                    de <Latex>{laT('A')}</Latex> como determinante
                    supongamos que existe.<Latex>{LaT('P_{A}(\\lambda )=det (A-\\lambda I)')}</Latex>
                    donde <Latex>{laT('I')}</Latex> es la matriz identidad de orden <Latex>{laT('n')}</Latex>   
                 </p>
                 <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.defTitle}>Definición 1:</h3>
                </div>
                <p className={`leading-relaxed ` + styles.parrafo}>
                Sea <Latex>{laT('A,B \\in M_{nxn}')}</Latex> Decimos que <Latex>{laT('A \\text{ y } B')}</Latex>son semejantes si hay <Latex>{laT('M \\in M_{nxn}')}</Latex> invertible tal que <Latex>{laT('A = M^{-1}BM')}</Latex>
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
                Demuestre que si <Latex>{laT('A')}</Latex> es similar a<Latex>{laT('B')}</Latex>, entonces <Latex>{laT('B')}</Latex> es similar a <Latex>{laT('A')}</Latex>.
                </p>

                <div className="ml-8 leading-relaxed">
                    <h4 className={` `+styles.solTitle}>Solución: </h4>
                    <ul>
                        <li>
                            
                            <p className={`leading-relaxed ` + styles.parrafo}>
                               Existe <Latex>{laT('M \\in M_{n}')}</Latex> invertible tal que <Latex>{laT('A=M^{-1}BM')}</Latex>. Sigue eso
                               <Latex>{laT('B=MAM^{-1}')}</Latex>. Tomando <Latex>{laT('N=M^{-1}')}</Latex>, obtenemos <Latex>{laT('B=N^{-1}AN')}</Latex>, es decir, <Latex>{laT('B')}</Latex> y
                                semejante a <Latex>{laT('A')}</Latex>.
                             </p>

                            
                        </li>
                    </ul>
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

export default tema14;