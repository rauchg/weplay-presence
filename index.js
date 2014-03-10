
var redis = require('./redis')();
var io = require('socket.io-emitter')(redis);
var interval = process.env.WEPLAY_INTERVAL || 5000;

setInterval(function(){
  redis.hgetall('weplay:connections', function(err, counts){
    if (!counts) return;
    var count = 0;
    for (var i in counts) count += Number(counts[i]);
    redis.set('weplay:connections-total', count);
    io.emit('connections', count);
  });
}, interval);
