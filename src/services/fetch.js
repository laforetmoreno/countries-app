import axios from 'axios';

const fetch = (method ,url) => axios({method: method,url: url})

export default fetch;
