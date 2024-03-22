let id = document.getElementById("firstId");
console.log(id);
id.innerHTML = "this is change using id getElementById";
let classDivs = document.getElementsByClassName("classDiv");
console.log(classDivs);

let num = 1;
for (div of classDivs) {
  div.innerText = `Hello this is div-${num}`;
  num++;
}

classDivs[0].innerHTML = "This change using index";

let paras = document.getElementsByTagName("p");
// paras.style.color = "red";

for (let i = 0; i < paras.length; i++) {
  paras[i].style.backgroundColor = "red";
}

id.innerHTML = "<h1>This heading one</h1>";
