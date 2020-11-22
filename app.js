const NodeMediaServer = require('node-media-server');
const ffmpeg = require("ffmpeg-cli");

// ffmpeg.run(`-re -i sample-video.mp4 -c copy -f flv rtmp://localhost/live/test`);

/*

-i = sorgente video avfoundation
-r = fps
-t = durata
-s = risoluzione
-pix_fmt = formato pixel
-c = codec --> copy = originale
-f = formato

*/

ffmpeg.run(`-re -f avfoundation -i "1" -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -r 25 -s 1680x1050 -f flv rtmp://localhost/live/test`)



const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();