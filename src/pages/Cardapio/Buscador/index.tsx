import React from 'react'
import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg';

interface BuscadorProps {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({ busca, setBusca }: BuscadorProps) => {
    return (
        <div className={styles.buscador}>
            <input
                value={busca}
                onChange={e => setBusca(e.target.value)}
                placeholder="Buscar"
            />
            <CgSearch
                size={20}
                color="#4C4DSE"
            />
        </div>
  )
}

export default Buscador