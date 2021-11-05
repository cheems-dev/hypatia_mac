import styles from './layout.module.css'
import Navbar from './navbar'
import Barlat from './barlat'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar/>
            <div className="grid grid-cols-12">
                <div className="col-start-1 col-span-3">
                    <Barlat/>
                </div>
                <div className="col-start-4 col-span-8">
                    {children}
                </div>
            </div>
            
        </div>
    )
}