// Tema 14

//For next imports
import Head from 'next/head'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema14.module.css';


//Vars, functions and consts
let expr1 = "$ \\ U $" // Example
let expr2 = "$ \\ V $"
let expr3 = "$ \\mathbb{K} $"
let expr4 = "$L(U,V)=\\begin{Bmatrix} T: U \\rightarrow V : T  \\text{ es transformacion lineal}\\end{Bmatrix}  $"
let expr5 = "$  T: \\mathbb{R}^{2} \\rightarrow \\mathbb{R}^{2} $"
let expr6 = "$ T \\epsilon  L(U)$"
let expr7 = "$ u \\epsilon U$"
let expr8 = "$ \\exists  \\lambda  \\epsilon  \\mathbb{K} $"
let expr9 = "$ T(u)= \\lambda  u V $"
let expr10 = "$ Id : U \\rightarrow U $"
let expr11 = "$ Id(u)=u $"






const tema14 = () => {
    return (
        <Layout>
            <Head>
                <title>Hypatia - Tema 14</title>
            </Head>
            <div className="container mx-auto m-6 rounded-md shadow-xl">

                {/* AQUI VA SU CONTENIDO */}

                <h1 className={`pb-4 `+ styles.mainTitle}>Autovalores y autovectores</h1>
                <p className={`leading-relaxed `+styles.parrafo}>
                  
                Sean <Latex>{expr1}</Latex> y <Latex>{expr2}</Latex>
                espacios vectoriales sobre <Latex>{expr3}</Latex>.
                Denotamos por <Latex>{expr4}</Latex> espacio vectorial sobre <Latex>{expr3}</Latex>
                </p>


                <h3 className={`pb-4 `+ styles.defTitle}>Definición:</h3>

                <p className={`leading-relaxed ` + styles.parrafo}>
                    <Latex>Sean $U$ y $V$ dos espacios vectoriales sobre</Latex> <Latex>{expr3}</Latex> y <Latex>{expr6}</Latex>
                Decimos que un vector no nulo <Latex>{expr7}</Latex> es un autovector de T si <Latex>{expr8}</Latex> tal que <Latex>{expr9}</Latex>
                </p>

                <h3 className={`pb-4 leading-relaxed `+ styles.defTitle}>Ejemplo:</h3>
               

                <p className={`leading-relaxed ` + styles.parrafo}>
                    La transformación identidad <Latex>{expr10}</Latex> definida por <Latex>{expr11}</Latex> tiene 
                    como autovector (vector propio) a cualesquiera vector no nulo <Latex>{expr7}</Latex> puesto que 
                    <Latex>{expr10}</Latex>

                  
                    


                </p>

                <p className={`leading-relaxed ` + styles.parrafo}>

                <iframe scrolling="no" title="Autovalores y autovectores. " src="https://www.geogebra.org/material/iframe/id/yb9ts3kg/width/1000/height/500/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="900px" height="400px"> </iframe>
                </p>


                <p className={`leading-relaxed ` + styles.parrafo}>

                En esta simulación se pretende que se visualicen geométricamente los autovalores y autovectores de una matriz A. Para ello, se supone que A es la matriz asociada en la base canónica a una transformación lineal 
                </p>
                <p className={`leading-relaxed ` + styles.parrafo}>
                <Latex>{expr5}</Latex>.
                </p>
                <p className={`leading-relaxed ` + styles.parrafo}>
                 Entonces los autovectores (<Latex>{expr2}</Latex>) son aquellas direcciones tales que T(<Latex>{expr2}</Latex>)=c * <Latex>{expr2}</Latex>(c constante).
                 </p>
                 <p className={`leading-relaxed ` + styles.parrafo}>
                Es decir las que se mantienen invariantes. 
                Para ello se anima un vector unitario que recorre todo el círculo unidad, a la vez que su transformado. Entonces, cuando un vector V y su transformado coincidan en la misma "dirección", ese vector es un autovector. 
                </p>
                <p className={`leading-relaxed ` + styles.parrafo}>
                <h2 className={styles.importante} >NOTA:</h2> 
                La matriz A puede cambiarse ingresando sus coeficientes en las casillas de control. Luego Actualizar Vistas.
                </p>

            </div>
        </Layout>        
    );
}

export default tema14;