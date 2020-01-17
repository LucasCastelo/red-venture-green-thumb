import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { ReqContext } from './../../context/ContextReq';

//components
import ModelQuizz from './ModelQuizz';
import QuestionQuizz from './QuestionQuizz';
import CardOption from './CardOption';

const QuestionPage = props => {
  const [cards, setCards] = useState({ ...props.dataState });

  const Req = useContext(ReqContext);
  const { dispatch } = Req;

  /*toggleChange
//Adiciona e Remove o "estilo" do item selecionado pelo usuario baseado no index recebido.
//A função checa todos os elementos do 'state', seta para 'true' para
//o elemento selecionado pelo usuario e 'false' para todos
// os demais para remover o 'estilo' do css que determina qual opção
//foi selecionada.
//Apos substitui no 'state' todos os elementos o que propaga a mudança na UI.
//
//Tambem atualiza o 'context' com o parametro correspondente, para posteriormente
//formar dinamicamente o request.
*/

  const toggleChange = id => {
    const newOptions = [];

    cards.options.map((card, index) => {
      if (index === id) {
        card = { ...card, sel: true };
        newOptions.push(card);
        dispatch({ type: cards.type, value: card.reqParam });
        return true;
      }
      card = { ...card, sel: false };
      newOptions.push(card);

      return false;
    });

    setCards({ ...cards, options: [...newOptions] });
  };

  return (
    <ModelQuizz>
      <QuestionQuizz img={props.topImg} text={props.text} sub={props.sub} />
      <div className='parent-node'>
        <div className='cards-holster'>
          {cards.options.map((option, index) => {
            return (
              <CardOption
                changeF={() => {
                  toggleChange(index);
                }}
                type={cards.type}
                option={option}
                key={Math.random()}
                color={cards.color}
              />
            );
          })}
        </div>
        <div className='buttons-holster'>
          <Link className='quizz-button mont-font-bold' to={props.prev}>
            <i className='fas fa-arrow-left'></i>
            <p>prev</p>
          </Link>
          <Link className='quizz-button mont-font-bold' to={props.next}>
            <i className='fas fa-arrow-right'></i>
            <p>next</p>
          </Link>
        </div>
      </div>
    </ModelQuizz>
  );
};

export default QuestionPage;
