var tesseract = require('node-tesseract');


tesseract.process(__dirname + "/../work/src/QSAR-22.png",
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
