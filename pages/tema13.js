// Tema 13: 

//For next imports
import Head from 'next/head'

//For katex imports
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

//Own imports
import Layout  from '../components/layout';
import styles from './tema13.module.css';
import Navbar from '../components/navbar';


//Vars, functions and consts
let expr1 = "$\\gamma_{1}^2 + x = y^2$" // Example
const exp1 = "$b_1,...,b_n$"
const exp2 = "$c_1,...,c_n$"
const exp3 = "${\\alpha_i}_j$"
const exp4 = "$\\epsilon$"
const exp5 = "$\\mathbb{R}$"
const exp6 = "$1 \\leq i, j \\leq n$"
const exp7 = "$c_1={\\alpha_1}_1b_1+...+{\\alpha_n}_1b_n$"
const exp8 = "$c_n={\\alpha_1}_nb_1+...+{\\alpha_n}_nb_n$"
const exp9 = "$\\vdots$"
let exp10 = "$M^{C}_B$"
let exp11 = "$R^3$"
const exp12 = "${c_1}_B=\\begin{bmatrix} {\\alpha_1}_1 \\\\ \\vdots \\\\ {\\alpha_n}_1 \\end{bmatrix}$"
const exp13 = "${c_n}_B=\\begin{bmatrix} {\\alpha_1}_n \\\\ \\vdots \\\\ {\\alpha_n}_n \\end{bmatrix}$"
const exp14 = "$M^{C}_B=\\begin{bmatrix} {\\alpha_1}_1 & \\cdots & {\\alpha_1}_n  \\\\ \\vdots & \\ddots & \\vdots \\\\ {\\alpha_n}_1 & \\cdots & {\\alpha_n}_n \\end{bmatrix}$"
//=\\{alpha_1}_1
//b_1 + ... + \\alpha_n_1 b_n
// <Latex>{exp2}</Latex> PONER ECUACION EN LATEX
const tema13 = () => {
    return (
        <Layout>
            
            <Head>
                <title>Hypatia - Tema 13</title>
            </Head>
            <div className="container px-8 mx-auto m-6 rounded-md shadow-xl bg-white">
                <h1 className={styles.titulo}>CAMBIO DE BASE</h1>
                <br/>
                {/* AQUI VA SU CONTENIDO */}
                <h2 className={styles.subtitulo}>Introduccion</h2>
                Las ecuaciones de cambio de base nos permiten obtener las
                coordenadas de un vector respecto de una base supuesto que las 
                conocemos respecto de otra.
                <br/>
                Si bien esas coordenadas de un elemento de un espacio 
                vectorial puede variar cuando se consideran diferentes bases.
                <br/>
                ¿Cómo se produce ese cambio, en otras palabras, cómo es posible 
                encontrar esas coordenadas?
                <br/>
                <br/>
                <h3 className={styles.titulo}>Definicion</h3>
                Sea V un espacio vectorial finitamente generado. Sean B y C las 
                bases de V formadas por los vectores <Latex>{exp1}</Latex> y <Latex>{exp2}</Latex>, 
                respectivamente.
                 <br/> 
                Como B es una base, existen <Latex>{exp3}</Latex> <Latex>{exp4}</Latex> <Latex>{exp5}</Latex>, <Latex>{exp6}</Latex> tales que: 
                <br/>
                <Latex>{exp7}</Latex>
                <br/>
                <Latex>{exp9}</Latex>
                <br/>
                <Latex>{exp8}</Latex>
                <br/>
                <br/>
                Por lo tanto, las coordenadas de <Latex>{exp2}</Latex> con respecto a la base B son, respectivamente:
                <br/>
                <Latex>{exp12}</Latex> , ... , <Latex>{exp13}</Latex>.
                <br/>
                <br/>
                Reunimos esta información sobre las coordenadas de los vectores de la base C con respecto a la base B en la siguiente matriz:
                <br/>
                <Latex>{exp14}</Latex>
                <br/>
                <br/>
                cuyas columnas son las coordenadas de <Latex>{exp2}</Latex> con respecto a la base B.
                <br/>
                La matriz <Latex>{exp10}</Latex> son 
                las coordenadas de un vector dado con respecto a las bases B y C.
                <br/>
                <br/>
                Veamos cómo podemos encontrar la matriz de cambio de base en un ejemplo en <Latex>{exp11}</Latex>.
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            <div className="container mx-auto m-6 rounded-md text-gray-500 text-xl">
                Recurso: 
                <iframe scrolling="no" title="Cambio de Base" src="https://www.geogebra.org/material/iframe/id/XKsP7mA5/width/816/height/420/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="816px" height="420px"> </iframe>
            </div>

        </Layout>        
    );
}

export default tema13;