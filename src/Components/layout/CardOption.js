import React from 'react';

const CardOption = ({ changeF, type, option, color }) => {
  return (
    <div
      onClick={changeF}
      className={
        `option-card-${color} center-align option-card` +
        (option.sel ? ` sel-${color}` : '')
      }
    >
      <div>
        <img
          className={option.sel ? 'hide' : 'hide-on-hover'}
          src={option.icon}
          alt='Decorative Icon'
        ></img>
        <img
          className={option.sel ? 'show' : 'show-on-hover'}
          src={option.iconSel}
          alt='Decorative Icon'
        ></img>
        <p className='mont-font-bold'>{option.desc}</p>
      </div>
    </div>
  );
};

export default CardOption;
