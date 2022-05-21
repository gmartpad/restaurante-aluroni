import React from 'react';
import styles from './Filtros.module.scss';
import filtros from './filtros.json';
import classNames from 'classnames';

interface FiltrosProps {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

type opcao = typeof filtros[0];

const Filtros = ({ filtro, setFiltro }: FiltrosProps) => {

    const selecionarFiltro = (opcao: opcao) => {
        if(filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    };

    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button 
                    className={ classNames({
                        [styles.filtros__filtro]: true,
                        [styles['filtros__filtro--ativo']]: filtro === opcao.id,
                    })} 
                    key={opcao.id} 
                    onClick={() => selecionarFiltro(opcao)}
                >
                    <p>{opcao.label}</p>
                </button>
            ))}
        </div>
    );
};

export default Filtros;