export default function usingFetchAPI() {
  const url = {
    base: "https://apis.scrimba.com/jsonplaceholder",
    posts: "/posts",
    todos: "/todos",
  };
  //-------------------------
  //-------------------------
  // Function 1: This works
  const fetchPosts = () => {
    fetch(url.base + url.posts, { method: `GET` })
      .then((response) => response.json())
      .then((json) => {
        return console.log(json.slice(0, 50));
      });
  };
  //   console.log(fetchPosts.name, "returns:", fetchPosts());
  //-------------------------
  //-------------------------
  // Function 2
  const fetchPostsAndReturn = () => {
    //Does not work beacuse the function is returning nothing.
    // The return in the final then, returns the value to the fetch function
    //fetchPostsAndReturn returns nothing
    fetch(url.base + url.posts, { method: `GET` })
      .then((response) => response.json())
      .then((json) => {
        return json.slice(0, 50);
      });
  };

  //   console.log(fetchPostsAndReturn.name, "returns:", fetchPostsAndReturn());
  //-------------------------
  //-------------------------
  // Funnction 3: This works but feels wrong
  let postObject = {};
  const fetchPostsAndReturnPromise = () => {
    return fetch(url.base + url.posts, { method: `GET` })
      .then((response) => response.json())
      .then((json) => {
        return json.slice(0, 50);
      });
  };
  fetchPostsAndReturnPromise().then((postObj) => console.log(postObj));
  // This infact is just a rewritten version of Function 1
  // And whatever you want to do after the object is recieved gas to be done inside the then block.
}
// A solution is either working with callbacks within callbacks
//Or async await
