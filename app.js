// import { createStore } from 'redux';   // ES6 syntax
const { createStore, applyMiddleware } = require('redux');

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

const logger = store => next => action => {
  console.log('Dispatching ', action);
  let result = next(action);
  console.log('state after action ', store.getState());
  return result;
}

// create reducer function and pass state and action. initially it will return state
function reducer(state, action) {
  switch(action.type){
    case 'ADD_COURSE':
      return Object.assign({}, state, {
        courses: [...state.courses, action.course]
      });
    default: 
      return state
  }
}

// define store and pass reducer function and our current state
var store = createStore(reducer, defaultState, applyMiddleware(logger));

function addView(viewFunc) {
  viewFunc(defaultState);
  // subscribe on your view to the state changes
  store.subscribe(() => {
    // calls the view with the latest state from the store
    viewFunc(store.getState());
  });
}

addView((state) => {
  console.log(`There are ${state.courses.length} courses in the library`);
});

addView((state) => {
  console.log(`The latest course in the library: ${state.courses[state.courses.length -1].name}`);
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