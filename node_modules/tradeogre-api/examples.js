var TradeOgre = require('./index.js')

// Public Methods
var tradeOgre = new TradeOgre()

tradeOgre.getMarkets(console.log)
tradeOgre.getOrderBook('BTC-LTC', console.log)
tradeOgre.getTicker('BTC-LTC', console.log)
tradeOgre.getTradeHistory('BTC-LTC', console.log)


// Private Methods
// var tradeOgre = new TradeOgre( your_api_key, your_api_secret )

// tradeOgre.buy('BTC-LTC', 1, 0.00000001, console.log)
// tradeOgre.sell('BTC-LTC', 1, 100, console.log)

// var uuid = ''
// tradeOgre.cancelOrder(uuid, console.log)

// tradeOgre.getOrders('BTC-LTC', console.log)
// tradeOgre.getBalance('BTC', console.log)