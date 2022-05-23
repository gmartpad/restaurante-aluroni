import React from 'react';
import styles from './Item.module.scss';
import { Prato } from 'types/Prato';
import TagsPrato from 'components/TagsPrato';

const Item = (props: Prato) => {

    const { 
        title,
        description,
        category,
        size,
        serving,
        price,
        photo
    } = props;

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
                <TagsPrato 
                    {...props}
                />
            </div>
        </div>
    );
};

export default Item;