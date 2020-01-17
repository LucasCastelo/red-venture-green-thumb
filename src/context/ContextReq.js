import React, { createContext, useState, useReducer } from 'react';

export const ReqContext = createContext();

export const ReqProvider = props => {
  const [reqParams, setReqParams] = useState({
    sun: '',
    water: '',
    pet: '',
    selPlant: {}
  });

  const setReqReducer = (state, action) => {
    switch (action.type) {
      case 'sun':
        setReqParams({ ...reqParams, sun: action.value });
        break;
      case 'water':
        setReqParams({ ...reqParams, water: action.value });
        break;
      case 'pet':
        setReqParams({ ...reqParams, pet: action.value });
        break;
      case 'selPlant':
        setReqParams({ ...reqParams, selPlant: { ...action.value } });
        break;
      default:
        return reqParams;
    }
  };

  const [state, dispatch] = useReducer(setReqReducer, reqParams);

  return (
    <ReqContext.Provider value={{ reqParams, dispatch, state }}>
      {props.children}
    </ReqContext.Provider>
  );
};
