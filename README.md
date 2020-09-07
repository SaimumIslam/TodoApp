# TodoApp

## Description

This is a todo web app for creating tasks of a day. The app has reponsive views for desktop, tab and mobile.
Tasks are in sorting order of time and done states. Tasks can be in created, deleted and done condition.
The percentage of completing will remind user about his performance. The task will save in local storage automatically after closing the tab.

## Technology

react, material ui

## File Structure

components: Here will be all usefull components for out react app<br />
          |\_ \_ hoc: all higher order components<br />
          |\_ \_ \_section: child component of sections<br />

sections: files naming with part of spa<br />
theme: containg the default theme<br />

app: The root page<br />

+action: The action of application<br />
+data: This contains all static data naming with files<br />

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
