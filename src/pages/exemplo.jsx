import Cabecalho from "../components/Cabecalho";
import Layout from '../components/Layout'

export default function Exemplo(){
    return(
        <Layout titulo="Usando compenentes">
            <Cabecalho texto="Fundamentos de Next.js & React"/>
            <Cabecalho texto="Teste"/>
        </Layout>
    )
}