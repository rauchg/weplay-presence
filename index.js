const redis = require('weplay-common').redis();
const io = require('socket.io-emitter')(redis);
const interval = process.env.WEPLAY_INTERVAL || 5000;
const logger = require('weplay-common').logger('weplay-presence');

setInterval(() => {
    redis.hgetall('weplay:connections', (err, counts) => {
        if (!counts) return;
        let count = 0;
        for (const i in counts) count += Number(counts[i]);
        logger.info('connections', count);
        redis.set('weplay:connections-total', count);
        io.emit('connections', count);
    });
}, interval);

