import Image from 'next/image'
import styles from './navbar.module.css'

const Navbar = (props) => {
    return (
        <div className="shadow-lg  px-4 grid grid-cols-6 font-sans text-white  bg-blue-600 ">
            <div className="col-start-1 col-span-1">
                <h1 className={styles.hypatia}>Hypatia</h1>
            </div>
            <div className="col-start-5 col-span-1">Temas</div>
            <div className="col-end-7 col-span-1">Nosotros</div>
        </div>
    );
}

export default Navbar;