document.addEventListener('DOMContentLoaded', function () {
    // Replace 'your-csv-url.csv' with the actual URL of your CSV file.
    const csvUrl = 'n.csv';
    let masterArray = []; // Declare the masterArray variable.
    let Regno = ''; // Declare Regno outside the form submit event.
  
    // Get the form element by its ID
    const form = document.getElementById('enteregno');
    const outputDiv = document.getElementById('output'); // Select the outputDiv once
  
    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Access the input field value
      const registrationNoInput = document.getElementById('registrationNo');
      Regno = registrationNoInput.value; // Store the value in Regno
  
      // Use the input data (e.g., log it to the console)
      console.log(`Registration No.: ${Regno}`);
  
      // Search for and extract data based on Regno
      searchAndDisplayData(Regno);
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
        },
        error: function (error) {
          console.error('Error parsing CSV:', error.message);
        },
      });
    }
  
    function searchAndDisplayData(targetValue) {
      if (!targetValue) {
        console.log('Please enter a registration number.');
        return;
      }
  
      // Add your search and extraction logic here
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
        if (target=="12218387"){
            outputDiv.innerHTML = `
            <p>ain't no way u just put the creator's reg id, and thought u gonna find smth dumbass </p>
          `;
        }
        else if (target=="12219101"){
            outputDiv.innerHTML = `
            <p>ain't no way u just put the creator's reg id, i finna eat u with my fish.</p>
          `;
        }
        else if (target=="12221533"){
            outputDiv.innerHTML = `
            <p>ain't no way u just put the creator's reg id, and thought u gonna find smth dumbass </p>
          `;
        }
        else if (grade > 9) {
          outputDiv.innerHTML = `
          <p>Grade:</p><h1>${grade}</h1>
          <p>Damn, ${name} you're definitely a certified nerd. Go get a life:)</p>
          `;
        } else if (grade > 8 && grade < 9) {
          outputDiv.innerHTML = `
          <p>Grade:</p><h1>${grade}</h1>
            <p>Damn, ${name} you gotta stop trying so hard bro.</p>
          `;
        } else if (grade > 7 && grade < 8) {
            outputDiv.innerHTML = `
            <p>Grade:</p><h1>${grade}</h1>
              <p>${name} fucking average ass pussy, you gotta try harder bro.</p>
            `;
          } else if (grade > 6 && grade < 7) {
            outputDiv.innerHTML = `
            <p>Grade:</p><h1>${grade}</h1>
              <p> bruh, ${name} at this point you probably just dumb or dont care.</p>
            `;
          } else if (grade > 3 && grade < 6) {
            outputDiv.innerHTML = `
            <p>Grade:</p><h1>${grade}</h1>
              <p> bruh, ${name}this shit aint made for u, go start farming or smth.</p>
            `;
          } else if (grade<3) {
            outputDiv.innerHTML = `
            <p>Grade:</p><h1>${grade}</h1>
              <p> bruh, ${name} at this point you probably just dumb fr.</p>
            `;
          }
        else{
            outputDiv.innerHTML=`
            <p>working on it bro</p>
            `
        }
      } else {
        console.log(`No matching row found for ${targetValue}.`);
        outputDiv.innerHTML = `
          <p>Bro, stop playin'. There's no registration number like that.</p>
        `;
      }
    }
  });
  