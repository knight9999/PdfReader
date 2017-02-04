var tesseract = require('node-tesseract');

var pngFile = __dirname + "/../work/QSAR-22.png";

var options = {
  psm: 6
};

tesseract.process(pngFile,options,
  function(err, text) {
    if (err) {
      console.error(err);
    } else {
      console.log(text);
    }
});


// https://github.com/tesseract-ocr/tesseract/wiki/Command-Line-Usage

/*

次のコマンドで、boxを作ることが出来る
$ tesseract work/src/QSAR-22.png eng..exp0 -l eng batch.nochop makebox

*/
