import React from 'react';
import { Link } from 'react-router-dom';

import greenLogo from './../assets/logo/logo-greenthumb.svg';

const QuizIntro = () => {
  return (
    <div className='bg-intro'>
      <div className='intro-holster'>
        <div className='row'>
          <div className='col l4 s12 center-align'>
            <img className='main-logo' src={greenLogo} alt='Green Thumb Logo' />
          </div>
        </div>
        <div className='row'>
          <div className='col l4 s12'>
            <p className='intro-desc mont-font-bold'>
              Find your next green friend
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col l4 s12 valign-wrapper'>
            <Link
              className='start-btn mont-font-bold btn waves-effect waves-light bg-color-green'
              to='/sunlight'
            >
              <span>
                <i className='fas fa-arrow-right' /> start quizz
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizIntro;
