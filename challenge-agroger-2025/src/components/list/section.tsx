import { useEffect, useState } from 'react';
import { PontoDeAmostragem } from '../../models/ponto-de-amostragem.model';
import '../../styles/components/list/section.sass'
import { PontoDeAmostragemService } from '../../services/ponto-de-amostragem.service';
import Row from './row';


function Section({ mostrar }: { mostrar: boolean }) {
    const [pontosDeAmostragem, setPontosDeAmostragem] = useState<PontoDeAmostragem[]>([]);
    const service = new PontoDeAmostragemService();
    const [loading, setLoading] = useState(false);
    const [error] = useState("");

    useEffect(() => {
        //so faz a requisicao se mostrar for verdadeiro
        if (!mostrar) return;

        setLoading(true);
        service.getSamplingPoints()
            .then(data => { setPontosDeAmostragem(data); setLoading(false) })
            .catch(error => console.error('Erro:', error));
    }, [mostrar]);

    return (
        <section>
            {/* Opcoes da listagem */}
            {loading && <p className="msg">Carregando...</p>}
            {error && <p className="msg">{error}</p>}
            {!loading && !error ? (
                pontosDeAmostragem.length === 0 ? (
                    <p className="msg" >Nenhum ponto de amostragem encontrado. Tente clicar em 'Novos pontos de amostragem' para visualizar novos pontos.</p>
                ) : (
                    <>
                        <h2>Pontos de Amostragem da Água do Norte de Cumbria - UK</h2>
                        <ul className="session-list">
                            {pontosDeAmostragem.map((ponto) => (
                                <Row key={ponto['@id']} ponto={ponto} />
                            ))}
                        </ul>
                    </>
                )
            ) : null}
        </section>
    )
}

export default Section