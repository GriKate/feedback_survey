import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDone } from "../../store/survey/slice";
import styles from "./Finish.module.scss";


export const Finish = () => {
    const data = useSelector((state) => state.data);
    const isDone = useSelector((state) => state.isDone);
    const dispatch = useDispatch(); 

    useEffect(() => {
        data.questions.length === 6 && dispatch(setDone());
        console.log(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return <>
    <main className={styles.mainContainer}>
        <div className={styles.pictureBox}>
            <img src="/img/3_people.png" className={styles.people} alt="people" />
        </div>

        <div className={styles.content}>
            <h1 className={styles.header}>Спасибо за обратную связь!</h1>
            <p className={styles.text}>Это поможет нам улучшить сервис</p>
            <a href="https://rutube.ru" className={styles.submitBtn}>Перейти на платформу</a>
            
            <div className={styles.ratingContainer}>
                
            </div>
        </div>
    </main>
    </>
}