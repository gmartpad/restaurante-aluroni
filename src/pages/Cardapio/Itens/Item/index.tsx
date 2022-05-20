import React from 'react';
import styles from './Item.module.scss';
import classNames from 'classnames';
import cardapio from "../itens.json";
// import logo from "assets/img/logo.svg";

// interface ItemProps {
//     title: string;
//     description: string;
//     photo: string;
//     size: number;
//     serving: number;
//     price: number;
//     id: number;
//     category: {
//         id: number;
//         label: string;
//     };
// }

type ItemProps = typeof cardapio[0];

const Item = ({ 
    title,
    description,
    photo,
    size,
    serving,
    price,
    id,
    category,
 }: ItemProps) => {
  return (
    <div className={styles.item}>
        <div className={styles.item__imagem}>
            <img src={photo} alt={title} />
        </div>
        <div className={styles.item__descricao}>
            <div className={styles.item__titulo}>
                <h2> {title} </h2>
                <p> {description} </p>
            </div>
            <div className={styles.item__tags}>
                <div className={classNames({
                    [styles.item__tipo]: true,
                    [styles[`item__tipo__${category.label.toLowerCase()}`]]: true,
                })}>
                    {category.label}
                </div>
                <div className={styles.item__porcao}>
                    {size}
                </div>
                <div className={styles.item__qtdpessoas}>
                    Serve {serving} pessoa{serving === 1 ? `` : `s`}
                </div>
                <div className={styles.item__valor}>
                    R$ {price.toFixed(2)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item