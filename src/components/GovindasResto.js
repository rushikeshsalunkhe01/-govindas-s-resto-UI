import React from 'react';
import { RESTO_NAME, RESTO_DESC, BUTTON1, BUTTON2, RESTO_DETAILS } from "../config.js";
import govindasRestoImg from '../assets/govindas_resto.jpg'
const GovindasResto = () => {
  return (
    <div className='bg-gray-100 min-h-screen p-10'>
      <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6'>
        <h1 className='text-6xl text-center font-extrabold text-lime-900 mb-4'>{RESTO_NAME}</h1>
        <p className='text-lg text-gray-700 text-center mb-6'>{RESTO_DESC}</p>

        <img src={govindasRestoImg} alt="Govinda's Resto" className='mx-auto h-[450px] w-full object-cover rounded-lg shadow-md' />

        <div className='text-center my-6 px-4'>
          <p className='text-md text-gray-600'>{RESTO_DETAILS}</p>
        </div>

        <div className='flex justify-center'>
          <button className='bg-lime-900 m-3 px-6 py-2 rounded-lg text-white text-xl shadow-md transition duration-300 hover:bg-lime-700'>{BUTTON1}</button>
          <button className='bg-lime-900 m-3 px-6 py-2 rounded-lg text-white text-xl shadow-md transition duration-300 hover:bg-lime-700'>{BUTTON2}</button>
        </div>
      </div>
    </div>
  );
};

export default GovindasResto;
