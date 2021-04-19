import axios from 'axios';

const instance =  axios.create({
        baseURL:'https://react-my-burger-6da42.firebaseio.com/'
});

export default instance;