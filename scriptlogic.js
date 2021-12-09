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
    setTeamStorage(inputTeams)   
     
    knockoutPhase(inputTeams) //Aqui vai a chamada para a função que inicia a Cup. Inicialmente, apenas a chamada para knockout round. Novas implementações de formatos (league, group cup, etc) podem ser realizadas posteriormente e chamadas aqui
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

function setTeamStorage(arrayInput){
    for(let j in arrayInput){
        teamStorage[j] = new createTeam(arrayInput[j].value,j)    
        
    }
}


function knockoutPhase(){
    document.getElementById("title").innerHTML = 'Set the Score for the current phase!'
    while(teamStorage.length > 1){
        removeAllChildNodes(teamsDiv)
        setRound(teamStorage)

    }
    alert("Campeão é "+ teamStorage[0].name)
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function matchResult(team1, team2){
    if(team1.matchScore > team2.matchScore){
        return team1
    }else if(team2.matchScore > team1.matchScore){
        return team2
    }
}

function setRound(teams){
    var match = []
    var score = []
    
for(let i = 0; i < teams.length; i+=2){
    match[i] = document.createElement("p")
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
        if(!score[j]){
            alert("Empty Score!")
        }else{
        teamStorage[j].matchScore = parseInt(document.getElementsByClassName('score')[j].value)
        let nextRoundTeams = []
           
        }
        
    }
    eliminateTeamsFromArray()
      
}
}

function eliminateTeamsFromArray(){
    for(let i = 0,  j = 0; i < teamStorage.length; i+=2, j++){
        teamStorage[j] = matchResult(teamStorage[i], teamStorage[i+1])            //Passar o nome dos times "vencedores" pro array e repassar pro array principal pro proximo round começar
        
     }
     teamStorage.splice(teamStorage.length/2, teamStorage.length/2)

}