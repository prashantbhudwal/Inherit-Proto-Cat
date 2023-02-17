console.log(Element);
console.log(NodeList);
console.log(document.cookie);
console.log(window.resizeBy(10, 10));
containerElement = document.querySelector("#container");

const styles = `background-color:black; color:cyan;`;

const testList = Array(5)
  .fill(0)
  .map(
    (item, index, array) =>
      `<h1 id="dog-${index}" style="${styles}"> Dog No. ${index}</h1>`
  )
  .join("");

containerElement.innerHTML = testList;

const clickHandler = (event) => {
  //   console.log(document);
  //   console.log(window);
  console.log();
  const targetId = event.target.id;
  const targetElement = document.getElementById(targetId);
  targetElement.style.backgroundColor = "green";
  const targetParent = targetElement.parentElement;
  targetParent.style.background = "cyan";
};

containerElement.addEventListener("click", clickHandler);
