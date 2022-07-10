import Navegador from "../components/Navegador"

export default function Inicio(){
    return(
        <main style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            display: 'flex'
        }}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <Navegador texto="Estiloso" destino="estiloso"/>
                <Navegador texto="Exemplo" destino="exemplo" cor="darkviolet"/>
                <Navegador texto="JSX" destino="jsx" cor="crimson"/>
                <Navegador texto="Navegação #01" destino="navegacao" cor="green"/>
                <Navegador texto="Navegação #02" destino="cliente/sp-2/321" cor="blue"/>
                <Navegador texto="Componente com Estado" destino="estado" cor="pink"/>
            </div>
        </main>
    )
}