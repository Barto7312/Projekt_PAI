
let database = {
    fruits: ["apple", "banana", "watermelon", "orange" , "peach", "pear", "strawberry"],
    animals: ["horse", "monkey", "cat", "dog", "bird", "turtle", "bear"],
    vegetables: ["potato", "tomato", "cucumber", "onion", "letuce", "cabbage", "leek"],
    proffesions: ["doctor", "driver", "programmer", "cook", "accountant", "translator", "unemployed"],
}
let databasePl = {
    fruitsPl: ["jabłko", "banan", "arbuz", "pomarańcz", "brzoskwinia", "gruszka", "truskawka"],
    animalsPl: ["koń", "małpa", "kot", "pies", "ptak", "żółw", "niedźwiedź"],
    vegetablesPl: ["ziemniak", "pomidor", "ogórek", "cebula", "sałata", "kapusta", "por"],
    proffesionsPl: ["lekarz", "kierowca", "programista", "kucharz", "księgowy", "tłumacz", "bezrobotny"],
}

    errorSubjects = JSON.parse(sessionStorage.getItem("summonSubjects"));
    database['mistakes'] = JSON.parse(sessionStorage.getItem("summonArray"));
    databasePl['mistakesPl'] = JSON.parse(sessionStorage.getItem("summonArrayPl")); 