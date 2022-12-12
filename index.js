import productsJson from "./products.json" assert { type: "json" };

// for (let i = 0; i < productsJson.length; i++) {
//   console.log(productsJson[i].name);

let output = "";
let output1 = "";
let output2 = "";

for (var product of productsJson) {
  output1 += `<div class="product">
    <p class="accordion1">${product.name}</p>
    </br>
    `;

  for (let repo of product.repositories) {
    output2 += `
        <li>${repo.name}</li>
    `;
  }
  output1 = output1 + output2;
  output1 = output1 + `</div>`;
  output2 = "";
  document.querySelector(".products").innerHTML = output1;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var acc1 = document.getElementsByClassName("accordion1");
var j;

for (j = 0; j < acc1.length; j++) {
  acc1[j].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// for (let product of productsJson) {
//   for (let repo of product.repositories) {
//     output1 += `
//             <li>${repo.name}</li>
//             `;
//     document.querySelector(".product").innerHTML = output1;
//   }
// }
