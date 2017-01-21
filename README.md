# React-Native Template
[![CircleCI branch](https://img.shields.io/circleci/project/github/RealOrangeOne/react-native-template/master.svg?style=flat-square)](https://circleci.com/gh/RealOrangeOne/react-native-template/)

A template of how I think a [`React-Native`](https://github.com/facebook/react-native) project should be laid out.

### Contains:
- Navigation: `react-native.Navigator`
- Test Framework: `mocha` & `chai`
- React-Native helpers: `react-native-mock`
- Renderer: `enzyme`
- Linting: `eslint`
- Coverage: `nyc`


### Running the project
_Requires `react-native-cli` installed_

1. Clone the project
2. Install dependencies with `npm install`
3. Start the dev server with `npm start`
4. Run with `react-native run-android`

### Run tests
Unittests: `npm run mocha`

Unittests with coverage: `npm run coverage`

Linter: `npm run lint`
