import React from 'react';
import greenLogo from './../../assets/logo/logo-greenthumb.svg';

const ModelQuizz = props => {
  return (
    <div className='quizz-sec'>
      <div className='col l4 s12 side-logo hide-on-med-and-down'>
        <div className='side-line bg-color-light-green '></div>
        <img className='' src={greenLogo} alt='Green Thumb Logo' />
      </div>
      <div className='container'>
        <div className='row center-align'>
          <img
            className='col s12 hide-on-large-only mob-top-logo'
            src={greenLogo}
            alt='Green Thumb Logo'
          />
        </div>
        <React.Fragment>{props.children}</React.Fragment>
      </div>
    </div>
  );
};

export default ModelQuizz;
