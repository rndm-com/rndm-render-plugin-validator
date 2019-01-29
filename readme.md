# RNDM Render Plugin: Validator

## About

This plugin provides the validation functionality for the [RNDM Render package](https://github.com/rndm-com/rndm-render).

## Installation

If you have not already done so, then please ensure you have installed the [RNDM Render](https://github.com/rndm-com/rndm-render) and [RNDM Plugin: Core](https://github.com/rndm-com/rndm-render-plugin-core) package.

### From NPM

```sh
npm install --save @rndm/render-plugin-validator
```

### Post Installation

In order to allow this plugin to work, it must first be included in your project. You can do this inside your main index file:

```javascript
import '@rndm/render-plugin-core';
import '@rndm/render-plugin-validator';
```

## Usage

The Validator Plugin transforms a suite of methods used for validation and sanitisation into into serialisable functions.

**Example**

```json
{
    "type": "react-native.TouchableOpacity",
    "props": {
        "onPress": {
            "isFunc": true,
            "type": "validator.isEmail",
            "args": ["info@rndm.com"]
        },
        "children": {
            "type": "react-native.Text",
            "props": {
                "children": "Touch Me"
            }
        }
    }
}
```

There are a suite of [examples](www.rndm.com/playground?q=validator) included in the RNDM Playground tool.
