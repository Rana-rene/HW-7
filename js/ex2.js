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
countryElement.id = "ulCountry";
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

const bod = document.querySelector("body");
console.log(bod);
