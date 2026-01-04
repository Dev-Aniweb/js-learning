let globalID = 1; 
// A global counter to give each todo item a unique ID
// It starts at 1 and increases by 1 for each new todo

// Function to mark a todo as done
function markAsDone(todoID){
    const parent = document.getElementById(todoID); 
    // Get the todo div element by its unique ID

    parent.children[2].innerHTML = "done"; 
    // Access the 3rd child element (the button in this case)
    // and change its text to "done"
}

// Function to create a new todo element with title, description, and a unique ID
function createchild(title, description, id){
    const child = document.createElement("div"); 
    // Main container div for a single todo

    const firstgrandChild = document.createElement("div"); 
    firstgrandChild.innerHTML = title; 
    // First child div shows the title of the todo

    const secondGrandChild = document.createElement("div"); 
    secondGrandChild.innerHTML = description; 
    // Second child div shows the description of the todo

    const thirdgrandChild = document.createElement("button"); 
    thirdgrandChild.innerHTML = "mark as done"; 
    // Button that will allow the user to mark the todo as done

    thirdgrandChild.setAttribute("onclick", `markAsDone(${id})`); 
    // Adds an onclick event to the button that calls markAsDone with this todo's unique ID

    child.appendChild(firstgrandChild); 
    child.appendChild(secondGrandChild); 
    child.appendChild(thirdgrandChild); 
    // Add title, description, and button to the main todo div

    child.setAttribute("id", id); 
    // Assign a unique ID to the main todo div

    return child; 
    // Return the complete todo element so it can be added to the page
}

// Function to add a new todo from input fields
function addtodo(){
    const title = document.getElementById("title").value; 
    const description = document.getElementById("description").value; 
    // Get values typed by the user in the input fields

    const parent = document.getElementById("todos"); 
    // Get the container div where todos will be added

    parent.appendChild(createchild(title, description, globalID++)); 
    // Create a new todo element and append it to the container
    // Increment globalID so the next todo has a unique ID
}
