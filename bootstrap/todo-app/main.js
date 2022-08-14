let form = getElement("addForm");
let itemList = getElement("items");
let filter = getElement("filter");

//form submit event

form.addEventListener("submit", addItem);

//delete event

itemList.addEventListener("click", removeItem);

//filter event

// filter.addEventListener('keyup' filterItems)

//Add Item

function addItem(e) {
  e.preventDefault();

  //get input value

  let newItem = getElement("item").value;

  //create a new li element

  let li = document.createElement("li");

  //add class
  li.className = "list-group-item d-flex justify-content-between";

  //add text

  li.innerText = newItem;

  //create button element
  let deleteButton = document.createElement("button");

  //add classes to button
  deleteButton.className = "btn btn-danger btn-sm delete";

  //add text
  deleteButton.innerText = "X";

  //append button to li

  li.append(deleteButton);

  //append li to list

  itemList.append(li);
}
//remove item

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function getElement(id) {
  return document.getElementById(id);
}
