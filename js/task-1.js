console.log("Task-1");
console.log("");

const list = document.querySelectorAll("ul#categories .item");

console.log(`Number of categories: ${list.length}`);

list.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li");

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements.length}`);
});
