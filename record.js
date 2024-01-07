import { post } from 'axios';

const Record = async() => {
    try {
        const ip = await post('http://localhost:4100/record',
        {
            ip: document.getElementById("ip").value
        });
    } catch (error) {
        console.log(error.message);
    }
}


