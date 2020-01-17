import React, { Component } from 'react';
import Axios from 'axios';

//components
import ModelQuizz from './layout/ModelQuizz';
import pickImg from './../assets/illustrations/pick.png';
import CardsTable from './layout/CardsTable';
import CardsCarousel from './layout/CardsCarousel';

//IMGS
import rarelyImg from './../assets/icons/grey/one-drop.svg';
import regularlyImg from './../assets/icons/grey/two-drops.svg';
import dailyImg from './../assets/icons/grey/three-drops.svg';
import toxicImg from './../assets/icons/grey/toxic.svg';
import highImg from './../assets/icons/grey/high-sun.svg';
import lowImg from './../assets/icons/grey/low-sun.svg';
import noImg from './../assets/icons/grey/no-answer.svg';

export default class Picks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      responsive: false,
      wid: window.innerWidth
    };
  }

  //`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${sun}&water=${water}&pets=${pet}`

  //`https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=high&water=no&pets=true`

  async componentDidMount() {
    // eslint-disable-next-line
    const { sun, water, pet } = this.props.reqParams;
    await Axios.get(
      `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=${sun}&water=${water}&pets=${pet}`
    ).then(res => {
      this.setState({ plants: [...res.data] });
    });

    //Porque dois checks do 'innerWidth'?
    //O primeiro check ele executa assim que o componente monta. E retorna a opção correta
    //Ja o eventListener apenas quando o 'innerWidth' ou a area de trabalho sofre um 'resize'
    //virando o celular para paisagem por exemplo.

    if (window.innerWidth <= 768) {
      this.setState({
        ...this.state,
        responsive: true,
        wid: window.innerWidth
      });
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.setState({
          ...this.state,
          responsive: true,
          wid: window.innerWidth
        });
      } else {
        this.setState({
          ...this.state,
          responsive: false,
          wid: window.innerWidth
        });
      }
    });
  }

  componentWillUnmount() {
    //Não remover o eventListener 'resize' causa bugs.
    window.removeEventListener('resize', () => {});
  }

  returnIcons(sun, water, toxicity) {
    const iconsData = [sun, water, toxicity];
    // eslint-disable-next-line
    const high = highImg;
    // eslint-disable-next-line
    const low = lowImg;
    // eslint-disable-next-line
    const no = noImg;
    // eslint-disable-next-line
    const daily = dailyImg;
    // eslint-disable-next-line
    const regularly = regularlyImg;
    // eslint-disable-next-line
    const rarely = rarelyImg;

    return iconsData.map(data => {
      if (data === true) {
        return (
          <img
            src={toxicImg}
            alt={data + ' icon'}
            key={Math.random() * Math.random()}
          ></img>
        );
      }

      if (data === false) {
        return null;
      }

      return (
        <img
          // eslint-disable-next-line
          src={eval(data)}
          alt={data + ' icon'}
          key={Math.random() * Math.random()}
        ></img>
      );
    });
  }

  render() {
    return (
      <ModelQuizz>
        <div className='pick-page-title'>
          <img src={pickImg} alt='Decorative'></img>

          <p className='mont-font-bold'>Our picks for you</p>
        </div>
        {this.state.responsive ? (
          <CardsCarousel
            plants={this.state.plants}
            returnIcons={this.returnIcons}
            wid={this.state.wid}
          />
        ) : (
          <CardsTable
            plants={this.state.plants}
            returnIcons={this.returnIcons}
          />
        )}
      </ModelQuizz>
    );
  }
}
