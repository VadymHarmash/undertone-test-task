import React, { useState, useEffect, useRef } from 'react';
import styles from './main.module.scss';
import assets from './assets';
import data from './data';

export default function Main() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const timeoutRef = useRef(null);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
        setAutoplay(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
        setAutoplay(false);
    };

    useEffect(() => {
        if (autoplay) {
            timeoutRef.current = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
            }, currentIndex === 0 ? 8000 : 3000);
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentIndex, autoplay]);

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.main__wrapper}>
                    <div className={styles.main__container}>
                        <img
                            className={styles.main__container__image}
                            src={data[currentIndex].image}
                            alt=""
                        />
                        <div className={styles.main__container__header}>
                            <img src={assets.icons.samsungLogo} alt="Samsung" />
                            <span>Bespoke Jet™</span>
                        </div>
                        <div className={styles.main__container__main}>
                            <p>
                                See why the Bespoke Jet™ is “so good” it made this{' '}
                                <img src={assets.icons.kitchnLogo} alt="kitchn" /> journalist cry
                            </p>
                            <p>
                                {data[currentIndex].text}{' '}
                                <a href="/empty">Read more…</a>
                            </p>
                        </div>
                        <div className={styles.main__container__footer}>
                            <div className={styles.main__container__footer__slider}>
                                <img
                                    src={assets.icons.leftArrow}
                                    alt=""
                                    onClick={handlePrev}
                                />
                                <span>
                                    {currentIndex + 1}/{data.length}
                                </span>
                                <img
                                    src={assets.icons.rightArrow}
                                    alt=""
                                    onClick={handleNext}
                                />
                            </div>
                            <a href="/empty">
                                <span>Shop now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
