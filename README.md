1) What is the difference between var, let, and const?
Ans: var is a function-scoped variable declaration keyword in JavaScript.
Variables declared with var are hoisted to the top of their scope and initialized with undefined. They can be redeclared and reassigned. However, because of its function scope, it often causes unexpected bugs.

2) What is the difference between map(), forEach(), and filter()?
Ans: map()- map creates a new array by applying a function to each element of the original array. It does not change the original array and always returns a new array of the same length.

forEach()- forEach executes a function for each element of the array but does not return a new array .

filter()- filter creates a new array containing only that elements which pass a fixed condition.and it does not change the main array.

3) What are arrow functions in ES6?
Ans: Arrow functions are a shorter syntax for writing functions which was introduced in ES6. it use the => syntax. It is great for concise one-line functions.

4) How does destructuring assignment work in ES6?
Ans: Destructuring assignment is an ES6 feature that allows us to unpack values from arrays or properties from objects into separate variables in a single statement. it makes code shorter and easier to read and it works with both arrays and objects. we can also set default values.

5) Explain template literals in ES6. How are they different from string concatenation?
Ans: Template literals are a new way to create strings in ES6 using backticks (`) instead of quotes. They allow string embedding variables and expressions directly inside ${}. They support multi-line strings without needing \n, They can also use tagged templates for advanced processing and difference from String Concatenation.it Uses + to join strings and variables, which can get messy. Template Literals (new way): Cleaner and easier, no need for +.