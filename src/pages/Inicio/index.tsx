import React from 'react';
import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/img/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

const Inicio = () => {

    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
    const navigate = useNavigate();

    const redirecionarParaDetalhes = (prato: Prato) => {
        navigate(`/prato/${prato.id}`, { state: { ...prato } });
    };

    return (
        <section>
            <h3 className={stylesTema.titulo}>
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button onClick={() => redirecionarParaDetalhes(item)} className={styles.recomendado__botao}>
                            Ver Mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTema.titulo} > Nossa casa </h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa} alt="Casa do aluroni"/>
                <div className={styles.nossaCasa__endereco}>
                    Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                </div>
            </div>
        </section>
    );
};

export default Inicio;