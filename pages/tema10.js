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

const tema10 = () => {
  return (
    <Layout>
      <Head>
        <title>Hypatia - Tema 10</title>
      </Head>
      <div className='container px-8 mx-auto m-6 rounded-md shadow-xl bg-white'>
        {/* tercera parte */}
        <h1 className={`pb-4 ` + styles.mainTitle}>
          Núcleo e imagen de una transformacion lineal
        </h1>
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
        {/* Definición 8.29  */}
        <p className={`leading-relaxed ` + styles.parrafo}>
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
          <h3 className={`py-4 ` + styles.defTitle}>Definiciónes:</h3>
          <h3 className={`pl-4 ` + styles.defTitle}>Definición 1:</h3>
          El núcleo de una transformación lineal{' '}
          <Latex>{latexTemplate('T: U \\rightarrow V')}</Latex>
          el subespacio vectorial de U dado por
          <Latex>{latexTemplate('T^{−1}({0})')}</Latex>, es decir, y el conjunto{' '}
          <Latex>{latexTemplate('{u \\in U; T(u) = 0}')}</Latex>. Denotaremos el
          núcleo de T por N(T)
          <h3 className={`pl-4 ` + styles.defTitle}>Definición 2:</h3>
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
            <li>
              {' '}
              Si <Latex>{latexTemplate('X \\subset U ')}</Latex> definimos la
              imagen de <Latex>{latexTemplate('X')}</Latex> por{' '}
              <Latex>{latexTemplate('T')}</Latex>como el conjunto{' '}
              <Latex>{latexTemplate('T(X) = \\{ T(x); x \\in X \\}')}</Latex>
            </li>
            <li>
              {' '}
              Si <Latex>{latexTemplate('Y \\subset V ')}</Latex> denotamos la
              imagen inversa de<Latex>{latexTemplate('Y')}</Latex> por{' '}
              <Latex>{latexTemplate('T')}</Latex>como el conjunto{' '}
              <Latex>
                {latexTemplate('T^{-1}(Y) = \\{ u \\in U; T(u) \\in Y \\}')}
              </Latex>
            </li>
          </ol>
          Observe que una tranf. lineal{' '}
          <Latex>{latexTemplate('T: U \\rightarrow V ')}</Latex> es sobreyectiva{' '}
          <Latex>{latexTemplate('ImT = V')}</Latex>
          {/* Definición 8.29  */}
          {/* Teorema */}
          <h3 className={`py-4 ` + styles.defTitle}>
            Teorema del núcleo y la imagen
          </h3>
          1. Sean <Latex>{latexTemplate('U')}</Latex> y
          <Latex>{latexTemplate('V')}</Latex>
          espacios vectoriales sobre{' '}
          <Latex>{latexTemplate('\\mathbb{k}')}</Latex> con{' '}
          <Latex>{latexTemplate('dim_{k}U')}</Latex> finita y{' '}
          <Latex>{latexTemplate('T: V \\rightarrow V')}</Latex> una
          transformacion lineal{' '}
          <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
            <Latex>
              {latexTemplate(
                'dim_{\\mathbb{k}}U= dim_{\\mathbb{k}} Ker(T) +  dim_{\\mathbb{k}}Im(T) '
              )}
            </Latex>
          </p>
          {/* Teorema  */}
          2. Sean <Latex>{latexTemplate('U')}</Latex> y{' '}
          <Latex>{latexTemplate('V')}</Latex> espacios vectoriales{' '}
          <Latex>{latexTemplate('T: U \\rightarrow V')}</Latex> una
          transformación lineal. Suponga que <Latex>{latexTemplate('U')}</Latex>{' '}
          tener una dimensión. Tenemos:{' '}
          <p className={`text-center leading-relaxed ml-6 ` + styles.parrafo}>
            <Latex>
              {latexTemplate('dimU = dim\\mathbb{k} (T) + dimT(U)')}
            </Latex>{' '}
          </p>
          <h3 className={`py-4 ` + styles.defTitle}>Proposición 1: </h3>{' '}
          <Latex>{latexTemplate('U')}</Latex> y{' '}
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
          {/* Teorema  */}
          {/* Proposicion*/}
          <h3 className={`pb-4 ` + styles.defTitle}>Proposición 2:</h3>
          Sea <Latex>{latexTemplate('T:U \\rightarrow V')}</Latex> una
          transformación lineal.Tenemos:
          <ol className={`list-decimal leading-relaxed ml-6 ` + styles.parrafo}>
            <li>
              Si <Latex>{latexTemplate('W')}</Latex> es un subespacio vectorial
              de <Latex>{latexTemplate('U')}</Latex>, entonces{' '}
              <Latex>{latexTemplate('T(W)')}</Latex>un subespacio vectorial de{' '}
              <Latex>{latexTemplate('V')}</Latex>
            </li>
            <li>
              Si <Latex>{latexTemplate('W')}</Latex> es un subespacio vectorial
              de <Latex>{latexTemplate('V')}</Latex>, entonces{' '}
              <Latex>{latexTemplate('T^{-1}(W)')}</Latex>un subespacio vectorial
              de <Latex>{latexTemplate('U')}</Latex>
            </li>
          </ol>
          {/* Proposicion*/}
          {/* Pruebas 1 */}
          <h3 className={`pl-4 ` + styles.defTitle}>Prueba 1:</h3>
          Sea W un subespacio vectorial de U. Como{' '}
          <Latex>{latexTemplate('0 \\in W')}</Latex> vemos que{' '}
          <Latex>{latexTemplate('0 = T(0) \\in T(W)')}</Latex>.
          <br />
          Si <Latex>{latexTemplate('x, y \\in T(W)')}</Latex> entonces hay
          <Latex>{latexTemplate('x, w \\in W')}</Latex>
          tales que <Latex>{latexTemplate(' x = T(u) \\in y =T(w)')}</Latex>.
          Dado que W es un subespacio vectorial, tenemos que para cualquier{' '}
          <Latex>
            {latexTemplate('\\lambda \\in R,u + \\lambda w \\in W.')}
          </Latex>
          <br />
          <Latex>
            {latexTemplate(
              'x + \\lambda y = T(u) + \\lambda T(w) = T(u) + T(\\lambda w) = T(u + \\lambda w) \\in T(W)'
            )}
          </Latex>
          {/* Pruebas 1 */}
          <br />
          <h3 className={`pl-4 ` + styles.defTitle}>Prueba 2:</h3>
          {/* Pruebas 2 */}
          Sea W un subespacio vectorial de V. Dado que{' '}
          <Latex>{latexTemplate('T(0) = 0 \\in W')}</Latex>, de deduce que{' '}
          <Latex>{latexTemplate('0 \\in T^{-1}(W)')}</Latex>.
          <br />
          Si <Latex>{latexTemplate('x, y \\in T^{−1}(W)')}</Latex> luego{' '}
          <Latex>{latexTemplate('T(x), T(y) \\in W')}</Latex>. Como W es un
          subespacio vector tenemos que, para cualquier{' '}
          <Latex>
            {latexTemplate('\\lambda \\in R, T (x) + \\lambda T(y) \\in W')}
          </Latex>
          . Pero{' '}
          <Latex>
            {latexTemplate('\\lambda \\in R, T (x) + \\lambda T(y) \\in W')}
          </Latex>{' '}
          <Latex>
            {latexTemplate('T(x + \\lambda y) = T(x) + \\lambda T(y) \\in W')}
          </Latex>
          y por lo tanto
          <Latex>{latexTemplate('x + \\lambda y \\in T^{−1}(W)')}</Latex>.
          {/* Pruebas 2 */}
          {/* Proposición 8.30  */}
          <h3 className={`pb-4 ` + styles.defTitle}>Proposición 3 :</h3>
          Sea <Latex>{latexTemplate('T: U \\rightarrow V')}</Latex> una
          transformación lineal. T es inyecta si y solo si{' '}
          <Latex>{latexTemplate('N(T) = \\{0\\}.')}</Latex>.
          <h3 className={`pl-4 pb-4 ` + styles.defTitle}>Demostración:</h3>T es
          inyectiva si y solo si la ecuación{' '}
          <Latex>{latexTemplate('T(u) = 0')}</Latex> tiene{' '}
          <Latex>{latexTemplate('u = 0')}</Latex> como única solución. Esto es
          lo mismo que decir que el conjunto{' '}
          <Latex>{latexTemplate('N(T)')}</Latex> está formado solo porel
          elemento 0.
          {/* Proposición 8.30  */}
          {/* Ejercicio 8.31  */}
          <h3 className={`pl-4 pb-4 ` + styles.defTitle}>Ejercicio 1</h3>
          Sea <Latex>{latexTemplate('T \\in L(U)')}</Latex> . Muestra que{' '}
          <Latex>{latexTemplate('T_{2} = 0')}</Latex> si y solo si{' '}
          <Latex>{latexTemplate('T (U) \\subset N (T)')}</Latex>. Resolución:
          <br />
          Suponga que <Latex>{latexTemplate('T_{2} = 0')}</Latex>. Si
          <Latex>{latexTemplate('v \\in T(U)')}</Latex> entonces hay{' '}
          <Latex>{latexTemplate('u \\in U')}</Latex> tal que{' '}
          <Latex>{latexTemplate('v \\in T(u)')}</Latex> y por lo tanto{' '}
          <Latex>{latexTemplate('T(v) = T_{2}(u) = 0')}</Latex>. Por tanto,
          <Latex>{latexTemplate('v \\in N(T)')}</Latex> . Ahora suponga que{' '}
          <Latex>{latexTemplate('T(U) \\subset N(T)')}</Latex>. Dado{' '}
          <Latex>{latexTemplate('u \\in U')}</Latex>, como{' '}
          <Latex>{latexTemplate('T(u) \\in T(U) \\subset N(T)')}</Latex> ,
          tenemos <Latex>{latexTemplate('T_{2}(u) = T(T(u)) = 0')}</Latex>.
          {/* Ejercicio 8.31  */}
          {/* Ejercicio 8.32  */}
          <h3 className={`pl-4 pt-4 ` + styles.defTitle}>Ejercicio 2:</h3>
          Sea <Latex>{latexTemplate('θ \\in R.')}</Latex> Encuentre el núcleo de
          la transformación lineal
          <Latex>{latexTemplate('T: R^{2} \\rightarrow R^{2}')}</Latex> dado por
          <Latex>
            {latexTemplate(
              'T(x, y)= (x \\cos \\theta - y\\sin \\theta, x\\sin \\theta + y\\cos \\theta)'
            )}
          </Latex>
          <br />
          Resolución: Por definición,{' '}
          <Latex>{latexTemplate('(x, y) \\in N(T)')}</Latex> si y solo si{' '}
          <Latex>{latexTemplate('T(x, y) = (0, 0)')}</Latex> , es decir, si y
          solo si{' '}
          <Latex>
            {latexTemplate(
              '(x \\cos \\theta - y\\sin \\theta, x\\sin \\theta + y\\cos \\theta) = (0,0)'
            )}
          </Latex>
          <br />
          <Latex>
            {latexTemplate('(x \\cos \\theta - y\\sin \\theta = 0)')}
          </Latex>
          ,
          <Latex>
            {latexTemplate(
              '(x\\sin \\theta + y\\cos \\theta) = 0 \\rightarrow'
            )}
          </Latex>
          <Latex>{latexTemplate('(x,y) = (0,0)')}</Latex>
          <br />
          Por lo tanto, <Latex>{latexTemplate('N(T) = {(0, 0)}')}</Latex>
          {/* Ejercicio 8.32  */}
          {/* Ejercicio */}
          {/* Pregunta para el alumno */}
          <h3 className={`p-4 ` + styles.defTitle}>Ejercicio Propuesto</h3>
          Sea <Latex>{latexTemplate('V')}</Latex> un espacio de dimensión 1.
          Demuestre que cualquier transformación lineal distinta de cero
          <Latex>{latexTemplate('T: U \\rightarrow V')}</Latex> es sobreyectiva.
          <br />
          {/* Dado que <Latex>{latexTemplate('T \\ne 0')}</Latex>, hay{' '}
          <Latex>{latexTemplate('u_{0} \\in U')}</Latex>
          tal que <Latex>{latexTemplate('T(u_{0}) = 0')}</Latex> Ya que{' '}
          <Latex>{latexTemplate('V')}</Latex>
          tiene dimensión 1, por lo que cualquier base de{' '}
          <Latex>{latexTemplate('V')}</Latex> y está formada por un elemento y
          dado que <Latex>{latexTemplate('T(u_{0}) \\in V')}</Latex> y no nulo
          (por lo tanto, l.i.), él mismo forma una base de{' '}
          <Latex>{latexTemplate('V')}</Latex>. Por lo tanto, dado{' '}
          <Latex>{latexTemplate('v \\in V')}</Latex> existe
          <Latex>{latexTemplate('a \\in R')}</Latex> tal que{' '}
          <Latex>{latexTemplate('v = αT(u_{o}) = T(αu_{o})')}</Latex>, o es
          decir, T y sobreyectiva. */}
          {/* Ejercicio */}
          <h3 className={`pl-4 pt-4 ` + styles.defTitle}>Recursos:</h3>
          Transformación lineal como mapeo
          <iframe
            scrolling='no'
            title='Kernel and image'
            src='https://www.geogebra.org/material/iframe/id/fpmabczn/width/1280/height/556/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false'
            width='790px'
            height='300px'
          >
            {' '}
          </iframe>
        </p>

        <h3 className={`pl-4 pt-4 ` + styles.defTitle}>Bibliografía:</h3>

        <ul className={`ml-8 pb-8 ` + styles.biblio}>
          <li className='mb-4'>
            [1] Dr.Judith Hayde Cruz Torres (2021). Curso de Matematica Aplicada
            a la Computación , UNSA
          </li>
          <li className='mb-4'>
            [2] Zani, S. L. (n.d.). Álgebra Linear. ICMC - USP.
          </li>
          <li className='mb-4'>
            [3] Dovid Fein (2020). Kernel and image. Geogebra
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default tema10
