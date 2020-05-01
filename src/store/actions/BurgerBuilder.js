import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const fetchIngredientsFailed = () => {
    return{
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};


// ASYNC (we put the dispatch!)
export const initIngredients = () => {
    return dispatch => {
        axios.get('https://burgerbuilder-772e6.firebaseio.com/ingredients.json')
            .then( response => {
                if(response.data === undefined){
                    console.log('skata');
                    new Error('500')
                }
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed(error))
            });
    }
};