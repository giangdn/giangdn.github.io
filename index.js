var showdown  = require('showdown');
converter = new showdown.Converter(),
text      = '# hello, markdown!',
html      = converter.makeHtml(text);

var fs = require("fs");
fs.writeFile("pages/test.1.html", html, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});