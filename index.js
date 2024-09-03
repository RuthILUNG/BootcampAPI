import express from 'express';
const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.static('public'));
import { shortestWord, longestWord, wordLengths } from './wordgame.js';
import { totalPhoneBill } from './phonebill.js';
import { enoughAirtime } from './Enoughairtime.js';
//add just below const app=express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/api/word_game', function (httpRequest, httpResponse) {
    //res.send("hello world");
    let sentence = httpRequest.query.sentence;
    //const surname= httpRequest.body.surname;
    httpResponse.json({
        longestWord: longestWord(sentence),
        shortestWord: shortestWord(sentence),
        wordLengths: wordLengths(sentence)





        //message: "hello Back world" + sentence
    });

});

app.post('/api/phonebill', function (httpRequest, httpResponse) {
    //res.send("hello world");

    const bill = httpRequest.body.bill;
    //const surname= httpRequest.body.surname;
    httpResponse.json({
        "bill": totalPhoneBill(bill)

    });

});

app.get('/api/phonebill', function (httpRequest, httpResponse) {
    //res.send("hello world");

    const call = httpRequest.query.call;
    const sms = httpRequest.query.sms;


    httpResponse.json({
        "calls": totalPhoneBill(call),
        "sms": totalPhoneBill(sms)

        //message: "hello Back world" + sentence
    });
});
app.post('/api/phonebillprice', function (httpRequest, httpResponse) {
    //res.send("hello world");

    const price = httpRequest.body.price;
    const type = httpRequest.body.type;
    if (type === 'call') {

        httpResponse.json({
            status: 'sucess',
            message: 'the sms price was set to ${price}'

            //"bill": totalPhoneBill(bill)      
        });
    }
    else if (type === 'sms') {
        httpResponse.json({
            status: 'sucess',
            message: 'the sms price was set to ${price}'
        });


    }
    else {
        httpResponse.json({
            status: 'error',
            message: 'invalid type'

        });
    }


});
//////Enough Airtime API
app.post('/api/enoughairtime', function (httpRequest, httpResponse) {
    //res.send("hello world");
    const usage = httpRequest.body.usage;
    const available = httpRequest.body.available;
    //const surname= httpRequest.body.surname;
    httpResponse.json({
        "total": enoughAirtime(usage,available)

    });

});













///port 
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})

