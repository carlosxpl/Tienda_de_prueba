/** Devolveremos una Promesa con los
 * datos en formato JSON a solicitar */

import axios from 'axios';

const GET = async (url) => {
    return axios.get(url)
        .then(response => response.data);
}
export { GET };
