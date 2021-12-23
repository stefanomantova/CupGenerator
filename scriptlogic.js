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
confirmStart.onclick = function startTournament(){
    var check = new Boolean(true)
    for(let i in inputTeams){
    if(inputTeams[i].value==''){
        check = false
    }  
}
    if(!check){
    alert('Preencha todos os campos')
    }else{
    knockoutPhase(inputTeams) //Aqui vai a chamada para a função que inicia a Cup. Inicialmente, apenas a chamada para knockout round. Novas implementações de formatos (league, group cup, etc) podem ser realizadas posteriormente e chamadas aqui
    }
}
}
}
function createTeam(name, id, matchScore, currentPoints, penaltyScore){
    this.name = name
    this.id - id
    this.matchScore = matchScore
    this.currentPoints = currentPoints
    this.penaltyScore = penaltyScore
}
function knockoutPhase(previousTeams){
    removeAllChildNodes(teamsDiv)
    document.getElementById("title").innerHTML = 'Set the Score for the current phase!'
    
for(let j in previousTeams){
    teamStorage[j] = new createTeam(previousTeams[j].value,j)    
    
}
    
    setRound(teamStorage)
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
function matchResult(team1, team2, penaltyBoolean, matchId){
    if(team1.matchScore > team2.matchScore){
        return team1
    }else if(team2.matchScore > team1.matchScore){
        return team2
    }else{
        if(penaltyBoolean){
           return penaltyMatchResult(team1, team2, matchId)
        }
    }
}

function penaltyMatchResult(team1, team2, matchId){
    let winnerTeam
    do{
winnerTeam = prompt(`Penalty Shootout for ${team1.name} X ${team2.name}, who is the winner?`)
    }while(winnerTeam != team1.name && winnerTeam !=team2.name)
    
if(winnerTeam == team1.name){
    return team1
}else if(winnerTeam == team2.name){
    return team2
}else{
    penaltyMatchResult(team1, team2)
}

}

function setRound(teams){
    removeAllChildNodes(teamsDiv)
    document.getElementById("title").innerHTML = 'Set the Score for the current phase!'
    var match = []
    var score = []
    let noMatchTeam
    
    if(!isOdd(teamStorage)){
        noMatchTeam = teamStorage.pop()
        let noMatchDiv = document.createElement("p")
        noMatchDiv.innerHTML = `${noMatchTeam.name} team awaits for the next round!`
        teamsDiv.appendChild(noMatchDiv)
    }
    
for(let i = 0; i < teams.length; i+=2){
    match[i] = document.createElement("p")
    match[i].className = 'match'
    teamsDiv.appendChild(match[i])
    score[i] = document.createElement("input")
    score[i+1] = document.createElement("input")
    score[i].type = "number"
    score[i+1].type = "number"
    score[i].className = 'score'
    score[i+1].className = 'score'
    score[i].style.width = "32px"   
    score[i+1].style.width = "32px" 
    match[i].innerHTML = `${teamStorage[i].name} `
    match[i].appendChild(score[i])
    match[i].innerHTML += ` X `
    match[i].appendChild(score[i+1])
    match[i].innerHTML += ` ${teamStorage[i+1].name}`



}

var buttonNextLine = document.createElement('p')
var buttonNext = document.createElement("input")
buttonNext.type = 'button'
buttonNext.value = 'Next round!'
teamsDiv.appendChild(buttonNextLine)
buttonNextLine.appendChild(buttonNext)
buttonNext.onclick = function processRound(){
    
    for(let j = 0; j < teamStorage.length; j++){
        if(document.getElementsByClassName('score')[j].value === ""||parseInt(document.getElementsByClassName('score')[j].value) < 0){
            alert("Invalid Score!")
            startTournament()
        }else{
        teamStorage[j].matchScore = parseInt(document.getElementsByClassName('score')[j].value)
        

        }

    }
    eliminateTeamsFromArray(noMatchTeam)

      
}
}

function eliminateTeamsFromArray(noMatchTeam){
    for(let i = 0,  j = 0; i < teamStorage.length; i+=2, j++){
        teamStorage[j] = matchResult(teamStorage[i], teamStorage[i+1], true,j)        
        

     }
     teamStorage.splice(teamStorage.length/2, teamStorage.length/2)
     if(!(noMatchTeam===undefined)){
         teamStorage.unshift(noMatchTeam)
     }
     if(teamStorage.length>1){
         setRound(teamStorage)
     }else{
        declareChampion()
     }
}

function isOdd(teamArray){
    if(teamArray.length % 2 == 0){
        return true
    }else{
        return false
    }
}

function declareChampion(){
    removeAllChildNodes(teamsDiv)
    document.getElementById("title").innerHTML = `Tournament Ended! The champion is:`+`<br/>`+`${teamStorage[0].name}`
}   