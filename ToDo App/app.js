let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let del = document.createElement("button");
    del.innerText = "Delete"; //to add text in button
    del.classList.add("delete"); //to add class name to button

    ul.appendChild(item); //added the list to ul
    inp.value = "";
    item.appendChild(del); //added the delete button to li
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let delItem = event.target.parentElement; //that means parent of button => list
        delItem.remove();
        console.log("Deleted!")
    }
});

