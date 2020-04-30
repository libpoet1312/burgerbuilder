import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-772e6.firebaseio.com/',

});

instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default instance;