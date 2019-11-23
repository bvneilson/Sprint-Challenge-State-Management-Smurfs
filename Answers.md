1. What problem does the context API help solve?
  It helps us be able to avoid prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
  actions - passed to a reducer along with properties to specify what action to perform. reducers - functions used to manage various tasks throughout an application. store - single source of truth from which all state is used.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
  Application state can be accessed throughout the app, while component state is more narrow. For larger, more complex apps, application state is very useful. When you have state that will only ever need to be accessed by a select Component, Component state is great.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
  Redux thunk allows for action creators that return functions instead of objects. This allows us to perform asynchronous operations.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
  My favorite overall is the Context API because it was simpler to grasp and seems like writing less code. But at the same time, Redux was very exciting to learn and I'm so grateful to know it.
