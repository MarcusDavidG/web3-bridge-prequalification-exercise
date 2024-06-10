let database = [];
let idCounter = 0;

// Function to add to the database
function addToDatabase() {
  const addInput = document.getElementById("addInput").value;
  if (addInput) {
    database.push({ id: idCounter++, item: addInput });
    document.getElementById("addInput").value = "";
    alert("Item added to database.");
  } else {
    alert("Please enter an item to add.");
  }
}

// Function to update the database
function updateDatabase() {
  const updateId = parseInt(document.getElementById("updateId").value, 10);
  const updateInput = document.getElementById("updateInput").value;

  const index = database.findIndex((entry) => entry.id === updateId);
  if (index !== -1) {
    database[index].item = updateInput;
    document.getElementById("updateId").value = "";
    document.getElementById("updateInput").value = "";
    alert("Item updated in database.");
  } else {
    alert("Item ID not found.");
  }
}

// Function to search the database
function searchDatabase() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const results = database.filter((entry) =>
    entry.item.toLowerCase().includes(searchInput)
  );

  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "<li>No search results found.</li>";
  } else {
    results.forEach((result) => {
      const li = document.createElement("li");
      li.textContent = `ID: ${result.id}, Item: ${result.item}`;
      searchResults.appendChild(li);
    });
  }
}
