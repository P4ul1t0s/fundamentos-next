import Link from "next/link"
import styles from "../styles/navegador.module.css"

export default function Navegador(p){
    return(
        <Link href={"/" + p.destino}>
            <div className={styles.navegador} style={{
                backgroundColor: p.cor ?? 'dodgerblue'
            }}>
                {p.texto}
            </div>
        </Link>
    )
}