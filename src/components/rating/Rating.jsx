import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setRating } from "../../store/survey/slice";
import styles from "./Rating.module.scss";


export const Rating = () => {
    const minRating = 0;
    const maxRating = 9;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const setNums = () => {
        let nums = [];
        for(let i = minRating; i <= maxRating; i++) {
            nums.push(i);
        }
        return nums;
    }

    const handleSetRating = (num) => {
        dispatch(setRating(num));
        navigate("/questions");
    }

    return <>
    <main className={styles.mainContainer}>
        <div className={styles.pictureBox}>
            <img src="/img/1_people.png" className={styles.people} alt="people" />
        </div>

        <form className={styles.content} onSubmit={(e) => {e.preventDefault()}}>
            <h1 className={styles.header}>Уважаемый клиент!</h1>
            <p className={styles.text}>Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».</p>
            <div className={styles.ratingContainer}>
                <ul className={styles.rating}>
                    {setNums().map((num, idx) => 
                        num !== null ?
                        <li className={styles.num} key={idx}>
                            <button type="submit" className={styles.btn} onClick={() => {handleSetRating(num)}}>{num}</button>
                        </li>
                        : null
                    )}
                </ul>
                <div className={styles.ratingDescription}>
                    <span className={styles.caption}>Хуже некуда</span>
                    <span className={styles.caption}>Отлично</span>
                </div>
            </div>
        </form>
    </main>
    </>
} 