import { useState } from 'react';
import Section from '../components/list/section'
import '../styles/page/home.sass'

function Home() {
  const [mostrarLista, setMostrarLista] = useState(false);
  return (
    <main>
        {/*Botao para a requisição dos pontos de amostragem*/}
        <button onClick={() => setMostrarLista(true)}  className='btn-nova'>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#EFEFEF"><path d="M456-96q-130 0-221-91t-91-221q0-97 74.5-205T456-864q166 150 239 257t73 199q0 12-1 24t-3 24h-73q2-12 3.5-24t1.5-24q0-68-54-149T456-769Q324-638 270-557t-54 149q0 100 70 170t170 70v72Zm0-373Zm72 373v-192h120q9.6 0 16.8 7.2 7.2 7.2 7.2 16.8v72q0 9.6-7.2 16.8-7.2 7.2-16.8 7.2h-72v72h-48Zm192 0v-192h48v72h48v-72h48v192h-48v-72h-48v72h-48ZM576-216h48v-24h-48v24Z"/></svg>
          Novos pontos de amostragem
        </button>
        <Section mostrar={mostrarLista} />
    </main>
  )
}

export default Home