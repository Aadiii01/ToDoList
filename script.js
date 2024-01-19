const inbox = document.getElementById("input-box");
const list = document.getElementById("list");
const taskCount = document.getElementById("task-count");

function addtask(){
    if(inbox.value === ''){
        alert("Write Some Taks");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        // This is for cross icon 
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        updateTaskCount();
    }
    inbox.value = "";
}

function updateTaskCount() {
    const tasks = document.querySelectorAll("#list li");
    taskCount.textContent = tasks.length;
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        updateTaskCount();
    }
},false);