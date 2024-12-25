import styles from "./Done.module.scss";


export const Done = () => {
    return <>
    <main className={styles.mainContainer}>
        <div className={styles.pictureBox}>
            <img src="/img/4_people.png" className={styles.people} alt="people" />
        </div>

        <div className={styles.content}>
            <h1 className={styles.header}>Вы уже прошли этот опрос</h1>
            <p className={styles.text}>Спасибо, что делитесь мнением <br/>и помогаете нам быть лучше</p>
            <a href="https://rutube.ru" className={styles.submitBtn}>Перейти на RUTUBE</a>
            
            <div className={styles.ratingContainer}>
                
            </div>
        </div>
    </main>
    </>
}