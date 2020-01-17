import React, { useContext } from 'react';
import Swipe from 'react-easy-swipe';
import { ReqContext } from './../../context/ContextReq';

import { withRouter } from 'react-router-dom';

const CardsCarousel = ({ plants, returnIcons, wid, history }) => {
  const idPlants = [];
  const { dispatch } = useContext(ReqContext);

  /*
  //O PROBLEMA: se eu atualizar uma classe com react, ou seja gerando um if, que propaga
  //um render a propriedade 'transition' do css não é calculada. Porque o react adiciona
  //a classe re-renderiza a tela. então para o react é como se aquela classe sempre estive
  //ali, logo não anima. Pois é eu não sabia.
  //
  //A SOLUÇÃO: Eu tive que fazer um menu carrosel para mobile que não propagase um render
  //no react ou seja não podia usar state ou props. Assim que qualquer um alterase o react ia renderizar
  //novamente cancelando o transition.
  // As duas funções abaixo 'onSwipeLeft' e 'onSwipeRight', basicamente estão fazendo
  //um check a mão. Eu crio um array durante o render inicial do React dando 'push' em um valor
  //que é setado como id do elemento. então exemplo [1,2,3,4] este são id de elementos do html.
  //depois eu rodo em todos estes elementos buscando o elemento que possui a classe "showing-mob"
  //se o elemento possui a classe e o usuario arrastou para esquerda, eu troco 'showing-mob' por
  //'hide-left' busco o proximo elemento do array e seto 'showing-mob'. O processo inverso é
  //realizado caso o usuario tenha arrastado pela direita, busco o elemento anterior ao inves do proximo.
  //tambem checo a posição dos elementos caso ele seja o primeiro não é possivel arrastar para direita,
  //caso ele seja o ultimo não é possivel arrastar para esquerda. Apesar de todos os checks feitos
  //nas funções não notei problemas em perfomance.
  */

  const onSwipeLeft = () => {
    let breakMap = false;
    const checkLast = document
      .getElementById(idPlants[idPlants.length - 1])
      .classList.contains('showing-mob');

    idPlants.map((id, index) => {
      if (checkLast || index === idPlants.length - 1) {
        breakMap = true;
      }

      if (!breakMap) {
        const current = document.getElementById(id);
        if (current.classList.contains('showing-mob')) {
          current.classList.remove('showing-mob');
          current.classList.add('hide-left');

          document
            .getElementById(idPlants[index + 1])
            .classList.remove('hide-right');

          document
            .getElementById(idPlants[index + 1])
            .classList.add('showing-mob');

          document
            .getElementById(index + 'circle')
            .classList.remove('bg-color-salmon');
          document
            .getElementById(index + 'circle')
            .classList.add('circle-not-selected');

          document
            .getElementById(index + 1 + 'circle')
            .classList.add('bg-color-salmon');
          document
            .getElementById(index + 1 + 'circle')
            .classList.remove('circle-not-selected');
          breakMap = true;
        }
      }
      return null;
    });
  };

  const onSwipeRight = () => {
    let breakMap = false;
    const checkFirst = document
      .getElementById(idPlants[0])
      .classList.contains('showing-mob');

    idPlants.map((id, index) => {
      if (checkFirst) {
        breakMap = true;
      }

      if (!breakMap) {
        const current = document.getElementById(id);

        if (current.classList.contains('showing-mob')) {
          current.classList.remove('showing-mob');
          current.classList.add('hide-right');

          document
            .getElementById(idPlants[index - 1])
            .classList.remove('hide-left');

          document
            .getElementById(idPlants[index - 1])
            .classList.add('showing-mob');

          document
            .getElementById(index + 'circle')
            .classList.remove('bg-color-salmon');
          document
            .getElementById(index + 'circle')
            .classList.add('circle-not-selected');

          document
            .getElementById(index - 1 + 'circle')
            .classList.add('bg-color-salmon');
          document
            .getElementById(index - 1 + 'circle')
            .classList.remove('circle-not-selected');

          breakMap = true;
        }
      }

      return null;
    });
  };

  const registerSelection = plant => {
    dispatch({ type: 'selPlant', value: { ...plant } });
    history.push('/plant');
  };

  return (
    <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      <div className='pagination-circles' style={{ color: 'lightgrey' }}>
        <i className='fas fa-caret-left'></i>
        {plants.map((plant, index) => {
          return (
            <div
              className={
                'pag-circle ' +
                (index === 0 ? ' bg-color-salmon' : ' circle-not-selected')
              }
              key={Math.random() * Math.random()}
              id={index + 'circle'}
            ></div>
          );
        })}
        <i className='fas fa-caret-right'></i>
      </div>
      <ul className='carousel-plants'>
        {plants.map((plant, index) => {
          //ID SETTING
          idPlants.push('plant' + plant.id + 'card');
          //-------------------
          return (
            <li
              className={
                'carousel-plants-item ' +
                (index === 0 ? ' showing-mob ' : ' hide-right ')
              }
              key={Math.random() * 243}
              id={'plant' + plant.id + 'card'}
            >
              <div className='card-data-mob'>
                <img
                  className='mob-main-image'
                  src={plant.url}
                  alt={plant.name}
                ></img>
                <p className='mont-font-bold text-color-green card-title-mob'>
                  {plant.name}
                </p>
                <div className='price-icons-mob'>
                  <p className='mont-font-light price-mob'>
                    {'$' + plant.price}
                  </p>
                  <div className='mob-icons'>
                    {returnIcons(plant.sun, plant.water, plant.toxicity)}
                  </div>
                </div>
                <button
                  onClick={() => {
                    registerSelection(plant);
                  }}
                  to='/'
                  className='buy-button'
                >
                  <p>buy now</p>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </Swipe>
  );
};

export default withRouter(CardsCarousel);
