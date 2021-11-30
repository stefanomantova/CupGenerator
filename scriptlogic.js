var numberTeams = document.getElementById("numberTeams")
var team = []
var numberOfTeams = Number(numberTeams.value)

function generateFields(){
for(numberOfTeams in team){
    var input = document.createElement("input")
    input.setAttribute('type', 'text')
    input.setAttribute('id', `team${team[numberOfTeams]}`)
    var teamsDiv = document.getElementById("teamsDiv")
    teamsDiv.appendChild(input)

}

}

