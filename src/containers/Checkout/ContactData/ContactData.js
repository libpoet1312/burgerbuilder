import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';


class ContactData extends Component {
    state = {
        loading: false,
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };

    orderHandler = (e) => {
        e.preventDefault();

        this.setState({loading:true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Nick Pappas',
                address: {
                    street: 'TestStreet 2',
                    zipCode: '42200',
                    country: 'Greece'
                },
                email: 'test@test.com',
                deliveryMethod: 'fastest'
            }
        };
        axios.post('/orders.json', order)
            .then( response => {
                // console.log(response);
                this.setState({loading:false, purchasing: false});
            }).catch( error => {
                this.setState({loading:false, purchasing: false});
                console.log(error);
            });

    };

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
                    <input className={classes.Input} type="text" name="email" placeholder="Your email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Your street"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="Your postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;