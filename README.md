# React Throttle & Debounce Demo

This project illustrates the concepts of throttling and debouncing in a React application through two interactive examples: scroll event throttling and search input debouncing.

## Historical Context

In the early days of web development, web applications often suffered from performance issues due to excessive event firing. For example, scrolling or typing rapidly could trigger numerous events, leading to laggy interfaces and poor user experiences. 

To address these issues, developers began to implement two key techniques:

1. **Throttling**: This technique ensures that a function is only called at most once in a specified time frame. It’s particularly useful for events that fire continuously, like scrolling or resizing. By limiting the number of function calls, we can maintain a smooth user experience while still processing essential actions.

2. **Debouncing**: Unlike throttling, debouncing ensures that a function is only executed after a specified amount of time has passed since the last time it was invoked. This is especially useful for input fields where users type frequently. Debouncing helps reduce the number of calls made (like API requests) and provides a more responsive experience.

## Features

- **Throttle Demo**: See how scrolling behavior can be optimized using throttling. Compare the counts of scroll events with and without throttling.
  
- **Debounce Demo**: Test the search functionality where input is debounced, showing how it minimizes unnecessary requests while users type.

## Getting Started

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/MuhammedBasith/react-throttle-debounce-demo.git
   cd react-throttle-debounce-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

Visit `http://localhost:3000` in your browser to see the app in action!


## License

This project is licensed under the MIT License.
