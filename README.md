# TodoApp

## Description

This is a todo web app for creating tasks of a day. The app has reponsive views for desktop, tab and mobile.
Tasks are in sorting order of time and done states. Tasks can be in created, deleted and done condition.
The percentage of completing will remind user about his performance. The task will save in local storage automatically after closing the tab.


## Screenshots
![desktop1](https://user-images.githubusercontent.com/25328307/92407952-eb4a7780-f15d-11ea-93aa-2ba2e8555436.PNG)
![desktop2](https://user-images.githubusercontent.com/25328307/92407956-ec7ba480-f15d-11ea-9fa9-7c203ad0ae60.PNG)
![form](https://user-images.githubusercontent.com/25328307/92407962-ee456800-f15d-11ea-8b6c-4609bb0c40a9.PNG)
![mobile1](https://user-images.githubusercontent.com/25328307/92407963-ee456800-f15d-11ea-8bc8-49fe6ce59e7d.PNG)
![mobile2](https://user-images.githubusercontent.com/25328307/92407945-e8e81d80-f15d-11ea-957a-0b2acb8fcf62.PNG)

## Technology

react, material ui

## File Structure
**action**: The action of application<br />
**data**: This contains all static data naming with files<br />

**components**: Here will be all usefull components for out react app<br />
          |\_ \_ hoc: all higher order components<br />
          |\_ \_ section: child component of sections<br />

**sections**: files naming with part of spa<br />
**theme**: containg the default theme<br />

**app**: The root page<br />


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
