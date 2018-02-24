# Utility Functions (Supported in Chrome, Firefox, IE, Edge)

## Documentation
### FM.buildXmlFromObj(object, toString)

#### object

Pass in any object which has to be converted to xml/string. Object's property which is defined with `@`, is treated as an "attribute".

#### toString (Boolean) [optional]

If value is set to `true`, it returns an xml in "string format". 
If value is set to `false`, it returns an "XML". 
Defaults to `false`.

##### Usage

```js
var obj = {
    ROOT: {
        R: {
            '@id': 1
        }
    }
}
FM.buildXmlFromObj(obj);
/* Returns an XML, since toString is undefined.
<ROOT> <R id="1"/> </ROOT> */

FM.buildXmlFromObj(obj, true);
/* Returns XML string, since toString is set to true.
'<ROOT> <R id="1"/> </ROOT>' */

```

To get a list of items, pass an array as value to the object's property.

```js
var obj = {
    STUDENTS: {
        S: [{
            '@id': 1,
            '@name': 'Nandeesh'
        }, {
            '@id': 2,
            '@name': 'Stanley'
        }]
    }
}
FM.buildXmlFromObj(obj);
/* returns an XML,

<STUDENTS>
	<S id="1" name="Nandeesh"/>
	<S id="2" name="Stanley"/>
</STUDENTS>
*/

```

### FM.getStrFromXml(xml)

Pass an XML object. Returns an XML string.

### FM.getXmlFromStr(str)

Pass a string value. Returns an XML object.
Supported in all browsers

### Available on npm
#### Installation

```sh
$ npm install obj-to-xml
```

#### API
var objToXml = require('obj-to-xml');
```
