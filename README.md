## chrome-extension-tsx-template
A template for developing Chrome extensions using TSX!

### Features
This template supports the following features.

* React
* TypeScript
* Webpack
* Jest
* ESLint
* Github Actions(Test and Lint on push)

You can add or remove features as needed.

### Usage
1. clone this repository
1. run `npm i` to install packages
1. run `npm run dev` to build files on development mode or run `npm run watch` on watch mode
1. develop your own extensions(details [here](#Development))
1. when you are done developing, run `npm run build` to build on production mode and submit to chrome store

### Development
1. build files by running `npm run (dev|watch|build)`
1. access `chrome://extensions`
1. click `Load unpacked` and select `dist` directory
![chrome://extensions](https://user-images.githubusercontent.com/44517313/152640543-2309c31c-b3bc-473f-999b-df37f250aa22.png)
1. develop your own extensions 
