import React, {Component} from "react";


import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const withErrorHandler = (WrappedComponet, axios) => {
    return class extends Component{
        constructor(props) {
            super(props);

            this.state = {error: null};

            // reset error after request
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });
            // get error if response has one
            this.responseInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState({error:error});
            });
        }



        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.request.eject(this.responseInterceptor);
        }


        errorConfirmedHandler = () => {
            this.setState({error: null})
        };

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponet {...this.props}/>
                </Aux>
            )
        }


    };
};

export default withErrorHandler;