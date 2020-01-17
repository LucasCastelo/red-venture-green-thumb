import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { ReqContext } from './../../context/ContextReq';

const CardsTable = ({ plants, returnIcons, history }) => {
  const { dispatch } = useContext(ReqContext);

  const registerSelection = plant => {
    dispatch({ type: 'selPlant', value: { ...plant } });
    history.push('/plant');
  };

  return (
    <div className='cards-table-holster'>
      {plants.map(plant => {
        return (
          <div className='card-holster' key={Math.random() * Math.random()}>
            <div className='card-unit'>
              <img src={plant.url} alt={plant.name}></img>
              <p className='mont-font-bold card-name text-color-green'>
                {plant.name}
              </p>
              <div className='price-icons'>
                <p className='mont-font-light'>{'$' + plant.price}</p>
                <div>{returnIcons(plant.sun, plant.water, plant.toxicity)}</div>
              </div>
              <button
                onClick={() => {
                  registerSelection(plant);
                }}
                className='mont-font-light buy-button'
              >
                buy now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(CardsTable);
