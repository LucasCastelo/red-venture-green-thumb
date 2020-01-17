import React, { useContext, useState } from 'react';
import ModelQuizz from './../Components/layout/ModelQuizz';
import { ReqContext } from './../context/ContextReq';
import axios from 'axios';

import rarelyImg from './../assets/icons/grey/one-drop.svg';
import regularlyImg from './../assets/icons/grey/two-drops.svg';
import dailyImg from './../assets/icons/grey/three-drops.svg';
import toxicImg from './../assets/icons/grey/toxic.svg';
import highImg from './../assets/icons/grey/high-sun.svg';
import lowImg from './../assets/icons/grey/low-sun.svg';
import noImg from './../assets/icons/grey/no-answer.svg';
import envelop from './../assets/illustrations/envelop.png';

const ProductPage = props => {
  const { id, name, sun, water, toxicity, url, price } = useContext(
    ReqContext
  ).reqParams.selPlant;

  const [contactData, setContactData] = useState({ email: '', name: '' });
  const [emailSent, setEmailSent] = useState(false);

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

  const updateTextFields = (e, data) => {
    setContactData({ ...contactData, [data]: e.target.value });
  };

  const submitContact = async () => {
    await axios
      .post(
        `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service`,
        {
          name: contactData.name,
          email: contactData.email,
          id: id
        }
      )
      .then(response => {
        if (response.status === 200) {
          setEmailSent(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ModelQuizz>
      <div className='row' style={{ height: '100%' }}>
        <div className='col l7 s12'>
          <h1 className='product-title dark-text mont-font-bold'>{name}</h1>
          <p className='mont-font-light dark-text lighten-2 product-price'>
            {'$' + price}
          </p>
          <img className='product-image' src={url} alt={name + ' plant'}></img>
          <div className='product-icons-holster'>
            {/* eslint-disable-next-line*/}
            <img className='product-icons' src={eval(sun)} alt=''></img>
            <p>
              <span className='capitalize'>{sun + ' '}</span> sunlight
            </p>
          </div>
          <div className='product-icons-holster'>
            <img className='product-icons' src={eval(water)} alt=''></img>
            <p className='capitalize'>{water}</p>
          </div>
          {toxicity ? (
            <div className='product-icons-holster'>
              <img className='product-icons' src={toxicImg} alt=''></img>
              <p>
                <span className='mont-font-bold'>Beware! </span>
                Toxic for pets
              </p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className='col l5 s12 product-contact-form-holster'>
          {!emailSent ? (
            <div className=' product-contact-form'>
              <h1 className='mont-font-bold product-contact-title'>
                Nice pick
              </h1>
              <p className='mont-font-light product-contact-description'>
                Tell us your name and e-mail and we will get in touch regarding
                your order ;{')'}
              </p>

              <form
                onSubmit={e => {
                  e.preventDefault();
                  submitContact();
                }}
              >
                <div className='input-field contact-input-fields'>
                  <label className='contact-labels mont-font-bold'>Name</label>
                  <input
                    onChange={e => {
                      updateTextFields(e, 'name');
                    }}
                    value={contactData.name}
                    type='text'
                    className='mont-font-light'
                  ></input>
                </div>
                <div className='input-field contact-input-fields'>
                  <label className='contact-labels mont-font-bold'>
                    E-mail
                  </label>
                  <input
                    onChange={e => {
                      updateTextFields(e, 'email');
                    }}
                    value={contactData.email}
                    type='email'
                    className='validate contact-input'
                  ></input>
                  <span
                    className='helper-text'
                    data-error='Please provide a valid e-mail.'
                  ></span>
                </div>
                <button className='buy-button send-button' type='submit'>
                  send
                </button>
              </form>
            </div>
          ) : (
            <div className=' product-contact-sent center-align'>
              <h1 className='mont-font-bold product-contact-title'>
                Thank you
              </h1>
              <p className='mont-font-light product-contact-description'>
                You will hear from us soon. Please check your e-mail!
              </p>
              <img className='contact-envelop' alt='' src={envelop}></img>
            </div>
          )}
        </div>
      </div>
    </ModelQuizz>
  );
};

export default ProductPage;
