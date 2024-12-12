import { useEffect } from "react"
import { store } from "../store"
import { useDispatch, useSelector } from "react-redux";
import { setDone } from "../store/survey/actions";


export const Finish = () => {
    const state = store.getState();
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