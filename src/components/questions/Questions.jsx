import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { store } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setResponse } from "../../store/survey/actions";

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


export const Questions = ({ setAllAnswers }) => {
    // ? сохранять isSend state Redux ?
    const [allDone, setAllDone] = useState(false);
    const [answers, setAnswers] = useState([]);

    const navigate = useNavigate();

    // Redux -----------------------
    // const state = store.getState();
    const stateAnswers = useSelector((state) => state.data.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('Q mount')
        // после перезагрузки стр отображаются отмеченные ответы из стейта
        setAnswers(stateAnswers);
    }, [])

    useEffect(() => {
        console.log('answers ИЗМЕНИЛСЯ!');
        
        // проверка наличия ответов на все вопросы
        // проверится и после перезагрузки стр, если ответили всё и перегрузили, д.б. доступна кнопка
        const totalQuantity = questionsText.length;
        const currentQuantity = answers.length;
        if (totalQuantity === currentQuantity) setAllDone(true);

        console.log(answers);
    }, [answers])

    const setCurrentAnswer = (currentAnswer) => {
        const uniqueAnswers = answers.filter((el) => {
            // в массив uniqueAnswers попадут только уникальные questionID
            return el.questionID !== currentAnswer.questionID;
        })
        uniqueAnswers.push(currentAnswer);
        // сохраняю массив ответов в стейт
        setAnswers(uniqueAnswers);
        // сохраняю массив ответов в Redux
        dispatch(setResponse(uniqueAnswers));
    }

    const handleSetAnswers = (num) => {
        // передаю все ответы в App
        // setAllAnswers(answers);
        navigate("/finish");
    }

    return <>
        <p>Пожалуйста, ответьте на дополнительные вопросы.</p>
        <ul>  
        {questionsText.map((question) => 
            <li key={question.id}>
                <p>{question.id}</p>
                <p>{question.text}</p>
                <div>
                    {Object.entries(question.answers).map((answ) => 
                        <button key={answ[0]} onClick={() => setCurrentAnswer(
                            {
                                questionID: question.id, 
                                responseID: answ[0]
                            },
                        )}>
                            {answ[1]}
                        </button>
                    )}
                </div>
            </li>
        )} 
        </ul>
        <button disabled={!allDone} onClick={() => handleSetAnswers(answers)}>Отправить ответы</button>
    </>
}