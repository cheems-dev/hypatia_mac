// Tema 10:
import 'katex/dist/katex.min.css'
import Head from 'next/head'
import Image from 'next/image'
import Latex from 'react-latex-next'
import Layout from '../components/layout'
import ImageTeo from '../public/image/01_latex.png'
import ImageIm from '../public/image/02_latex.png'
import styles from './tema09.module.css'

function latexTemplate(text) {
  return `$${text}$`
}
const expr7_4 =
  '$$\\begin{equation}  \\begin{pmatrix}  1 & 1 & 1 \\\\ 0 &  1 & 1 \\\\ 0 & 0 & 1 \\\\ \\end{pmatrix} \\end{equation} \\rightarrow rango 3 $$ '

const expr_linear =
  '$$\\left\\{\\begin{matrix} x = \\alpha \\\\ y =  \\alpha+ \\beta \\\\ z = \\alpha+ \\beta + \\gamma \\end{matrix} \\right. \\rightarrow \\left\\{\\begin{matrix} x = \\alpha \\\\ \\beta = y - x \\\\ \\gamma = z - \\alpha - \\beta = z - x - (y - x) = z - y \\end{matrix} \\right.  $$'

const tema10 = () => {
  return (
    <Layout>
      <Head>
        <title>Hypatia - Tema 10</title>
      </Head>
      <div className='container px-8 mx-auto m-6 rounded-md shadow-xl bg-white'>
        {/* incio del 1 */}
        <div>
          <h1 className={`pb-4 ` + styles.mainTitle}>Nucleo e Imagén</h1>
          <h3 className={`pb-4 ` + styles.defTitle}>Definición: </h3>
          <p className={`leading-relaxed ` + styles.parrafo}>
            Sean <Latex>{latexTemplate('U')}</Latex> y{' '}
            <Latex>{latexTemplate('V')}</Latex> dos espacios vectoriales sobre{' '}
            <Latex>
              {latexTemplate(
                '\\mathbb{K} \\left ( \\mathbb{K} = \\mathbb{R} \\ o \\ \\mathbb{C} \\right )'
              )}
            </Latex>
          </p>
          <div className='container mx-auto text-center'>
            <Image src={ImageTeo} width={650} height={400} className={``} />
          </div>
          <p className={`leading-relaxed ` + styles.parrafo}>
            Cuando <Latex>{latexTemplate('U = V')}</Latex>, diremos que{' '}
            <Latex>{latexTemplate('T')}</Latex> es un operador lineal. <br />
          </p>
          <h3 className={`pb-4 ` + styles.defTitle}>Ejemplos: </h3>
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
                  <Latex>{latexTemplate('\\therefore  ')}</Latex> es
                  transformacion lineal
                </p>
              </span>
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
                      "T(f_{1} + f_{2}) = (f_{1} + f_{2})' = f_{1}' + f_{2}' = T(f_{1}) + T(f_{2})"
                    )}
                  </Latex>
                </li>
                <li>
                  {' '}
                  <Latex>
                    {latexTemplate(
                      "T(\\lambda f)= (\\lambda f)' = \\lambda f' = \\lambda T(f). "
                    )}
                  </Latex>{' '}
                  <Latex>
                    {latexTemplate(
                      " \\forall f \\in C'([0,1];R), \\forall \\lambda \\in R"
                    )}
                  </Latex>
                </li>
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
        </div>
        {/* incio del 2 */}
        <div>
          <h3 className={`pb-4 ` + styles.defTitle}>Teorema: </h3>
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

          <h3 className={`pb-4 ` + styles.defTitle}>Ejemplo 1: </h3>
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
            Observemos que{' '}
            <Latex>
              {latexTemplate('\\{ (1, 1, 1), (0, 1, 1), (0, 0, 1) \\}')}
            </Latex>{' '}
            forman una base de <Latex>{latexTemplate('\\mathbb{R^{3}}')}</Latex>
            <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
              <Latex>{expr7_4}</Latex>
            </p>
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
        </div>
        {/* tercera parte */}
        <h3 className={`pb-4 ` + styles.defTitle}>
          Núcleo e imagen de una transformacion lineal
        </h3>
        <div className='container flex justify-center my-5'>
          <iframe
            width='600'
            height='315'
            src='https://www.youtube.com/embed/hZ827mfh1Jo'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <p className={`leading-relaxed ` + styles.parrafo}>
          Sean U y V dos espacios vectorales sobre{' '}
          <Latex>{latexTemplate('\\mathbb{k} ')}</Latex> y
          <Latex>{latexTemplate('T: U \\rightarrow V ')}</Latex> una
          transformacion lineal. Entonces: <br />
          <ol className={`list-decimal leading-relaxed ml-6 ` + styles.parrafo}>
            <li>
              {' '}
              El conjunto{' '}
              <Latex>
                {latexTemplate('Ker(T) = { u \\in U: T(u) = v \\subset U }')}
              </Latex>{' '}
              es llamado núcleo de T.
            </li>
            <li>
              {' '}
              El conjunto{' '}
              <Latex>
                {latexTemplate(
                  'Im(T) = { v \\in V: u \\in U con  T(u) = v \\subset V }'
                )}
              </Latex>{' '}
              es llamado imagen de T.
            </li>
          </ol>
          Observe que una tranf. lineal{' '}
          <Latex>{latexTemplate('T: U \\rightarrow V ')}</Latex> es sobreyectiva{' '}
          <Latex>{latexTemplate('ImT = V')}</Latex>
          <h3 className={`pb-4 ` + styles.defTitle}>Proposición:</h3>
          Sean <Latex>{latexTemplate('U')}</Latex> y{' '}
          <Latex>{latexTemplate('V')}</Latex> dos espacios vectoriales sobre{' '}
          <Latex>{latexTemplate('\\mathbb{k} ')}</Latex> y
          <Latex>{latexTemplate('T: U \\rightarrow V ')}</Latex> transf. lineal
          Entonces: <br />
          <ol className={`list-decimal leading-relaxed ml-6 ` + styles.parrafo}>
            <li>
              <Latex>{latexTemplate('Ker(T)')}</Latex> es un subespacio
              vectorial de <Latex>{latexTemplate('U')}</Latex>y{' '}
              <Latex>{latexTemplate('Im(T)')}</Latex> es un subespacio vectorial
              de <Latex>{latexTemplate('V')}</Latex>
            </li>
            <li>
              <Latex>{latexTemplate('T')}</Latex> es inyectiva{' '}
              <Latex>{latexTemplate('Ker(T) = \\{0\\}')}</Latex>
            </li>
          </ol>
          {/* Imagen */}
          <div className='container mx-auto text-center'>
            <Image src={ImageIm} width={650} height={400} className={``} />
          </div>
          {/* Imagen */}
          <ul className={` leading-relaxed ml-6 ` + styles.parrafo}>
            <li>
              <Latex>{latexTemplate('dim_{k}Ker(T)')}</Latex> es llamada nulidad
              de <Latex>{latexTemplate('T')}</Latex>
            </li>
            <li>
              <Latex>{latexTemplate('dim_{k}Im(T)')}</Latex> es llamada rango de{' '}
              <Latex>{latexTemplate('T')}</Latex>
            </li>
          </ul>
          <h3 className={`pb-4 ` + styles.defTitle}>Ejemplo:</h3>
          Considere la transf. Lineal
          <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
            <Latex>
              {latexTemplate(
                'T: \\mathbb{R^{3}} \\rightarrow M_{2}(\\mathbb{R})'
              )}
            </Latex>
            <br />
            <Latex>
              {
                '$$(a,b,c) \\rightarrow T(a,b,c) =  \\begin{pmatrix} a +b & 0\\\\ 0 & c-b \\end{pmatrix} $$'
              }
            </Latex>
          </p>
          Determinemos:
          <ol className={`list-decimal leading-relaxed ml-6 ` + styles.parrafo}>
            <li>
              <Latex>{latexTemplate('Ker(T) = Nu(T)')}</Latex>
              <p
                className={`text-center leading-relaxed ml-6 ` + styles.parrafo}
              >
                <Latex>
                  {
                    '$$ Ker(T) =\\{ (a,b,c) \\in R^{3}: T(a,b,c)  = \\begin{pmatrix} 0 & 0\\\\ 0 & 0 \\end{pmatrix} \\}$$'
                  }
                </Latex>
                <Latex>{''}</Latex>
                <br />
                <Latex>
                  {
                    '$$ Ker(T) = \\left\\{ \\begin{pmatrix} a & b\\\\ c & d \\end{pmatrix} \\in M_2(\\mathbb{R}): T \\begin{pmatrix} a & b\\\\ c & d \\end{pmatrix} = (0,0,0,0) \\right\\} $$'
                  }
                </Latex>
                <br />
              </p>
              Tenemos <Latex>{latexTemplate('(a,b,c) \\in Ker(T)')}</Latex>:
              <p
                className={`text-center leading-relaxed ml-6 ` + styles.parrafo}
              >
                <Latex>
                  {
                    '$$T(a,b,c) =\\begin{pmatrix} 0 & 0\\\\ 0 & 0 \\end{pmatrix} $$'
                  }
                </Latex>
                <Latex>
                  {
                    '$$\\begin{pmatrix} a+b & 0\\\\ 0 & c-b \\end{pmatrix}  =\\begin{pmatrix} 0 & 0\\\\ 0 & 0 \\end{pmatrix} \\rightarrow \\begin{matrix} a+b = 0 \\rightarrow a = -b \\\\ c-b = 0  \\rightarrow c = b \\end{matrix} $$'
                  }
                </Latex>
                <Latex>{'$$ (a,b,c) = (-b,b,b); b \\in \\mathbb{R} $$'}</Latex>
                <Latex>{'$$ (a,b,c) = b(-1,1,1); b \\in \\mathbb{R} $$'}</Latex>
                <Latex>
                  {latexTemplate(
                    '\\therefore Ker(T) = [(-1,1,1) ]; b \\subset \\mathbb{R^{3}}'
                  )}
                </Latex>{' '}
                y{' '}
                <Latex>{latexTemplate('dim_{\\mathbb{R}} Ker(T) = 1 ')}</Latex>
              </p>
            </li>
            <li>
              <Latex>{latexTemplate('Im(T)')}</Latex>:
              <p
                className={`text-center leading-relaxed ml-6 ` + styles.parrafo}
              >
                <Latex>
                  {latexTemplate(
                    'Im(T) = \\{ \\begin{pmatrix} a+b & 0\\\\ 0 & c-b \\end{pmatrix} \\in M_{2}(\\mathbb{R}) : \\exists(a , b, c) \\in \\mathbb{R^{3}}'
                  )}
                </Latex>{' '}
                con{' '}
                <Latex>
                  {latexTemplate(
                    'T(a,b,c)\\begin{pmatrix} a+b & 0\\\\ 0 & c-b \\end{pmatrix} \\}'
                  )}
                </Latex>
              </p>
              <br />
              Tenemos{' '}
              <Latex>
                {latexTemplate(
                  '\\begin{pmatrix} a+b & 0\\\\ 0 & c-b \\end{pmatrix} \\in Im(T) \\rightarrow \\begin{pmatrix} a+b & 0\\\\ 0 & c-b \\end{pmatrix} =  a \\begin{pmatrix} 1 & 0\\\\ 0 & 0 \\end{pmatrix} + b \\begin{pmatrix} 1 & 0\\\\ 0 & -1 \\end{pmatrix} + c \\begin{pmatrix} 0 & 0\\\\ 0 & 1 \\end{pmatrix}'
                )}
              </Latex>{' '}
              donde <Latex>{latexTemplate('a, b, c \\in \\mathbb{R}')}</Latex>
              <br />
              <br />
              El conjunto{' '}
              <Latex>
                {latexTemplate(
                  '\\{ \\begin{pmatrix} 1 & 0\\\\ 0 & 0 \\end{pmatrix}, \\begin{pmatrix} 1 & 0\\\\ 0 & -1 \\end{pmatrix}, \\begin{pmatrix} 0 & 0\\\\ 0 & 1 \\end{pmatrix}\\} \\rightarrow \\{A_{1},A_{2},A_{3}\\}'
                )}
              </Latex>{' '}
              es generador de <Latex>{latexTemplate('Im(T)')}</Latex>
              <br />
              <br />
              Observa que{' '}
              <Latex>
                {latexTemplate(
                  'A_{3} =A_{2}= A_{3}\\rightarrow B = \\{ \\begin{pmatrix} 1 & 0\\\\ 0 & 0 \\end{pmatrix}, \\begin{pmatrix} 1 & 0\\\\ 0 & -1 \\end{pmatrix} \\}'
                )}
              </Latex>{' '}
              base de <Latex>{latexTemplate('Im(T)')}</Latex>
              <br />
              Asi <Latex>
                {latexTemplate('dim_{\\mathbb{R}}Im(T) = 2 ')}
              </Latex>{' '}
              y observamos
              <p
                className={`text-center leading-relaxed ml-6 ` + styles.parrafo}
              >
                <Latex>
                  {latexTemplate(
                    '\\therefore dim_{\\mathbb{R}} Ker(T) +  dim_{\\mathbb{R}}Im(T) = dim_{\\mathbb{R}}\\mathbb{R^{3}}'
                  )}
                </Latex>
              </p>
            </li>
          </ol>
          <h3 className={`pb-4 ` + styles.defTitle}>Lema</h3>
          Sean <Latex>{latexTemplate('U')}</Latex> y
          <Latex>{latexTemplate('V')}</Latex>
          espacios vectoriales sobre{' '}
          <Latex>{latexTemplate('\\mathbb{k}')}</Latex> y
          <Latex>{latexTemplate('T: U \\rightarrow V')}</Latex> una
          transformacion lineal. <br />
          Si <Latex>{latexTemplate('B = \\{ u_{1}, ... , u_{n} \\}')}</Latex> es
          una base de <Latex>{latexTemplate('U')}</Latex>, entonces{' '}
          <Latex>{latexTemplate('\\{ T(u_{1}), ... , T(u_{n}) \\}')}</Latex>{' '}
          generan <Latex>{latexTemplate('Im(T)')}</Latex>
          <h3 className={`pb-4 ` + styles.defTitle}>Teorema</h3>
          Sean <Latex>{latexTemplate('U')}</Latex> y
          <Latex>{latexTemplate('V')}</Latex>
          espacios vectoriales sobre{' '}
          <Latex>{latexTemplate('\\mathbb{k}')}</Latex> con{' '}
          <Latex>{latexTemplate('dim_{k}U')}</Latex> finita y{' '}
          <Latex>{latexTemplate('T: V \\rightarrow V')}</Latex> una
          transformacion lineal
          <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
            <Latex>
              {latexTemplate(
                'dim_{\\mathbb{k}}U= dim_{\\mathbb{k}} Ker(T) +  dim_{\\mathbb{k}}Im(T) '
              )}
            </Latex>
          </p>
        </p>
      </div>
    </Layout>
  )
}

export default tema10
