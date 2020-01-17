import React from 'react';

import QuestionPage from './layout/QuestionPage';

//IMAGES AND ICONS

import wateringCan from './../assets/illustrations/wateringcan.png';
import oneDrop from './../assets/icons/green/one-drop.svg';
import twoDrop from './../assets/icons/green/two-drops.svg';
import threeDrop from './../assets/icons/green/three-drops.svg';
import oneDropWhite from './../assets/icons/white/one-drop.svg';
import twoDropWhite from './../assets/icons/white/two-drops.svg';
import threeDropWhite from './../assets/icons/white/three-drops.svg';

const Water = () => {
  const data = {
    type: 'water',
    color: 'green',
    options: [
      {
        sel: false,
        icon: oneDrop,
        iconSel: oneDropWhite,
        desc: 'Daily',
        reqParam: 'daily'
      },
      {
        sel: false,
        icon: twoDrop,
        iconSel: twoDropWhite,
        desc: 'Regularly',
        reqParam: 'regularly'
      },
      {
        sel: false,
        icon: threeDrop,
        iconSel: threeDropWhite,
        desc: 'Rarely',
        reqParam: 'rarely'
      }
    ]
  };

  const text = {
    firstText: 'How often do you want to ',
    bold: 'water ',
    secText: 'your plant?'
  };

  return (
    <React.Fragment>
      <QuestionPage
        dataState={data}
        topImg={wateringCan}
        next='/dog'
        prev='/sunlight'
        text={text}
      ></QuestionPage>
    </React.Fragment>
  );
};

export default Water;
