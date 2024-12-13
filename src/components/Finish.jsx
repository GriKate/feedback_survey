import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDone } from "../store/survey/slice";


export const Finish = () => {
    const data = useSelector((state) => state.data);
    const isDone = useSelector((state) => state.isDone);
    const dispatch = useDispatch(); 

    useEffect(() => {
        data.questions.length === 6 && dispatch(setDone());
        console.log(data);
    }, [])
    return <>
    <h1>finish</h1>
    <h1>{isDone} </h1>
    </>
}