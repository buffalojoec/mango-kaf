
// Examples

const mangoSubscribe = {
    op: 'subscribe',
    channel: 'trades',
    markets: ['MNGO-PERP', 'SOL-PERP']
}

const serumSubscribe = {
    op: 'subscribe',
    channel: 'level2',
    markets: ['MNGO-PERP', 'SOL-PERP']
}

//

// Simply point any subscription objects here

const mangoSubscribeObject = mangoSubscribe;
const serumSubscribeObject = serumSubscribe;

//

let up_sql = 'SELECT * FROM table;';

const fs = require('fs');

fs.writeFile('up.sql', up_sql,  function(err) {
    if (err) {
        return console.error(err);
    }
});