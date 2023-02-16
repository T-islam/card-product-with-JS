const buttonList = document.querySelectorAll(".btn-primary");
let count = 0;
function convertNumber(text) {
  return parseInt(text);
}
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
    tr.innerHTML = `
    
    <tr>
                 <th>${count}</th>
                 <td>${Name}</td>
                 <td>${price}</td>
                 <td>${quentity}</td>
                 <td>${total}</td>
               </tr>
   
   
   
   `;
    tableId.appendChild(tr);

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

    const total = price * quentity;
    const tableId = document.querySelector("#table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    
    <tr>
                 <th>${count}</th>
                 <td>${Name}</td>
                 <td>${price}</td>
                 <td>${quentity}</td>
                 <td>${total}</td>
               </tr>
   
   
   
   `;
    tableId.appendChild(tr);

    e.target.setAttribute("disabled", true);
  });
}
