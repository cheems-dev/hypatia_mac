// Tema 10:
import 'katex/dist/katex.min.css'
import Head from 'next/head'
import Latex from 'react-latex-next'
import Layout from '../components/layout'

const definition = '$\\gamma_{1}^2 + x = y^2$'
/* const definition = '$T:U$\\rightarrowV*2$' */

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
        <h2 className='text-3xl font-bold'>Nucleo e Imagén</h2>
        <h3 className='text-red-600 py-5 text-lg font-bold'>Definición: </h3>
        Sean <Latex>{latexTemplate('U y V')}</Latex>
        dos espacios vectoriales sobre <Latex>{latexTemplate('k')}</Latex>. Si{' '}
        <Latex>{latexTemplate('{u_{1}, ... , u{n}}')}</Latex> es una base de{' '}
        <Latex>{latexTemplate('U')}</Latex> y si{' '}
        <Latex>{latexTemplate('{v_{1}, ... , v{n}} \\subseteq V')}</Latex>,
        entonces existe una única transformacion lineal:
        <p className='text-center'>
          <Latex>{latexTemplate('T:U\\rightarrow V')}</Latex>
        </p>
        tal que <Latex>{latexTemplate('T(U{i})=V{i}')}</Latex>, para{' '}
        <Latex>{latexTemplate('i = 1 ... n')}</Latex>
        {/*  <h3 className='text-red-600 py-5 text-lg font-bold'>Ejemplo 1: </h3>
        <ol className='ml-10 list-decimal'>
          <li>
            Si <Latex>{latexTemplate('X\\subset U')}</Latex>, define la imagen
            de <Latex>{latexTemplate('X')}</Latex> por{' '}
            <Latex>{latexTemplate('T')}</Latex> como el conjunto{' '}
            <Latex>{latexTemplate(' T(X) = \\{T(x); x \\in X \\}')}</Latex>
          </li>
          <li>
            Si <Latex>{latexTemplate('Y \\subset V')}</Latex>, denotamos la
            imagen inversa de <Latex>{latexTemplate('Y')}</Latex> por{' '}
            <Latex>{latexTemplate('T')}</Latex> como el conjunto{' '}
            <Latex>
              {latexTemplate(' (Y) = \\{u \\in U; T(u) \\in Y \\}')}
            </Latex>
          </li>
        </ol> */}
        <h3 className='text-red-600 py-5 text-lg font-bold'>Prueba: </h3>
        Sea <Latex>{latexTemplate('W')}</Latex> un subespacio vectorial de{' '}
        <Latex>{latexTemplate('U')}</Latex>
        <br />
        Como <Latex>{latexTemplate('0 \\in W')}</Latex> vemos que{' '}
        <Latex>{latexTemplate('0 = T(0) \\in T(w)')}</Latex>
        <br />
        Si <Latex>{latexTemplate('x, y \\in T(w)')}</Latex> entonces hay{' '}
        <Latex>{latexTemplate('u, w \\in W')}</Latex> tales que{' '}
        <Latex>{latexTemplate('x = T(u), y = T(w)')}</Latex>. Dado que{' '}
        <Latex>{latexTemplate('W')}</Latex> es un subespacio vectorial, tenemos
        que para cualquier{' '}
        <Latex>{latexTemplate('\\lambda \\in R, \\lambda w + u \\in W')}</Latex>
        . Asi:
        <br />
        <p className='text-center'>
          <Latex>
            {latexTemplate(
              'x + \\lambda y = T(u) + \\lambda T(w) = T(u) + T( \\lambda w) = T(u + \\lambda w) \\in T(W)'
            )}
          </Latex>
        </p>
        <br />
        Sea <Latex>{latexTemplate('W')}</Latex> un subespacio vectorial de{' '}
        <Latex>{latexTemplate('V')}</Latex>
        <br />
        Dado que <Latex>{latexTemplate('T(0) = 0 \\in W ')}</Latex>, se deduce
        que <Latex>{latexTemplate('0 \\in T_{-1}(W)')}</Latex>
        <br />
        Si <Latex>{latexTemplate('X,Y \\in T_{-1}(W)')}</Latex> entonces{' '}
        <Latex>{latexTemplate('T(x), T(y) \\in W')}</Latex>.Como{' '}
        <Latex>{latexTemplate('W')}</Latex> es un subespacio vector tenemos que,
        para cualquier{' '}
        <Latex>
          {latexTemplate('\\lambda \\in  R, T(x) + \\lambda T(y) \\in W')}
        </Latex>
        . Pero{' '}
        <Latex>
          {latexTemplate('T(x+ \\lambda y) = T(x) + \\lambda T(y) \\in W')}
        </Latex>{' '}
        y por lo tanto
        <Latex>{latexTemplate('x+ \\lambda y \\in T_{-1}(W) ')}</Latex>
        <h3 className='text-red-600 py-5 text-lg font-bold'>Ejemplos: </h3>
        <ol className='ml-10 list-decimal'>
          <li>
            <Latex>{latexTemplate('T: P_{n}(R) \\rightarrow R^{n+1}')}</Latex>,
            dada por
            <p className='text-center'>
              <Latex>
                {latexTemplate(
                  'T(\\alpha_{0} + \\alpha_{1}x + ... + \\alpha_{n}x^{n}) = (\\alpha_{0}, ..., \\alpha_{n})'
                )}
              </Latex>{' '}
              <br />
              <Latex>{latexTemplate('\\therefore  ')}</Latex> es transformacion
              lineal
            </p>
          </li>
          <li>
            Si <Latex>{latexTemplate('\\lambda \\in M_{m*n}')}</Latex>, es una
            matriz dada, definimos:
            <p className='text-center'>
              <Latex>{latexTemplate('T: M{n*1} \\rightarrow M{m*1}')}</Latex>
              <br />
            </p>
            por{' '}
            <Latex>
              {latexTemplate('T(X) \\in M_{n*1} = \\lambda X \\in M_{m*1}')}
            </Latex>{' '}
            un producto de <Latex>{latexTemplate('A')}</Latex> con{' '}
            <Latex>{latexTemplate('X')}</Latex> , para todo{' '}
            <Latex>{latexTemplate('X \\in M_{n*1}')}</Latex>
            <p className='text-center'>
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
              <Latex>{latexTemplate('\\therefore T ')}</Latex> es transformacion
              lineal
            </p>
          </li>
          <li>
            <Latex>{latexTemplate('T: C([0,1 ];R) \\rightarrow R')}</Latex> dada
            por
            <p className='text-center'>
              <Latex>{latexTemplate('T(f) = \\int_{1}^{0} f(x)dx')}</Latex>
            </p>
            para toda funcion{' '}
            <Latex>{latexTemplate('f \\in T: C([0,1 ];R)')}</Latex>{' '}
            <p className='text-center'>
              <Latex>{latexTemplate('\\therefore T ')}</Latex> es transformacion
              lineal
            </p>
          </li>
          <li>
            <Latex>
              {latexTemplate('T: C^{1}([0,1 ];R) \\rightarrow C([0,1 ])')}
            </Latex>{' '}
            dada por <Latex>{latexTemplate('T(f) = f')}</Latex> una derivada de{' '}
            <Latex>{latexTemplate('f')}</Latex> para toda{' '}
            <Latex>{latexTemplate(' f \\in C^{1}([0,1 ];R)')}</Latex>
            <p className='text-center'>
              <Latex>{latexTemplate('\\therefore T ')}</Latex> es transformacion
              lineal dado que
            </p>
            <ol className='ml-6 list-decimal'>
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
            <Latex>{latexTemplate('T: C([0,1];R) \\rightarrow R ')}</Latex> dada
            por <Latex>{latexTemplate(' T(x,y,z) = x+y+z+1')}</Latex> Nota que{' '}
            <Latex>{latexTemplate('T(0,0,0,0)= 1 \\neq  0')}</Latex>
            <p className='text-center'>
              <Latex>{latexTemplate('\\therefore')}</Latex> Esto nos indica que{' '}
              <Latex>{latexTemplate('T')}</Latex> no es transformacion lineal
            </p>
          </li>
          <li>
            <Latex>{latexTemplate('T: C([0,1 ];R) \\rightarrow R')}</Latex> dada
            por
            <p className='text-center'>
              <Latex>{latexTemplate('T(f) = \\int_{1}^{0} |f(x)|dx,')}</Latex>
            </p>
            para toda funcion de{' '}
            <Latex>{latexTemplate(' f \\in  C([0,1 ];R)')}</Latex>. Si{' '}
            <Latex>{latexTemplate('T')}</Latex> fuera linear deberiamos tener
            para 2, <Latex>{latexTemplate('T(-f) = -T(f)')}</Latex> para toda
            funcion <Latex>{latexTemplate('f \\in C([0,1 ];R')}</Latex>. Para
            ver que mas esta ocurriendo, basta tomar f como una funcion
            constante igual a 1. Tenemos este caso{' '}
            <Latex>{latexTemplate('T(-1) =1 = T(1) \\neq  -T(1) = -1')}</Latex>
            <p className='text-center'>
              <Latex>{latexTemplate('\\therefore')}</Latex> Asi que{' '}
              <Latex>{latexTemplate('T')}</Latex> no es transformacion lineal
            </p>
          </li>
        </ol>
      </div>
    </Layout>
  )
}

export default tema10
