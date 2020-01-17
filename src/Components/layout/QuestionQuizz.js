import React from 'react';

const QuestionQuizz = ({
  img,
  text,
  sub = { firstText: '', secText: '', bold: '' }
}) => {
  return (
    <React.Fragment>
      <div className='row center-align'>
        <img src={img} alt='decorative icon'></img>
      </div>
      <div className='row center-align no-margin-bottom'>
        <div className='col s12 l12 mont-font-light'>
          <h2 className='question-title grey-text text-darken-3'>
            {text.firstText + ' '}
            <span className='mont-font-bold'>{text.bold}</span>
            {' ' + text.secText}
          </h2>
        </div>
        <div className='row'>
          <div className='col s12 l12 center-align mont-font-light sub-desc'>
            <p>
              {sub.firstText + ' '}
              <span className='mont-font-bold'>{sub.bold}</span>
              {' ' + sub.secText}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionQuizz;
