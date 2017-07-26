# GAL Study Group #5: Redux

### Agenda:

#### TLDR;

- Overview
- Egghead Video
- Put it into practice
- Share & Discuss

## Topic

- **What is Redux?**
"Redux is a state management tool for JavaScript applications. While it is frequently used with React, it is compatible with many other React-like frameworks such as Preact and Inferno as well as Angular and even just plain JavaScript. The main concept behind Redux is that the entire state of an application is stored in one central location. Each component of an application can have direct access to the state of the application without having to send props down to child components or using callback functions to send data back up to a parent."

  - Three Principles 
  1. Single source of truth - The state of your whole application is stored in an object tree within a single store.
  2. State is read-only - The only way to change the state is to emit an action, an object describing what happened.
  3. Changes are made with pure functions - To specify how the state tree is transformed by actions, you write pure reducers.

- **Where can I use Redux?**
  -  Great article [here](https://www.fullstackreact.com/articles/redux-with-mark-erikson/)
  
- **Why should I learn it?**
1. Predictable state updates make it easier to understand how the data flow works in the application
1. The use of "pure" reducer functions makes logic easier to test, and enables useful features like "time-travel debugging".
1. Centralizing the state makes it easier to implement things like logging changes to the data, or persisting data between page refreshed


## Practice

- clone https://github.com/MorganLKestner/react-redux-exercise

## References I Used

1. http://redux.js.org/
1. https://github.com/tayiorbeii/egghead.io_redux_course_notes
1. https://egghead.io/courses/getting-started-with-redux
1. https://www.fullstackreact.com/articles/redux-with-mark-erikson/