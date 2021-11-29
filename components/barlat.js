import Link from 'next/link'
import styles from './barlat.module.css'


const Barlat = (props) => {
    return (
        <div className="m-2 p-7 rounded-2xl shadow-2xl leading-10">
            <h1 className={`  ` + styles.mainTitle}>&#x2192; Contenido</h1>
            <p>Capítulo 2</p>
            <ul className={styles.listContent}>
                <li className={styles.itemContent}>
                    <Link href="/tema09">
                        <a>Concepto de transformación Lineal</a>
                    </Link>
                </li>
                <li className={styles.itemContent}>
                    <Link href="/tema10">
                        <a>Imagen y núcleo</a>
                    </Link>
                </li>
                <li className={styles.itemContent}>
                    <Link href="/tema11">
                        <a>Matriz de una transformación lineal</a>
                    </Link>
                </li>
                <li className={styles.itemContent}>
                    <Link href="/tema12">
                        <a>Isomorfismos</a>
                    </Link>
                </li>
                <li className={styles.itemContent}>
                    <Link href="/tema13">
                        <a>Cambio de base</a>
                    </Link>
                </li>
            </ul>

            <p>Capítulo 3</p>
            <ul className={styles.listContent}>
                <li className={styles.itemContent}>
                    <Link href="/tema14">
                        <a>Autovectores y autovalores</a>
                    </Link>
                </li>
                <li className={styles.itemContent}>
                    <Link href="/tema15">
                        <a>Matrices semejantes y diagonalización</a>
                    </Link>
                </li>
                <li className={styles.itemContent}>
                    <Link href="/tema16">
                        <a>Matrices simétricas y diagonalización ortogonal</a>
                    </Link>
                </li>
                <li className={styles.itemContent}>
                    <Link href="/tema17">
                        <a>La descomposición de valor singular</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Barlat;