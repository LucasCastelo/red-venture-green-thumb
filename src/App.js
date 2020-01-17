import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* COMPONENTS */
import QuizIntro from './Components/QuizIntro';
import Sunlight from './Components/Sunlight';
import Water from './Components/Water';
import Dog from './Components/Dog';
import Picks from './Components/Picks';
import ProductPage from './Components/ProductPage';

/* CSS & Materialize stuff */
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './assets/css/main.css';
import './assets/css/quiz.css';
import './assets/css/picks.css';
import './assets/css/carousel.css';

/* CONTEXT */
import { ReqContext } from './context/ContextReq';

function App() {
  const Req = useContext(ReqContext);

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <QuizIntro></QuizIntro>
          </Route>
          <Route exact path='/sunlight'>
            <Sunlight></Sunlight>
          </Route>
          <Route exact path='/water'>
            <Water></Water>
          </Route>
          <Route exact path='/dog'>
            <Dog></Dog>
          </Route>
          <Route exact path='/picks'>
            <Picks reqParams={Req.reqParams}></Picks>
          </Route>
          <Route path='/plant/:icon' component={ProductPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
