let http = require('http'),
    config = require('./config'),
    url = require('url'),
    SERVER_PORT = process.env.SERVER_PORT || config.dbConfig.port;
let server = http.createServer(function (req, res) {
    let data = [];

    if(req.method=='GET'){
        if (req.url.includes(`/api/numbers/prime?amount=`) && req.method == "GET") {
            let query = url.parse(req.url, true).query;
            let amount = query.amount
            if(amount>32||amount<1){
              res.end('amount should be between 1-32'); 
            }
            res.end(firstNPrimes(amount).toString())     
        }
    res.end(`${req.url} has no GET api`);
    }

    
    req.on('data', function (chunk) {
        data.push(chunk);
    }).on('end', function () {
        console.log(req.url);
        
        if (req.url == "/api/numbers/prime/validate" && req.method == "POST") {
            data = JSON.parse(data);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            let isAllPrime = true;
            for (x in data) {
                isAllPrime = isAllPrime && isPrime(data[x])
            }
            res.end(isAllPrime.toString());
        }
        res.end(`${req.url} has no POST api`);
    });
});

server.listen(SERVER_PORT, () => {
    console.log(`listning on ${SERVER_PORT} `);

});

function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

function firstNPrimes(n) {
    var primes = [];
    var num = 2;
  
    while(primes.length < n) {
      if (isPrime(num)) {
        primes.push(num);
      }
  
      num += 1;
    }
  
    return primes;
  }
  