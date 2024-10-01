/*const smartPhonesData  = [
    {
        id: 1,
        brand: "Apple",
        model: "iPhone 14",
        price: 999
    },
    {
        id: 2,
        brand: "Samsung",
        model: "Galaxy S21",
        price: 799
    },
    {
        id: 3,
        brand: "Google",
        model: "Pixel 7",
        price: 699
    },
    {
        id: 4,
        brand: "OnePlus",
        model: "OnePlus 9",
        price: 729
    },
    {
        id: 5,
        brand: "Sony",
        model: "Xperia 5 II",
        price: 949
    }];
function show(x){
    const tablebody =document.getElementById('table-body')
         tablebody.innerHTML =''
         x.forEach(smartphones => {
        const row = document.createElement('tr')
        row.innerHTML= `
        <td>${smartphones.id}</td>
        <td>${smartphones.brand}</td>
        <td>${smartphones.model}</td>
        <td>${smartphones.price}</td>
        `;
        tablebody.appendChild(row)
    });
    
}
show(smartPhonesData);*/
// let str = '[ "Ford", "BMW", "Audi", "Fiat" ]'
// let parsed = JSON.parse(str)
// console.log(typeof parsed)

/*
fetch("smartphone.json")
    .then(response => response.json())
    .then(value=>value.forEach(value =>createRow(value))
    .catch(error => console.error(error)));



function createRow(value){
  let tbody = document.querySelector("table tbody")
  let row = document.createElement("tr")
  
  
  
  
  let actions = document.createElement("td")
  let edit = document.createElement("button")
  edit.innerHTML = "Edit"
  let del = document.createElement("button")
  del.innerHTML = "Delete"

  
  for (const key in value) {
    let td = document.createElement("td")

    td.innerHTML = value[key]
    row.appendChild(td)
  }




  actions.appendChild(edit)
  actions.appendChild(del)
  row.appendChild(actions)
  tbody.appendChild(row)
}

document.getElementById('add-smartphone').addEventListener('click', () => {
    const id = document.getElementById('id').value;
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;

    // Validate inputs
    if (id && brand && model && price) {
        const newSmartphone = {
            id: Number(id),
            brand: brand,
            model: model,
            price: Number(price)
        };

        // Add the new smartphone to the array
        smartPhonesData.push(newSmartphone);

        // Create a new row in the table
        createRow(newSmartphone);

        // Clear input fields
        document.getElementById('id').value = '';
        document.getElementById('brand').value = '';
        document.getElementById('model').value = '';
        document.getElementById('price').value = '';
    } else {
        alert("Please fill out all fields before adding a smartphone.");
    }
});

// Update existing smartphone event listener
document.getElementById('update-smartphone').addEventListener('click', () => {
    const id = document.getElementById('id').value;
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;

    // Validate inputs
    if (id && brand && model && price && editIndex >= 0) {
        // Update the smartphone data in the array
        smartPhonesData[editIndex] = {
            id: Number(id),
            brand: brand,
            model: model,
            price: Number(price)
        };

        // Clear the table body
        document.getElementById("table-body").innerHTML = '';

        // Re-render the table with updated data
        smartPhonesData.forEach(smartphone => createRow(smartphone));

        // Clear input fields
        document.getElementById('id').value = '';
        document.getElementById('brand').value = '';
        document.getElementById('model').value = '';
        document.getElementById('price').value = '';

        // Reset buttons visibility
        document.getElementById('add-smartphone').style.display = 'inline';
        document.getElementById('update-smartphone').style.display = 'none';

        // Reset edit index
        editIndex = -1;
    } else {
        alert("Please fill out all fields before updating the smartphone.");
    }
});*/


let smartPhonesData = [];
let editIndex = -1; // Track which smartphone is being edited

// Fetch data from smartphone.json
fetch("smartphone.json")
    .then(response => response.json())
    .then(value => {
        smartPhonesData = value; // Store the fetched data into the array
        value.forEach(smartphone => createRow(smartphone)); // Populate the table with existing data
    })
    .catch(error => console.error("Error fetching the data:", error));

// Function to create and add a row to the table
function createRow(value) {
    let tbody = document.querySelector("#table-body");
    let row = document.createElement("tr");

    // Create cells for each value in the object
    for (const key in value) {
        let td = document.createElement("td");
        td.innerHTML = value[key];
        row.appendChild(td);
    }

    // Create Edit and Delete buttons
    let actions = document.createElement("td");
    let edit = document.createElement("button");
    edit.innerHTML = "Edit";
    let del = document.createElement("button");
    del.innerHTML = "Delete";

    // Append buttons to the actions cell
    actions.appendChild(edit);
    actions.appendChild(del);
    row.appendChild(actions);

    // Append the row to the table body
    tbody.appendChild(row);
 // Add event listeners for the Edit and Delete buttons
 del.addEventListener("click", () => {
    row.remove(); // Delete the row from the table
    smartPhonesData = smartPhonesData.filter(smartphone => smartphone.id !== value.id); // Remove the item from the data array
});

edit.addEventListener("click", () => {
    // Populate input fields with the current row data
    document.getElementById('id').value = value.id;
    document.getElementById('brand').value = value.brand;
    document.getElementById('model').value = value.model;
    document.getElementById('price').value = value.price;

    // Change button visibility
    document.getElementById('add-smartphone').style.display = 'none';
    document.getElementById('update-smartphone').style.display = 'inline';

    // Set edit index
    editIndex = smartPhonesData.findIndex(smartphone => smartphone.id === value.id);
});
}

// Add new smartphone event listener
document.getElementById('add-smartphone').addEventListener('click', () => {
const id = document.getElementById('id').value;
const brand = document.getElementById('brand').value;
const model = document.getElementById('model').value;
const price = document.getElementById('price').value;

// Validate inputs
if (id && brand && model && price) {
    const newSmartphone = {
        id: Number(id),
        brand: brand,
        model: model,
        price: Number(price)
    };

    // Add the new smartphone to the array
    smartPhonesData.push(newSmartphone);

    // Create a new row in the table
    createRow(newSmartphone);

    // Clear input fields
    document.getElementById('id').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('price').value = '';
} else {
    alert("Please fill out all fields before adding a smartphone.");
}
});

// Update existing smartphone event listener
document.getElementById('update-smartphone').addEventListener('click', () => {
const id = document.getElementById('id').value;
const brand = document.getElementById('brand').value;
const model = document.getElementById('model').value;
const price = document.getElementById('price').value;

// Validate inputs
if (id && brand && model && price && editIndex >= 0) {
    // Update the smartphone data in the array
    smartPhonesData[editIndex] = {
        id: Number(id),
        brand: brand,
        model: model,
        price: Number(price)
    };

    // Clear the table body
    document.getElementById("table-body").innerHTML = '';

    // Re-render the table with updated data
    smartPhonesData.forEach(smartphone => createRow(smartphone));

    // Clear input fields
    document.getElementById('id').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('model').value = '';
    document.getElementById('price').value = '';

    // Reset buttons visibility
    document.getElementById('add-smartphone').style.display = 'inline';
    document.getElementById('update-smartphone').style.display = 'none';

    // Reset edit index
    editIndex = -1;
} else {
    alert("Please fill out all fields before updating the smartphone.");
}
});