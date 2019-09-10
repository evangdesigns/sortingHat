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

// const studentCorral = [
//     {
//         name: `${studentName}`,
//         house: `${studentHouse}`
//     }
// ]

//Listen for Sort button Click. Grab the name and store in a variable

const sortForm = document.getElementById('sortForm');
sortForm.addEventListener('click', (event) => { 
    if (event.target.id === 'srtBtn') {
    studentName = document.getElementById('name').value;
    //run randomizer 
    console.log(studentName);
    };
});
//SyudentCard

const studentCard = () => {
    innerHTML = `
    <div class="studentCard card text-center" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${studentName}</h5>
            <p class="card-text">${houses[2]}</p>
            <button class="btn btn-primary">EXPEL</button>
        </div>
    </div>
    `
};    

const getStudent = document.getElementById('srtBtn');
getStudent.addEventListener('click', () => { 
    studentCard()
});
//add to studentCorral Array
//PrintToDom