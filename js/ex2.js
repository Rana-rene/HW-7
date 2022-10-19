// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];

const divElement = document.getElementById("suggestions");
let countryElement = document.createElement("ul");  // Will use this to insert into the UL
const inpElement = document.getElementById("country");


function loadData(data, element) {
    if (data) {
        element.innerHTML = "";
        let innerElement = "";
        data.forEach((item) => {
            innerElement += `<li>${item}</li>`
        });
        element.innerHTML = innerElement;
    }
}

inpElement.addEventListener("input", () => {
    //This fills the drop down menu
    loadData(countryList, countryElement); 
    // This appends the country into divElement
    divElement.appendChild(countryElement);     
    const filteredList = filterData(countryList, inpElement.value);
    loadData(filteredList, countryElement); 
    let vals = inpElement.value
    if(vals == ""){
        divElement.innerHTML = "";
    }
    
})

console.log(inpElement.value);

function filterData(data, searchText) { // we will insert countryList in the data parameter 
    return data.filter((x) => x.toLowerCase().includes(searchText.toLowerCase()));
}





// const inpElement = document.getElementById("country");
// console.log(inpElement);

// inpElement.addEventListener("input", e => {
//     const userFill = e.target.value;
//     if (userFill.toLowerCase() == "a"){
//     const divElement = document.getElementById("suggestions");
//     divElement.textContent = "";
//     let terms = countryList;
//     const ulElement = document.createElement("ul");
//     for(i = 0; i < terms.length; i++){
//         const liElement = document.createElement('li');
//         liElement.textContent = terms[i];
//         ulElement.appendChild(liElement);
//     }
//     divElement.appendChild(ulElement);
//     }

// })







// function autocompleteMatch(input) {
//     if (input == '') {
//         return [];
//     }
//     var reg = new RegExp(input)
//     return countryList.filter(function (term) {
//         if (term.match(reg)) {
//             return term;
//         }
//     });
// }

// function showResults(val) {
//     res = document.getElementById("result");
//     res.innerHTML = '';
//     let list = '';
//     let terms = autocompleteMatch(val);
//     for (i = 0; i < terms.length; i++) {
//         list += '<li>' + terms[i] + '</li>';
//     }
//     res.innerHTML = '<ul>' + list + '</ul>';
// }