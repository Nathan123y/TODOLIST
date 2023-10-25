var searchBar=document.getElementById("searchBar")
const searchButton=document.getElementById("searchButton")
const taskList=document.getElementById("taskList")

function addItem(){
    const container = document.createElement("div");
    let newItem = document.createElement("p");
    let finishButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let pContainer = document.createElement("div");
    
    container.classList.add("container");
    finishButton.classList.add("finish-button");
    deleteButton.classList.add("delete-button");
    newItem.classList.add("newItem");
    
    

    newItem.innerText = searchBar.value;
    finishButton.innerText = "Finished";
    deleteButton.innerText = "Delete";

    pContainer.appendChild(newItem);
    pContainer.classList.add("text");
    container.appendChild(pContainer);
    container.appendChild(finishButton);
    container.appendChild(deleteButton);
    taskList.appendChild(container);

    searchBar.value = "";

    finishButton.addEventListener("click", function () {
        newItem.style.textDecoration="line-through";
    });
    
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(container);
    });
        
}


searchButton.addEventListener("click", addItem);

   
 


