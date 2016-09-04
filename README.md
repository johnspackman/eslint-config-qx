# eslint-config-qx

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Qooxdoo](http://www.qooxdoo.org)

This depends on [eslint-plugins-qx-rules](https://github.com/drawstack/eslint-plugins-qx-rules)


## Install

```
$ npm install --save-dev eslint-config-qx
```

For the `esnext` version you'll also need Babel's ESLint [parser](https://github.com/babel/babel-eslint) and [plugin](https://github.com/babel/eslint-plugin-babel):

```
$ npm install --save-dev babel-eslint eslint-plugin-babel
```

This will let you use ES2016 features like [`async`/`await`](https://github.com/lukehoban/ecmascript-asyncawait) and [decorators](https://github.com/wycats/javascript-decorators). For a full list of features see [Babel's experimental features](https://babeljs.io/docs/usage/experimental/) and their [Learn ES2015](https://babeljs.io/docs/learn-es2015/).


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "qx/browser"
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": "qx/browser"
}
```

Supports parsing ES2015, but doesn't enforce it by default.

This package also exposes [`qx/esnext`](esnext.js) if you want ES2015+ rules:

```json
{
	"extends": "qx/esnext"
}
```

And [`qx/browser`](browser.js) if you're in the browser:

```json
{
	"extends": "qx/browser"
}
```

If you want only check for safety-errors then extend [qx/safety](safety.js):

```json
{
	"extends": "qx/safety"
}
```


## Authors

- Original XO Author: [Sindre Sorhus](https://sindresorhus.com)
- Changes for Qooxdoo by: [René Jochum](https://rene.jochums.at)


## License

MIT
