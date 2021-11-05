import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.css'

const Navbar = (props) => {
    return (
        <div className="shadow-lg  px-4 grid grid-cols-6 font-sans text-white  bg-blue-600 ">
            <div className="col-start-1 col-span-2">
                <h1 className={styles.hypatia}>
                    <Link href="/">
                        <a>&#x222F; Hypatia</a>
                    </Link>
                </h1>
            </div>
        </div>
    );
}

export default Navbar;