export default function goFromCallbacksToPromises() {
  const url = {
    base: "https://apis.scrimba.com/jsonplaceholder",
    posts: "/posts",
    todos: "/todos",
  };

  const callbackBasics = function () {
    const dog = `logDog`;
    const cat = `logCat`;
    setTimeout(() => {
      console.log(dog);
    }, 3000);
    console.log(test);
  };

  const asyncProblems =
    function problemsWithAsyncProgrammingWhileFetchingData() {
      const fetchPosts = () => {
        fetch(url.base + url.posts, { method: `GET` })
          .then((response) => response.json())
          .then((json) => console.log(json.slice(0, 50)));
        // F*%K single reponsibility principle.
      };
      console.log(fetchPosts.name, "returns:", fetchPosts());
    };

  const callbackSolution = function solveAsyncProblemsByUsingCallbacks() {
    // First I write a callback function to console log
    const logCallback = function consoleLogWithCallbackFunction(json) {
      console.log(json);
    };

    // Then I make sure that the function takes a callbackFunction as an argument
    const fetchPosts = (callbackFunction) => {
      fetch(url.base + url.posts, { method: `GET` })
        .then((response) => response.json())
        .then((json) => callbackFunction(json.slice(0, 50)));
      //   I call the callback function to console log. Single repsonsibility principle.
    };
    // I run the function by passing the callback I defined at line 35 as an argument
    console.log(fetchPosts.name, "returns:", fetchPosts(logCallback));
    // It still returns undefined, but the objective of separating logging from fetching is removed.
  };

  const callbackHell = function callbacksWithinCallbackwithinCallbacks() {
    // What if instead of logging the data, I have to filter the data to get posts at only odd ids.

    const logCallback = function consoleLogWithCallbackFunction(json) {
      console.log(json);
    };

    const filterCallback = function getArraysOfPostsWithOddIds(
      posts,
      logCallback
    ) {
      let newArray = posts.filter((post) => post.id % 2 === 0);
      logCallback(newArray);
    };

    const fetchPosts = (filterCallback, logCallback) => {
      fetch(url.base + url.posts, { method: `GET` })
        .then((response) => response.json())
        .then((json) => filterCallback(json.slice(0, 50), logCallback));
    };
    console.log(
      fetchPosts.name,
      "returns:",
      fetchPosts(filterCallback, logCallback)
    );
  };
}
