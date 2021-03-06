var keypress = require('keypress'),
    tty = require('tty');

module.exports = function(keys, callback){
    var stdin = process.stdin;

    function setRawMode(enabled){
        if (typeof stdin.setRawMode === 'function'){
            stdin.setRawMode(enabled);
        } else {
            require('tty').setRawMode(enabled);
        }
    }

    var subscr;
    var unsubscr = function(){
        if (subscr){
            stdin.removeListener('keypress', subscr);
            setRawMode(false);
            stdin.pause();
            subscr = null;
        }
    };

    subscr = function(ch, key){
        if (key && (Array.isArray(keys) ? keys.indexOf(key.name) >= 0 : key.name === keys)){
            unsubscr();
            callback();
        }
    };

    keypress(stdin);
    stdin.on('keypress', subscr);
    setRawMode(true);
    stdin.resume();

    return unsubscr;
};