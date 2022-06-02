import { configureStore } from '@reduxjs/toolkit'
import  AuthReducer  from './reducer';

export const store = configureStore ({
    reducer:{
        auth : AuthReducer,
    },
  });
