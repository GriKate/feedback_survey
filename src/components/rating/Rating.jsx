import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { store } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../store/survey/actions.js";


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
        <div>
            <h1>Уважаемый клиент!</h1>
            <p>Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».</p>
            <ul style={{display: "flex"}}>
                {setNums().map((num, idx) => 
                    num !== null ?
                    <li style={{listStyleType: "none"}} key={idx}>
                        <button onClick={() => {handleSetRating(num)}}>{num}</button>
                    </li>
                    : null
                )}
            </ul>
            <p>Хуже некуда</p>
            <p>Отлично</p>
        </div>
    </>
} 