const axios = require('axios');

axios.get('http://ec2-3-17-39-222.us-east-2.compute.amazonaws.com/api/user/bwson98')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
    .then(() => {
        console.log("fin!");
    });