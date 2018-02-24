const developer = 'Nandeesh N';
var isIE = navigator.userAgent.indexOf('rv:11') > -1 || navigator.userAgent.indexOf('MSIE') > -1;
var FM = {};
FM.buildXmlFromObj = function (obj, strOutput) {
    /*  Pass an object to create an xml.
	Format ->
	    ROOT: {
		R: {
	    	    '@id': 1
		}
	    }
	creates an xml -> <ROOT> <R id="1"/> </ROOT>
	Property which is defined with @, is treated as an attribute.
	strOutput: Pass true to return XML in string format.
    */
    var xmlOutput = function xmlFromObj(obj, xml) {
        var rootKey = Object.keys(obj),
            metaXml, keyElem, objValue, i, j;

        function createChildTag(objVal) {
            metaXml = document.createElementNS('', FM.removeSpacesFromTags(keyElem));
            metaXml = xmlFromObj(objVal, metaXml);
            if (xml) {
                xml.appendChild(metaXml);
            } else {
                xml = metaXml;
            }
            return xml;
        }
        for (i = 0; i < rootKey.length; i++) {
            keyElem = FM.removeSpacesFromTags(rootKey[i]);
            objValue = obj[rootKey[i]];
            if (keyElem.indexOf('@') > -1) {
                xml.setAttributeNS('', keyElem.slice(1, keyElem.length), objValue);
            }
            if (typeof objValue == 'object') {
                if (Array.isArray(objValue)) {
                    for (j = 0; j < objValue.length; j++) {
                        xml = createChildTag(objValue[j]);
                    }
                } else {
                    xml = createChildTag(objValue);
                }
            }
        }
        return xml;
    }(obj);
    return strOutput ? FM.getStrFromXml(xmlOutput) : xmlOutput;
}

FM.getStrFromXml = function (xml) {
    var serializer = new XMLSerializer();
    return serializer.serializeToString(xml);
}

FM.getXmlFromStr = function (str) {
    var xml;
    if (isIE) {
        xml = new ActiveXObject('MSXML2.DOMDocument');
        xml.async = 'false';
        xml.loadXML(str);
    } else {
        xml = new DOMParser().parseFromString(str, 'text/xml');
    }
    return xml;
}

FM.stringReplaceAll = function (str, fromStr, toStr) {
    var regEx = new RegExp(fromStr, 'g');
    return str.replace(regEx, toStr);
}

FM.removeSpacesFromTags = function (str) {
    return FM.stringReplaceAll(str, ' ', '-');
}

FM.getTimeStamp = function () {
    var date = new Date();
    var timeStamp = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + '::' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ';
    return timeStamp;
}

Object.freeze(FM);
