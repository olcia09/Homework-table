var input = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 31,
        sex: 'male',
        employed: true
    },
    {
        firstName: 'Amelia',
        lastName: 'Clark',
        age: 22,
        sex: 'female',
        employed: true
    },
    {
        firstName: 'Jack',
        lastName: 'Jones  ',
        age: 21,
        sex: 'male',
        employed: false
    },
    {
        firstName: 'Olivia',
        lastName: 'Wilde',
        age: 31,
        sex: 'female',
        employed: true
    },
];



function createTableHeader(people) {
    var firstPerson = people[0];
    var headers = Object.keys(firstPerson);
    var headerRows = '';
    for (var i = 0; i < headers.length; i++) {
        headerRows += '<th scope="col">' + headers[i] + '</th>'
    }
    return '<thead class="thead-dark">' +
        '<tr>' +
        '<th scope="col">Index</th>' +
        headerRows +
        '</tr>' +
        '</thead>';
}

function createPeopleRows(people) {
    var rows = '';
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        rows += createPersonRow(person, i+1);
    }
    return '<tbody>' + rows + '</tbody>';
}

function createPersonRow(person, index) {
    var elements = Object.values(person);
    var elementData = '';
    for (var i = 0; i < elements.length; i++) {
        elementData += '<td>' + elements[i] + '</td>';
    }
    return '<tr>' +
        '<th scope="row">' + index + '</th>' +
        elementData +
        '</tr>';
}

function createEmployeesTable(people) {
    var table = '<table class="table">';
    table += createTableHeader(people);
    table += createPeopleRows(people);
    table += '</table>';
    var tableContainer = document.getElementById('employees');
    tableContainer.innerHTML = table;
}
createEmployeesTable(input);

const onlyMale = input.filter(function(person) {
    return person.sex === 'male';    
});

const onlyFemale = input.filter(function(el) {
    return el.sex === 'female';    
});


  document.getElementById('onlyMale').addEventListener('click', function(){
   createEmployeesTable(onlyMale);
  });
  document.getElementById('onlyFemale').addEventListener('click', function() {
    createEmployeesTable(onlyFemale);
  });

  document.getElementById('refresh').addEventListener('click', function() {
      createEmployeesTable(input);
  });