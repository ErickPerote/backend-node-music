const fs = require('fs');

exports.play = function(req, res) {

    const filePath = './musics/' + req.params.file;
    const stat = fs.statSync(filePath);


    res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });

    fs.createReadStream(filePath).pipe(res);
}