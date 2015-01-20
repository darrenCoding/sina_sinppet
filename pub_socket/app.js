//引入程序包
var app = require('http').createServer(handler),
    io = require('socket.io')(app),
    redis = require('redis'),
    mysql = require('mysql'),
    client = redis.createClient('6379', '10.207.27.4'),
    fs = require('fs');
app.listen(8010);
var config = {
    get: function(key, val) {
        var key = key;
        try {
            if (key) {

                client.set(key, val, function(err, data) {
                    if (!err) {
                        console.log(data);
                    }
                });

            }
        } catch (e) {
            console.log('redis error:' + e);
        }
    },
    set: function(key, val) {
        var key = key;
        try {
            if (key) {

                client.set(key, val, function(err, data) {
                    if (!err) {
                        console.log(data);
                    }
                });

            }
        } catch (e) {
            console.log('redis error:' + e);
        }
    }
};
//WebSocket连接监听
function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function(err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
};

io.on('connection', function(socket) {
    socket.on('init', function(data) {
        var uid = data[0],
            key = data[1] + '_' + data[2] + '_' + data[3] + '_' + data[4];
        client.mget(key, function(err, data) {
            // 判断当前key是为空
            socket.emit('news', {
                flag: false
            });


        });
    });

    socket.emit('system', {
        hello: 'world'
    });
});