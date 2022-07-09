import Link from 'next/link'
import styles from '../styles/estiloso.module.css'

export default function Estiloso(){
    return(
        <div className={styles.roxo}>
            <Link href="/">Voltar</Link>
            <h1>Estilo usando CSS modules</h1>
        </div>
    )
}