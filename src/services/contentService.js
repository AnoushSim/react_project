import axios from "axios";

export function get(url) {
   return  fetch(url)
        .then(response => {
            return response.json()
        })
        .then(myJson => {
            return myJson
        })

}

export function put(url, updatedData) {
    let req = {
        url: url,
        method: 'PUT',
        data: updatedData
    }
    return axios(req);
}

export function remove(url) {

   return axios.delete(url);
}


const ContentService = {
    get , put, remove
};

export default ContentService;