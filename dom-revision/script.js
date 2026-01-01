let globalID=1;
function markAsDone(todoID){
    const parent= document.getElementById(todoID);
    parent.children[2].innerHTML="done"
}

function createchild(title,description,id){
    const child = document.createElement("div");
    const firstgrandChild= document.createElement("div");
    firstgrandChild.innerHTML=title;
    const secondGrandChild= document.createElement("div");
    secondGrandChild.innerHTML= description;
    const thirdgrandChild=document.createElement("button");
    thirdgrandChild.innerHTML="mark as done";
    thirdgrandChild.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(firstgrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdgrandChild);
    child.setAttribute("id" ,id);
    return child;
}

function addtodo(){
    const title= document.getElementById("title").value;
    const description= document.getElementById("description").value;

     const parent = document.getElementById("todos");
     parent.appendChild(createchild(title, description, globalID++));
     
 

}