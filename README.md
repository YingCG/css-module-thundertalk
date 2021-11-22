# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

Runs the app by install the package

### `package and dependency`

* To add a property in the file at client/Webpack.config.js in module
```
module: 
{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }
      ]
    }
```
* Update the package.json
```
"devDependencies":
{
    "css-loader": "^6.5.1",
    "css-modulesify": "^0.25.1",
    "postcss-color-rebeccapurple": "^2.0.0",
    "postcss-modules-extract-imports": "^1.0.0",
    "postcss-modules-local-by-default": "^1.0.0",
    "postcss-modules-scope": "^1.0.0"
},

"browserify": {
    "transform": [
      [
        "brfs",
        {
          "ignore": "\\.(json|css)$"
        }
      ]
    ]
```

### `npm run build`

### `Import as Component and apply like inline style js object`
```
import CSSNameAsReference from './Content.module.css'
import CSSModule from './Button.module.css'

<button className={CSSModule.button}>
```# css-module-thundertalk
