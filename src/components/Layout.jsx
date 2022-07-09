import Link from "next/link"
import styles from '../styles/layout.module.css'

export default function Layout(p){
    return(
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{p.titulo ?? "Mais um exemplo"}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {p.children}
            </div>
        </div>
    )
}