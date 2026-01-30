import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

export default function Main({ src, title, }) {
    const [preferiti, setPreferiti] = useState([]);
    const aggiungiAiPrefe = () => {
        // Ottieni la lista attuale di preferiti o usa un array vuoto se non esiste
        const listaPreferiti = JSON.parse(localStorage.getItem('preferiti')) || [];

        // Aggiungi il nuovo elemento alla lista
        const nuovaListaPreferiti = [...listaPreferiti, title];

        // Aggiorna lo stato con la nuova lista
        setPreferiti(nuovaListaPreferiti);

        // Salva la lista aggiornata in localStorage
        localStorage.setItem('preferiti', JSON.stringify(nuovaListaPreferiti));

        console.log("Preferiti aggiornati:", nuovaListaPreferiti);
    };

    return (
        <div className="card">
            <div className='img_container'>
                <img src={src} alt="" />
                <FontAwesomeIcon icon={faHeart} className='heart' onClick={aggiungiAiPrefe} />
            </div>
            <div className="card-body">
                <p className="card-text">{title}</p>


            </div>

        </div>
    )
    console.log(preferiti);


}