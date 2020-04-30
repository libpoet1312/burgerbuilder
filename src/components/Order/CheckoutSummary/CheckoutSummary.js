import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import classes from './CheckoutSummary.module.css';


const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>I hope it tastes well!</h1>
            <div style={{width: '100%', height: "200px", margin: "auto"}}>
                <Burger ingredients={props.ingredients}/>
                <Button btnType="Danger" clicked={props.checkoutCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
            </div>

        </div>
    )
};

export default checkoutSummary
