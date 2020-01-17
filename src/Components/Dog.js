import React from 'react';

import QuestionPage from './layout/QuestionPage';

/*IMAGES and ICONS*/
import topImg from './../assets/illustrations/dog.png';
import pet from './../assets/icons/coral/pet.svg';
import petWhite from './../assets/icons/white/pet.svg';
import noAnswer from './../assets/icons/coral/no-answer.svg';
import noAnswerWhite from './../assets/icons/white/no-answer.svg';

const Dog = () => {
  const data = {
    type: 'pet',
    color: 'orange',
    options: [
      {
        sel: false,
        icon: pet,
        iconSel: petWhite,
        desc: 'Yes',
        reqParam: 'true'
      },
      {
        sel: false,
        icon: noAnswer,
        iconSel: noAnswerWhite,
        desc: "No/They don't care",
        reqParam: 'false'
      }
    ]
  };

  const text = {
    firstText: 'Do you have pets? Do they ',
    bold: 'chew ',
    secText: 'plants?'
  };

  const sub = {
    firstText: 'We are asking because some plants can be ',
    bold: 'toxic ',
    secText: 'for your buddy.'
  };

  return (
    <React.Fragment>
      <QuestionPage
        dataState={data}
        topImg={topImg}
        next='/picks'
        prev='/water'
        text={text}
        sub={sub}
      ></QuestionPage>
    </React.Fragment>
  );
};

export default Dog;
