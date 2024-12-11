

const initialState = {
    data: {
      rating: null,
      questions: [],
    },
    isDone: false,
  }

  export const SurveyReducer = (state = initialState, action) => {
    console.log('reducer!');
    console.log(action);
    switch (action.type) {
        case 'setRating': {
          const data = state.data;
          return {
              ...state,
              data: {...data, rating: action.num}
          }
        }
        case 'setResponse': {
          const data = {...state}.data;
          return {
              ...state,
              data: {...data, questions: action.answers}
          }
        }
        case 'setDone': {
          return {
            ...state,
            isDone: true
          }
        }
        default:
            return state;
    }
  }