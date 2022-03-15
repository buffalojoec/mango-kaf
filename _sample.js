// Examples
var mangoSubscribe = {
    op: 'subscribe',
    channel: 'trades',
    markets: ['MNGO-PERP', 'SOL-PERP']
};
var serumSubscribe = {
    op: 'subscribe',
    channel: 'level2',
    markets: ['MNGO-PERP', 'SOL-PERP']
};
//
// Simply point any subscription objects here
var mangoSubscribeObject = mangoSubscribe;
var serumSubscribeObject = serumSubscribe;
//
var up_sql = 'SELECT * FROM table;';
var fs = require('fs');
fs.writeFile('up.sql', up_sql, function (err) {
    if (err) {
        return console.error(err);
    }
});
