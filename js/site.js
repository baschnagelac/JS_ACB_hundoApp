// get the user input from the page
//controller function -entry point 
function getValues() {

    //get the values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    //parse our inputs as numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //verify our inputs ARE numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //if they are, generate our numbers
        let numbersArray = generateNumbers(startValue, endValue);

        //then display them on the page
        displayNumbers(numbersArray);
    } else {
        //if they are not, tell our user!
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed for Hundo!'
            }
        );
    }
}

//generate our numbers 
//logic function
function generateNumbers(start, end) {

    let numbers = [];

    for (let value = start; value <= end; value++) {
        numbers.push(value);
    }
    return numbers;
}

//display them on the page 
//view function
function displayNumbers(numbersArray) {
    let tableBody = document.getElementById('results');

    let tableHtml = "";

    for (let index = 0; index < numbersArray.length; index++) {
        let value = numbersArray[index];
        let className = '';

        if (value % 2 == 0) {
            className = 'even';
        } else {
            className = 'odd';
        }
        if (index % 5 == 0) {
            tableHtml += '<tr>';
        }

        let tableRow = `<td class="${className}">${value}</td>`

        tableHtml = tableHtml + tableRow;
        //tableHtml += tableRow;

        if ((index + 1) % 5 == 0) {
            tableHtml += '</tr>';
        }
    }
    tableBody.innerHTML = tableHtml;
}

