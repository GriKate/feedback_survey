import { createStore } from "@reduxjs/toolkit";
import { SurveyReducer } from "./survey/SurveyReducer";


export const store = createStore(SurveyReducer);