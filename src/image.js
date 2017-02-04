var PDFImage = require("pdf-image").PDFImage;

var pdfFile = __dirname + "/../work/QSAR.pdf";
var pageNum = 22;

var pdfImage = new PDFImage(pdfFile ,
    {convertOptions:{"-density":"400","-geometry":"2000"} });
pdfImage.convertPage(pageNum).then( function(imagePath) {
  console.log(imagePath);
});
