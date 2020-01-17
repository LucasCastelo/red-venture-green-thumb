import React from 'react';
import QuestionPage from './layout/QuestionPage';

import sunImg from './../assets/illustrations/sun.png';
import highSun from './../assets/icons/coral/high-sun.svg';
import highSunWhite from './../assets/icons/white/high-sun.svg';
import lowSun from './../assets/icons/coral/low-sun.svg';
import lowSunWhite from './../assets/icons/white/low-sun.svg';
import noSun from './../assets/icons/coral/no-answer.svg';
import noSunWhite from './../assets/icons/white/no-answer.svg';

const Sunlight = () => {
  const data = {
    type: 'sun',
    color: 'orange',
    options: [
      {
        sel: false,
        icon: highSun,
        iconSel: highSunWhite,
        desc: 'High sunlight',
        reqParam: 'high'
      },
      {
        sel: false,
        icon: lowSun,
        iconSel: lowSunWhite,
        desc: 'Low sunlight',
        reqParam: 'low'
      },
      {
        sel: false,
        icon: noSun,
        iconSel: noSunWhite,
        desc: 'No sunlight',
        reqParam: 'no'
      }
    ]
  };

  const text = {
    firstText: 'First, set the amount of ',
    bold: 'sunlight ',
    secText: 'your plant will get.'
  };

  return (
    <React.Fragment>
      <QuestionPage
        dataState={data}
        topImg={sunImg}
        next='/water'
        prev='/'
        text={text}
      ></QuestionPage>
    </React.Fragment>
  );
};

export default Sunlight;
