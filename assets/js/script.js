var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return item.length;
}
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li); //add li to ul
    input.value = ""; //reset text input field

    function crossOut(){
        li.classList.toggle("done");
    }
    li.addEventListener("click",crossOut);
    //end strikethrough
    //start add delete button
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click",deleteListItem);
    function deleteListItem(){
        li.classList.add("delete");
    }
}
function addListAfterClick(){
  if(inputLength()>0){
    createListElement();
  }
}

function addListAfterKeypress(event){
    if (inputLength()>0 && event.which ===13){
        createListElement();
    }
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);