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

function criaTime(name, id){
    this.name = name
    this.id - id
}


function knockoutPhase(previousTeams, roundCount){
    let match = []
    removeAllChildNodes(teamsDiv)
    document.getElementById("title").innerHTML = 'Set the Score for the current phase!'
    if(roundCount == 1){
for(let j in previousTeams){
    teamStorage[j] = new criaTime(previousTeams[j].value,j)
    match[j] = document.createElement("p")
        
}
for(let i = 0; i<teamStorage.length; i+=2){
    match[j].innerHTML = `${match[j].name} X ${match[j+1].name}` //Corrigir para começar a aparecer os times criados
    teamsDiv.appendChild(match[j])
}
    
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

