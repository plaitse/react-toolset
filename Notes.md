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

## Immutability

### Updating Nested Objects

The key to updating nested data is that every level of nesting must be copied and updated appropriately.

Defining a new variable does not create a new actual object - it only creates another reference to the same object.

```js
function updateNestedState(state, action) {
    let nestedState = state.nestedState;
    // ERROR: this directly modifies the existing object reference
    nestedState.nestedField = action.data;
    return {
        ...state,
        nestedState
    };
}
```

This function does correctly return a shallow copy of the top-level state object, but because the nestedState variable was still pointing at the existing object, the state was directly mutated. Another common version:

```js
function updateNestedState(state, action) {
    // Problem: this only does a shallow copy!
    let newState = {...state};
    // ERROR: nestedState is still the same object!
    newState.nestedState.nestedField = action.data;
    return newState;
}
```

Doing a shallow copy of the top level is not sufficient - the nestedState object should be copied as well. Here's a good approach:

```js
function updateVeryNestedField(state, action) {
    return {
        ...state,
        first : {
            ...state.first,
            second : {
                ...state.first.second,
                [action.someId] : {
                    ...state.first.second[action.someId],
                    fourth : action.someValue
                }
            }
        }
    }
}
```

Obviously, each layer of nesting makes this harder to read, and gives more chances to make mistakes. This is one of several reasons why you are encouraged to keep your state flattened, and compose reducers as much as possible.

### Inserting and Removing Items in Arrays

Normally, a Javascript array's contents are modified using mutative functions like push, unshift, and splice. Since we don't want to mutate state directly in reducers, those should normally be avoided. Because of that, you might see "insert" or "remove" behavior written like this:

```js
function insertItem(array, action) {
    return [
        ...array.slice(0, action.index),
        action.item,
        ...array.slice(action.index)
    ]
}
function removeItem(array, action) {
    return [
        ...array.slice(0, action.index),
        ...array.slice(action.index + 1)
    ];
}
```

However, remember that the key is that the original in-memory reference is not modified. As long as we make a copy first, we can safely mutate the copy. Note that this is true for both arrays and objects, but nested values still must be updated using the same rules. This means that we could also write the insert and remove functions like this:

```js
function insertItem(array, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 0, action.item);
    return newArray;
}
function removeItem(array, action) {
    let newArray = array.slice();
    newArray.splice(action.index, 1);
    return newArray;
}
```

The remove function could also be implemented as:

```js
function removeItem(array, action) {
    return array.filter( (item, index) => index !== action.index);
}
```

### Updating an Item in an Array

Updating one item in an array can be accomplished by using Array.map, returning a new value for the item we want to update, and returning the existing values for all other items:

```js
function updateObjectInArray(array, action) {
    return array.map( (item, index) => {
        if (index !== action.index) {
            // This isn't the item we care about - keep it as-is
            return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
            ...item,
            ...action.item
        };    
    });
}
```

### Immutable Update Utility Libraries

Because writing immutable update code can become tedious, there are a number of utility libraries that try to abstract out the process. These libraries vary in APIs and usage, but all try to provide a shorter and more succinct way of writing these updates. Some, like dot-prop-immutable, take string paths for commands:

```js
state = dotProp.set(state, `todos.${index}.complete`, true)
```

Others, like immutability-helper (a fork of the now-deprecated React Immutability Helpers addon), use nested values and helper functions:

```js
var collection = [1, 2, {a: [12, 17, 15]}];
var newCollection = update(collection, {2: {a: {$splice: [[1, 1, 13, 14]]}}});
```

For more info;
- Redux documentation: https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
- Redux Addons Catalog: https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities
- Dop Prop Immutable: https://github.com/debitoor/dot-prop-immutable
- Immutability Helper: https://github.com/kolodny/immutability-helper

## Lifecycle

```useEffect()``` hook combines ```componentDidMount()``` and ```componentDidUpdate()```. It useful for HTTP requets for instance. To target once or several specific props, we can indicate it/them in the hook's parameter, seperated by a comma, in one array. We can declare this hook as many times as we wants in one class.

## Props

We can install ```prop-types``` to be able to verify props.

## Redux

- Core concepts: https://redux.js.org/introduction/core-concepts
- Actions: https://redux.js.org/basics/actions
- Reducers: https://redux.js.org/basics/reducers
- FAQ: https://redux.js.org/faq

## Routing

By adding the keyword ```exact``` to ```<Route path='/' exact render={() => <h1>Home</h1>} />``` or ```<NavLink to='/' exact>Home</NavLink>``` we specify that we only want this route to display this content. 

To prevent a complete reload of the page, we use ```<Link to='/'>```. It is treated as an absolute path by default but can be set as relative path.

Using ```<NavLink>``` instead of ```Link``` sets an active class to the current ```<a>``` tag we are visiting which allows styling the active link.

The order of the routes which are set is important. To avoid calling two routes, we can use ```<Switch>``` and the routes inside it which will use the first route that matches. We can also let some of the routes outside ```<Switch>``` (before or after) to be sure they are analyzed everytime by the router no matter what.

We can redirect a user with ```Redirect to='/home' />``` or ```this.props.history.replace('/home')```.

We can manage unfound pages with ```<Route render={() => <h1>Not found</h1>} />```. To avoid 404 on a deployed app, we need to specify the basename when setting the router: ```<BrowserRouter basename='/my-app'>```.

### Absolute vs Relative paths

An absolute path is always appended to the domain. A relative paths takes the path we are currently on and appends the new path to it: ```pathname: this.props.match.url + '/contact'```.
