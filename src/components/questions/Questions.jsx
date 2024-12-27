import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setResponse } from "../../store/survey/slice";
import styles from "./Questions.module.scss";
import { useEffect, useState } from "react";

const questionsText = [
    {
        id: 1,
        text: 'Как быстро вы получили ответ от клиентского сервиса RUTUBE? *',
        answers: {
            1: 'Быстрее, чем ожидал',
            2: 'Как и ожидал',
            3: 'Медленнее, чем ожидал'
        }
    }, 
    {
        id: 2,
        text: 'Клиентский сервис RUTUBE помог в решении проблемы? *',
        answers: { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }
    },
    {
        id: 3,
        text: 'Специалист RUTUBE хорошо изъяснялся и владел языком? *',
        answers: { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }
    },
    {
        id: 4,
        text: 'Специалист RUTUBE был отзывчив? *',
        answers: { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }
    },
    {
        id: 5,
        text: 'Специалист RUTUBE был компетентен? *',
        answers: { 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }
    },
    {
        id: 6,
        text: 'Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу? *',
        answers: { 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: '10' }
    },
]


export const Questions = () => {
    const [localAnswers, setLocalAnswers] = useState([]);
    const answers = useSelector((state) => state.data.questions);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        setLocalAnswers(answers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setCurrentAnswer = (currentAnswer) => {
        const uniqueAnswers = answers.filter((el) => {
            return el.questionID !== currentAnswer.questionID;
        })
        uniqueAnswers.push(currentAnswer);
        setLocalAnswers(uniqueAnswers);
        dispatch(setResponse(uniqueAnswers));
    }

    const handleSetAnswers = () => {
        navigate("/finish");
    }

    return <>
    <main className={styles.mainContainer}>
        <img src="/img/2_people.png" className={styles.picture} alt="people" />
        <p className={styles.text}>Пожалуйста, ответьте на дополнительные вопросы.</p>
        <div className={styles.questions}>
            <ul className={styles.questionsList}>
            {questionsText.map((question) => 
                <li className={styles.question} key={question.id}>
                    <p className={styles.questionText}>{question.id}. {question.text}</p>

                    <ul className={styles.answers}>
                        {Object.entries(question.answers).map((answ) => 
                            <li className={styles.answer} key={answ[0]}>
                                {localAnswers.find(el => el.questionID === question.id && el.responseID === answ[0]) 
                                ? 
                                <button 
                                className={`${styles.btn} ${styles.active}`} 
                                onClick={() => setCurrentAnswer(
                                    {
                                        questionID: question.id, 
                                        responseID: answ[0]
                                    }
                                )}>
                                    {answ[1]}
                                </button> 
                                : 
                                <button 
                                className={styles.btn} 
                                onClick={() => setCurrentAnswer(
                                    {
                                        questionID: question.id, 
                                        responseID: answ[0]
                                    }
                                )}>
                                    {answ[1]}
                                </button>
                                }
                            </li> 
                        )}
                    </ul>
                </li>
            )} 
            </ul>
        </div>
        <button className={styles.submitBtn} 
        disabled={!(answers.length === 6)} 
        onClick={handleSetAnswers}
        >Отправить ответы</button>
    </main>   
    </>
}