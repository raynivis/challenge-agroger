import '../../styles/components/list/section.sass'

function Section() {
    return (
        <section>
            <h2>Pontos de Amostragem da Água do Norte de Cumbria - UK </h2>
            <ul className="session-list">
                <li className="session">
                    <div className="session-info">
                        <h3>SESSÃO #11212</h3>
                        <p>Cooperativa vale do rio doce</p>
                        <span>30/05/2023 - 15:00 - São Paulo</span>
                    </div>
                    <div className="session-actions">
                        <span className="badge orange">3 AMOSTAS</span>
                        <button className="edit-btn">✏️</button>
                        <button className="action-btn green">PROVAR AGORA</button>
                    </div>
                </li>

                <li className="session">
                    <div className="session-info">
                        <h3>SESSÃO #232334</h3>
                        <p>Cooperativa vale do rio doce</p>
                        <span>30/05/2023 - 15:00 - São Paulo</span>
                    </div>
                    <div className="session-actions">
                        <span className="badge orange">1 AMOSTA</span>
                        <button className="edit-btn">✏️</button>
                        <button className="action-btn gray" disabled>PROVA FINALIZADA</button>
                    </div>
                </li>
            </ul>

        </section>

    )
}

export default Section