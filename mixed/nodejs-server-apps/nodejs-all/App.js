/**
 * Chittaranjan Sardar
 */
const express = require('express');
const app = express();

const portNumber = 3000;

app.use('/', express.static('web-pages'));

app.use('/data', (req, res) => {

    var query = req.query;
    var nameQuery = query.name;

    console.log(`Passed nameQuery = ${nameQuery}`);

    var timeToWait = Date.now() + 100000;
    
    
    while(timeToWait > Date.now()){
        
        console.log(`Processing for ${nameQuery}`);
    }
    
    res.json({message: `Done for ${nameQuery}`});
});

app.use('/show-all', (req, res) => {

    res.render
});

// Default
app.use((req, res) => {

    res.status(404);
    res.sendFile('404.html', { root: 'web-pages' });
});

app.listen(3000, () => {

    console.log(`I am liteling to you at http://127.0.0.1:${portNumber}`);
});

