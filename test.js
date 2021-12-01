var numberTeams = document.getElementById("numberTeams")
var team = []
function generateFields(){
    var numberOfTeams = parseInt(numberTeams.value)
    for(let cont = 0; cont < numberOfTeams ; cont++){
    var input = document.createElement("input")
    input.type = 'text'
    var teamsDiv = document.getElementById("teamsDiv")
    teamsDiv.appendChild(input)
}
alert(numberOfTeams)
}