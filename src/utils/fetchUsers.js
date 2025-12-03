
import axios from 'axios';

function fetchUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users'

    axios.get(url)
        .then(response => {
            console.log('', response.data)
        })
        .catch(error => {
            console.error ('There is an Error', error)
        })
        .finally(() => {
            console.log('')
        })
}

fetchUsers()