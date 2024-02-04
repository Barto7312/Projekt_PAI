
let subject = sessionStorage.getItem("summonSubject")
let page = parseInt(sessionStorage.getItem("summonPage"));
document.getElementById("ex-title").innerHTML = subject.charAt(0).toUpperCase() +  subject.slice(1);
let subjects = JSON.parse(sessionStorage.getItem("summonSubjects"));

let correctAnsPosGlobal=""
let selectedAns = 999;
let usedIDs = [];

let word = "";
let correctAns ="";
let currentSubject = "";

excercise();

function excercise(){
    document.getElementById("page-counter").innerHTML = page + "/" + (database[subject].length);

    if(page < database[subject].length){
        displayWords(database[subject],databasePl[subject + 'Pl'], usedIDs);
    }
    else{
        showPopup();
    }
}
function selectAns(id){
    selectedAns = id;
    setAsActive(id);
}
function setAsActive(id){
    for(let x=0; x<4; x++){
        if(x != id){
            document.getElementById(x).style.backgroundColor="";
        }
        else{
            document.getElementById(id).style.backgroundColor="hsla(170, 69%, 25%, 0.603)";
        }
    }
}
function checkAns(selectedAns, correctAnsPosGlobal){
    if(selectedAns == correctAnsPosGlobal){
        changePage()
        page = parseInt(sessionStorage.getItem("summonPage"));
        selectAns(999)
        deleteSessionArray("summonArray", word);
        deleteSessionArray("summonArrayPl", correctAns);
        deleteSessionArray("summonSubjects", currentSubject);
        excercise();
    }
    else{
        showError();
    }
}
function showPopup(){
    document.getElementById("ex-body").style.justifyContent="center";
    document.getElementById("ex-body").style.alignItems="center";
    document.getElementById("popup").style.visibility="visible";
    document.getElementById("ex-main").style.visibility="hidden";
}
function displayWords(array, arrayPl, usedIDs){

    let wordID = getRndInteger(0, array.length - 1);
    word = array.at(wordID);
    correctAns = arrayPl.at(wordID);
    currentSubject = subjects.at(wordID);

    if (usedIDs.includes(wordID)){
        excercise();
    }
    else{
        usedIDs.push(wordID);
        document.getElementById("ex-word").innerHTML = array[wordID];

        let correctAnsPos = getRndInteger(0, 3);
        correctAnsPosGlobal = correctAnsPos;
        let usedPositions = [correctAnsPos];

        document.getElementById(correctAnsPos).innerHTML = correctAns;

        let usedAnswers = [wordID]

        for(let i = 0; i < 4; i++){

            if(usedPositions.includes(i)){
            }
            else{
                let bool = true;
                while(bool){

                    let drawnAns = drawWord(currentSubject, correctAns);

                    if(usedAnswers.includes(drawnAns)){
                    }
                    else{
                        document.getElementById(i).innerHTML = drawnAns;
                        usedAnswers.push(drawnAns);
                        bool = false;
                        usedPositions.push(i);
                    }
                }
            }
        }
    }

}
function drawWord(currentSubject, word){
    let tempArray = databasePl[currentSubject + "Pl"];
    for(let x=0; x < tempArray.length; x++){
        let drawnWordID = getRndInteger(0, tempArray.length - 1);
        let drawnWord = tempArray.at(drawnWordID);
        if(drawnWord != word){ 
            return drawnWord;
        }
    }
}