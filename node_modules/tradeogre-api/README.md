# tradeogre-api
TradeOgre REST API wrapper module for Node.js

The code is self explanatory, for further details please refer to the TradeOgre API documentation.
Check out examples.js for a list of all possible calls.

## Installation
```
npm install tradeogre-api
```

## Usage
```
// Sample public call
var TradeOgre = require('tradeogre-api');
var tradeOgre = new TradeOgre();

tradeOgre.getTicker('BTC-LTC', function(err, resp) {
  if (!err) {
    console.log(resp)
  } else {
    console.log(err)
  }
});

// Sample private call
var TradeOgre = require('tradeogre-api');
var tradeOgre = new TradeOgre( api_key, api_secret );

tradeOgre.getBalance('BTC', function(err, resp) {
  if (!err) {
    console.log(resp)
  } else {
    console.log(err)
  }
});
```

DISCLAIMER: This software is provided as is. The author takes no responsibility for any consequence which may derive from its proprer or improper usage.
