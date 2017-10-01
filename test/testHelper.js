var fs = require('fs');
var path = require('path');
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

try {
  var html = fs.readFileSync(path.relative(__dirname, '/src/index.html'), 'utf8');
} catch(e) {
  console.log('Error', e.stack);
}

const dom = new JSDOM(html);

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

Object.keys(window).forEach((key) => {
  if (!(key in window)) {
    global[key] = window[key];
  }
});

export default dom;
