import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {
      rating: null,
      questions: [],
    },
    isDone: false,
}

export const surveySlice = createSlice({
    name: "survey", // по этому имени обратимся из компонентов для вызова Экшена
    initialState,
    reducers: { //здесь хранятся экшены
        setRating: (state, action) => {
            // ...state, - не нужно!
            state.data.rating = action.payload;
        },
        setResponse: (state, action) => {
            state.data.questions = action.payload;
        },
        setDone: (state) => {
            state.isDone = true;
        }
    }
});

// экспорт Экшенов
export const { setRating, setResponse, setDone } = surveySlice.actions;
// экспорт Редьюсера для index.js
export const surveyReducer = surveySlice.reducer;