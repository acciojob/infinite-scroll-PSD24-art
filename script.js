//your code here!
let infiList = document.getElementById("infi-list");

for (let i = 1; i < 11; i++) {
  let liItem = document.createElement("li");
  liItem.innerText = `Item ${i}`;
  infiList.appendChild(liItem);
}

infiList.onscroll = function () {
  
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight - 5) {
    loadMoreContent();
  }
};

function loadMoreContent() {
  let count = parseInt(infiList.lastChild.innerText.split(" ")[1]) + 1;
  for (let i = count; i < count + 2; i++) {
    let liItem = document.createElement("li");
    liItem.innerText = `Item ${i}`;
    infiList.appendChild(liItem);
  }
}
