// Tema 13: 

//For next imports
import Head from 'next/head'
import Image from 'next/image'

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
const exp14 = "$$\\left [M \\right]_{B,C}=\\begin{bmatrix} {\\alpha_1}_1 & \\cdots & {\\alpha_1}_n  \\\\ \\vdots & \\ddots & \\vdots \\\\ {\\alpha_n}_1 & \\cdots & {\\alpha_n}_n \\end{bmatrix}$$"
const exp15 = "$\\begin{pmatrix} 1,0,1 \\end{pmatrix}$"
const exp16 = "$$(1,0,0)={\\alpha_1}_1(1,0,1)+{\\alpha_2}_1(1,1,1)+{\\alpha_3}_1(1,1,2)$$"
const exp17 = "$$(0,1,0)={\\alpha_1}_2(1,0,1)+{\\alpha_2}_2(1,1,1)+{\\alpha_3}_2(1,1,2)$$"
const exp18 = "$$(0,0,1)={\\alpha_1}_3(1,0,1)+{\\alpha_2}_3(1,1,1)+{\\alpha_3}_3(1,1,2)$$"
let exp19 = "$$\\Longleftrightarrow$$"
const exp20 = "$$( {\\alpha_1}_1+{\\alpha_2}_1+{\\alpha_3}_1,{\\alpha_2}_1+{\\alpha_3}_1,{\\alpha_1}_1+{\\alpha_2}_1+2{\\alpha_3}_1)=(1,0,0)$$"
const exp21 = "$$( {\\alpha_1}_2+{\\alpha_2}_2+{\\alpha_3}_2,{\\alpha_2}_2+{\\alpha_3}_2,{\\alpha_1}_2+{\\alpha_2}_2+2{\\alpha_3}_2)=(0,1,0)$$"
const exp22 = "$$( {\\alpha_1}_3+{\\alpha_2}_3+{\\alpha_3}_3,{\\alpha_2}_3+{\\alpha_3}_3,{\\alpha_1}_3+{\\alpha_2}_3+2{\\alpha_3}_3)=(0,0,1)$$"
let exp23 = "$(1,0,1)$"
let exp24 = "$(1,1,1)$"
let exp25 = "$(1,1,2)$"
let exp26 = "$V$"
let exp27 = "$B$"
let exp28 = "$C$"
const exp29 = "$\\left [M \\right]_{B,C}$"
let exp30 = "$(1,0,0)$"
let exp31 = "$(0,1,0)$"
let exp32 = "$(0,0,1)$"
const exp33 = "$$\\begin{pmatrix}1 & 1 & 1\\\\ 0 & 1 & 1\\\\ 1 & 1 & 2\\end{pmatrix} \\begin{pmatrix}x\\\\ y\\\\ z\\end{pmatrix} = \\begin{pmatrix} a\\\\ b\\\\ c\\end{pmatrix}$$"
const exp34 = "$\\epsilon $"
const exp35 = "$\\mathbb{R}$"
const exp36 = "$$\\begin{pmatrix}1 & 1 & 1\\\\ 0 & 1 & 1\\\\ 0 & 0 & 1\\end{pmatrix} \\begin{pmatrix}x\\\\ y\\\\ z\\end{pmatrix} = \\begin{pmatrix} a\\\\ b\\\\ c-a\\end{pmatrix}$$"
const exp37 = "$x = a − b, y = a + b − c$"
const exp38 = "$z = c − a$"
const exp39 = "$({\\alpha_1}_1,{\\alpha_2}_1,{\\alpha_3}_1)$"
const exp40 = "$({\\alpha_1}_2,{\\alpha_2}_2,{\\alpha_3}_2)$"
const exp41 = "$({\\alpha_1}_3,{\\alpha_2}_3,{\\alpha_3}_3)$"
const exp42 = "$$\\left [M \\right]_{B,C} = \\begin{pmatrix}1 & -1 & 0\\\\ 1 & 1 & -1\\\\ -1 & 0 & 1\\end{pmatrix}$$"
let exp43 = "$\\theta$"
const exp44 = "$u_1 = (cos\\theta, sen\\theta)$"
const exp45 = "$u_2 = (-sen\\theta, cos\\theta)$"
const exp46 = "$\\mathbb{R}^{2}$"
const exp47 = "$$\\alpha(cos\\theta, sen\\theta) + \\beta(-sen\\theta, cos\\theta) = (0,0)$$"
const exp48 = "$$\\left\\{\\begin{matrix}\\alpha cos\\theta - \\beta sen\\theta = 0\\\\ \\alpha sen\\theta + \\beta cos\\theta = 0 \\end{matrix}\\right. \\Longleftrightarrow \\alpha = \\beta = 0,$$"
const exp49 = "$$det\\begin{pmatrix} cos\\theta & -sen\\theta\\\\ sen\\theta & cos\\theta \\end{pmatrix} = 1 \\neq 0.$$"
const exp50 = "$({\\alpha_i}_j)$"
const exp51 = "$$(1,0) = {\\alpha_1}_1(cos\\theta, sen\\theta) + {\\alpha_2}_1(-sen\\theta, cos\\theta)$$"
const exp52 = "$$(0,1) = {\\alpha_1}_2(cos\\theta, sen\\theta) + {\\alpha_2}_2(-sen\\theta, cos\\theta),$$"
const exp53 = "$$(1,0) = ({\\alpha_1}_1 cos\\theta - {\\alpha_2}_1 sen\\theta,  {\\alpha_1}_1 sen\\theta + {\\alpha_2}_1 cos\\theta)$$"
const exp54 = "$$(0,1) = ({\\alpha_1}_2 cos\\theta - {\\alpha_2}_2 sen\\theta,  {\\alpha_1}_2 sen\\theta + {\\alpha_2}_2 cos\\theta)$$"
const exp55 = "$$\\begin{pmatrix}cos\\theta & -sen\\theta\\\\ sen\\theta & cos\\theta \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix}\\alpha \\\\ \\beta \\end{pmatrix}$$"
const exp56 = "$$\\begin{pmatrix}x \\\\ y \\end{pmatrix} = \\begin{pmatrix}cos\\theta & sen\\theta\\\\ -sen\\theta & cos\\theta \\end{pmatrix} \\begin{pmatrix}\\alpha \\\\ \\beta \\end{pmatrix} = \\begin{pmatrix}\\alpha cos\\theta + \\beta sen\\theta \\\\ \\beta cos\\theta - \\alpha sen\\theta \\end{pmatrix}$$"
const exp57 = "$(\\alpha, \\beta)$"
const exp58 = "$({\\alpha_1}_1,{\\alpha_2}_1)$"
const exp59 = "$(cos\\theta, -sen\\theta)$"
const exp60 = "$({\\alpha_1}_2,{\\alpha_2}_2)$"
const exp61 = "$(sen\\theta, cos\\theta) $"
const exp62 = "$$\\left [M \\right]_{B,C} = \\begin{pmatrix}cos\\theta & sen\\theta\\\\ -sen\\theta & cos\\theta \\end{pmatrix}$$"
const exp63 = "$$u_B = \\left [ M \\right ]_{B,C}u_C = \\begin{pmatrix} cos\\theta & sen\\theta\\\\ -sen\\theta & cos\\theta \\end{pmatrix} \\begin{pmatrix} a\\\\ b \\end{pmatrix} = \\begin{pmatrix} a cos\\theta + b sen\\theta \\\\ b cos\\theta - a sen\\theta \\end{pmatrix}$$"
const exp64 = "$$v_B = \\left [M \\right]_{B,C}v_C.$$"

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
                <h1 className={`pb-4 `+ styles.titulo}>Cambio de Base</h1>
                {/* AQUI VA SU CONTENIDO */}
                <br/>
                <p className={`leading-relaxed `+styles.parrafo}>
                Las coordenadas de un elemento de un espacio vectorial puede variar cuando se 
                consideran diferentes bases. Las ecuaciones de cambio de base nos permiten obtener 
                las coordenadas de un vector con relación a una base sabiendo sus coordenadas 
                en relacion a otra base.

                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    ¿Cómo se produce ese cambio, o en otras palabras, cómo es posible 
                    encontrar esas coordenadas?
                </p>
                <br/>
                <div className={`flex flex-row `}>
                    <Image 
                        src="/definition_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.subtitulo}>Definicion</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Sea <Latex>{exp26}</Latex> un espacio vectorial finitamente generado. Sean <Latex>{exp27}</Latex> y <Latex>{exp28}</Latex> las 
                    bases de <Latex>{exp26}</Latex> formadas por los vectores <Latex>{exp1}</Latex> y <Latex>{exp2}</Latex>, 
                    respectivamente.
                </p>
                <p className={`leading-relaxed ` + styles.parrafo}>
                    Como <Latex>{exp27}</Latex> es una base, existen <Latex>{exp3}</Latex> <Latex>{exp4}</Latex> <Latex>{exp5}</Latex>, <Latex>{exp6}</Latex> tales que: 
                    <Latex>{exp7}</Latex>
                    <Latex>{exp9}</Latex>
                    <Latex>{exp8}</Latex>
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Por lo tanto, las coordenadas de <Latex>{exp2}</Latex> con respecto a la base <Latex>{exp27}</Latex> son, respectivamente:
                    <Latex>{exp12}</Latex>.
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Reunimos esta información sobre las coordenadas de los vectores de la base <Latex>{exp28}</Latex> con respecto a la base <Latex>{exp27}</Latex> en la siguiente matriz:
                    <Latex>{exp14}</Latex>
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    cuyas columnas son las coordenadas de <Latex>{exp2}</Latex> con respecto a la base <Latex>{exp27}</Latex>.
                    La matriz <Latex>{exp29}</Latex> son las coordenadas de un vector dado con respecto a las bases <Latex>{exp27}</Latex> y <Latex>{exp28}</Latex>.
                </p>
                <br/>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.subtitulo}>Ejemplo 1</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>                   
                    Consideremos la base <Latex>{exp27}</Latex> de <Latex>{exp11}</Latex> formada por los vectores <Latex>{exp23}</Latex>, <Latex>{exp24}</Latex> y <Latex>{exp25}</Latex>.
                    <br/>Consideremos también la base C formada por los vectores <Latex>{exp30}</Latex>, <Latex>{exp31}</Latex> y <Latex>{exp32}</Latex>.
                    Encontrar <Latex>{exp29}</Latex>
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>
                    Tenemos que resolver:
                    <Latex>{exp16}</Latex>
                    <Latex>{exp17}</Latex>
                    <Latex>{exp18}</Latex>
                    <Latex>{exp19}</Latex>
                    <Latex>{exp20}</Latex>
                    <Latex>{exp21}</Latex>
                    <Latex>{exp22}</Latex>
                </p>
                <p className={`leading-relaxed `+styles.parrafo}>                   
                Un momento de reflexión nos ahorrará un poco de trabajo en este punto.
                Nótese que cada fila anterior representa un sistema de tres ecuaciones con 
                tres incógnitas y que la matriz asociada a cada uno de estos sistemas es la misma.
                Lo que cambia son los nombres de las variables y el segundo miembro.
                <Latex>{exp33}</Latex>
                donde <Latex>$a, b, c$</Latex> <Latex>{exp34}</Latex> <Latex>{exp35}</Latex>. El sistema anterior es equivalente a
                <Latex>{exp36}</Latex>
                cuya única solución viene dada por <Latex>{exp37}</Latex> e <Latex>{exp38}</Latex> <br/><br/>
                
                Tomando <Latex>$(a, b, c)$</Latex> = <Latex>$(1, 0, 0)$</Latex> obtenemos <Latex>{exp39}</Latex> = <Latex>$(1, 1, −1)$</Latex>.<br/>
                Tomando <Latex>$(a, b, c)$</Latex> = <Latex>$(0, 1, 0)$</Latex> obtenemos <Latex>{exp40}</Latex> = <Latex>$(-1, 1, 0)$</Latex>.<br/>
                Tomando <Latex>$(a, b, c)$</Latex> = <Latex>$(0, 0, 1)$</Latex> obtenemos <Latex>{exp41}</Latex> = <Latex>$(0, -1, 1)$</Latex>.<br/><br/>
                Así, obtenemos
                <Latex>{exp42}</Latex><br/>
                </p>

                <div className={`flex flex-row `}>
                    <Image 
                        src="/proposicion_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.subtitulo}>Proposicion 1</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                Sean <Latex>$B$</Latex> y <Latex>$C$</Latex> las bases de un espacio vectorial de dimensión finita <Latex>$V$</Latex>. Si <Latex>$v_B$</Latex> y <Latex>$v_C$</Latex> representan las 
                coordenadas de un vector dado <Latex>$v$</Latex> <Latex>{exp34}</Latex> <Latex>$V$</Latex> con respecto a las bases <Latex>$B$</Latex> y <Latex>$C$</Latex>, respectivamente, y si <Latex>{exp29}</Latex> es 
                la matriz de cambio de base de la base <Latex>$B$</Latex> a la base <Latex>$C$</Latex>, entonces <Latex>{exp64}</Latex>
                </p>
                
                <div className={`flex flex-row `}>
                    <Image 
                        src="/ejercicio_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.subtitulo}>Ejemplo 2</h3>
                </div>
                <p className={`leading-relaxed ` + styles.parrafo}>
                Estableciendo que <Latex>{exp43}</Latex> <Latex>{exp4}</Latex> <Latex>{exp5}</Latex>, 
                consideremos los vectores: <Latex>{exp44}</Latex> y <Latex>{exp45}</Latex> en <Latex>{exp46}</Latex>.
                Demuestre que estos vectores forman una base, <Latex>$B$</Latex>, de <Latex>{exp46}</Latex> y 
                encuentre la matriz de cambio de esta base a la base <Latex>$C$</Latex> formada por los vectores: <Latex>$e_1 = (1,0)$</Latex> y <Latex>$e_2 = (0,1)$</Latex>. <br/>
                Encuentra las coordenadas del vector <Latex>$u = ae_1 + be_2$</Latex> con respecto a la base <Latex>$B$</Latex>.<br/><br/>
                Como la dimensión de <Latex>{exp46}</Latex> es dos basta con demostrar que <Latex>$u_1$</Latex> y <Latex>$u_2$</Latex> son linealmente independientes.
                Si <Latex>{exp47}</Latex> entonces <Latex>{exp48}</Latex> como <Latex>{exp49}</Latex>
                La matriz <Latex>{exp29}</Latex> será definida por <Latex>{exp50}</Latex>, donde <Latex>{exp51}</Latex> <Latex>{exp52}</Latex>
                que es equivalente a <Latex>{exp53}</Latex> <Latex>{exp54}</Latex> ahora sólo hay que resolver el sistema <Latex>{exp55}</Latex> 
                cuya solución está dada por <Latex>{exp56}</Latex>

                Al hacer <Latex>{exp57}</Latex> = <Latex>$(1,0)$</Latex> obtenemos <Latex>{exp58}</Latex> = <Latex>{exp59}</Latex>.<br/>
                Al poner <Latex>{exp57}</Latex> = <Latex>$(0,1)$</Latex>, tenemos <Latex>{exp60}</Latex> = <Latex>{exp61}</Latex>. <br/> Así, <Latex>{exp62}</Latex>
                
                Ahora, si <Latex>$u_B$</Latex> representa las coordenadas de <Latex>$u = ae_1 + be_2$</Latex> con respecto a la base <Latex>$B$</Latex> y <Latex>$u_C$</Latex> las 
                coordenadas del mismo vector con respecto a la base <Latex>$C$</Latex>, por la proposición 1 tenemos <Latex>{exp63}</Latex>
                </p>
            <br/><br/>

            <div className="container px-8 mx-auto m-6 rounded-md  bg-white">
                <div className={`flex flex-row `}>
                    <Image 
                        src="/recurso_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.subtitulo}>Recurso Python</h3>
                </div>
                <p className={`leading-relaxed `+styles.parrafo}>
                    El presente recurso en python nos permite visualizar el resultado de un cambio de base B a C.
                </p>
                <iframe frameborder="0" width="100%" height="500px" src="https://replit.com/@requiemm/cambiobase?embed=true"></iframe>
                
                <div className="container px-8 mx-auto m-6 rounded-md  bg-white">
                
                    <div className={`flex flex-row `}>
                        <Image 
                            src="/recurso_icon.png"
                            alt="Definicion"
                            width={60}
                            height={60}
                        />
                        <h3 className={`mt-4 pb-4 `+ styles.subtitulo}>Recurso Geogebra</h3>
                    </div>
                    <p className={`leading-relaxed `+styles.parrafo}>
                        El presente recurso geogebra nos permite visualizar el procedimiento de cambio de base. En el primer panel podemos ver una base U, mientras que en la otra se logra ver una base V.
                    </p>
                    <iframe scrolling="no" title="Cambio de Base" src="https://www.geogebra.org/material/iframe/id/sYpNAKwa/width/1366/height/647/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="900px" height="500px"> </iframe>
                    <div className={`` + styles.caption}>
                            Recurso Goegebra que ejemplifica el cambio de la base U a la base V. Fuente: Adaptado de <a className={styles.link} href="https://www.geogebra.org/m/sYpNAKwa" target="_blank">Sergio Rubio-Pizzorno</a>.
                    </div>
                </div>
                </div>
                <div className={`flex flex-row `}>
                    <Image 
                        src="/biblio_icon.png"
                        alt="Definicion"
                        width={60}
                        height={60}
                    />
                    <h3 className={`mt-4 pb-4 `+ styles.subtitulo}>Bibliografía: </h3>
                </div>

                <ul className={`ml-8 pb-8 ` + styles.biblio}>
                    <li>
                        [1] Zani, S. L. (n.d.). Álgebra Linear. ICMC - USP.
                    </li>
                </ul>
            </div>

            

        </Layout>    // FALTA EL RECURSO DE PYTHON Y EL DE GEOGEBRA
    );
}

export default tema13;