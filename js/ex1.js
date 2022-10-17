// Character list. Each house has a name and a code
const houses = [
    {
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; // Empty array
    }
};

const selectElement = document.querySelector("select");

for (let x of houses) {
    const optElement = document.createElement("option");
    optElement.value = x.code;
    optElement.textContent = x.name;
    selectElement.appendChild(optElement);
}

const ulElement = document.getElementById("characters");

selectElement.addEventListener("change", e => {
    
    ulElement.innerHTML = '';

    switch (e.target.value) {
        case "ST":
            let charactersST = getCharacters("ST");
            for (let i = 0; i<charactersST.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = charactersST[i];
            ulElement.appendChild(liElement);
            }
            break;
        case "LA":
            let charactersLA = getCharacters("LA");
            for (let i = 0; i<charactersLA.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = charactersLA[i];
            ulElement.appendChild(liElement);
            }
            break;
        case "BA":
            let charactersBA = getCharacters("BA");
            for (let i = 0; i<charactersBA.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = charactersBA[i];
            ulElement.appendChild(liElement);
            }
            break;
        case "TA":
            let charactersTA = getCharacters("TA");
            for (let i = 0; i<charactersTA.length; i++) {
            const liElement = document.createElement('li');
            liElement.textContent = charactersTA[i];
            ulElement.appendChild(liElement);
            }
            break;
        default:
           
    }
})

// let characters = getCharacters("ST");
//             for (let i = 0; i<characters.length; i++) {
//             const liElement = document.createElement('li');
//             liElement.textContent = characters[i];
//             ulElement.appendChild(liElement);
//             }