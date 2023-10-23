// components/Card.js
import Image from 'next/image';
import styles from '@/styles/Card.module.css';

const Card = ( { appName, appIconUrl, appLink } ) => {
    return (
        <section className={styles[ 'item-container' ]}>
            <div className={styles.item}>
                <div className={styles[ 'app-icon-container' ]}>
                    <Image src={appIconUrl || 'https://via.placeholder.com/150'} alt={appName} width={64} height={64} className={styles[ 'app-icon' ]} />
                </div>
                <div className={styles.detailsClass}>
                    <div className={styles.title}>{appName}</div>
                </div>
                <a href={appLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <div className={styles.svgWrapper}>
                        <svg className="svgClass svg-inline--fa fa-arrow-alt-to-right fa-w-14" width="24" height="24" aria-hidden="true" data-prefix="fas"
                            data-icon="arrow-alt-to-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                            <path fill="currentColor"
                                d="M448 88v336c0 13.3-10.7 24-24 24h-24c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24zM24 320h136v87.7c0 17.8 21.5 26.7 34.1 14.1l152.2-152.2c7.5-7.5 7.5-19.8 0-27.3L194.1 90.1c-12.6-12.6-34.1-3.7-34.1 14.1V192H24c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24z">
                            </path>
                        </svg>
                    </div>
                </a>
            </div>
            {/* Uncomment below if you want the edit icon */}
            {/* <a className={styles['item-edit']} href="#">
                <svg>...pencil/edit SVG code...</svg>
            </a> */}
        </section>
    );
};

export default Card;
