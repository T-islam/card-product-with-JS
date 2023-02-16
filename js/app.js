const buttonList = document.querySelectorAll(".btn-primary");
let count = 0;
function convertNumber(text) {
  return parseInt(text);
}

let grandPrice = 0;
//  for input cards
document.getElementById("last-card").addEventListener("click", function (e) {
  const items = e.target.parentNode.parentNode.children;
  const Name = items[0].innerText;
  const price = convertNumber(items[2].value);

  const quentity = convertNumber(items[3].value);

  if (isNaN(price) || isNaN(quentity)) {
    alert(" please put the value number only");
  } else {
    const total = price * quentity;
    const tableId = document.querySelector("#table-container");
    const tr = document.createElement("tr");
    // create dynamic  items and price table
    tr.innerHTML = `
    
    <tr>
                 <th>${count}</th>
                 <td>${Name}</td>
                 <td>${price}</td>
                 <td>${quentity}</td>
                 <td class="total">${total}</td>
               </tr>
   
   
   
   `;
    tableId.append(tr);
    // get the total price id and set grand total prices
    grandPrice += total;

    const totalPrice = document.querySelector("#total-prices");
    totalPrice.innerText = grandPrice;
    e.target.setAttribute("disabled", true);
  }
});

//  for all button
for (const button of buttonList) {
  button.addEventListener("click", function (e) {
    count++;
    const items = e.target.parentNode.parentNode.children;
    const Name = items[0].innerText;
    const price = convertNumber(items[2].children[0].innerText);
    const quentity = convertNumber(items[3].children[0].innerText);

    const total = price * quentity; // get total prices
    const tableId = document.querySelector("#table-container");
    const tr = document.createElement("tr");
    // create dynamic  items and price table
    tr.innerHTML = `
    
    
                 <th>${count}</th>
                 <td>${Name}</td>
                 <td>${price}</td>
                 <td>${quentity}</td>
                 <td>${total}</td>
                
   `;

    tableId.append(tr);
    // get the grand total prices
    grandPrice += total;

    // get the total price id and set grand total prices
    const totalPrice = document.querySelector("#total-prices");
    totalPrice.innerText = grandPrice;
    e.target.setAttribute("disabled", true);
  });
}
