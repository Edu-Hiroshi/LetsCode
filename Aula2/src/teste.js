// const axios = require('axios'); usa sem o type no json

import axios from 'axios';


axios.get('http://www.google.com')
    .then((response) => {
        console.log(response.data);
        
        console.log('1 ok');
    
        axios.get('http://www.youtube.com')
            .then((response) => {
                console.log(response.data);

                console.log('2 ok');

                axios.get('http://www.twitter.com')
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((objErro) => {
                        console.error(objErro.message)
                    });

                console.log('3 ok');
})
            .catch((objErro) => {
                console.error(objErro.message)
            });
    })
    .catch((objErro) => {
        console.error(objErro.message)
    });

console.log('1 ok');
