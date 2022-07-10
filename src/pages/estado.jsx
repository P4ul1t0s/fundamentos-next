import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado(){    
    const [numero, setNumero] = useState(0)

    function decrementar(){
        setNumero(numero - 1)
    }

    function incrementar(){
        setNumero(numero + 1)
    }

    return(
        <Layout titulo="Componente com Estado">
            <div style={{
                width: '100%',
                textAlign: 'center'
            }}>
                <div>{numero}</div>
                <button onClick={decrementar}>Decrementar</button>
                <span> - </span>
                <button onClick={incrementar}>Incrementar</button>
            </div>
        </Layout>
    )
}