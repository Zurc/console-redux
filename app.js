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

function addView(viewFunc) {
  viewFunc(defaultState);
}

addView((s) => {
  console.log(`There are ${s.courses.length} courses in the library`);
});

addView((s) => {
  console.log(`The latest course in the library: ${s.courses[s.courses.length -1].name}`);
});

defaultState.courses.push({
  name: 'this is a new course',
  topic: 'Really does not matter'
})
