import React from 'react';
import { ReactComponent as Logo } from 'assets/img/logo.svg';
import styles from './Menu.module.scss';

const Menu = () => {

    const rotas = [{
        label: 'Início',
        to: '/',
    }, {
        label: 'Cardápio',
        to: '/cardapio',
    }, {
        label: 'Sobre',
        to: '/sobre'
    }];

    return (
        <nav className={styles.menu}>
            <Logo />
            <ul>
                {
                    rotas.map((rota, index) => (
                        <li key={index} className={styles.menu__link}> 
                            <a href={rota.to}>
                                {rota.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Menu;