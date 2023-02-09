import styles from './answeritem.module.css';
import {ThumbsUp, ThumbsDown} from '@icon-park/react';

function AnswerItem() {
    return(
        <div className={styles.itemWrapper}>
            <div className={styles.views}>
                1000
                <div>
                    Views
                </div>
            </div>
            <div className="questionSection">
                <div className={styles.question}>
                    Er erfitt að byrja í grunnskóla ?
                </div>
                <div className={styles.askedby}>
                    Asked by Valþór
                </div>
                <div className={styles.tag}>
                    <span>
                        sales
                    </span>
                    <span>
                        marketing
                    </span>
                </div>
            </div>
            <div className={styles.thumbs}>
                <div className={`${styles.thumb} ${styles.thumbgreen}`}>
                    <ThumbsUp theme="outline" size="20" fill="#497523"/>
                    1500
                </div>
                <div className={`${styles.thumb} ${styles.thumbred}`}>
                    <ThumbsDown theme="outline" size="20" fill="#b23839"/>
                    2000
                </div>
            </div>
        </div>
    )
}

export default AnswerItem;
