/**
 * @author Chittaranjan Sardar
 */

var express = require('express');
var url = require('url');

var app = express();

 // Tests Quesry String (== @RequestParam in Spring == @QueryParam in JAX-RS)
 // - http://127.0.0.1:8080/test-query-string?name=Chittaranjan&lastName=Sardar
 // It is CaseSensitive
 app.get('/test-query-string', (req, res)=>{

    var rul_parts = url.parse(req.url, true);
    var query = rul_parts.query;
    console.log('Name = ' + query.name);
    console.log('Last Name = ' + query.lastName);

    res.send(JSON.stringify({
        meassage: `Hi ${query.name} ${query.lastName}! How are you doing?`,
        method: 'test-defined-apameter/:name/:lastName'
    }));
 });

 // Tests Rout Parameters using Defined Parameter (== @PathVariable in Spring)
 // - http://127.0.0.1:8080/test-defined-pameter/Chittaranjan/Sardar
 app.get('/test-defined-pameter/:name/:lastName', (req, res)=>{

    var params = req.params;

    console.log("'test-defined-apameter/:name/:lastName ' : received values " 
    + JSON.stringify(params));

    res.json({
        message: `Hi ${params.name} ${params.lastName}! You are fabulous.`,
        method: '/test-defined-apameter/:name/:lastName'
    });
 });


 // http://127.0.0.1:8080/callback-on-defined-param/Chittaranjan
 app.get('/callback-on-defined-param/:name', (req, res)=>{

    console.log('I am in - /callback-on-defined-param/:name : called with name = ' + req.params.name);

    res.json({
        message: `Hi ${req.params.name}! You are fabulous.`,
        method: '/callback-on-defined-param/:name'
    });
 });

 // It will be called for both - http://127.0.0.1:8080/callback-on-defined-param/Chittaranjan 
 // and - http://127.0.0.1:8080/test-defined-pameter/Chittaranjan/Sardar
 app.param('name', (req, res, next, value)=>{

    console.log("I am in Callback function of defined param of 'name' : Called with '" + value + "'");
    next();
 })


 app.listen(8080, ()=>{

     console.log('Rest APIs are up and running at 8080');
 });