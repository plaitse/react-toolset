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

## Conventions

We use an uppercase letter for a JSX component file ```Button.js``` and a lowercase letter for a normal JavaScript ```index.js```;

## Debug

### Chrome developer tools

To debug a bug, we can use Chrome developer tools with:
- The usual Console tab.
- The Source tab, where we select the file which could contain the bug and place a breakpoint to analyse each step fired.
- The React tab installed via Chrome extension.

### Error Boundaries

To debug and get a more precise error, we can also create a Higher Order Component called ErrorBoundary and wrap it around the component which fails. Don't forget to place the "key" on this new component if you are printing a list of things.

See: https://reactjs.org/docs/error-boundaries.html

## Higher Order Compoent

Instead of creating our own ```<Aux>``` component to wrap multiple elements, we can use a React built-in solution: ```<Fragment>``` with ```{Fragment}``` imported.

To manager CSS classes on a HOC, the component needs to accept ```className={props.classes}```;

## Lifecycle

```useEffect()``` hook combines ```componentDidMount()``` and ```componentDidUpdate()```. It useful for HTTP requets for instance. To target once or several specific props, we can indicate it/them in the hook's parameter, seperated by a comma, in one array. We can declare this hook as many times as we wants in one class.

## Props

We can install ```prop-types``` to be able to verify props.

## Routing

By adding the keyword ```exact``` to ```<Route path='/' exact render={() => <h1>Home</h1>} />``` or ```<NavLink to='/' exact>Home</NavLink>``` we specify that we only want this route to display this content. 

To prevent a complete reload of the page, we use ```<Link to='/'>```. It is treated as an absolute path by default but can be set as relative path.

Using ```<NavLink>``` instead of ```Link``` sets an active class to the current ```<a>``` tag we are visiting which allows styling the active link.

The order of the routes which are set is important. To avoid calling two routes, we can use ```<Switch>``` and the routes inside it which will use the first route that matches. We can also let some of the routes outside ```<Switch>``` (before or after) to be sure they are analyzed everytime by the router no matter what.

We can redirect a user with ```Redirect to='/home' />``` or ```this.props.history.replace('/home')```.

We can manage unfound pages with ```<Route render={() => <h1>Not found</h1>} />```. To avoid 404 on a deployed app, we need to specify the basename when setting the router: ```<BrowserRouter basename='/my-app'>```.

### Absolute vs Relative paths

An absolute path is always appended to the domain. A relative paths takes the path we are currently on and appends the new path to it: ```pathname: this.props.match.url + '/contact'```.
