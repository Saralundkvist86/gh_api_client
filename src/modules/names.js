import axios from 'axios';

const fetchNameRegister = async () => {
    let nameRegister = await axios.get('https://api.github.com/search/users?q=name');
    return nameRegister.data.names

};

export { fetchNameRegister }