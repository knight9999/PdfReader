# PdfReader


## インストール

ImageMagickとtesseractをインストールします。

Mac OSXの場合

参考サイト：https://gist.github.com/henrik/1967035

```
$ brew install imagemagick
$ brew install tesseract -all-languages
```

また、npmパッケージをインストールします。

```
$ npm install
```

nodeのバージョンが新しくないとダメかも。内藤の環境ではv7.4.0

pdfファイルと同じディレクトリに、pngファイルが生成されます。

なお、pdfファイルのファイル名に空白スペースなどが入っていると、正常に
動作しないので、必要に応じて変更すること。

## image.js

### 使い方

image.jsを編集し、対象となるpdfファイルへのパスと、png化したい
ページ番号を設定する。

実行

```
$ node src/image.js
```

## ocr.js

ocr.jsを編集し、対象となるpngファイルへのパスを設定します。

```
$ node src/ocr.js
```

pngファイルを読み取った結果を標準出力に表示します。
