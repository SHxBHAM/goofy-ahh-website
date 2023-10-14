document.addEventListener('DOMContentLoaded', function () {
  const csvUrl = 'n.csv';
  let masterArray = [];
  let Regno = '';
  let randomvar;

  // Get the form element by its ID
  const form = document.getElementById('enteregno');
  const outputDiv = document.getElementById('output'); // Select the outputDiv once

  // Add a submit event listener to the form
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    randomvar = Math.floor(Math.random() * 5) + 1;
    console.log(randomvar);

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
      header: false,
      skipEmptyLines: true,
      complete: function (results) {
        masterArray = results.data;
        console.log(masterArray);
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

    let foundRow = null;

    for (const row of masterArray) {
      if (row[1] === targetValue) {
        foundRow = row;
        break;
      }
    }

    outputDiv.innerHTML = ''; // Clear the outputDiv content

    if (foundRow) {
      const [id, target, name, grade] = foundRow;

      if (target == "12218387") {
        outputDiv.innerHTML = `
          <p>ain't no way u just put the creator's reg id, and thought u gonna find smth dumbass</p>
        `;
      } else if (target == "12219101") {
        outputDiv.innerHTML = `
          <p>ain't no way u just put the creator's reg id, i finna eat u with my fish.</p>
        `;
      } else if (target == "12221533") {
        outputDiv.innerHTML = `
          <p>ain't no way u just put the creator's reg id, and thought u gonna find smth dumbass</p>
        `;
      } else if (grade > 9) {
        switch (randomvar) {
          case 1:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>Damn, ${name} you're definitely a certified nerd.</p>
            `;
            break;
          case 2:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>Whoa, ${name}, with your CGPA, you've practically got a Ph.D. in nerdology.</p>
            `;
            break;
          case 3:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>Damn, ${name} at this point just start taking tuitions or something.</p>
            `;
            break;
          case 4:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>Damn, ${name} i bet u dont have friends lol.</p>
            `;
            break;
          case 5:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>Damn, ${name} i dare u to have a social life XD.</p>
            `;
            break;
        }
      } else if (grade > 8 && grade < 9) {
        switch (randomvar) {
          case 1:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>lmao${name},feeling sorry for u, putting all that effort and still couldn't reach the 9 cgpa mark XD</p>
            `;
            break;
          case 2:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>nah bro${name} sorry but u are not him. (him =  chad who gets 9 cgpa)</p>
            `;
            break;
          case 3:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name} go find someone with 9+ cgpa and get some tips lol XD</p>
            `;
            break;
          case 4:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name} good work being a try hard and still not bagging the 9 cgpa tag XD</p>
            `;
            break;
          case 5:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name} good work being a try hard and still not bagging the 9 cgpa tag XD</p>
            `;
            break;}

      } else if (grade > 7 && grade < 8) {
        switch (randomvar) {
          case 1:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>lmao${name} another average joe XD</p>
            `;
            break;
          case 2:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name}, why dont u fucking try and get serious for once ?</p>
            `;
            break;
          case 3:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name} u not an academic weapon, more like an academic victim XD</p>
            `;
            break;
          case 4:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name} why u so average bro?</p>
            `;
            break;
          case 5:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name} average joe? more like average ${name}</p>
            `;
            break;}
      } else if (grade > 6 && grade < 7) {
        switch (randomvar) {
          case 1:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name} ayy bro real talk, u gotta get your shit together.</p>
            `;
            break;
          case 2:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>nah bro${name} u probably got 4 braincells or smth</p>
            `;
            break;
          case 3:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name} at this point u either dumb fr or just dont care</p>
            `;
            break;
          case 4:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name} your dad got a business right? if not u doomed fr XD</p>
            `;
            break;
          case 5:
            outputDiv.innerHTML = `
              <p>Grade:</p><h1>${grade}</h1>
              <p>${name}, bro probably is actually dumber than he thinks XD</p>
            `;
            break;}
      } else if (grade > 3 && grade < 6) {
        outputDiv.innerHTML = `
          <p>Grade:</p><h1>${grade}</h1>
          <p> bruh, ${name} this shit ain't made for u, go start farming or smth.</p>
        `;
      } else if (grade < 3) {
        outputDiv.innerHTML = `
          <p>Grade:</p><h1>${grade}</h1>
          <p> bruh, ${name} at this point you probably just dumb fr.</p>
        `;
      } else {
        outputDiv.innerHTML = `
          <p>working on it bro</p>
        `;
      }
    } else {
      console.log(`No matching row found for ${targetValue}.`);
      outputDiv.innerHTML = `
        <p>Bro, stop playin'. There's no registration number like that.</p>
      `;
    }
  }
});
