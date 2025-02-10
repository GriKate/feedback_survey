import { FC, useEffect } from 'react';
import './App.scss';
import { Layout } from './components/layout/Layout';
import { Rating } from './components/rating/Rating';
import { Questions } from './components/questions/Questions';
import { Finish } from './components/finish/Finish';
import { Done } from './components/done/Done';
import { Route, Routes, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { State } from './types';

export const App: FC = () => {
  const isDone = useSelector((state: State) => state.isDone);
  const data = useSelector((state: State) => state.data);

  const navigate = useNavigate();

  useEffect(() => {
    // защита от ввода URL вручную 
    // при вводе URL перезагружается вся страница и снова маунтится App
    // поэтому проверка по соответствию URL заполненным данным при маунте App
    if (isDone) {
      navigate("done");
    } else if (data.questions.length === 6) {
      navigate("finish");
    } else if (data.rating !== null) {
      navigate("questions");
    } else {
      navigate("/");
    }
  }, [])

  return (
    <>
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Rating />} />
          <Route path="questions" element={<Questions />} />
          <Route path="finish" element={<Finish />} />
          <Route path="done" element={<Done />} />
        </Route>
      </Routes>
    </div>
    </>
  );
}
