import { useEffect, useState } from 'react';
import './App.css';
import { Layout } from './components/layout/Layout';
import { Rating } from './components/rating/Rating';
import { Questions } from './components/questions/Questions';
import { Finish } from './components/Finish';
import { Done } from './components/Done';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router';
import { CheckRoutes } from './components/routes/CheckRoutes';
import { Provider } from 'react-redux';
import { store } from './store';

const survey = {
  data: {
    rating: null,
    questions: [
      {
        questionID: 1, 
        responseID: null
      },
      {
        questionID: 2, 
        responseID: null
      },
      {
        questionID: 3, 
        responseID: null
      },
      {
        questionID: 4, 
        responseID: null
      },
      {
        questionID: 5, 
        responseID: null
      },
      {
        questionID: 6, 
        responseID: null
      }
    ],
  },
  isSend: false,
  isDone: false
}



export const App = () => {
  const [data, setData] = useState(
    {
      rating: null,
      questions: []
    }
  );
  const [currentRating, setCurrentRating] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // защита от ввода URL вручную 
    // при вводе URL перезагружается вся страница и снова маунтится App
    // поэтому проверка по соответствию URL заполненным данным при маунте App
    if (survey.done) {
      navigate("done");
    } else if (survey.send) {
      navigate("finish");
    } else if (data.rating !== null) {
      navigate("questions");
    } else {
      navigate("/");
    }
  }, [])

  useEffect(() => {
    //показывает изменённый массив только после перерендера
    // setData((prev) => ({ ...prev, rating: currentRating}));
    setData(() => ({ ...data, rating: currentRating}));
    console.log('App Mount');
    console.log(data);
  }, [currentRating])

  const setAnswers = (answers) => {
    // App не обновляется, хотя изменяется data
    setData(() => ({ ...data, questions: answers}));
    console.log(data);
  }
  return (
    <>
    <div className="App">
      <Provider store={store}> 
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Rating rating={currentRating} setRating={setCurrentRating} />} />
            <Route path="questions" element={<Questions setAllAnswers={setAnswers} />} />
            <Route path="finish" element={<Finish />} />
            <Route path="done" element={<Done />} />
          </Route>
          <Route path='*' element={<div><p>404</p><p>Page Not Found</p></div>} />
        </Routes>
      </Provider>
    </div>
    </>
  );
}
