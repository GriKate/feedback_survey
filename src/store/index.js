import { createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { SurveyReducer } from "./survey/reducer";

const persistConfig = {
    key: 'survey',
    storage,
}

const persistedReducer = persistReducer(persistConfig, SurveyReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);


// export const store = createStore(SurveyReducer);