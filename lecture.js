
let subject = sessionStorage.getItem("summonSubject");
let page = parseInt(sessionStorage.getItem("summonPage"));

document.getElementById("lecture-title").innerHTML = subject.charAt(0).toUpperCase() +  subject.slice(1);

lecture(database[subject],databasePl[subject + 'Pl']);

unlockDictionary();

function lecture(array, arrayPl){
    let page = parseInt(sessionStorage.getItem("summonPage"));
    document.getElementById("page-counter").innerHTML = page + "/" + (database[subject].length -1);

    if(page < array.length){
        document.getElementById("lecture-word-pl").innerHTML = arrayPl[page];
        document.getElementById("lecture-word").innerHTML = array[page]
    }
    else{
        showPopup();   
    }
}
function showPopup(){
    document.getElementById("lecture-body").style.justifyContent="center";
    document.getElementById("lecture-body").style.alignItems="center";
    document.getElementById("popup").style.visibility="visible";
    document.getElementById("lecture-main").style.visibility="hidden";
}
function changePage(){
    let page = parseInt(sessionStorage.getItem("summonPage"));
    page++;
    sessionStorage.setItem("summonPage", page);
}
function unlockDictionary(){
    
}