
let subject = sessionStorage.getItem("summonSubject")
let page = parseInt(sessionStorage.getItem("summonPage"));
document.getElementById("ex-title").innerHTML = subject.charAt(0).toUpperCase() +  subject.slice(1);

let correctAnsPosGlobal=""
let selectedAns = 999;
let usedIDs = [];

excercise();


function excercise(){
    document.getElementById("page-counter").innerHTML = page + "/" + (database[subject].length -1);
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
function addToErrors(){
    let string = document.getElementById('ex-word').textContent;
    let id = database[subject].indexOf(string);
    let stringPl = databasePl[subject + 'Pl'].at(id);

    saveMistakes(string, stringPl);
}
function saveMistakes(string, stringPl){

    let x = JSON.parse(sessionStorage.getItem("summonArray"));

    if(x == null){
        let mistakes = [];
        let mistakesPl = [];
        let errorSubjects = [];

        sessionStorage.setItem("summonSubjects", JSON.stringify(errorSubjects));
        sessionStorage.setItem("summonArray", JSON.stringify(mistakes));
        sessionStorage.setItem("summonArrayPl", JSON.stringify(mistakesPl));
    }

    let subjects = JSON.parse(sessionStorage.getItem("summonSubjects"));
    let array = JSON.parse(sessionStorage.getItem("summonArray"));
    let arrayPl = JSON.parse(sessionStorage.getItem("summonArrayPl"));      

    if(array.includes(string)){
    }
    else{
        subjects.push(subject);
        array.push(string);
        arrayPl.push(stringPl);
    
        sessionStorage.setItem("summonSubjects", JSON.stringify(subjects));
        sessionStorage.setItem("summonArray", JSON.stringify(array));
        sessionStorage.setItem("summonArrayPl", JSON.stringify(arrayPl));
    }
}
function checkAns(selectedAns, correctAnsPosGlobal){

    if(selectedAns == correctAnsPosGlobal){
        changePage()
        page = parseInt(sessionStorage.getItem("summonPage"));
        selectAns(999)
        excercise();
    }
    else{
        addToErrors();
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
    let word = array.at(wordID);
    let correctAns = arrayPl.at(wordID);

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
                    let drawAns = getRndInteger(0, arrayPl.length - 1);

                    if(usedAnswers.includes(drawAns)){

                    }
                    else{
                        document.getElementById(i).innerHTML = arrayPl.at(drawAns);
                        usedAnswers.push(drawAns);
                        bool = false;
                        usedPositions.push(i);
                    }
                }
            }
        }
    }

}