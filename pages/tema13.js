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
const exp7 = "$$c_1={\\alpha_1}_1b_1+...+{\\alpha_n}_1b_n$$"
const exp8 = "$$c_n={\\alpha_1}_nb_1+...+{\\alpha_n}_nb_n$$"
const exp9 = "$$\\vdots$$"
let exp10 = "$M^{C}_B$"
let exp11 = "$R^3$"
const exp12 = "$${c_1}_B=\\begin{bmatrix} {\\alpha_1}_1 \\\\ \\vdots \\\\ {\\alpha_n}_1 \\end{bmatrix}, \\cdots , {c_n}_B=\\begin{bmatrix} {\\alpha_1}_n \\\\ \\vdots \\\\ {\\alpha_n}_n \\end{bmatrix}$$"
const exp14 = "$$M^{C}_B=\\begin{bmatrix} {\\alpha_1}_1 & \\cdots & {\\alpha_1}_n  \\\\ \\vdots & \\ddots & \\vdots \\\\ {\\alpha_n}_1 & \\cdots & {\\alpha_n}_n \\end{bmatrix}$$"
const exp15 = "$\\begin{pmatrix} 1,0,1 \\end{pmatrix}$"
const exp16 = "$$(1,0,0)={\\alpha_1}_1(1,0,1)+{\\alpha_2}_1(1,1,1)+{\\alpha_3}_1(1,1,2)$$"
const exp17 = "$$(0,1,0)={\\alpha_1}_2(1,0,1)+{\\alpha_2}_2(1,1,1)+{\\alpha_3}_2(1,1,2)$$"
const exp18 = "$$(0,0,1)={\\alpha_1}_3(1,0,1)+{\\alpha_2}_3(1,1,1)+{\\alpha_3}_3(1,1,2)$$"
let exp19 = "$$\\Longleftrightarrow$$"
const exp20 = "$$( {\\alpha_1}_1+{\\alpha_2}_1+{\\alpha_3}_1,{\\alpha_2}_1+{\\alpha_3}_1,{\\alpha_1}_1+{\\alpha_2}_1+2{\\alpha_3}_1)=(1,0,0)$$"
const exp21 = "$$( {\\alpha_1}_2+{\\alpha_2}_2+{\\alpha_3}_2,{\\alpha_2}_2+{\\alpha_3}_2,{\\alpha_1}_2+{\\alpha_2}_2+2{\\alpha_3}_2)=(1,0,0)$$"
const exp22 = "$$( {\\alpha_1}_3+{\\alpha_2}_3+{\\alpha_3}_3,{\\alpha_2}_3+{\\alpha_3}_3,{\\alpha_1}_3+{\\alpha_2}_3+2{\\alpha_3}_3)=(1,0,0)$$"
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
                <h1 className={`pb-4 `+ styles.titulo}>CAMBIO DE BASE</h1>
                {/* AQUI VA SU CONTENIDO */}
                <br/>
                <h2 className={`pb-4 `+ styles.subtitulo}>Introduccion</h2>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Las ecuaciones de cambio de base nos permiten obtener las
                    coordenadas de un vector respecto de una base supuesto que las 
                    conocemos respecto de otra. Si bien esas coordenadas de un elemento de un espacio 
                    vectorial puede variar cuando se consideran diferentes bases.
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    ¿Cómo se produce ese cambio, o en otras palabras, cómo es posible 
                    encontrar esas coordenadas?
                </p>
                <br/>
                <h3 className={`pb-4 `+ styles.subtitulo}>Definicion</h3>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea V un espacio vectorial finitamente generado. Sean B y C las 
                    bases de V formadas por los vectores <Latex>{exp1}</Latex> y <Latex>{exp2}</Latex>, 
                    respectivamente.
                </p>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Como B es una base, existen <Latex>{exp3}</Latex> <Latex>{exp4}</Latex> <Latex>{exp5}</Latex>, <Latex>{exp6}</Latex> tales que: 
                    <Latex>{exp7}</Latex>
                    <Latex>{exp9}</Latex>
                    <Latex>{exp8}</Latex>
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Por lo tanto, las coordenadas de <Latex>{exp2}</Latex> con respecto a la base B son, respectivamente:
                    <Latex>{exp12}</Latex> .
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Reunimos esta información sobre las coordenadas de los vectores de la base C con respecto a la base B en la siguiente matriz:
                    <Latex>{exp14}</Latex>
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    cuyas columnas son las coordenadas de <Latex>{exp2}</Latex> con respecto a la base B.
                    La matriz <Latex>{exp10}</Latex> son las coordenadas de un vector dado con respecto a las bases B y C.
                </p>
                <br/>
                <h4 className={`pb-4 `+ styles.defTitle}>En el siguiente ejemplo se puede encontrar la matriz de cambio de base:</h4>
                <p className={`leading-relaxed `+styles.parrafo}>                   
                    Consideremos la base B de <Latex>{exp11}</Latex> formada por los vectores (1,0,1), (1,1,1) y (1,1,2).
                    <br/>Consideremos también la base C formada por los vectores (1,0,0), (0,1,0) y (0,0,1).
                    Encontrar <Latex>{exp10}</Latex>
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Tenemos que resolver:<br/>
                    <Latex>{exp16}</Latex>
                    <Latex>{exp17}</Latex>
                    <Latex>{exp18}</Latex>
                    <Latex>{exp19}</Latex>
                    <Latex>{exp20}</Latex>
                    <Latex>{exp21}</Latex>
                    <Latex>{exp22}</Latex>
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>                   
                    De esta forma obtenemos:

                </p>

            </div>
            <div className="container mx-auto m-6 rounded-md text-gray-500 text-xl">
                Recurso: 
                <iframe scrolling="no" title="Cambio de Base" src="https://www.geogebra.org/material/iframe/id/XKsP7mA5/width/816/height/420/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="816px" height="420px"> </iframe>
            </div>

        </Layout>        
    );
}

export default tema13;