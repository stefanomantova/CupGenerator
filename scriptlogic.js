var numberTeams = document.getElementById("numberTeams")
var teamStorage = []

function generateFields(){
    
    var numberOfTeams = parseInt(numberTeams.value)
    if(!numberOfTeams || numberOfTeams<2){
        alert('Número de times inválido!')
    }else{
    var inputTeams = []
for(let cont = 0; cont < numberOfTeams; cont++){
    inputTeams[cont]  = document.createElement("input")
    inputTeams[cont].type = 'text'
    var teamsDiv = document.getElementById("teamsDiv")
    teamsDiv.appendChild(inputTeams[cont])
}
teamsDiv.removeChild(document.getElementById('numberTeams'))
    teamsDiv.removeChild(document.getElementById('buttonGo'))
    document.getElementById("instruction").innerHTML = 'Set team names'
    var buttonParagraph = document.createElement('p')
    teamsDiv.appendChild(buttonParagraph)
var confirmStart = document.createElement("input")
confirmStart.type = 'button'
confirmStart.value = 'Start!'
teamsDiv.appendChild(confirmStart)

confirmStart.onclick = function(){
    var check = new Boolean(true)
    for(let i in inputTeams){
    if(inputTeams[i].value==''){
        check = false
    }  
}
    if(!check){
    alert('Preencha todos os campos')
    }else{
    knockoutPhase(inputTeams,1) //Aqui vai a chamada para a função que inicia a Cup. Inicialmente, apenas a chamada para knockout round. Novas implementações de formatos (league, group cup, etc) podem ser realizadas posteriormente e chamadas aqui
    }
}
}
}

function createTeam(name, id, matchScore, currentPoints){
    this.name = name
    this.id - id
    this.matchScore = matchScore
    this.currentPoints = currentPoints
    
}


function knockoutPhase(previousTeams, roundCount){
    removeAllChildNodes(teamsDiv)
    document.getElementById("title").innerHTML = 'Set the Score for the current phase!'
    if(roundCount == 1){
for(let j in previousTeams){
    teamStorage[j] = new createTeam(previousTeams[j].value,j)    
}
    }
    setRound(teamStorage)

}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function match(team1, team2){
    if(team1.matchScore > team2.matchScore){
        return team1
    }else if(team2.matchScore > team1.matchScore){
        return team2
    }
}

function setRound(teams){
    let match = []
    let score = []
for(let i = 0; i < teams.length; i+=2){
    match[i] = document.createElement("p")
    teamsDiv.appendChild(match[i])
    score[i] = document.createElement("input")
    score[i+1] = document.createElement("input")
    score[i].type = "number"
    score[i+1].type = "number"
    score[i].size = "1"   //Ajustar
    score[i+1].size = "1" //Ajustar

    match[i].innerHTML = `${teamStorage[i].name} `
    match[i].appendChild(score[i])
    match[i].innerHTML += ` X `
    match[i].appendChild(score[i+1])
    match[i].innerHTML += ` ${teamStorage[i+1].name}`
    

}
}