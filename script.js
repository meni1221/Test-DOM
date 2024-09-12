// find button action
const btnAdd = document.querySelector(".add");

// Creating an add function
const add = () => {

//find the input in the DOM
const inputName = document.querySelector(".name").value;
const inputRank = document.querySelector(".rank").value;
const inputPosition = document.querySelector(".position").value;
const inputPlatoon = document.querySelector(".platoon").value;
const inputMissionTime = document.querySelector(".missionTime").value;
const inputStatus = document.querySelector(".select")

//create a new elemnt to inject the input value
let newItem = document.createElement("tr");

// take value from inpot & newItem
newItem.textContent = inputName;
newItem.textContent = inputRank;
newItem.textContent = inputPosition;
newItem.textContent = inputPlatoon;
newItem.textContent = inputMissionTime;
newItem.textContent = inputStatus;

//find the ul elemnt
const ulElement = document.querySelector(".ulElem");
;};

btnAdd.addEventListener("click",add);


