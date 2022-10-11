import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("error : " + error);
    });