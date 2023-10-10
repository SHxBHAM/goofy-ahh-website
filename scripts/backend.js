// Wrap the code with DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function () {
  // Replace 'your-csv-url.csv' with the actual URL of your CSV file.
  const csvUrl = 'n.csv';
  let masterArray = []; // Declare the masterArray variable.

  // Get the form element by its ID
  const form = document.getElementById('enteregno');

  // Add a submit event listener to the form
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Access the input field value
    const registrationNoInput = document.getElementById('registrationNo');
    const Regno = registrationNoInput.value;

    // Use the input data (e.g., log it to the console)
    console.log(`Registration No.: ${Regno}`);
  });

  fetch(csvUrl)
    .then((response) => response.text())
    .then((data) => {
      // Now 'data' contains the CSV content as a string.
      // You can proceed to parse and use the data as needed.
      processData(data);
    })
    .catch((error) => {
      console.error('Error fetching CSV:', error);
    });

  function processData(csvData) {
    Papa.parse(csvData, {
      header: false, // Treat the first row as header/field names.
      skipEmptyLines: true, // Skip empty lines.
      complete: function (results) {
        // 'results.data' now contains an array of arrays, with each array representing a CSV row.
        masterArray = results.data; // Assign the parsed data to masterArray.

        // You can access and manipulate the data here or outside this function.
        console.log(masterArray); // Now masterArray contains the parsed data.
        
        // Add your search and extraction logic here
        const targetValue = Regno; // Value to search for in the second column.
        let foundRow = null; // Initialize a variable to store the matching row.

        // Iterate through the parsed data to find the target value.
        for (const row of masterArray) {
          if (row[1] === targetValue) { // Check the second column (index 1) for a match.
            foundRow = row; // Store the matching row.
            break; // Stop searching once a match is found.
          }
        }

        // Check if a matching row was found.
        if (foundRow) {
          const [id, target, name, grade] = foundRow; // Destructure the row values.
          console.log(`ID: ${id}`);
          console.log(`Target: ${target}`);
          console.log(`Name: ${name}`);
          console.log(`Grade: ${grade}`);
        } else {
          console.log(`No matching row found for ${targetValue}.`);
        }
      },
      error: function (error) {
        console.error('Error parsing CSV:', error.message);
      },
    });
  }
});
