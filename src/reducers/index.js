import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productSlice';

export default combineReducers({
    products: productReducer,
})