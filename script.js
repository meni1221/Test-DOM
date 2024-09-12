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
const trElement = document.querySelector(".trElement");

    //add the new elemnt to the tr
    trElement.append(newItem);

;};

btnAdd.addEventListener("click",add);



//saveTasks
const saveTasks = (arr) => {
    localStorage.setItem("tasks", JSON.stringify(arr));
  };
  saveTasks([]);
  
  //loadTasks
  const loadTasks = () => {
    return JSON.parse(localStorage.getItem("tasks"));
  };
  console.log(loadTasks());
  
  //addTask
  const addTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
  addTask(37);
  console.log(loadTasks());
  
  //removeTask
  const removeTask = (task) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const newTasks = tasks.filter((t) => t !== task);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  
  removeTask(4);
  console.log(loadTasks());

