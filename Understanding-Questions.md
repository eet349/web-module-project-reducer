# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.

- The user presses the 1 button.
- The addOne action is dispatched
- The addOne action returns an object with the ADD_ONE type to the reducer
- The reducer executes the ADD_ONE case returning an object with the original state with the total increased by one
- TotalDisplay shows the total plus 1.
