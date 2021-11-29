// Concepto de T.L.

//For next imports
import Head from 'next/head'
import Image from 'next/image'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema09.module.css';

import ImageTeo from '../public/image/01_latex.png' 


function latexTemplate(text) {
    return `$${text}$`
}

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

const expr7_4 =
  '$$\\begin{equation}  \\begin{pmatrix}  1 & 1 & 1 \\\\ 0 &  1 & 1 \\\\ 0 & 0 & 1 \\\\ \\end{pmatrix} \\end{equation} \\rightarrow rango 3 $$ '

const expr_linear =
  '$$\\left\\{\\begin{matrix} x = \\alpha \\\\ y =  \\alpha+ \\beta \\\\ z = \\alpha+ \\beta + \\gamma \\end{matrix} \\right. \\rightarrow \\left\\{\\begin{matrix} x = \\alpha \\\\ \\beta = y - x \\\\ \\gamma = z - \\alpha - \\beta = z - x - (y - x) = z - y \\end{matrix} \\right.  $$'


const tema09 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Transformaciones lineales</title>
            </Head>

            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">
            
            <h1 className={`pb-4 `+ styles.mainTitle}>Transformaciones lineales</h1>
                <p className={`leading-relaxed `+styles.parrafo}>{defTL}</p>    
            
            <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Definición:</h3>
            </div>

                <ul className={`leading-relaxed ml-6 ` + styles.parrafo}>
                    <li><span className="italic"> </span> <Latex>Sean $U$ y $V$ espacios vectoriales sobre un cuerpo</Latex> <Latex>{def1}</Latex>. Una Función <Latex>$T:U \rightarrow V$</Latex> Es una transformación lineal si :</li>
                    <li><span className="italic"> </span><Latex>{def2}</Latex></li>
                    <li><span className="italic"> </span><Latex>{def3}</Latex></li>
                </ul>

          <div className='container mx-auto text-center'>
            <Image src={ImageTeo} width={650} height={400} className={``} />
          </div>
          <p className={`leading-relaxed ` + styles.parrafo}>
            Cuando <Latex>{latexTemplate('U = V')}</Latex>, diremos que{' '}
            <Latex>{latexTemplate('T')}</Latex> es un operador lineal. <br />
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
                <ul className={`leading-relaxed ml-6 ` + styles.parrafo}>
                <li><span className="italic"> i. </span> <Latex> La función $T : U \rightarrow V $ es una transformación lineal $\Leftrightarrow T \left ( u_1 + \lambda u_2 \right) = T \left ( u_1 \right) + \lambda T \left ( u_2 \right) ; \forall u_1 , u_2 \in U, \forall \lambda  \in$</Latex> <Latex>{defk}</Latex> </li> <br></br>
                    <li><span className="italic"> ii.</span> <Latex> $T \left ( 0_u \right) = 0_v$, donde $0_u$ vector nulo en $U$ y $0_v$ es el vector nulo en $V$.</Latex> </li> <br></br>
                    <li><span className="italic"> iii.  </span> <Latex> $T \left ( -u \right) = -T \left ( u \right) ; \forall u \in U.$ </Latex> </li> <br></br>
                    <li><span className="italic"> iiii.  </span> <Latex>{def6}</Latex> </li> <br></br>
                </ul>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 1:</h3>
                </div>

                <ul>
                    <li>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic"> </span> <Latex>$U y V$ son espacios vectoriales sobre $K$</Latex>
                        </p>

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            la funcion nula <Latex>$T : U \rightarrow V$ entonces $u \rightarrow T \left ( u \right) = 0 ; \forall u \in U$  Es una transformación lineal</Latex>
                        </p>
                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            la funcion nula <Latex>La función identidad $Id : U \rightarrow U$ por consiguiente $u \rightarrow Id \left ( u \right) ; \forall u \in U$</Latex>
                        </p>
                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                        <Latex>{latexTemplate('\\therefore')}</Latex> Esto nos indica que{' '}
                        <Latex>{latexTemplate('T')}</Latex>  es transformacion lineal
                        </p>
                    </li>
                    <li>

                    <div className={`flex flex-row `}>
                        <Image 
                            src="/ejercicio_icon.png"
                            alt="Observacion"
                            width={60}
                            height={60}
                        />
                        <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 2:</h3>
                    </div>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic"> </span> Sea <Latex>{def7}</Latex> <Latex>El espacio vectorial real formado por las funciones continuas </Latex> <Latex>{def8}</Latex> La función:
                        </p> 

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            Tenemos <Latex>{def9}</Latex>
                        </p>

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                        <Latex>{latexTemplate('\\therefore')}</Latex> Esto nos indica que{' '}
                        <Latex>{latexTemplate('T')}</Latex>  es transformacion lineal
                        </p>
                            <ul className={`leading-relaxed ml-6 ` + styles.parrafo}>
                                <li><span className="italic"> </span> <Latex>{def10}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def11}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def12}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def13}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def14}</Latex> </li>
                                <li><span className="italic"> </span> <Latex>{def15}</Latex> </li>
                                <Latex>{latexTemplate('\\therefore')}</Latex> Esto nos indica que{' '}
                                <Latex>{latexTemplate('T')}</Latex>  es transformacion lineal
                            </ul>
                    </li>

                    <li>
                        <div className={`flex flex-row `}>
                            <Image 
                                src="/ejercicio_icon.png"
                                alt="Observacion"
                                width={60}
                                height={60}
                            />
                            <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 3:</h3>
                        </div>
                        <p className={`leading-relaxed ` + styles.parrafo}>
                            <span className="italic"> </span> Sea <Latex>{def16}</Latex> definida por <Latex>{def17}</Latex> ¿Es una transformación lineal?
                        </p>

                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            1. Tenemos <Latex>{def18}</Latex> <Latex>{def19}</Latex> <Latex>{def20}</Latex>
                        </p>
                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                            2. Es una Transformación lineal  <Latex>{def21}</Latex> <Latex>{def22}</Latex>
                        </p>
                        <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                        <Latex>{latexTemplate('\\therefore')}</Latex> Esto nos indica que{' '}
                        <Latex>{latexTemplate('T')}</Latex>  es transformacion lineal
                        </p>
                    </li>
                </ul>


            


            <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplos :</h3> 
            </div>


          <ol className={`list-decimal leading-relaxed ml-6 ` + styles.parrafo}>
            <li>
              <span>
                <Latex>
                  {latexTemplate('T: P_{n}(R) \\rightarrow R^{n+1}')}
                </Latex>
                , dada por
                <p
                  className={
                    `text-center leading-relaxed ml-6 ` + styles.parrafo
                  }
                >
                  <Latex>
                    {latexTemplate(
                      'T(\\alpha_{0} + \\alpha_{1}x + ... + \\alpha_{n}x^{n}) = (\\alpha_{0}, ..., \\alpha_{n})'
                    )}
                  </Latex>{' '}
                  <br />
                  <Latex>{latexTemplate('\\therefore T ')}</Latex> es
                transformacion lineal dado que
                </p>
              </span>
              <br></br>
            </li>
            <li>
              Si A <Latex>{latexTemplate(' \\in M_{m*n}')}</Latex>, es una
              matriz dada, definimos:
              <p
                className={`text-center leading-relaxed ml-6 ` + styles.parrafo}
              >
                <Latex>{latexTemplate('T: M{n*1} \\rightarrow M{m*1}')}</Latex>
                <br />
              </p>
              por{' '}
              <Latex>
                {latexTemplate('T(X) \\in M_{n*1} = AX \\in M_{m*1}')}
              </Latex>{' '}
              un producto de <Latex>{latexTemplate('A')}</Latex> con{' '}
              <Latex>{latexTemplate('X')}</Latex> , para todo{' '}
              <Latex>{latexTemplate('X \\in M_{n*1}')}</Latex>
              <p
                className={`text-center leading-relaxed ml-6 ` + styles.parrafo}
              >
                <Latex>
                  {latexTemplate(
                    'T(x_{1} + x_{2}) = A(x*1+x*2) = A_{x1}+A_{x_2} = T(x_{1}) +T(x_{2})'
                  )}
                </Latex>
                <Latex>
                  {latexTemplate(
                    'T(x_{1} + x_{2}) = A(x*1+x*2) = A_{x1}+A_{x_2} = T(x_{1}) +T(x_{2})'
                  )}
                </Latex>
                <br />
                <Latex>{latexTemplate('\\therefore T ')}</Latex> es
                transformacion lineal
              </p>
            </li>
            <br></br>
            <li className='mb-2'>
              <Latex>{latexTemplate('T: C([0,1 ];R) \\rightarrow R')}</Latex>{' '}
              dada por
              <p
                className={`text-center leading-relaxed ml-6 ` + styles.parrafo}
              >
                <Latex>{latexTemplate('T(f) = \\int_{1}^{0} f(x)dx')}</Latex>
              </p>
              para toda funcion{' '}
              <Latex>{latexTemplate('f \\in T: C([0,1 ];R)')}</Latex>{' '}
              <p
                className={`text-center leading-relaxed ml-6 ` + styles.parrafo}
              >
                <Latex>{latexTemplate('\\therefore T ')}</Latex> es
                transformacion lineal
              </p>
            </li>
            <li className='pt-4'>
              <Latex>
                {latexTemplate('T: C^{1}([0,1 ];R) \\rightarrow C([0,1 ])')}
              </Latex>{' '}
              dada por <Latex>{latexTemplate('T(f) = f')}</Latex> una derivada
              de <Latex>{latexTemplate('f')}</Latex> para toda funcion{' '}
              <Latex>{latexTemplate(' f \\in C^{1}([0,1 ];R)')}</Latex>
              <p
                className={`text-center leading-relaxed ml-6 ` + styles.parrafo}
              >
                <Latex>{latexTemplate('\\therefore T ')}</Latex> es
                transformacion lineal dado que
              </p>
              <ol className={`leading-relaxed ml-6 ` + styles.parrafo}>
                <li>
                  {' '}
                  <Latex>
                    {latexTemplate(
                      "$T(f_{1} + f_{2}) = (f_{1} + f_{2})' = f_{1}' + f_{2}' = T(f_{1}) + T(f_{2})$"
                    )}
                  </Latex>
                </li>
                <li>
                  {' '}
                  <Latex>
                    {latexTemplate(
                      "$T(\\lambda f)= (\\lambda f)' = \\lambda f' = \\lambda T(f). $"
                    )}
                  </Latex>{' '}
                  <Latex>
                    {latexTemplate(
                      "$ \\forall f \\in C'([0,1];R), \\forall \\lambda \\in R$"
                    )}
                  </Latex>
                </li>
                <br></br>
              </ol>
            </li>
            <li>
              <p className={`leading-relaxed ` + styles.parrafo}>
                <Latex>{latexTemplate('T: C([0,1];R) \\rightarrow R ')}</Latex>{' '}
                dada por <Latex>{latexTemplate(' T(x,y,z) = x+y+z+1')}</Latex>{' '}
                Nota que{' '}
                <Latex>{latexTemplate('T(0,0,0,0)= 1 \\neq  0')}</Latex>
                <p
                  className={
                    `text-center leading-relaxed ml-6 ` + styles.parrafo
                  }
                >
                  <Latex>{latexTemplate('\\therefore')}</Latex> Esto nos indica
                  que <Latex>{latexTemplate('T')}</Latex> no es transformacion
                  lineal
                </p>
              </p>
            </li>
          </ol>
          <br />
          <p className={`leading-relaxed ` + styles.parrafo}>
            Si <Latex>$T$</Latex> fuera transformacion lineal deberiamos tener
            para <Latex>{latexTemplate('2, T(-f) = -T(f)')}</Latex>
            para toda funcion{' '}
            <Latex>{latexTemplate(' f \\in C([0,1 ];R)')}</Latex>. Para ver que
            esto no sucede, simplemente tome <Latex>f</Latex> como la función
            constante igual a <Latex>1</Latex>. Tenemos en este caso que{' '}
            <Latex>{latexTemplate('T(-1) = 1 = T(1) \\ne -T(1) = -1')}</Latex>
            <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
              <Latex>
                {latexTemplate(
                  'T(-1) = \\int_{1}^{0} 1dx = x\\int_{1}^{0} = 1'
                )}
              </Latex>
              <br />
              <Latex>{latexTemplate('T(1) = \\int_{1}^{0} 1dx = 1')}</Latex>
              <br />
              <Latex>{latexTemplate('\\therefore')}</Latex> Esto nos indica que{' '}
              <Latex>{latexTemplate('T')}</Latex> no es transformacion lineal
            </p>
          </p>

          <div className={`flex flex-row `}>
                <Image 
                    src="/teorema_icon.png"
                    alt="Observacion"
                    width={60}
                    height={60}
                />
                <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Teorema :</h3>
        </div>
        <p className={`leading-relaxed ` + styles.parrafo}>
            Sean <Latex>{latexTemplate('U')}</Latex> y{' '}
            <Latex>{latexTemplate('V')}</Latex> dos espacios vectoriales sobre{' '}
            <Latex>$k$</Latex>. Si{' '}
            <Latex>{latexTemplate('\\{ u_{1}, ..., u_{n} \\} ')}</Latex>
            es una base de <Latex>{latexTemplate('U')}</Latex> y si{' '}
            <Latex>
              {latexTemplate('\\{ v_{1}, ..., v_{n} \\}  \\subseteq V')}
            </Latex>{' '}
            , entonces existe una única transformacion lineal.
            <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
              <Latex>{latexTemplate('T: U \\rightarrow V')}</Latex>
            </p>
            tal que <Latex>{latexTemplate('T(u_{i}) = v_{i}')}</Latex>, para{' '}
            <Latex>{latexTemplate(' i = 1 ... n')}</Latex>
          </p>

          <div className={`flex flex-row `}>
                            <Image 
                                src="/ejercicio_icon.png"
                                alt="Observacion"
                                width={60}
                                height={60}
                            />
                            <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo 1:</h3>
                        </div>                           
          <p></p>
          <p className={`leading-relaxed ` + styles.parrafo}>
            Encontrar una expresión para{' '}
            <Latex>{latexTemplate('F(x, y, z) ')}</Latex> operador lineal{' '}
            <Latex>
              {latexTemplate('F: \\mathbb{R^{3}} \\rightarrow \\mathbb{R^{3}}')}
            </Latex>{' '}
            tal que{' '}
            <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
              <Latex>
                {latexTemplate('F(1, 1, 1) =(1, 1, 0), F(0, 1, 1) =(1, 0, 1) ')}
              </Latex>{' '}
              y <Latex>{latexTemplate('F(0, 0, 1) =(0, 1, 1) ')}</Latex>
            </p>
            <br></br>
            Observemos que{' '}
            <Latex>
              {latexTemplate('\\{ (1, 1, 1), (0, 1, 1), (0, 0, 1) \\}')}
            </Latex>{' '}
            forman una base de <Latex>{latexTemplate('\\mathbb{R^{3}}')}</Latex>
            <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
            </p>
            <br></br>   
            Dado{' '}
            <Latex>{latexTemplate('(x, y, z) \\in \\mathbb{R^{3}}')}</Latex>{' '}
            arbitrario es posible escribir
            <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
              <Latex>
                {latexTemplate(
                  '(x, y, z) = \\alpha(1, 1, 1)+ \\beta(0,1,1) + \\gamma(0,0,1) '
                )}
              </Latex>
              <br />
              <Latex>{expr_linear}</Latex>
            </p>
            <br></br>
            <Latex>
              {latexTemplate(
                'F(x, y, z)= F( \\alpha(1, 1, 1)) + F( \\beta(0, 1, 1))+ F( \\gamma(0, 0, 1))'
              )}
            </Latex>
            <br />
            <Latex>
              {latexTemplate(
                'F(x, y, z)= x * F(1, 1, 1)+ (y -x)*F(0, 1, 1) + (z -y) * F(0, 0, 1)'
              )}
            </Latex>
            <br />
            <Latex>
              {latexTemplate(
                'F(x, y, z)= x*(1,1,0) + (y-x)*(1,0,1)+ (z-y)*(0,1,1)'
              )}
            </Latex>
            <br />
            <Latex>
              {latexTemplate('F(x, y, z)= (x,x,0) + (y-x,0,y-x)+ (0,z-y,z-y)')}
            </Latex>
            <br />
            <Latex>{latexTemplate('F(x, y, z)= (y,x-y+z,-x+z)')}</Latex>
          </p>



                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicioresuelto_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}> Ejercicio resuelto 1:</h3>
                </div>
                <p className={`leading-relaxed ` + styles.parrafo}>
                <span className="italic"> </span> Encontrar una transformacion lineal <Latex>{latexTemplate('T : \\mathbb{R} \\rightarrow  \\mathbb{R}')}</Latex> 
                tal que <Latex>{latexTemplate('T\\left ( 1,2 \\right ) = \\left ( 3, -1 \\right ) \\ y \\ T\\left ( 0,1 \\right ) = \\left ( 1,2 \\right )')}</Latex>
                </p>

                <p className={`leading-relaxed ml-8 ` + styles.parrafo}>
                1. Notemos que <Latex>{latexTemplate('\\left ( 1,2 \\right ) y \\left ( 0,1 \\right )')}</Latex> forman una base en <Latex>{latexTemplate('\\mathbb{R}^{2}')}</Latex>
                Si <Latex>{latexTemplate('\\left ( x,y \\right ) \\in \\mathbb{R}^{2}')}</Latex> entonces podemos verificar tenemos <Latex>{latexTemplate('\\left ( x,y \\right ) = x\\left ( 1,2 \\right ) + \\left ( y - 2x \\right )\\left ( 0,1 \\right )')}</Latex>
                de este modo <Latex>$T$</Latex> debe satisfacer:
                </p>
                
                <p className={`leading-relaxed ` + styles.parrafo}>
                    <Latex>{latexTemplate('$T\\left ( x,y \\right ) = T\\left ( x\\left ( 1,2 \\right ) + \\left ( y-2x \\right )\\left ( 0,1 \\right ) \\right ) = xT\\left ( 1, 2 \\right ) + \\left ( y-2x \\right )T\\left ( 0,1 \\right )$')}</Latex>
                    <Latex>{latexTemplate('$T\\left ( x,y \\right ) = x\\left ( 3,-1 \\right ) + \\left ( y-2x \\right )\\left ( 1,2 \\right ) = \\left ( x+y, 2y-5x \\right )$')}</Latex>
                    <Latex>$\therefore $</Latex> Se puede ver fácilmente que la transformación T definida como arriba es lineal y cumple las condiciones solicitadas.
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/geogebra_icon.png"
                        alt="Observacion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 leading-relaxed `+ styles.defTitle}> Recurso 1:</h3>
                </div>
                <p className={`leading-relaxed ` + styles.parrafo}>
                Este recurso fue contruido en Geogebra e ilustra una transformación lineal dos matrices, tenemos 4 variables que podemos cambiar 
                solo debemos mover el cursor, veremos como nuestro objeto cambia se transforma. Tambien cambiando el valor de 'n' podemos iterar 
                entre imágenes.

                https://www.geogebra.org/m/keG7vsZS
                </p>
                <div className="container mx-auto m-6 rounded-md text-gray-500 text-xl"> 
                    <iframe scrolling="no" title="Transformaciones lineales" src="https://www.geogebra.org/material/iframe/id/Rqdm4sNv/width/1884/height/969/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="1341px" height="816px"> </iframe>
                </div>                                                           
          </div>
        
        </Layout>        
    );
}

export default tema09;