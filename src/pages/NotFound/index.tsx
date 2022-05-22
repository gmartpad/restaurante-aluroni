import React from 'react';
import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/img/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';

const NotFound = () => {
    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTema.container]: true,
        })}>
            <NotFoundImage/>
        </div>
    );
};

export default NotFound;