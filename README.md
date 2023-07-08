# YourUni

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for simplicity.

## Getting Started

```bash
$ git clone git@github.com:jmccraw/youruni.git
$ cd youruni
$ npm install
$ npm start
```

Starts the application in development mode and opens [http://localhost:3000](http://localhost:3000) with hot reloading.

## Things I Would Like to Have Done with More Time or Foresight

* Spend more time adding accessibility features, like announcing new search results and having a content jump so you don't need to filter through all of the nav links
* Add a "reset" button to the input field to more easily clear search
* Spend less time trying to use a `useReducer` in the [useFetchUniList.tsx](./src/apis/useFetchUniList.tsx) file and just use regular effect and state and such
* Thought about filtering the search results via CSS (won't scale with things like virtualization)
  * was going to set all the text in a card to a `data-attribute` and then on search, hide all cards, except for ones that match something like `[data-query*="${searchText}"]` where `searchText` is the university you're looking for
* See about adding some memoization for the search reducer
* Add some tests
* Add better TypeScript types
* Add more error handling
* Add better loading/error state for search page
