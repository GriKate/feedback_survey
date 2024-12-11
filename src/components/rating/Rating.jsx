import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router";
import { store } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setNewRating } from "../../store/survey/actions.js";

export const Rating = ({rating, setRating}) => {
    const minRating = 0;
    const maxRating = 9;

    const navigate = useNavigate();

    // Redux -----------------------
    // const state = store.getState();
    // const newRating = useSelector((state) => state.data.rating);
    const dispatch = useDispatch();

    const setNums = () => {
        let nums = []; //js метод для создания массива порядковых чисел вместо for
        for(let i = minRating; i <= maxRating; i++) {
            nums.push(i);
        }
        return nums;
    }

    const handleSetRating = (num) => {
        setRating(num);
        dispatch(setNewRating(num));
        navigate("/questions");
    }

    useEffect(() => {
        console.log('R mount')
    }, [])

    return <>
        <div>
            <h1>Уважаемый клиент!</h1>
            <p>Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».</p>
            <ul style={{display: "flex"}}>
                {setNums().map((num, idx) => 
                    num !== null ?
                    <li style={{listStyleType: "none"}} key={idx}>
                        <button onClick={() => {handleSetRating(num)}}>{num}</button>
                        {/* <button onClick={() => {dispatch(setNewRating(num))}}>{num}</button> */}
                        {/* <Link to="questions" onClick={() => {handleSetRating(num)}}>{num}</Link> */}
                    </li>
                    : null
                )}
            </ul>
            <p>Хуже некуда</p>
            <p>Отлично</p>
            {/* <button onClick={() => {navigate("questions")}}>без оценки</button> */}
            {/* <p>{newRating}</p> */}
        </div>
    </>
} 