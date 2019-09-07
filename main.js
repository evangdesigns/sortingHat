console.log('Welcome to Hogwarts')

//Print to DOM function to print both the form and the individual cards
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
  };

  const showForm = () => {
    let domString = `
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
                        <button type="submit" class="form-control-lg btn btn-primary btn-lg">&nbsp;&nbsp;&nbsp;&nbsp;Sort!&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    </div>
                </div>
            </form>
        </div>
            `   
    printToDom('sortForm', domString);
    };

const getStarted = document.getElementById('getStarted');
getStarted.addEventListener('click', function() { 
    showForm()
});