var numberTeams = 4
var team = []
/*
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
*/

function Times(nome, id){
    this.nome = nome
    this.id = id
}

for(var i = 0; i < numberTeams-1; i++){
    team[i] = new Times("aaa", i)
    console.log(team[i].nome+" "+ team[i].id)
}

if(team.texrt.includes(''))
console.log('vazio')