import React from 'react';
import styles from './Prato.module.scss';
import { useParams } from 'react-router-dom';

const Prato = () => {

    const { id } = useParams();

    return (
        <div>
            Prato
        </div>
    );
};

export default Prato;