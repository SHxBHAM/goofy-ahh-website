document.addEventListener('DOMContentLoaded', function () {
  const csvUrl = 'n.csv';
  let masterArray = [];
  let Regno = '';
  let randomvar;

  const form = document.getElementById('enteregno');
  const outputDiv = document.getElementById('output'); 
  const imgdiv = document.getElementById('img');

  
  form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    randomvar = Math.floor(Math.random() * 5) + 1;
    console.log(randomvar);

   
    const registrationNoInput = document.getElementById('registrationNo');
    Regno = registrationNoInput.value; 

   
    console.log(`Registration No.: ${Regno}`);

    
    searchAndDisplayData(Regno);
  });

  fetch(csvUrl)
    .then((response) => response.text())
    .then((data) => {
      
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

    outputDiv.innerHTML = ''; 
    imgdiv.innerHTML = ''

    if (foundRow) {
      const [id, target, name, grade] = foundRow;

      if (target == "12218387") {
        imgdiv.innerHTML = `
        <img src=" https://media.tenor.com/Oas_7V6NajEAAAAC/laugh-point.gif "  alt="" height = "200px">
        `
        outputDiv.innerHTML = `
          <p>ain't no way u just put the creator's reg id, and thought u gonna find smth dumbass</p>
        `;
      } else if (target == "12219101") {
        imgdiv.innerHTML = `
        <img src=" https://media.tenor.com/Oas_7V6NajEAAAAC/laugh-point.gif "  alt="" height = "200px">
        `
        outputDiv.innerHTML = `
          <p>ain't no way u just put the creator's reg id, i finna eat u with my fish.</p>
        `;
      } else if (target == "12221533") {
        imgdiv.innerHTML = `
        <img src=" https://media.tenor.com/Oas_7V6NajEAAAAC/laugh-point.gif "  alt="" height = "200px">
        `
        outputDiv.innerHTML = `
          <p>ain't no way u just put the creator's reg id, and thought u gonna find smth dumbass</p>
        `;
      } else if (grade > 9) {
        imgdiv.innerHTML = `
        <img src="https://img.freepik.com/premium-vector/nerd-face-emoji-clever-emoticon-with-glasses-geek-student_3482-1193.jpg?w=2000" alt="" height = "200px">
        `
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
        imgdiv.innerHTML = `
        <img src="https://i.ytimg.com/vi/lUrlPgRIric/maxresdefault.jpg "  alt="" height = "200px">
        `
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
        imgdiv.innerHTML = `
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI03JoXVChIvebOteuffO4vy-Mvn1uEjubzA&usqp=CAU"  alt="" height = "200px">
        `
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
        imgdiv.innerHTML = `
        <img src="https://i.pinimg.com/736x/d2/f5/c3/d2f5c33924d849334d502b39dee4b07e.jpg"  alt="" height = "200px">
        `
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
        imgdiv.innerHTML = `
        <img src="https://i.imgflip.com/5unh82.png"  alt="" height = "200px">
        `

        outputDiv.innerHTML = `
          <p>Grade:</p><h1>${grade}</h1>
          <p> bruh, ${name} this shit ain't made for u, go start farming or smth.</p>
        `;
      } else if (grade < 3) {
        imgdiv.innerHTML = `
        <img src="https://i.pinimg.com/1200x/e1/19/39/e1193949aa2aa1a05b1f3b2a0f129ad8.jpg"  alt="" height = "200px">
        `
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