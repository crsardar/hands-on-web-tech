/**
 * Chittaranjan Sardar
 */
const express = require('express');
const app = express();

const portNumber = 3000;

app.use('/', express.static('web-pages'));

app.use('/data', (req, res) => {

    var data = [];
    for (i = 0; i < 20; i++){
        
        data.push({id:i, name:`Item ${i}`});
    }
    
    console.log(data);
    res.json(data);
});

// Default
app.use((req, res) => {
    
    res.status(404);
    res.sendFile('404.html', { root: 'web-pages' });
});

app.listen(3000, () => {

    console.log(`I am liteling to you at http://127.0.0.1:${portNumber}`);
});
