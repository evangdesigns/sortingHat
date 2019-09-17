console.log('Welcome to Hogwarts')

//Print to DOM function to print both the form and the individual cards
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };

  const showForm = () => {
    const domString = `
        <div class="jumbotron">
        <h3>Enter First Year's Name</h3>
            <form class="form-inline row d-flex justify-content-center">
                <div class="form-group mb-2">
                    <div class="col-3">
                        <label for="name" class="form-control-lg">Student:</label>
                    </div>
                    <div class="col-6">    
                        <input type="text" class="form-control form-control-lg mb-2" id="name" placeholder="Drako Malfoy">
                    </div>
                    <div class="col-3">
                    <a class="btn btn-primary btn-lg" href="#" role="button" id="srtBtn">SORT</a>
                    </div>
                </div>
            </form>
        </div>
            `   
    printToDom('sortForm', domString);
    };

const getStarted = document.getElementById('getStarted');
getStarted.addEventListener('click', () => { 
    showForm()
});

const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
const studentCorral = []

//Listen for Sort button Click. Grab the name and store in a variable
const sortForm = document.getElementById('sortForm');
sortForm.addEventListener('click', (event) => { 
    if (event.target.id === 'srtBtn') {
    let studentName = document.getElementById('name').value;
    //Randomize the House
    let house = houses[Math.floor(Math.random()*houses.length)];
    //Make an Object
    const newStudent = {
        name: studentName,
        house: house
    };
    //Push to Array
    studentCorral.push(newStudent);

    studentCard(studentCorral)
    
    };
    document.getElementById('name').value = '';
});   
    
    //Build the cards with what's in the Array
    const studentCard = (studentCorralArr) => {
    let domString = ''
    for (let i = 0; i < studentCorralArr.length; i ++) {
        const students = studentCorralArr[i]
        domString += `
            <div class="studentCard card text-center ${students.house}" id="${students.name}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${students.name}</h5>
                    <p class="card-text">${students.house}</p>
                    <button class="btn btn-primary expel">EXPEL</button>
                </div>
            </div>
        `
    };
    printToDom('studentCorral', domString);
    ExpelEvents();
    };
    const ExpelEvents = () => {
        const expelbuttons = document.getElementsByClassName("expel");
        for(i = 0; i < expelbuttons.length; i++){
            expelbuttons[i].addEventListener("click", function(event) {
                const expelStudentName = event.target.parentNode.parentNode.id;
                for (let i = 0; i < studentCorral.length; i++) {
                    if (expelStudentName === studentCorral[i].name) {
                        studentCorral.splice(i, 1);
                        studentCard(studentCorral);
                    }
                }
            })
        }
     }