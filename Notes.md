# Configuration

## CSS Modules

To work with CSS Modules:
Without Eject: https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

With Eject (Webpack 4.x.x)
- Run ```npm run eject```
- Find the find the following code in config/webpack.config.js:
```
{
    test: cssRegex,
    exclude: cssModuleRegex,
    ...
}
```
- Edit this portion of code like this:
```
{
    test: cssRegex,
    exclude: cssModuleRegex,
    use: getStyleLoaders({
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
    }),
}
```
- Quit and restart the project

## Installing

To create a new project:
- Install React creation tool globally with ```sudo npm i create-react-app -g```
- Create your project with ```create-react-app project_name```

# React theory

## Components vs Containers

"State" only works inside Class components not in functions. Use it with care beaucse the more "states" are manipulated the more the app gets unpredictable. This problem can be solved with Redux.

By convention, we call "container" a stateful component i.e. whose state can be manipulated (e.g. App.js) whereas a simple "component" is stateless. "Container" means it contains a part of the application state. We want reduce the containers to the minimum to keep the app maintenable.

## Debug

### Chrome developer tools

To debug a bug, we can use Chrome developer tools with:
- The usual Console tab.
- The Source tab, where we select the file which could contain the bug and place a breakpoint to analyse each step fired.
- The React tab installed via Chrome extension.

### Error Boundaries

To debug and get a more precise error, we can also create a Higher Order Component called ErrorBoundary and wrap it around the component which fails. Don't forget to place the "key" on this new component if you are printing a list of things.

See: https://reactjs.org/docs/error-boundaries.html