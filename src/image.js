var PDFImage = require("pdf-image").PDFImage;

var pdfImage = new PDFImage(__dirname + "/../work/src/QSAR.pdf",
    {convertOptions:{"-density":"400","-geometry":"2000"} });
pdfImage.convertPage(22).then( function(imagePath) {
  console.log(imagePath);
});
