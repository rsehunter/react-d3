import { randomizeData } from './core';

var ini = Array.apply();

export default (state = ini,action)=>{
  switch (action.type){
    case 'RANDOMIZE':
      return randomizeData();
    default:
      return state;
  }
}
