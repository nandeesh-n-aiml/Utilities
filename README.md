# obj-to-xml

[![NPM Version][npm-image]][npm-url]

Converting an object into an XML

## Installation

```sh
$ npm install obj-to-xml
```

## API

```js
var objToXml = require('obj-to-xml');
```

### objToXml.buildXmlFromObj(object, toString)

#### object

Pass in any object which has to be converted to xml/string. Object's property which is defined with `@`, is treated as an "attribute".

#### toString (Boolean) [optional]

If value is set to `true`, it returns an xml in "string format". 
If value is set to `false`, it returns an "XML". 
Defaults to `false`.

##### Usage example

```js
var objToXml = require('obj-to-xml');
var obj = {
    ROOT: {
        R: {
            '@id': 1
        }
    }
}
objToXml.buildXmlFromObj(obj);
/* Returns an XML, since toString is undefined.
<ROOT> <R id="1"/> </ROOT> */

objToXml.buildXmlFromObj(obj, true);
/* Returns XML string, since toString is set to true.
'<ROOT> <R id="1"/> </ROOT>' */

```
