var numberTeams = document.getElementById("numberTeams")
var team = []

function generateFields(){
    var numberOfTeams = parseInt(numberTeams.value)
    var input = []
for(let cont = 0; cont < numberOfTeams; cont++){
    input  = document.createElement("input")
    input.type = 'text'

   // input[cont].setAttribute('type', 'text')
    //input[cont].setAttribute('id',`team${team[numberOfTeams]}` ) 
    var teamsDiv = document.getElementById("teamsDiv")
    teamsDiv.appendChild(input)

}

}

