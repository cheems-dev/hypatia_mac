import styles from './layout.module.css'
import Navbar from './navbar'
import Barlat from './barlat'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar/>
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-span-3">
                    <Barlat/>
                </div>
                <div className="col-start-5 col-span-7">
                    {children}
                </div>
            </div>
            
        </div>
    )
}