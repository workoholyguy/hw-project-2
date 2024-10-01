const flashcards = [
  // Category: Fundamentals (Light Coral)
  {
    id: 1,
    category: "Fundamentals",
    question: "What is 'closure' in JavaScript?",
    answer:
      "A closure is the combination of a function and the lexical environment within which that function was declared.",
    color: "#F08080", // Light Coral
  },
  {
    id: 3,
    category: "Fundamentals",
    question: "What is 'hoisting' in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving declarations to the top of the current scope before code execution.",
    color: "#F08080", // Light Coral
  },
  {
    id: 15,
    category: "Fundamentals",
    question: "What is 'Type Coercion' in JavaScript?",
    answer:
      "Type coercion is JavaScript's automatic or implicit conversion of values from one data type to another (e.g., string to number).",
    color: "#F08080", // Light Coral
  },

  // Category: Scopes and Context (Light Blue)
  {
    id: 2,
    category: "Scopes and Context",
    question: "What is the difference between 'let' and 'var'?",
    answer: "'let' is block-scoped while 'var' is function-scoped.",
    color: "#ADD8E6", // Light Blue
  },
  {
    id: 5,
    category: "Scopes and Context",
    question: "What is 'strict mode' in JavaScript?",
    answer:
      "Strict mode is a way to enforce stricter parsing and error handling in JavaScript code.",
    color: "#ADD8E6", // Light Blue
  },
  {
    id: 11,
    category: "Scopes and Context",
    question: "What is 'this' in JavaScript?",
    answer: "'this' refers to the object from which the function was called.",
    color: "#ADD8E6", // Light Blue
  },

  // Category: Asynchronous JavaScript (Light Green)
  {
    id: 4,
    category: "Asynchronous JavaScript",
    question: "What is a 'promise' in JavaScript?",
    answer:
      "A promise is an object that represents the eventual completion or failure of an asynchronous operation.",
    color: "#90EE90", // Light Green
  },
  {
    id: 10,
    category: "Asynchronous JavaScript",
    question: "What is the purpose of 'async/await' in JavaScript?",
    answer:
      "'async/await' is used to work with promises in a more readable and synchronous-looking fashion.",
    color: "#90EE90", // Light Green
  },

  // Category: Functions (Peach Puff)
  {
    id: 6,
    category: "Functions",
    question: "What are 'arrow functions' in JavaScript?",
    answer:
      "Arrow functions provide a shorter syntax for writing functions and do not have their own 'this' context.",
    color: "#FFDAB9", // Peach Puff
  },
  {
    id: 12,
    category: "Functions",
    question:
      "What is the use of 'apply', 'call', and 'bind' methods in JavaScript?",
    answer:
      "'apply' and 'call' invoke functions with a specific 'this' context, while 'bind' returns a new function bound to a specified context.",
    color: "#FFDAB9", // Peach Puff
  },
  {
    id: 9,
    category: "Functions",
    question: "What is 'currying' in JavaScript?",
    answer:
      "Currying is the process of converting a function that takes multiple arguments into a sequence of functions, each taking a single argument.",
    color: "#FFDAB9", // Peach Puff
  },

  // Category: Performance (Sandy Brown)
  {
    id: 7,
    category: "Performance",
    question: "What is 'event bubbling'?",
    answer:
      "Event bubbling is a type of event propagation where the event starts from the target element and bubbles up to the ancestor elements.",
    color: "#F4A460", // Sandy Brown
  },
  {
    id: 8,
    category: "Performance",
    question: "What is 'debouncing' in JavaScript?",
    answer:
      "Debouncing is a technique to limit the rate at which a function is executed. It ensures that a function is invoked after a specified time has passed since the last invocation.",
    color: "#F4A460", // Sandy Brown
  },

  // Category: Modern JavaScript (Light Yellow)
  {
    id: 13,
    category: "Modern JavaScript",
    question: "What is 'destructuring' in JavaScript?",
    answer:
      "Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.",
    color: "#FFFACD", // Light Yellow
  },
  {
    id: 14,
    category: "Modern JavaScript",
    question: "What is 'spread operator' in JavaScript?",
    answer:
      "The spread operator ('...') allows an iterable such as an array to be expanded in places where zero or more elements are expected.",
    color: "#FFFACD", // Light Yellow
  },
];

export default flashcards;
