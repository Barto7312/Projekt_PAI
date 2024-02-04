
function changeSubject(subject){
    let subjectName = subject;
    sessionStorage.setItem("summonSubject", subjectName);

    let page = 0;
    sessionStorage.setItem("summonPage", page);
}
function changePage(){
    let page = parseInt(sessionStorage.getItem("summonPage"));
    page++;
    sessionStorage.setItem("summonPage", page);
}
function logArray(){
    let array = JSON.parse(sessionStorage.getItem("summonArray"));
    let arrayPl = JSON.parse(sessionStorage.getItem("summonArrayPl"));
    let subjects = JSON.parse(sessionStorage.getItem("summonSubjects"));

    console.log(array);
    console.log(arrayPl);
    console.log(subjects);
}

// excercise & mistakes
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function showError(){
    document.getElementById("error-popup").style.visibility="visible";
    document.getElementById("ex-main").style.pointerEvents="none";

}
function hideError(){
    document.getElementById("error-popup").style.visibility="hidden";
    document.getElementById("ex-main").style.pointerEvents="auto";
}
function pushSessionArray(summonArray, value){

    let x = JSON.parse(sessionStorage.getItem(summonArray));

    if(x == null){
        let tempArray = [];
        sessionStorage.setItem(summonArray, JSON.stringify(tempArray));
    }

    let array = JSON.parse(sessionStorage.getItem(summonArray));     
    array.push(value);

    sessionStorage.setItem(summonArray, JSON.stringify(array));
}
function deleteSessionArray(summonArray, value){

    let array = JSON.parse(sessionStorage.getItem(summonArray));
    let newArray = [];
    let boolean = true;
    for (let i = 0; i < array.length; i++) { 
        if(boolean){
            if (array[i] !== value) { 
                newArray.push(array[i]);
                boolean = false;
            }
        }
    } 
    sessionStorage.setItem(summonArray, JSON.stringify(newArray));
}