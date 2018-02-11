const HTMLtoJSX = require('htmltojsx');
const converter = new HTMLtoJSX({
  createClass: false,
  outputClassName: ''
});

module.exports = (source) => {
  const output = converter.convert(source);

  return `import React from 'react'; \nexport default function() { return ${output} }`;
};