import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};


const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};


const burgerBuilder = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INCREDIENT:
            const updatedIngredient = {
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            };
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };

            return updateObject(state, updatedState);
        case actionTypes.REMOVE_INCREDIENT:
            // return {
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
            //         totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            //     }
            // };
            const updatedIng = {
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            };
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            const updatedStat = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedStat);

        case actionTypes.SET_INCREDIENTS:
            // return {
            //     ...state,
            //     ingredients: action.ingredients,
            //     error: false,
            //     totalPrice: 4
            // };
            return updateObject(state,{
                ingredients: action.ingredients,
                error: false,
                totalPrice: 4
            });
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {...state, error: true};
        default: return state;
    }
};

export default burgerBuilder;