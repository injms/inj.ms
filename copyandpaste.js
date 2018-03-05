const fs = require('fs-extra');

fs.copy('./_redirects/_redirects', './public/_redirects')
    .catch((error) => {
        console.error(error)
    });
    
fs.copy('./_headers/_headers', './public/_headers')
    .catch((error) => {
        console.error(error)
    });
