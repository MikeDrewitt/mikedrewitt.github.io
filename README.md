# Portfolio

## Application Technologies

- [React](https://reactjs.org/docs/getting-started.html) - Javascript frontent framework
- [Typescript](https://www.typescriptlang.org/docs/handbook/react.html) -
- [Webpack](https://webpack.js.org/) - Bundles all assets/js/css/etc into status html/css/js
  - [Babel](https://webpack.js.org/loaders/babel-loader/) - JS bundler. Converts React js to browser js
  - [Sass](https://github.com/webpack-contrib/sass-loader) - Fancy css. Supports more features. Bundles down to css
- [Node](https://nodejs.org/en/) - Used to run webpack.

## Running the Application

Firstly install this projects dependancies by installing node. Once node is installed we can continue with running the application.

Firstly we'll have to install the project dependancies

```
npm install
```

Then run the project locally

```
npm start
```

## Working in the project

This project is primarilly built using

- [React](https://reactjs.org/docs/getting-started.html)
- [Sass](https://github.com/webpack-contrib/sass-loader)

But also uses libraries fairly heavilly. Some of those libraries include

- [React redux](https://react-redux.js.org/api/hooks) - global state management tool
- [React router](https://reactrouter.com/web/guides/quick-start) - virtual router

There are many others that are used but those are the major players in making the app run the way that it does.

### The Application

When starting up the server, the `index.tsx` is the first component initialized. All other components in the chain stem from that component, so I'd reccomend checking it out to see what's going on in there.

### Some notes on some services

For ease and consistency of development a few services have been added that can be included and used as needed. Some of these are

- `history.service.ts` - Used for the routing of the application. This can be used to change pages, update url parameters, etc.

- `htmlHead.service.ts` - Code that gets built into the html `<head>` tag on build. Not likely used super often.

- `localStorage.service.ts` - Local storage access and write wrapper. A developer could hit local storage without this wrapper, but doing so in one spot allows the codebase to be kept a bit cleaner.

### Css and Themes

This application uses scss for all of it's styles. The scss is largely only used as it's called as we avoid the cascading parts of css at all costs. The only exception to this is the css that's been declared in `global.scss` that's imported and run from `index.tsx`.

`global.scss` is special because that should be the only place in the application that has cascading css. It is used to setup the theme color variables as well, though notably not _all_ of the variables, not even most really.

`variables.scss` is where the majority of the css variables are declared. We couldn't declare them all here because we need dynamic variables for themes to work as expected. Scss is by it's nature unable to be dynamic, so any theme based variables must be controller by vanilla css variables. Because we're using vanilla css variables for theme variables, those need to be set globally. Therefor that's why theme variables are set and them brought into `variables.scss`. Beyond that, variables is a bit special because it's the only scss file in the project that can be imported without any kind of pathing. This is because it's built into the build to be allowed to included without a path. It's a piece of syntactic sugar that the developer will need to be aware of when importing variables and other scss variables.

The theme of the application is bootstrapped by the `darkModeToggle` component. The catch of this is that unless that component is being renender, because this component exists on the globaltoolbar it shouldn't cause issues, but it is something to keep in mind.

The theme's state is stored in the browsers local storage so that the chosen theme will persist across users sessions.

## Building and Deploying the Application

The application can be built in multiple different ways for multilpe different environments, here are the commands

```
npm run build
```

All of these build to `./portfolio`

Unlike other applications where the bundle is gitignored, we are not ignoring the build. The bundle on master is hosted by github via github pages. The index.html in the root redicrects to the `portfolio/index.html`.
