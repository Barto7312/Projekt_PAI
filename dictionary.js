
let subjects = Object.keys(database);
fillDictionary(subjects);
console.log(subjects[0]);

let main_div = document.getElementById('row');

function fillDictionary(subjects){
    let main_div = document.getElementById('row');

    for(let x=0; x<subjects.length-1; x++){

        let div = document.createElement('div');
        main_div.append(div);
        div.setAttribute("class", "column sub-content");

        let header = document.createElement('h5');
        header.setAttribute("class", "sub-content-title");
        div.append(header);
        header.append(subjects[x]);

        let inner_div = document.createElement('div');
        inner_div.setAttribute("class", "dictionary-ul");
        div.append(inner_div);

        let ul = document.createElement('ul');
        ul.setAttribute("id", "sub"+ x +"-eng");
        ul.setAttribute("class", "dictionary-eng");
        inner_div.append(ul);

        let ulPl = document.createElement('ul');
        ulPl.setAttribute("id", "sub"+ x +"-pl");
        ulPl.setAttribute("class", "dictionary-pl");
        inner_div.append(ulPl);

        printArray2(database[subjects[x]], databasePl[subjects[x] +'Pl'], x, inner_div, ul, ulPl);
    }
}

// function printArray(array, arrayPl, x){
//     for(let a=0; a<array.length - 1; a++){

//         let ul = document.getElementById("sub"+ x +"-eng");
//         let ulPl = document.getElementById("sub"+ x +"-pl");
//         console.log("sub"+ x +"-pl");
//         let txtVal = array[a];
//         let txtValPl = arrayPl[a];

//         var li = document.createElement('li');
//         ul.append(li);
//         li.append(txtVal);

//         var li = document.createElement('li');
//         ulPl.append(li);
//         li.append(txtValPl);

//     }
// }

function printArray2(array, arrayPl, x, inner_div, ul, ulPl){

    for(let a=0; a<array.length; a++){

        var li = document.createElement('li');
        ul.append(li);
        let txtVal = array[a];
        li.append(txtVal);

        var liPl = document.createElement('li');
        ulPl.append(liPl);
        let txtValPl = arrayPl[a];
        liPl.append(txtValPl);


    }
}