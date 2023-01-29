export default function goFromCallbacksToPromises() {
  const url = {
    base: "https://apis.scrimba.com/jsonplaceholder",
    posts: "/posts",
  };

  const asyncProblems =
    function problemsWithAsyncProgrammingWhileFetchingData() {
      const fetchPosts = () => {
        fetch(url.base + url.posts, { method: `GET` })
          .then((response) => response.json())
          .then((json) => console.log(json.slice(0, 50)));
        // F*%K single responsibility principle.
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

  const callbackHell = function callbacksWithinCallbackWithinCallbacks() {
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

  const iPromise = function basicsOfPromises() {
    const fetchPosts = () => {
      return fetch(url.base + url.posts, { method: `GET` })
        .then((response) => response.json())
        .then((json) => json.slice(0, 50));
    };

    const promiseObject = fetchPosts(); //fetchPosts() Returns a promise
    promiseObject.then(console.log("I Executed!")); // I can resolve this promise with a then block
    //That means I can do this now.
    // I can write declare the functions to the executed one by one
    const filterArray = function getArraysOfPostsWithOddIds(posts) {
      let newArray = posts.filter((post) => post.id % 2 === 0);
      return newArray;
    };
    const logJson = function logPostJson(json) {
      console.log(json);
    };

    // I can resolve the promise with .then()
    // Pass the functions one by one
    const OddArray = promiseObject.then((response) => filterArray(response));
    OddArray.then((array) => logJson(array));
    //I can also chain everything and make everything shorter.
    //And this gives the same result.
    fetchPosts()
      .then((array) => filterArray(array))
      .then((filteredArray) => logJson(filteredArray));
    //I can make this even shorter. The then does the passing automatically.
    //I get the same result again.
    fetchPosts().then(filterArray).then(logJson);
  };
  const buildPromise = function buildAPromiseFromScratch() {
    console.log("logdog");
  };
  buildPromise();
}
