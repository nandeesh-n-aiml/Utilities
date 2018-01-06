buildXmlFromObj:

There are several situations where we need to send XML strings in REST API's while requesting a service from backend.
To make this task at ease, I have created this method where it accepts two arguments.

Argument 1: (Object)
Pass in any object which has to be converted to xml/string.
Object's property which is defined with @, is treated as an "attribute".

Argument 2: (String) [optional]
If this value is set to:
  true, returns an xml in "string format".
  false, returns "XML".
defaults to false.
  
Example usage:
{
  ROOT: {
    R: {
      '@id': 1
    }
  }
}
creates an xml -> <ROOT> <R id="1"/> </ROOT>

Note: This method can only be used on client-side.


Available on:
npm -> npm install obj-to-xml
