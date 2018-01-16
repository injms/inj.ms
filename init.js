const fs = require('fs-extra');

fs.copy('./_redirects/_redirects', './site/_redirects')
    .catch((error) => {
        console.error(error)
    });

fs.copy('./_site/index.html', './site/index.html')
    .catch((error) => {
        console.error(error)
    });