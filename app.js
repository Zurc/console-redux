// import { createStore } from 'redux';   // ES6 syntax
const { createStore } = require('redux');

const defaultState = {
  courses: [
    {
      name: 'Learning React',
      topic: 'React',
    },
    {
      name: 'Learning Angular',
      topic: 'Angular',
    },
    {
      name: 'Using Redux with Angular',
      topic: 'Angular',
    }
  ]
};

// create reducer function and pass state and action. initially it will return state
function reducer(state, action) {
  return state
}

// define store and pass reducer function and our current state
var store = createStore(reducer, defaultState);

function addView(viewFunc) {
  viewFunc(defaultState);
  // subscribe on your view to the state changes
  store.subscribe(() => {
    // calls the view with the latest state from the store
    viewFunc(store.getState());
  });
}

addView((s) => {
  console.log(`There are ${s.courses.length} courses in the library`);
});

addView((s) => {
  console.log(`The latest course in the library: ${s.courses[s.courses.length -1].name}`);
});

// defaultState.courses.push({
//   name: 'this is a new course',
//   topic: 'Really does not matter'
// })

// dispatch an action to the store
store.dispatch({
  type: 'ADD_COURSE', 
  course: {
    name: 'this is a new course',
    topic: 'Really does not matter'
  }
})